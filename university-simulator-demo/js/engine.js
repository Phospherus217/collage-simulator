/**
 * 大学四年模拟器 v2.1 - 核心逻辑引擎 (engine.js)
 * 严格执行：
 * - 46 个月月度推进与 14 步循环
 * - 严苛化双资源模型 (课业底噪 2 TU 锁定, EP_max = 50 + 0.5 * health)
 * - 纯定性展示与情境化状态迁移
 * - 毕业大结局 E01~E15 显性量化与中国式家长风格证书
 * - 标准大赛级毕业简历收口系统 (STAR 结构经历链合并)
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
   * 月初勾子函数 (Start-of-Month Hook) - v2.1 严苛模型
   */
  startOfMonthHook() {
    const s = this.state;
    const b = s.basic_states;
    const r = s.resources;
    const tl = this.getCurrentTimeline();

    // 1. 计算精力上限 EP_max = round(50 + health * 0.5)
    r.EP_max = Math.round(50 + b.health * 0.5);
    r.EP_current = r.EP_max;

    // 2. 月度基础时间与学期课业底噪
    if (tl && tl.is_vacation) {
      // 寒暑假无课业底噪，完整释放 10 TU
      r.TU_locked = 0;
      r.TU_current = 10;
    } else {
      // 常规学期锁定 2 TU 课业底噪，自由时间 8 TU
      r.TU_locked = 2;
      r.TU_current = 8;
    }

    // 3. 结算上月透支精力惩罚
    if (r.overdraft_EP > 0) {
      const healthDmg = Math.ceil(r.overdraft_EP / 2);
      b.health = Math.max(0, b.health - healthDmg);
      r.EP_current = Math.max(0, r.EP_current - r.overdraft_EP);
      s.history.history_log.unshift({
        type: 'SYSTEM',
        month: s.total_month,
        title: '【月初结算】透支惩罚生效',
        desc: `上月身心透支，本月基础精力被大幅削减，健康损耗 -${healthDmg} 点。`
      });
      r.overdraft_EP = 0;
    }

    // 4. 扣除进行中主路线的刚性驻留成本 (TU 与 EP)
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

    // 5. 健康行动封锁检查
    if (b.health <= 20) {
      r.TU_current = Math.min(2, r.TU_current);
      s.history.history_log.unshift({
        type: 'WARNING',
        month: s.total_month,
        title: '【身心崩溃】健康处于危机状态',
        desc: '健康值处于极度危机，本月可用时间被压制为 2 TU，高负荷攻坚已被锁定！'
      });
    }

    // 6. 家庭经济压力与兼职自立
    if (b.family <= 20) {
      r.TU_locked += 2;
      r.TU_current = Math.max(0, r.TU_current - 2);
    } else if (b.family <= 40) {
      r.TU_locked += 1;
      r.TU_current = Math.max(0, r.TU_current - 1);
    }

    // 7. 处理未来延迟事件队列
    if (s.history.future_events && s.history.future_events.length > 0) {
      s.history.future_events = s.history.future_events.filter(fe => {
        if (fe.trigger_month === s.total_month) {
          s.history.history_log.unshift({
            type: 'EVENT_TRIGGER',
            month: s.total_month,
            title: `【约定节点触发】${fe.event_id}`,
            desc: `此前决策触发的关键时间节点已在第 ${s.total_month} 个月如期生效！`
          });
          return false;
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

    // 1. 剩余 TU 被动转化（严苛化：每 3 TU 回复 1 点健康，单月上限 +2）
    if (r.TU_current >= 3) {
      const healBonus = Math.min(2, Math.floor(r.TU_current / 3));
      b.health = Math.min(100, b.health + healBonus);
    }

    // 2. 状态耦合检查
    if (b.romance <= 20) {
      s.capabilities.focus = Math.max(0, s.capabilities.focus - 5);
    }

    // 3. 学期末自然衰减检查
    const semesterEndMonths = [4, 10, 14, 20, 24, 30, 36, 42];
    if (semesterEndMonths.includes(s.total_month)) {
      if (s.semester_stats.academic_events_count < 2 && s.routes.postgrad_rec.status !== 'PRIMARY' && s.routes.postgrad_rec.status !== 'COMPLETED') {
        b.academic = Math.max(0, b.academic - 4);
      }
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

    // 2. 检查是否已完成
    if (s.history.completed_events.includes(event.event_id) && !event.repeatable) return false;

    // 3. 检查变量条件
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

    // 4. 检查必要与互斥标签
    if (cond.has_tags && Array.isArray(cond.has_tags)) {
      for (const tag of cond.has_tags) {
        if (!s.history.flags[tag]) return false;
      }
    }
    if (cond.forbidden_tags && Array.isArray(cond.forbidden_tags)) {
      for (const tag of cond.forbidden_tags) {
        if (s.history.flags[tag]) return false;
      }
    }

    return true;
  }

  /**
   * 获取当前月份的可选事件池 (P0强制优先，无P0则按优先级呈现)
   */
  getAvailableEvents() {
    const unlocked = this.events.filter(e => this.isEventUnlocked(e));
    const p0Events = unlocked.filter(e => e.priority === 'P0');
    if (p0Events.length > 0) {
      return p0Events;
    }
    return unlocked;
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

    // 1. 扣除行动资源 TU 与 EP (若超出当前 EP 则计入透支)
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

    // 2. 状态变动结算
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

    // 3. 标签增删
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

    // 4. 路线状态机自动迁移检查
    if (s.history.flags['FLAG_WK_OFFER_SSP_ACCEPTED'] || s.history.flags['FLAG_WK_OFFER_SP_ACCEPTED']) {
      s.routes.work.status = 'COMPLETED';
    }
    if (s.history.flags['FLAG_REC_OFFER_ACCEPTED']) {
      s.routes.postgrad_rec.status = 'COMPLETED';
    }
    if (s.history.flags['FLAG_GE_PASSED_FINAL']) {
      s.routes.postgrad_exam.status = 'COMPLETED';
    } else if (s.history.flags['FLAG_GE_RETRY_CHOSEN']) {
      s.routes.postgrad_exam.status = 'EXITED';
    }

    if (s.history.flags['FLAG_AI_CORE_ENTREPRENEUR']) {
      s.routes.ailab.phase = 'CORE';
    } else if (s.history.flags['FLAG_AI_JOINED_DEEP']) {
      s.routes.ailab.phase = 'ACTIVE';
    } else if (s.history.flags['FLAG_AI_POLITELY_EXITED']) {
      s.routes.ailab.phase = 'EXITED';
    } else if (s.history.flags['FLAG_AI_LAB_DISCOVERED']) {
      s.routes.ailab.phase = 'DISCOVERED';
    } else if (s.history.flags['FLAG_AI_HEARD_LAB']) {
      s.routes.ailab.phase = 'FORESHADOW';
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

    // 8. 记录定性化历史日志
    const historyItem = {
      type: 'ACTION',
      month: s.total_month,
      timeName: this.getCurrentTimeline().name,
      eventId: event.event_id,
      eventTitle: event.title,
      choiceText: choice.text,
      resultText: choice.result_text,
      qualitative_changes: choice.qualitative_changes || [],
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
   * 最终毕业大结局 E01~E15 优先级判定 (结合显性院校/企业/薪资/成就与遗憾)
   */
  evaluateFinalEnding() {
    const s = this.state;
    const b = s.basic_states;
    const cap = s.capabilities;
    const r = s.routes;
    const flags = s.history.flags;

    // P1: E01 顶尖推免·学术新星
    if ((r.postgrad_rec.status === 'COMPLETED' || flags['FLAG_REC_OFFER_ACCEPTED']) && b.academic >= 80 && cap.research >= 30) {
      return {
        id: 'E01',
        name: '顶尖推免·学术新星',
        rank: 'SSS',
        destination: '清华大学 / 华东五校 计算机系 (直博/推免生)',
        salary: '国家学术津贴 + 课题组专项补助 5,000~6,500元/月 (免除学费 + 全额科研奖学金)',
        title: '【学术翘楚·未来科学家】',
        desc: '四年来你深耕学术与理论，以顶尖的 GPA、过硬的科研成果与权威夏令营拟录取，成为顶尖学府直博研究生，在学术前沿探索星辰大海！',
        highlights: [
          '专业前 5% 拔尖绩点，大学四年几乎无弱项',
          '斩获全国权威学术夏令营「优秀营员」直接拟录取',
          '学术与代码兼修，打下坚实的科研工程地基'
        ],
        regrets: [
          '为了追求极致的学术战力，牺牲了大量闲暇与大学初恋'
        ]
      };
    }

    // P2: E04 顶尖大厂·核心研发
    if ((r.work.status === 'COMPLETED' || flags['FLAG_WK_OFFER_SSP_ACCEPTED'] || flags['FLAG_WK_OFFER_SSP']) && cap.portfolio >= 50 && cap.skill >= 45) {
      return {
        id: 'E04',
        name: '顶尖大厂·核心研发',
        rank: 'SSS',
        destination: '阿里巴巴 淘天集团 / 字节跳动 核心研发部 (SSP 顶级校招录用)',
        salary: '年薪 38W (月薪 26K + 4个月年终奖 + 股票期权 + 3W 签字费)',
        title: '【大厂新星·工业界中坚】',
        desc: '凭借扎实的底层系统工程能力、高质量开源 Showcase 与大厂高并发业务研发表现，你在校招中斩获最高档 SSP Offer，成为同龄人中的高薪技术骄子！',
        highlights: [
          '独立主导高性能存储与微服务大作业，产出工业级开源项目',
          '大厂暑期实习转正答辩全票获评 SSP 最高评级',
          '以强悍的独立交付力征服面试官与首席架构师'
        ],
        regrets: [
          '连续通宵赶工留下轻度颈椎疲劳',
          '忙于技术攻坚，错过了几次宿舍的集体毕业旅行'
        ]
      };
    }

    // P3: E05 极客创业·核心力量
    if ((r.ailab.phase === 'CORE' || flags['FLAG_AI_CORE_ENTREPRENEUR']) && cap.ai_depth >= 50 && cap.delivery >= 50) {
      return {
        id: 'E05',
        name: '极客创业·核心力量',
        rank: 'SSS',
        destination: '前沿具身智能与大模型 AI 创业团队 (核心合伙人 / 智能体架构总监)',
        salary: '年薪 30W + 2% 早期期权池合伙人份额',
        title: '【极客创客·青年技术领袖】',
        desc: '从第一张开源任务卡到主导千万级商业 Agent 平台落地，你与极客学长共同投身产业浪潮，以核心合伙人身份开启商业创业传奇！',
        highlights: [
          '通过 AI-Lab 全部严苛任务卡与打回返工考验',
          '带领团队攻克企业级多智能体调度与高并发上线',
          '成为数千万融资前沿 AI 创业团队核心技术合伙人'
        ],
        regrets: [
          '创业初期通宵达旦，身心常年处于高压极限边缘'
        ]
      };
    }

    // P4: E02 常规推免·名校深造
    if (r.postgrad_rec.status === 'COMPLETED' || flags['FLAG_REC_CAMP_PASSED'] || flags['FLAG_REC_LOCAL_PASSED']) {
      return {
        id: 'E02',
        name: '常规推免·名校深造',
        rank: 'SS',
        destination: '浙江大学 / 优势 985 高校 计算机学院 (全日制学术硕士)',
        salary: '国家研究生津贴 1,500元/月 + 课题组科研津贴',
        title: '【学术名校·稳健深造】',
        desc: '四年稳扎稳打，凭借优异的专业绩点与扎实科研，顺利推免至优势 985 名校攻读硕士学位！',
        highlights: [
          '前三年专业成绩稳居前 10%',
          '推免夏令营斩获多所 985 高校拟录取 Offer'
        ],
        regrets: [
          '未能更进一步冲击清北顶级直博席位'
        ]
      };
    }

    // P5: E03 考研上岸·金榜题名
    if (r.postgrad_exam.status === 'COMPLETED' || flags['FLAG_GE_PASSED_FINAL']) {
      return {
        id: 'E03',
        name: '考研上岸·金榜题名',
        rank: 'SS',
        destination: '南京大学 软件学院 (全日制专业硕士 / 考研一战 408 分)',
        salary: '国家研究生助学金 600~1,200元/月',
        title: '【逆风翻盘·一战成硕】',
        desc: '在图书馆苦读 300 个日夜，战胜孤独与内耗，考研初试与复试双双高分过线，成功一战成硕！',
        highlights: [
          '大三坚持每日清晨 7 点自习室刷题',
          '考研数学与专业课 408 极限发挥，初试高分过线',
          '复试机试凭借扎实代码功底从容通关'
        ],
        regrets: [
          '长达一年的封闭备战错过了许多校园社交'
        ]
      };
    }

    // P6: E06 优质名企·骨干力量
    if (flags['FLAG_WK_OFFER_SP_ACCEPTED'] || flags['FLAG_WK_OFFER_SP'] || (r.work.status === 'COMPLETED' && cap.portfolio >= 35)) {
      return {
        id: 'E06',
        name: '优质名企·骨干力量',
        rank: 'S',
        destination: '腾讯 / 知名外企中国研发中心 / 核心国企数字化中心',
        salary: '年薪 24W ~ 28W (月薪 18K + 季度奖 + 六险一金)',
        title: '【名企中坚·务实骨干】',
        desc: '凭借良好的工程规范与踏实交付，在激烈的校招中脱颖而出，入职知名名企核心技术岗！',
        highlights: [
          '大三完成名企研发实习，工程规范严谨',
          '秋招顺利斩获多份 SP 录用通知'
        ],
        regrets: [
          '未能更进一步拿到最高档 SSP 录用'
        ]
      };
    }

    // P7: E08 体制内录用·稳定安康
    if (flags['FLAG_WK_OFFER_CIVIL_ACCEPTED'] || (b.academic >= 60 && b.family >= 60 && b.social >= 45)) {
      return {
        id: 'E08',
        name: '体制内录用·稳定安康',
        rank: 'S',
        destination: '省直机关定向选调生 / 重点央企总行数字化中心',
        salary: '年综合收入 18W ~ 22W (全额六险二金 + 住房补贴 + 稳定编制)',
        title: '【体制栋梁·安稳顺遂】',
        desc: '通过高标准的选调生笔面试与政审，成功进入重点公职与央企编制序列，生活安稳，家庭极度满意！',
        highlights: [
          '顺利通过定向选调与央企综合素质考核',
          '获得家人与亲友一致高度赞誉'
        ],
        regrets: [
          '告别了自由度较高的极客代码生活'
        ]
      };
    }

    // P8: E09 考研二战·重整旗鼓
    if (flags['FLAG_GE_RETRY_CHOSEN'] || (r.postgrad_exam.status === 'EXITED' && b.family >= 55)) {
      return {
        id: 'E09',
        name: '考研二战·重整旗鼓',
        rank: 'B',
        destination: '全职备战次年全国硕士研究生统考 (家庭全力托底)',
        salary: '家庭托底支持 2,000元/月',
        title: '【蛰伏蓄力·勇毅前行】',
        desc: '初试虽有遗憾，但在家庭温暖包容与经济托底支持下，你卸下焦虑重整旗鼓，坚定备战二战！',
        highlights: [
          '收获了父母最无私的包容与经济支持',
          '拥有了更加清晰从容的备考心力'
        ],
        regrets: [
          '毕业季看着同窗奔赴前程，心中难免有些孤单'
        ]
      };
    }

    // P9: E15 身心透支·延毕/休整
    if (b.health <= 20 || b.academic <= 20) {
      return {
        id: 'E15',
        name: '身心透支·延毕/休整',
        rank: 'C',
        destination: '延期毕业 / 留校休养 (身心调理中)',
        salary: '休养阶段',
        title: '【停步疗愈·重拾健康】',
        desc: '因严重的身心透支或学业阻滞未能如期毕业。人生是一场马拉松，暂时的停歇是为了未来走得更远！',
        highlights: [
          '深刻反思了身体与精力管理的重要性'
        ],
        regrets: [
          '过度透支导致身体受损，未能按期毕业'
        ]
      };
    }

    // P10: E07 常规就业·职场新人
    if (cap.portfolio >= 20 || cap.skill >= 25) {
      return {
        id: 'E07',
        name: '常规就业·职场新人',
        rank: 'A',
        destination: '本地中型软件科技企业 研发部',
        salary: '月薪 9,500 ~ 12,000 元 (年底双薪 + 五险一金)',
        title: '【踏实职人·平凡起步】',
        desc: '顺利入职中型企业技术岗位，开启踏实独立的职业人生，一步一个脚印积累工作经验。',
        highlights: [
          '大四春招顺利签约三方协议',
          '大学毕业实现经济独立'
        ],
        regrets: [
          '大学前期缺乏长远规划，错过了大厂校招黄金期'
        ]
      };
    }

    // 默认兜底: E14 慢就业·迷茫探索
    return {
      id: 'E14',
      name: '慢就业·迷茫探索',
      rank: 'B',
      destination: '毕业求职空窗探索期 (寻找方向中)',
      salary: '暂无固定薪资',
      title: '【探索求索·静候花开】',
      desc: '大学四年在摸索中度过，毕业时虽未立即确定去向，但在时代的浪潮中你依然年轻，人生随时可以重新出发！',
      highlights: [
        '保持了健康的身体与开朗心态',
        '拥有重新定义方向的宝贵契机'
      ],
      regrets: [
        '大学四年留下了不少犹豫与拖延的遗憾'
      ]
    };
  }

  /**
   * 生成标准大赛级毕业简历 (ResumeData)
   */
  generateFinalResume() {
    const s = this.state;
    const b = s.basic_states;
    const cap = s.capabilities;

    // 经历链合并算法
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
      university: '国家重点大学',
      graduation_date: '2029年6月',
      academic_evaluation: b.academic >= 85 ? '专业前 5% (GPA 3.85 / 国奖有力竞争者)' : (b.academic >= 70 ? '专业前 15% (GPA 3.50 / 良好)' : '成绩中等 (GPA 3.00)'),
      entries: mergedEntries,
      capabilities: { ...cap },
      basic_states: { ...b },
      ending: s.final_ending
    };
  }
}

// 导出挂载
if (typeof window !== 'undefined') {
  window.IFEngine = IFEngine;
}

