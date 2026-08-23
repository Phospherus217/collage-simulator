/**
 * 大学四年模拟器 v2.0 - 核心逻辑引擎 (engine.js)
 * 严格执行：
 * - 46 个月月度推进与 14 步循环
 * - 月初/月末勾子函数 (EP计算、健康行动封锁、驻留成本扣除、透支结算、家庭兼职、自然衰减)
 * - 条件判定 (状态区间宏、路线状态机、标记系统)
 * - 毕业大结局 E01~E15 优先级判定
 * - 毕业简历收口系统 (ResumeData / ResumeEntry 经历链合并)
 */

class IFEngine {
  constructor(eventsData, initialState) {
    this.events = eventsData || window.EMBEDDED_EVENTS || [];
    this.state = initialState || window.createInitialState();
    this.startOfMonthHook();
  }

  /**
   * 重置引擎状态
   */
  reset(initialState) {
    this.state = initialState || window.createInitialState();
    this.startOfMonthHook();
  }

  /**
   * 获取当前月份配置对象
   */
  getCurrentTimeline() {
    const total = this.state.total_month;
    return window.MONTH_TIMELINE.find(t => t.total === total) || window.MONTH_TIMELINE[window.MONTH_TIMELINE.length - 1];
  }

  /**
   * 月初勾子函数 (Start-of-Month Hook)
   */
  startOfMonthHook() {
    const s = this.state;
    const b = s.basic_states;
    const r = s.resources;

    // 1. 计算精力上限 EP_max
    r.EP_max = Math.round(60 + b.health * 0.5);
    r.EP_current = r.EP_max;
    r.TU_current = 10;
    r.TU_locked = 0;

    // 2. 结算上月透支精力惩罚
    if (r.overdraft_EP > 0) {
      const healthDmg = Math.ceil(r.overdraft_EP / 3);
      b.health = Math.max(0, b.health - healthDmg);
      r.EP_current = Math.max(0, r.EP_current - r.overdraft_EP);
      s.history.history_log.unshift({
        type: 'SYSTEM',
        month: s.total_month,
        title: '【月初结算】透支惩罚生效',
        desc: `上月透支精力 ${r.overdraft_EP} 点，本月基础精力扣减，健康损耗 -${healthDmg} 点。`
      });
      r.overdraft_EP = 0;
    }

    // 3. 扣除进行中主路线的刚性驻留成本 (TU 与 EP)
    let residenceTUCost = 0;
    let residenceEPCost = 0;

    if (s.routes.work.status === 'PRIMARY') {
      residenceTUCost += 5;
      residenceEPCost += 55;
    }
    if (s.routes.postgrad_exam.status === 'PRIMARY') {
      residenceTUCost += 5;
      residenceEPCost += 50;
      // 考研备考值自然累积
      const focusBonus = 1 + (s.capabilities.focus - 50) / 100;
      s.routes.postgrad_exam.exam_prep = Math.min(100, s.routes.postgrad_exam.exam_prep + Math.round(8 * focusBonus));
    }
    if (s.routes.postgrad_rec.status === 'PRIMARY') {
      residenceTUCost += 4;
      residenceEPCost += 40;
    }
    if (s.routes.ailab.phase === 'ACTIVE') {
      residenceTUCost += 3;
      residenceEPCost += 35;
    } else if (s.routes.ailab.phase === 'CORE') {
      residenceTUCost += 6;
      residenceEPCost += 70;
    }

    // 执行驻留扣除
    r.TU_current = Math.max(0, r.TU_current - residenceTUCost);
    r.EP_current = Math.max(0, r.EP_current - residenceEPCost);

    // 4. 健康行动封锁检查
    if (b.health <= 20) {
      r.TU_current = Math.min(3, r.TU_current);
      s.history.history_log.unshift({
        type: 'WARNING',
        month: s.total_month,
        title: '【身心崩溃】健康处于危机状态',
        desc: '健康值 ≤ 20，本月可用时间被强制压制为 3 TU，高负荷行动已被锁定！'
      });
    }

    // 5. 家庭经济压力与强制兼职检查
    if (b.family <= 20) {
      r.TU_locked = 2;
      r.TU_current = Math.max(0, r.TU_current - 2);
    } else if (b.family <= 40) {
      r.TU_locked = 1;
      r.TU_current = Math.max(0, r.TU_current - 1);
    }

    // 6. 检查未来延迟事件队列
    if (s.history.future_events && s.history.future_events.length > 0) {
      s.history.future_events = s.history.future_events.filter(fe => {
        if (fe.trigger_month === s.total_month) {
          s.history.history_log.unshift({
            type: 'EVENT_TRIGGER',
            month: s.total_month,
            title: `【事件触发】${fe.event_id}`,
            desc: `此前决策约定的后续事件已在第 ${s.total_month} 个月如期生效！`
          });
          return false; // 移除已触发
        }
        return true;
      });
    }
  }

