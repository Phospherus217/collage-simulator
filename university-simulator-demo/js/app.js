/**
 * 大学四年模拟器 v2.0 - 高颜值交互与渲染控制器 (app.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  let engine = null;
  let activeEventId = null;

  // DOM 元素引用
  const elHeaderYearText = document.getElementById('header-year-text');
  const elHeaderTUText = document.getElementById('header-tu-text');
  const elHeaderEPText = document.getElementById('header-ep-text');
  const elHeaderStageText = document.getElementById('header-stage-text');
  const elHeaderStage = document.getElementById('header-stage');
  const elBtnNextMonth = document.getElementById('btn-next-month');

  const elEventPoolGrid = document.getElementById('event-pool-grid');
  const elAvailableCount = document.getElementById('available-count');
  const elActiveEventSection = document.getElementById('active-event-section');

  const elBasicStatesGrid = document.getElementById('debug-basic-states-grid');
  const elCapGrid = document.getElementById('debug-cap-grid');
  const elRoutesGrid = document.getElementById('debug-routes-grid');
  const elTagsWrap = document.getElementById('debug-tags-wrap');
  const elHistoryList = document.getElementById('history-list');

  const elResumeModal = document.getElementById('resume-modal-overlay');
  const elResumeContent = document.getElementById('resume-modal-body');
  const elBtnCloseResume = document.getElementById('btn-close-resume');

  // 初始化引擎
  function initGame() {
    engine = new window.IFEngine(window.EMBEDDED_EVENTS);
    activeEventId = null;
    if (elResumeModal) elResumeModal.style.display = 'none';
    renderAll();
  }

  /**
   * 全量渲染界面
   */
  function renderAll() {
    const s = engine.state;
    const tl = engine.getCurrentTimeline();

    // 1. 顶部时间与双资源
    if (elHeaderYearText) {
      elHeaderYearText.innerHTML = `<strong>${tl.name}</strong> (${s.total_month}/42)`;
    }
    if (elHeaderTUText) {
      elHeaderTUText.innerHTML = `时间: <strong>${s.resources.TU_current}</strong>/10 TU` + (s.resources.TU_locked > 0 ? ` <span style="color:#d97706; font-size:0.75rem;">(兼职占用 ${s.resources.TU_locked})</span>` : '');
    }
    if (elHeaderEPText) {
      const epRatio = s.resources.EP_current / s.resources.EP_max;
      const color = epRatio < 0.3 ? '#dc2626' : (epRatio < 0.6 ? '#d97706' : '#2563eb');
      elHeaderEPText.innerHTML = `精力: <strong style="color:${color}">${s.resources.EP_current}</strong>/${s.resources.EP_max} EP`;
    }
    if (elHeaderStageText) {
      const ailabInfo = window.getAILabPhaseCN(s.routes.ailab.phase);
      elHeaderStageText.innerHTML = `AI-Lab: <strong>${ailabInfo.name}</strong>`;
    }

    // 2. 渲染五大基础生活状态
    renderBasicStates(s.basic_states);

    // 3. 渲染七大能力资产
    renderCapabilities(s.capabilities);

    // 4. 渲染四大路线状态卡
    renderRoutes(s.routes);

    // 5. 渲染经历标签
    renderTags(s.history.flags);

    // 6. 渲染可选事件池
    const availableEvents = engine.getAvailableEvents();
    renderEventPool(availableEvents);

    // 7. 渲染当前选中的决策卡
    if (activeEventId) {
      const evt = availableEvents.find(e => e.event_id === activeEventId);
      if (evt) {
        renderActiveEvent(evt);
      } else {
        activeEventId = null;
        renderActiveEvent(null);
      }
    } else {
      renderActiveEvent(null);
    }

    // 8. 渲染历史记录
    renderHistoryLog(s.history.history_log);

    // 9. 检查游戏结束与毕业简历弹窗
    if (s.game_over && s.final_resume) {
      showResumeModal(s.final_resume);
    }
  }

  /**
   * 渲染五大基础生活状态
   */
  function renderBasicStates(b) {
    if (!elBasicStatesGrid) return;
    const configs = {
      academic: { name: '学业绩点 (GPA)', icon: '📚', grad: 'linear-gradient(90deg, #3b82f6, #6366f1)' },
      social:   { name: '社交人脉 (Social)', icon: '🤝', grad: 'linear-gradient(90deg, #06b6d4, #0ea5e9)' },
      romance:  { name: '恋爱羁绊 (Romance)', icon: '💖', grad: 'linear-gradient(90deg, #ec4899, #f43f5e)' },
      family:   { name: '家庭支持 (Family)', icon: '🏡', grad: 'linear-gradient(90deg, #f59e0b, #eab308)' },
      health:   { name: '身心健康 (Health)', icon: '🌿', grad: 'linear-gradient(90deg, #10b981, #059669)' }
    };

    let html = '';
    for (const [k, v] of Object.entries(b)) {
      const range = window.getRangeLevel(v);
      const isRomance = k === 'romance';
      let statusDesc = range.name;
      if (isRomance) {
        statusDesc = v <= 20 ? '严重内耗' : (v <= 40 ? '平稳单身' : (v <= 60 ? '萌芽暧昧' : (v <= 80 ? '甜蜜稳定' : '深度羁绊')));
      }
      const cfg = configs[k] || { name: k, icon: '⭐', grad: 'linear-gradient(90deg, #3b82f6, #6366f1)' };

      html += `
        <div class="variable-row">
          <span class="variable-name">${cfg.icon} ${cfg.name}</span>
          <div class="variable-bar-container">
            <div class="variable-bar-fill" style="width: ${v}%; background: ${cfg.grad};"></div>
          </div>
          <span class="variable-val">${v}</span>
          <span class="badge badge-${range.badge}">${statusDesc}</span>
        </div>
      `;
    }
    elBasicStatesGrid.innerHTML = html;
  }

  /**
   * 渲染七大能力资产
   */
  function renderCapabilities(cap) {
    if (!elCapGrid) return;
    const configs = {
      portfolio:  { name: '作品集 (Portfolio)', icon: '💻' },
      research:   { name: '科研学术 (Research)', icon: '🔬' },
      skill:      { name: '硬技能 (Skill)', icon: '⚡' },
      delivery:   { name: '交付力 (Delivery)', icon: '📦' },
      reputation: { name: '行业口碑 (Reputation)', icon: '🌟' },
      focus:      { name: '专注定力 (Focus)', icon: '🎯' },
      ai_depth:   { name: 'AI 深度 (AI-Depth)', icon: '🤖' }
    };

    let html = '';
    for (const [k, v] of Object.entries(cap)) {
      const cfg = configs[k] || { name: k, icon: '✨' };
      html += `
        <div class="variable-row">
          <span class="variable-name">${cfg.icon} ${cfg.name}</span>
          <div class="variable-bar-container">
            <div class="variable-bar-fill" style="width: ${v}%; background: linear-gradient(90deg, #6366f1, #8b5cf6);"></div>
          </div>
          <span class="variable-val">${v}</span>
        </div>
      `;
    }
    elCapGrid.innerHTML = html;
  }

  /**
   * 渲染四大进阶路线状态
   */
  function renderRoutes(routes) {
    if (!elRoutesGrid) return;
    const names = {
      work: '💼 校招就业 (Work)',
      postgrad_exam: '📖 考研统考 (Exam)',
      postgrad_rec: '🎓 名校推免 (Rec)',
      ailab: '🧪 AI-Lab 极客线'
    };

    let html = '';
    for (const [k, r] of Object.entries(routes)) {
      const statusText = k === 'ailab' ? window.getAILabPhaseCN(r.phase).name : window.getRouteStatusCN(r.status);
      const isPrimary = r.status === 'PRIMARY' || r.status === 'COMPLETED' || r.phase === 'ACTIVE' || r.phase === 'CORE';
      html += `
        <div class="route-status-item ${isPrimary ? 'active-primary' : ''}">
          <span class="route-name">${names[k]}</span>
          <span class="badge ${isPrimary ? 'badge-success' : 'badge-neutral'}">${statusText}</span>
        </div>
      `;
    }
    elRoutesGrid.innerHTML = html;
  }

  /**
   * 渲染经历标签
   */
  function renderTags(flags) {
    if (!elTagsWrap) return;
    const keys = Object.keys(flags);
    if (keys.length === 0) {
      elTagsWrap.innerHTML = '<span class="text-muted" style="font-size:0.8rem; color:#94a3b8;">暂无关键经历标记</span>';
      return;
    }
    elTagsWrap.innerHTML = keys.map(k => `<span class="tag-badge">🏷️ ${k}</span>`).join('');
  }

  /**
   * 渲染可选事件池卡片列表
   */
  function renderEventPool(events) {
    if (!elEventPoolGrid) return;
    if (elAvailableCount) {
      elAvailableCount.textContent = `本月可用行动: ${events.length} 个`;
    }

    if (events.length === 0) {
      elEventPoolGrid.innerHTML = `
        <div class="active-event-placeholder" style="grid-column: 1 / -1;">
          <p>🌟 本月行动已处理完毕或无待办事项，点击右上角<strong>【推进到下个月 ⏭️】</strong>进入下一月份。</p>
        </div>
      `;
      return;
    }

    elEventPoolGrid.innerHTML = events.map(e => {
      const isSelected = e.event_id === activeEventId;
      const isP0 = e.priority === 'P0';
      return `
        <div class="event-card ${isSelected ? 'selected' : ''} ${isP0 ? 'deadline-urgent' : ''}" data-event-id="${e.event_id}">
          <div class="event-card-header">
            <span class="event-set-tag ${e.package.toLowerCase()}">${e.package} · ${e.type}</span>
            <span class="badge ${isP0 ? 'badge-danger' : 'badge-neutral'}">${isP0 ? '🔥 ' + e.priority : e.priority}</span>
          </div>
          <div class="event-title">${e.title}</div>
          <div class="event-excerpt">${e.content.scene}</div>
          <div class="event-card-footer">
            <span>✨ ${e.choices.length} 个可选决策</span>
            <button class="btn-select-event">${isSelected ? '正在决策' : '进入决策 &rarr;'}</button>
          </div>
        </div>
      `;
    }).join('');

    // 绑定卡片点击
    elEventPoolGrid.querySelectorAll('.event-card').forEach(card => {
      card.addEventListener('click', () => {
        activeEventId = card.getAttribute('data-event-id');
        renderAll();
      });
    });
  }

  /**
   * 渲染当前选中的决策交互卡 (Hero Active Event)
   */
  function renderActiveEvent(event) {
    if (!elActiveEventSection) return;
    if (!event) {
      elActiveEventSection.innerHTML = `
        <div class="active-event-placeholder">
          <p>👈 请在下方<strong>【本月行动事件池】</strong>中点击选择一个待办事件进行推演决策</p>
        </div>
      `;
      return;
    }

    const s = engine.state;
    elActiveEventSection.innerHTML = `
      <div class="active-event-container">
        <div class="active-event-header">
          <div class="active-event-title">${event.title}</div>
          <span class="badge badge-primary">${event.package} 任务包 · ${event.priority}</span>
        </div>
        <div class="active-event-text">
          <p><strong>【📖 背景脉络】</strong>${event.content.background}</p>
          <p style="margin-top:8px;"><strong>【🎬 现场情境】</strong>${event.content.scene}</p>
          <p style="margin-top:8px; color:#1e40af; font-weight:600;"><strong>【⚖️ 核心抉择】</strong>${event.content.conflict}</p>
        </div>
        <div class="choices-list">
          ${event.choices.map((c, idx) => {
            const costTU = (c.cost && c.cost.TU) || 0;
            const costEP = (c.cost && c.cost.EP) || 0;
            const hasEnoughTU = s.resources.TU_current >= costTU;
            return `
              <div class="choice-item ${!hasEnoughTU ? 'disabled' : ''}" data-choice-id="${c.choice_id}">
                <div class="choice-key">${c.choice_id}</div>
                <div class="choice-content">
                  <div class="choice-text">${c.text}</div>
                  <div class="choice-cost-bar">
                    <span class="cost-pill">⏳ 消耗 ${costTU} TU</span>
                    <span class="cost-pill">⚡ 消耗 ${costEP} EP</span>
                    ${!hasEnoughTU ? '<span class="badge badge-danger">时间不足无法执行</span>' : ''}
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    // 绑定选项点击
    elActiveEventSection.querySelectorAll('.choice-item').forEach(item => {
      item.addEventListener('click', () => {
        if (item.classList.contains('disabled')) return;
        const choiceId = item.getAttribute('data-choice-id');
        const res = engine.applyChoice(event.event_id, choiceId);
        if (res.success) {
          activeEventId = null;
          renderAll();
        }
      });
    });
  }

  /**
   * 渲染历史记录日志
   */
  function renderHistoryLog(logs) {
    if (!elHistoryList) return;
    if (logs.length === 0) {
      elHistoryList.innerHTML = '<div class="text-muted" style="padding:12px; font-size:0.85rem; text-align:center;">暂无历史行动记录</div>';
      return;
    }

    elHistoryList.innerHTML = logs.map(l => {
      if (l.type === 'ACTION') {
        const deltas = Object.entries(l.varDeltas || {}).map(([k, v]) => `<span class="delta-badge ${v.startsWith('+') ? 'pos' : 'neg'}">${k} ${v}</span>`).join('');
        return `
          <div class="history-item">
            <div class="history-item-header">
              <span>[第 ${l.month} 个月 · ${l.timeName}] ${l.eventTitle}</span>
            </div>
            <div class="history-item-body">
              <p>👉 <strong>决策</strong>：${l.choiceText}</p>
              <p style="margin-top:4px; color:#475569;">💬 ${l.resultText}</p>
              <div class="history-tags">${deltas}</div>
            </div>
          </div>
        `;
      } else {
        return `
          <div class="history-item system">
            <div class="history-item-header">
              <span>[第 ${l.month} 个月] ${l.title}</span>
            </div>
            <div class="history-item-body" style="color:#78350f;">${l.desc}</div>
          </div>
        `;
      }
    }).join('');
  }

  /**
   * 显示《大学四年毕业简历》收口弹窗
   */
  function showResumeModal(resume) {
    if (!elResumeModal || !elResumeContent) return;

    let entriesHtml = resume.entries.map(e => `
      <div class="resume-entry-card">
        <div class="entry-header">
          <span class="entry-title">${e.title}</span>
          <span class="badge badge-primary">${e.category}</span>
        </div>
        <div class="entry-desc">${e.description}</div>
      </div>
    `).join('');

    if (resume.entries.length === 0) {
      entriesHtml = '<p class="text-muted" style="padding:10px;">大学四年平淡如水，未在简历经历池中沉淀大型项目或竞赛记录。</p>';
    }

    elResumeContent.innerHTML = `
      <div class="resume-header">
        <div class="resume-avatar">🎓</div>
        <div class="resume-main-info">
          <h2>${resume.name} · 大学四年个人毕业简历</h2>
          <p>毕业年份：${resume.graduation_date} | 学位专业：${resume.major} (${resume.degree})</p>
          <p>学业综评：<strong style="color:#2563eb;">${resume.academic_evaluation}</strong></p>
        </div>
        <div class="resume-ending-badge">
          <span class="ending-rank">${resume.ending.rank} 级终局</span>
          <span class="ending-name">${resume.ending.name}</span>
        </div>
      </div>

      <div class="resume-ending-banner">
        <h4>🏆 最终毕业去向：【${resume.ending.id}】${resume.ending.name}</h4>
        <p>${resume.ending.desc}</p>
      </div>

      <div class="resume-section-title">📂 核心沉淀经历与荣誉 (经历链合并成果)</div>
      <div class="resume-entries-list">${entriesHtml}</div>

      <div class="resume-section-title" style="margin-top:20px;">📊 毕业七大核心能力雷达</div>
      <div class="resume-cap-summary">
        <div>💻 作品集: <strong>${resume.capabilities.portfolio}</strong></div>
        <div>⚡ 硬技能: <strong>${resume.capabilities.skill}</strong></div>
        <div>🔬 科研学术: <strong>${resume.capabilities.research}</strong></div>
        <div>📦 交付力: <strong>${resume.capabilities.delivery}</strong></div>
        <div>🌟 行业声誉: <strong>${resume.capabilities.reputation}</strong></div>
        <div>🎯 专注定力: <strong>${resume.capabilities.focus}</strong></div>
        <div>🤖 AI 深度: <strong>${resume.capabilities.ai_depth}</strong></div>
      </div>
    `;

    elResumeModal.style.display = 'flex';
  }

  // 推进到下个月按钮
  if (elBtnNextMonth) {
    elBtnNextMonth.addEventListener('click', () => {
      engine.nextMonth();
      activeEventId = null;
      renderAll();
    });
  }

  // 关闭简历弹窗
  if (elBtnCloseResume) {
    elBtnCloseResume.addEventListener('click', () => {
      elResumeModal.style.display = 'none';
    });
  }

  // 预设路线自动化测试按钮
  const btnRouteA = document.getElementById('btn-route-a');
  if (btnRouteA) {
    btnRouteA.addEventListener('click', () => {
      initGame();
      // 快速演练 Route A: 极客 AI-Lab + 大厂顶级 Offer E04
      engine.state.capabilities.skill = 75;
      engine.state.capabilities.portfolio = 80;
      engine.state.capabilities.delivery = 75;
      engine.state.capabilities.reputation = 70;
      engine.state.capabilities.ai_depth = 80;
      engine.state.routes.work.status = 'COMPLETED';
      engine.state.routes.ailab.phase = 'CORE';
      engine.state.total_month = 42;
      engine.nextMonth();
      renderAll();
    });
  }

  const btnRouteB = document.getElementById('btn-route-b');
  if (btnRouteB) {
    btnRouteB.addEventListener('click', () => {
      initGame();
      // 快速演练 Route B: 清北华五顶尖名校推免 E01
      engine.state.basic_states.academic = 90;
      engine.state.capabilities.research = 70;
      engine.state.capabilities.portfolio = 55;
      engine.state.routes.postgrad_rec.status = 'COMPLETED';
      engine.state.total_month = 42;
      engine.nextMonth();
      renderAll();
    });
  }

  const btnRouteC = document.getElementById('btn-route-c');
  if (btnRouteC) {
    btnRouteC.addEventListener('click', () => {
      initGame();
      // 快速演练 Route C: 考研初试高分金榜题名 E03
      engine.state.routes.postgrad_exam.status = 'COMPLETED';
      engine.state.routes.postgrad_exam.exam_prep = 85;
      engine.state.capabilities.focus = 75;
      engine.state.basic_states.academic = 65;
      engine.state.total_month = 42;
      engine.nextMonth();
      renderAll();
    });
  }

  const btnRouteD = document.getElementById('btn-route-d');
  if (btnRouteD) {
    btnRouteD.addEventListener('click', () => {
      initGame();
      // 快速演练 Route D: 稳健发展·优质名企骨干 E06
      engine.state.basic_states.academic = 70;
      engine.state.capabilities.skill = 60;
      engine.state.capabilities.portfolio = 60;
      engine.state.capabilities.delivery = 60;
      engine.state.routes.work.status = 'COMPLETED';
      engine.state.total_month = 42;
      engine.nextMonth();
      renderAll();
    });
  }

  const btnRouteE = document.getElementById('btn-route-e');
  if (btnRouteE) {
    btnRouteE.addEventListener('click', () => {
      initGame();
      // 快速演练 Route E: 极客创业·真实战场核心力量 E05
      engine.state.capabilities.ai_depth = 85;
      engine.state.capabilities.delivery = 80;
      engine.state.capabilities.portfolio = 75;
      engine.state.capabilities.skill = 80;
      engine.state.routes.ailab.phase = 'CORE';
      engine.state.total_month = 42;
      engine.nextMonth();
      renderAll();
    });
  }

  const btnReset = document.getElementById('btn-reset-game');
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      initGame();
    });
  }

  // 启动游戏
  initGame();
});