  /**
   * 月末勾子函数 (End-of-Month Hook)
   */
  endOfMonthHook() {
    const s = this.state;
    const b = s.basic_states;
    const r = s.resources;

    // 1. 未用完的剩余 TU 转化为被动休息
    if (r.TU_current > 0) {
      const healBonus = Math.min(15, r.TU_current * 2);
      b.health = Math.min(100, b.health + healBonus);
    }

    // 2. 状态耦合检查
    // 恋爱严重内耗 (<= 20)
    if (b.romance <= 20) {
      s.capabilities.focus = Math.max(0, s.capabilities.focus - 5);
    }

    // 3. 学期末自然衰减检查 (大一上4月, 大一下10月, 大二上14月, 大二下20月, 大三上24月, 大三下30月, 大四上36月, 大四下42月)
    const semesterEndMonths = [4, 10, 14, 20, 24, 30, 36, 42];
    if (semesterEndMonths.includes(s.total_month)) {
      if (s.semester_stats.academic_events_count < 2 && s.routes.postgrad_rec.status !== 'PRIMARY' && s.routes.postgrad_rec.status !== 'COMPLETED') {
        b.academic = Math.max(0, b.academic - 5);
      }
      // 重置学期计数
      s.semester_stats.academic_events_count = 0;
    }

    // 4. 全局数值边界裁剪 clamp(0, 100)
    for (const key of Object.keys(b)) {
      b[key] = Math.max(0, Math.min(100, Math.round(b[key])));
    }
    for (const key of Object.keys(s.capabilities)) {
      s.capabilities[key] = Math.max(0, Math.min(100, Math.round(s.capabilities[key])));
    }
  }

  /**
   * 检查事件是否满足解锁条件
   */
  isEventUnlocked(event) {
    const s = this.state;
    const cond = event.unlock_condition || {};

    // 1. 检查总月份限制
    if (cond.month_is !== undefined && s.total_month !== cond.month_is) return false;
    if (cond.month_in && !cond.month_in.includes(s.total_month)) return false;
    if (event.min_month && s.total_month < event.min_month) return false;
    if (event.max_month && s.total_month > event.max_month) return false;

    // 2. 检查是否已完成 (除非支持重复)
    if (s.history.completed_events.includes(event.event_id) && !event.repeatable) return false;

    // 3. 检查变量下限与上限 (支持基础状态与能力资产)
    if (cond.min_vars) {
      for (const [varName, minVal] of Object.entries(cond.min_vars)) {
        const val = s.basic_states[varName] !== undefined ? s.basic_states[varName] : (s.capabilities[varName] || 0);
        if (val < minVal) return false;
      }
    }
    if (cond.max_vars) {
      for (const [varName, maxVal] of Object.entries(cond.max_vars)) {
        const val = s.basic_states[varName] !== undefined ? s.basic_states[varName] : (s.capabilities[varName] || 0);
        if (val > maxVal) return false;
      }
    }

    // 4. 检查必要与互斥标记
    if (cond.required_flags && Array.isArray(cond.required_flags)) {
      for (const flag of cond.required_flags) {
        if (!s.history.flags[flag]) return false;
      }
    }
    if (cond.forbidden_flags && Array.isArray(cond.forbidden_flags)) {
      for (const flag of cond.forbidden_flags) {
        if (s.history.flags[flag]) return false;
      }
    }

    // 5. 检查路线状态机
    if (cond.route_status) {
      for (const [routeName, validStatuses] of Object.entries(cond.route_status)) {
        const curStatus = s.routes[routeName] ? s.routes[routeName].status : null;
        if (Array.isArray(validStatuses)) {
          if (!validStatuses.includes(curStatus)) return false;
        } else {
          if (curStatus !== validStatuses) return false;
        }
      }
    }

    // 6. 检查 AI-Lab 阶段
    if (cond.ailab_phase) {
      if (s.routes.ailab.phase !== cond.ailab_phase) return false;
    }

    return true;
  }

  /**
   * 获取当前月份的可选事件池
   */
  getAvailableEvents() {
    return this.events.filter(e => this.isEventUnlocked(e));
  }

  /**
   * 应用玩家选择并结算
   */
  applyChoice(eventId, choiceId) {
    const event = this.events.find(e => e.event_id === eventId);
    if (!event) return { success: false, error: '未找到事件' };
    const choice = event.choices.find(c => c.choice_id === choiceId);
    if (!choice) return { success: false, error: '未找到选项' };

    const s = this.state;
    const b = s.basic_states;
    const cap = s.capabilities;
    const r = s.resources;

    // 1. 扣除行动资源 TU 与 EP (若 EP 不足则计入透支)
    const costTU = (choice.cost && choice.cost.TU) || 0;
    const costEP = (choice.cost && choice.cost.EP) || 0;

    r.TU_current = Math.max(0, r.TU_current - costTU);
    if (r.EP_current >= costEP) {
      r.EP_current -= costEP;
    } else {
      const overdraft = costEP - r.EP_current;
      r.EP_current = 0;
      r.overdraft_EP += overdraft;
    }

    // 2. 状态变动结算 (加阻尼与边界保护)
    const varDeltas = {};
    if (choice.variable_delta) {
      for (const [vName, delta] of Object.entries(choice.variable_delta)) {
        if (b[vName] !== undefined) {
          b[vName] = Math.max(0, Math.min(100, b[vName] + delta));
          varDeltas[vName] = (delta > 0 ? `+${delta}` : `${delta}`);
        } else if (cap[vName] !== undefined) {
          cap[vName] = Math.max(0, Math.min(100, cap[vName] + delta));
          varDeltas[vName] = (delta > 0 ? `+${delta}` : `${delta}`);
        }
      }
    }

    // 3. 标记增删
    const tagsAdded = [];
    if (choice.tag_add && Array.isArray(choice.tag_add)) {
      choice.tag_add.forEach(tag => {
        s.history.flags[tag] = true;
        tagsAdded.push(tag);
      });
    }
    if (choice.tag_remove && Array.isArray(choice.tag_remove)) {
      choice.tag_remove.forEach(tag => {
        delete s.history.flags[tag];
      });
    }

    // 4. 路线状态迁移
    if (choice.route_update) {
      for (const [routeName, newStatus] of Object.entries(choice.route_update)) {
        if (routeName === 'ailab') {
          s.routes.ailab.phase = newStatus;
        } else if (s.routes[routeName]) {
          s.routes[routeName].status = newStatus;
        }
      }
    }

    // 5. 写入简历经历池 (ResumeEntry)
    if (choice.resume_entry) {
      s.history.resume_pool.push({
        ...choice.resume_entry,
        total_month: s.total_month,
        source_event_id: event.event_id
      });
    }

    // 6. 安排未来延迟事件
    if (choice.future_event) {
      s.history.future_events.push({ ...choice.future_event });
    }

    // 7. 统计计数与已完成登记
    s.history.completed_events.push(event.event_id);
    if (event.package === 'AC') s.semester_stats.academic_events_count += 1;
    if (event.package === 'SO') s.semester_stats.social_events_count += 1;

    // 8. 记录历史日志
    const historyItem = {
      type: 'ACTION',
      month: s.total_month,
      timeName: this.getCurrentTimeline().name,
      eventId: event.event_id,
      eventTitle: event.title,
      choiceText: choice.text,
      resultText: choice.result_text,
      varDeltas,
      tagsAdded
    };
    s.history.history_log.unshift(historyItem);

    return {
      success: true,
      event,
      choice,
      historyItem,
      state: s,
      availableEvents: this.getAvailableEvents()
    };
  }

  /**
   * 推进至下一个月份
   */
  nextMonth() {
    const s = this.state;
    this.endOfMonthHook();

    if (s.total_month >= 42) {
      // 达到大四下 6 月，毕业大结局收口！
      s.game_over = true;
      s.final_ending = this.evaluateFinalEnding();
      s.final_resume = this.generateFinalResume();
      return {
        game_over: true,
        ending: s.final_ending,
        resume: s.final_resume,
        state: s
      };
    }

    s.total_month += 1;
    s.time = this.getCurrentTimeline();
    this.startOfMonthHook();

    return {
      game_over: false,
      timeline: s.time,
      state: s,
      availableEvents: this.getAvailableEvents()
    };
  }

  /**
   * 最终毕业大结局 E01~E15 优先级判定
   */
  evaluateFinalEnding() {
    const s = this.state;
    const b = s.basic_states;
    const cap = s.capabilities;
    const r = s.routes;

    // P1: E01 顶尖推免·学术新星
    if (r.postgrad_rec.status === 'COMPLETED' && b.academic >= 88 && cap.research >= 65 && cap.portfolio >= 50) {
      return { id: 'E01', name: '顶尖推免·学术新星', rank: 'SSS', desc: '清北华五顶尖名校直博/学硕，学术前途一片光明！' };
    }
    // P2: E04 顶尖大厂·核心研发
    if (r.work.status === 'COMPLETED' && cap.portfolio >= 75 && cap.skill >= 70 && cap.delivery >= 65) {
      return { id: 'E04', name: '顶尖大厂·核心研发', rank: 'SSS', desc: '斩获年薪 35W+ 顶级名企核心研发 SSP Offer，成为行业中坚！' };
    }
    // P3: E05 极客创业·核心力量
    if (r.ailab.phase === 'CORE' && cap.ai_depth >= 75 && cap.delivery >= 70 && cap.portfolio >= 70) {
      return { id: 'E05', name: '极客创业·核心力量', rank: 'SSS', desc: '作为前沿 AI 创业团队核心技术骨干，开启极客创业征程！' };
    }
    // P4: E02 常规推免·名校深造
    if (r.postgrad_rec.status === 'COMPLETED' && b.academic >= 82) {
      return { id: 'E02', name: '常规推免·名校深造', rank: 'SS', desc: '成功推免至优势 985/211 高校攻读硕士学位。' };
    }
    // P5: E03 考研上岸·金榜题名
    if (r.postgrad_exam.status === 'COMPLETED' && r.postgrad_exam.exam_prep >= 65) {
      return { id: 'E03', name: '考研上岸·金榜题名', rank: 'SS', desc: '一战成硕！初试高分过线，成功考取目标院校全日制硕士！' };
    }
    // P6: E06 优质名企·骨干力量
    if (r.work.status === 'COMPLETED' && cap.portfolio >= 55 && cap.skill >= 55) {
      return { id: 'E06', name: '优质名企·骨干力量', rank: 'S', desc: '入职知名中大厂/外企核心技术研发岗，前途广阔。' };
    }
    // P7: E08 体制内录用·稳定安康
    if (b.academic >= 60 && b.family >= 60 && b.social >= 50) {
      return { id: 'E08', name: '体制内录用·稳定安康', rank: 'S', desc: '考取选调生/重点央国企公职，工作稳定，家庭和睦。' };
    }
    // P8: E07 常规就业·职场新人
    if (r.work.status === 'COMPLETED' || cap.portfolio >= 35) {
      return { id: 'E07', name: '常规就业·职场新人', rank: 'A', desc: '顺利入职中小企业技术岗位，开启踏实的职业人生。' };
    }
    // P9: E09 考研二战·重整旗鼓
    if (r.postgrad_exam.status === 'EXITED' && b.family >= 60) {
      return { id: 'E09', name: '考研二战·重整旗鼓', rank: 'B', desc: '初试虽有遗憾，但在家庭支持下重整旗鼓，脱产再战！' };
    }
    // P15: E15 身心透支·延毕/休整
    if (b.health <= 20 || b.academic <= 20) {
      return { id: 'E15', name: '身心透支·延毕/休整', rank: 'C', desc: '因严重身心透支未能正常毕业，需停下脚步静心疗愈。' };
    }
    // 默认兜底: E14 慢就业·迷茫探索
    return { id: 'E14', name: '慢就业·迷茫探索', rank: 'B', desc: '暂未确定明确去向，在时代的浪潮中继续探索属于自己的人生道路。' };
  }

  /**
   * 生成最终毕业简历 (ResumeData)
   */
  generateFinalResume() {
    const s = this.state;
    const b = s.basic_states;
    const cap = s.capabilities;

    // 经历链合并
    const chainMap = {};
    const standaloneEntries = [];

    s.history.resume_pool.forEach(entry => {
      if (entry.chain_id) {
        if (!chainMap[entry.chain_id]) {
          chainMap[entry.chain_id] = { ...entry };
        } else {
          // 升级为更高贡献阶段
          chainMap[entry.chain_id].title = entry.title;
          chainMap[entry.chain_id].description = entry.description;
          chainMap[entry.chain_id].stage_contribution = entry.stage_contribution;
        }
      } else {
        standaloneEntries.push(entry);
      }
    });

    const mergedEntries = [...Object.values(chainMap), ...standaloneEntries];

    return {
      name: '模拟器玩家',
      degree: '工学学士',
      major: '计算机科学与技术',
      graduation_date: '2029年6月',
      academic_evaluation: b.academic >= 82 ? '专业前 5% (GPA 3.85 / 国奖有力竞争者)' : (b.academic >= 60 ? '专业前 20% (GPA 3.40 / 良好)' : '成绩中等 (GPA 2.85)'),
      entries: mergedEntries,
      capabilities: { ...cap },
      ending: s.final_ending
    };
  }
}

// 导出挂载
if (typeof window !== 'undefined') {
  window.IFEngine = IFEngine;
}
