/**
 * 大学四年模拟器 v2.1 - 高颜值交互与渲染控制器 (app.js)
 * 严格执行：
 * - 纯定性展示与情境化状态映射 (去算分器化)
 * - 选项卡纯定性徽章、预期意图与动态透支预警 (无生硬数值)
 * - 中国式家长风格毕业去向荣誉证书 (显性院校/企业/薪资/高光与遗憾)
 * - 大赛级标准 A4 毕业简历 (STAR 经历链收口)
 * - 隐藏极客线去直白暴露化（隐藏时静默无感知，触发后情境化暗示）
 */

document.addEventListener('DOMContentLoaded', () => {
  let engine = null;
  let activeEventId = null;
  let activeResumeTab = 'certificate'; // 'certificate' | 'resume'

  // DOM 元素引用
  const elHeaderYearText = document.getElementById('header-year-text');
  const elHeaderTUText = document.getElementById('header-tu-text');
  const elHeaderEPText = document.getElementById('header-ep-text');
  const elHeaderStage = document.getElementById('header-stage');
  const elHeaderStageText = document.getElementById('header-stage-text');
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
  const elTabBtnCert = document.getElementById('tab-btn-certificate');
  const elTabBtnResume = document.getElementById('tab-btn-resume');

  // 初始化引擎
  function initGame() {
    engine = new window.IFEngine(window.EMBEDDED_EVENTS);
    activeEventId = null;
    activeResumeTab = 'certificate';
    if (elResumeModal) elResumeModal.style.display = 'none';
    renderAll();
  }

  /**
   * 全量渲染界面
   */
  function renderAll() {
    const s = engine.state;
    const tl = engine.getCurrentTimeline();

    // 1. 顶部时间与双资源 (纯定性状态展示)
    if (elHeaderYearText) {
      elHeaderYearText.innerHTML = `<strong>${tl.name}</strong> (${s.total_month}/42)`;
    }
    if (elHeaderTUText) {
      const timeQual = window.getTimeQualitative(s.resources.TU_current, 10);
      const lockedDesc = s.resources.TU_locked > 0 ? ` (课业/兼职占用 ${s.resources.TU_locked} TU)` : '';
      elHeaderTUText.innerHTML = `时间: <strong style="color:var(--text-main)">【${timeQual.text}】</strong>${lockedDesc}`;
    }
    if (elHeaderEPText) {
      const energyQual = window.getEnergyQualitative(s.resources.EP_current, s.resources.EP_max);
      const colorMap = {
        '状态充沛': '#059669',
        '状态稳定': '#2563eb',
        '已有疲惫': '#d97706',
        '接近透支': '#dc2626',
        '精力耗尽': '#dc2626'
      };
      const badgeColor = colorMap[energyQual.text] || '#2563eb';
      elHeaderEPText.innerHTML = `精力: <strong style="color:${badgeColor}">【${energyQual.text}】</strong>`;
    }

    // 隐藏极客线顶部徽章处理：完全隐藏时静默不显，萌芽/知晓/入组后给出情境化微提示
    if (elHeaderStage && elHeaderStageText) {
      const ailabInfo = window.getAILabPhaseCN(s.routes.ailab.phase);
      if (ailabInfo.isHidden) {
        elHeaderStage.style.display = 'none';
      } else {
        elHeaderStage.style.display = 'inline-flex';
        elHeaderStageText.innerHTML = `<span>${ailabInfo.hint}</span>`;
      }
    }

    // 2. 渲染五大基础生活状态 (情境化定性)
    renderBasicStates(s.basic_states);

    // 3. 渲染七大能力资产 (能力维度定性)
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
   * 渲染五大基础生活状态 (情境化定性描述)
   */
  function renderBasicStates(b) {
    if (!elBasicStatesGrid) return;
    const configs = {
      academic: { name: '学业绩点', icon: '📚', grad: 'linear-gradient(90deg, #3b82f6, #6366f1)' },
      social:   { name: '社交人脉', icon: '🤝', grad: 'linear-gradient(90deg, #06b6d4, #0ea5e9)' },
      romance:  { name: '恋爱羁绊', icon: '💖', grad: 'linear-gradient(90deg, #ec4899, #f43f5e)' },
      family:   { name: '家庭支持', icon: '🏡', grad: 'linear-gradient(90deg, #f59e0b, #eab308)' },
      health:   { name: '身心健康', icon: '🌿', grad: 'linear-gradient(90deg, #10b981, #059669)' }
    };

    let html = '';
    for (const [k, v] of Object.entries(b)) {
      const range = window.getRangeLevel(v);
      const qual = window.getBasicStateQualitative(k, v);
      const cfg = configs[k] || { name: k, icon: '⭐', grad: 'linear-gradient(90deg, #3b82f6, #6366f1)' };

      html += `
        <div class="variable-row">
          <span class="variable-name" title="${qual.desc}">${cfg.icon} ${cfg.name}</span>
          <div class="variable-bar-container" title="${qual.desc}">
            <div class="variable-bar-fill" style="width: ${v}%; background: ${cfg.grad};"></div>
          </div>
          <span class="badge badge-${range.badge}" title="${qual.desc}">${qual.level}</span>
        </div>
      `;
    }
    elBasicStatesGrid.innerHTML = html;
  }

  /**
   * 渲染七大能力资产 (能力维度定性)
   */
  function renderCapabilities(cap) {
    if (!elCapGrid) return;
    const configs = {
      portfolio:  { name: '作品集', icon: '💻' },
      research:   { name: '科研学术', icon: '🔬' },
      skill:      { name: '工程硬技能', icon: '⚡' },
      delivery:   { name: '闭环交付力', icon: '📦' },
      reputation: { name: '行业口碑', icon: '🌟' },
      focus:      { name: '专注定力', icon: '🎯' },
      ai_depth:   { name: 'AI 深度', icon: '🤖' }
    };

    let html = '';
    for (const [k, v] of Object.entries(cap)) {
      const cfg = configs[k] || { name: k, icon: '✨' };
      const qual = window.getCapQualitative(k, v);
      const range = window.getRangeLevel(v);

      html += `
        <div class="variable-row">
          <span class="variable-name" title="${qual.desc}">${cfg.icon} ${cfg.name}</span>
          <div class="variable-bar-container" title="${qual.desc}">
            <div class="variable-bar-fill" style="width: ${v}%; background: linear-gradient(90deg, #6366f1, #8b5cf6);"></div>
          </div>
          <span class="badge badge-${range.badge}" title="${qual.desc}">${qual.level}</span>
        </div>
      `;
    }
    elCapGrid.innerHTML = html;
  }

  /**
   * 渲染进阶路线状态卡（包含三大常规官方路线 + 隐藏极客线微暗示）
   */
  function renderRoutes(routes) {
    if (!elRoutesGrid) return;
    const standardNames = {
      work: '💼 校招求职 (Work)',
      postgrad_exam: '📖 考研统考 (Exam)',
      postgrad_rec: '🎓 名校推免 (Rec)'
    };

    let html = '';
    // 1. 渲染三大官方毕业路线
    for (const [k, r] of Object.entries(routes)) {
      if (k === 'ailab') continue;
      const statusText = window.getRouteStatusCN(r.status);
      const isPrimary = r.status === 'PRIMARY' || r.status === 'COMPLETED';
      html += `
        <div class="route-status-item ${isPrimary ? 'active-primary' : ''}">
          <span class="route-name">${standardNames[k] || k}</span>
          <span class="badge ${isPrimary ? 'badge-success' : 'badge-neutral'}">${statusText}</span>
        </div>
      `;
    }

    // 2. 渲染隐藏极客机遇（含暗示与去剧透处理）
    const ailab = routes.ailab || { phase: 'HIDDEN' };
    const ailabInfo = window.getAILabPhaseCN(ailab.phase);
    if (ailabInfo.isHidden) {
      // 隐藏状态：仅展示神秘未解线索占位暗示，不剧透 "AI-Lab" 名字
      html += `
        <div class="route-status-item hidden-secret-route" title="校内传闻：某些技术探索与深度投入可能会触发意想不到的发展线索...">
          <span class="route-name" style="color:#94a3b8;">❓ ？？？ (未探索的课外机遇)</span>
          <span class="badge badge-neutral" style="opacity:0.6;">未探索</span>
        </div>
      `;
    } else {
      // 已触发线索或进入阶段：情境化呈现，如极客传闻 / 任务卡试做 / 极客工程组
      const isPrimaryGeek = ailab.phase === 'ACTIVE' || ailab.phase === 'CORE';
      html += `
        <div class="route-status-item ${isPrimaryGeek ? 'active-primary' : ''}">
          <span class="route-name" style="color: ${isPrimaryGeek ? '#059669' : '#b45309'}; font-weight:700;">${ailabInfo.routeTitle}</span>
          <span class="badge badge-${ailabInfo.badge}">${ailabInfo.statusBadge}</span>
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
          <p>🌟 本月行动已处理完毕或处于日程空档，点击右上角<strong>【推进到下个月 ⏭️】</strong>进入下一月份。</p>
        </div>
      `;
      return;
    }

    const packageCNMap = {
      ac: '学业课程',
      so: '校园社交',
      ro: '情感生活',
      fa: '家庭支持',
      he: '身心调理',
      ai: '极客机遇',
      wk: '求职实战',
      ge: '考研统考',
      re: '名校推免'
    };

    elEventPoolGrid.innerHTML = events.map(e => {
      const isSelected = e.event_id === activeEventId;
      const isP0 = e.priority === 'P0';
      const pkgCN = packageCNMap[e.package.toLowerCase()] || e.package;
      return `
        <div class="event-card ${isSelected ? 'selected' : ''} ${isP0 ? 'deadline-urgent' : ''}" data-event-id="${e.event_id}">
          <div class="event-card-header">
            <span class="event-set-tag ${e.package.toLowerCase()}">${pkgCN} · ${e.type}</span>
            <span class="badge ${isP0 ? 'badge-danger' : 'badge-neutral'}">${isP0 ? '🔥 ' + e.priority : e.priority}</span>
          </div>
          <div class="event-title">${e.title}</div>
          <div class="event-excerpt">${e.content.scene}</div>
          <div class="event-card-footer">
            <span>✨ ${e.choices.length} 项可选行动</span>
            <button class="btn-select-event">${isSelected ? '正在推演' : '进入决策 &rarr;'}</button>
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
   * 获取负荷等级的样式类名和中文徽章
   */
  function getLoadLevelBadge(hint, cost) {
    const costTU = (cost && cost.TU) || 0;
    const costEP = (cost && cost.EP) || 0;

    let levelClass = 'load-normal';
    let levelName = '📘 常规投入';

    if (hint && hint.load_level !== undefined) {
      const lvl = hint.load_level;
      if (lvl === 0) { levelClass = 'load-easy'; levelName = hint.load_name || '🌿 轻松闲暇'; }
      else if (lvl === 1) { levelClass = 'load-normal'; levelName = hint.load_name || '📘 常规投入'; }
      else if (lvl === 2) { levelClass = 'load-hard'; levelName = hint.load_name || '⚡ 深度攻坚'; }
      else { levelClass = 'load-extreme'; levelName = hint.load_name || '🔥 极限透支'; }
    } else {
      if (costEP >= 40 || costTU >= 3) {
        levelClass = 'load-extreme';
        levelName = '🔥 极限透支';
      } else if (costEP >= 25 || costTU >= 2) {
        levelClass = 'load-hard';
        levelName = '⚡ 深度攻坚';
      } else if (costEP >= 10 || costTU >= 1) {
        levelClass = 'load-normal';
        levelName = '📘 常规投入';
      } else {
        levelClass = 'load-easy';
        levelName = '🌿 轻松闲暇';
      }
    }

    return { levelClass, levelName };
  }

  /**
   * 渲染当前选中的决策交互卡 (Hero Active Event - 纯定性卡片)
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
          ${event.choices.map(c => {
            const costTU = (c.cost && c.cost.TU) || 0;
            const costEP = (c.cost && c.cost.EP) || 0;
            const hasEnoughTU = s.resources.TU_current >= costTU;
            const isOverdraftRisk = s.resources.EP_current < costEP;
            const { levelClass, levelName } = getLoadLevelBadge(c.player_hint, c.cost);

            const intentText = c.player_hint ? c.player_hint.intent : '';
            const tradeoffText = c.player_hint ? c.player_hint.tradeoff : '';

            return `
              <div class="choice-item ${!hasEnoughTU ? 'disabled' : ''}" data-choice-id="${c.choice_id}">
                <div class="choice-key">${c.choice_id}</div>
                <div class="choice-content">
                  <div class="choice-text">${c.text}</div>
                  
                  <div class="choice-qualitative-bar">
                    <div class="load-badge ${levelClass}">
                      <span>${levelName}</span>
                    </div>

                    ${(intentText || tradeoffText) ? `
                      <div class="choice-hint-box">
                        ${intentText ? `<div class="choice-hint-intent">🎯 预期导向：${intentText}</div>` : ''}
                        ${tradeoffText ? `<div class="choice-hint-tradeoff">⚖️ 隐性权衡：${tradeoffText}</div>` : ''}
                      </div>
                    ` : ''}

                    ${isOverdraftRisk ? `
                      <div class="choice-warning-banner">
                        ⚠️ 状态警示：当前精力不足以完全承载该行动，选择后将发生身心透支并扣除次月健康！
                      </div>
                    ` : ''}

                    ${!hasEnoughTU ? `
                      <div class="choice-warning-banner" style="background:#fff1f2; border-color:#fecdd3; color:#be123c;">
                        ⏳ 时间不足：本月自由时间已被占满，需安排至下月或调整日程。
                      </div>
                    ` : ''}
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
   * 渲染历史记录日志 (纯定性叙事化呈现)
   */
  function renderHistoryLog(logs) {
    if (!elHistoryList) return;
    if (logs.length === 0) {
      elHistoryList.innerHTML = '<div class="text-muted" style="padding:12px; font-size:0.85rem; text-align:center;">暂无历史行动记录</div>';
      return;
    }

    elHistoryList.innerHTML = logs.map(l => {
      if (l.type === 'ACTION') {
        const qualBullets = (l.qualitative_changes && l.qualitative_changes.length > 0)
          ? l.qualitative_changes.map(qc => `<span class="delta-badge pos" style="font-weight:600;">${qc}</span>`).join('')
          : Object.entries(l.varDeltas || {}).map(([k, v]) => `<span class="delta-badge ${v.startsWith('+') ? 'pos' : 'neg'}">${k} ${v.startsWith('+') ? '↑ 提升' : '↓ 损耗'}</span>`).join('');

        return `
          <div class="history-item">
            <div class="history-item-header">
              <span>[第 ${l.month} 个月 · ${l.timeName}] ${l.eventTitle}</span>
            </div>
            <div class="history-item-body">
              <p>👉 <strong>行动决策</strong>：${l.choiceText}</p>
              <p style="margin-top:4px; color:#475569; line-height:1.5;">💬 ${l.resultText}</p>
              <div class="history-tags">${qualBullets}</div>
            </div>
          </div>
        `;
      } else {
        return `
          <div class="history-item system">
            <div class="history-item-header">
              <span>[第 ${l.month} 个月] ${l.title}</span>
            </div>
            <div class="history-item-body" style="color:#78350f; line-height:1.5;">${l.desc}</div>
          </div>
        `;
      }
    }).join('');
  }

  /**
   * 构造七维多边形能力雷达图 SVG (七边形 Heptagon Polygon Radar)
   */
  function generateRadarChartSVG(cap) {
    const dimensions = [
      { key: 'portfolio', name: '作品集', icon: '💻' },
      { key: 'research', name: '科研学术', icon: '🔬' },
      { key: 'skill', name: '工程硬技能', icon: '⚡' },
      { key: 'delivery', name: '闭环交付力', icon: '📦' },
      { key: 'reputation', name: '行业口碑', icon: '🌟' },
      { key: 'focus', name: '专注定力', icon: '🎯' },
      { key: 'ai_depth', name: 'AI 深度', icon: '🤖' }
    ];

    const N = dimensions.length; // 7
    const cx = 250;
    const cy = 200;
    const maxR = 120;
    const levels = [0.2, 0.4, 0.6, 0.8, 1.0];

    // 1. 生成同心多边形背景网格
    let gridRingsHtml = '';
    levels.forEach((lvl, idx) => {
      const r = maxR * lvl;
      const points = [];
      for (let i = 0; i < N; i++) {
        const angle = -Math.PI / 2 + (i * 2 * Math.PI) / N;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
      }
      const isOuter = idx === levels.length - 1;
      gridRingsHtml += `<polygon points="${points.join(' ')}" class="radar-grid-ring ${isOuter ? 'outer' : ''}" />`;
    });

    // 2. 生成轴线 (spokes) 与顶点文字标注
    let spokesHtml = '';
    let labelsHtml = '';
    dimensions.forEach((dim, i) => {
      const angle = -Math.PI / 2 + (i * 2 * Math.PI) / N;
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);

      const outerX = cx + maxR * cosA;
      const outerY = cy + maxR * sinA;
      spokesHtml += `<line x1="${cx}" y1="${cy}" x2="${outerX.toFixed(1)}" y2="${outerY.toFixed(1)}" class="radar-spoke" />`;

      // 标签自适应位置与对齐
      const labelR = maxR + 26;
      const lx = cx + labelR * cosA;
      const ly = cy + labelR * sinA;

      let textAnchor = 'middle';
      if (cosA > 0.15) textAnchor = 'start';
      else if (cosA < -0.15) textAnchor = 'end';

      const val = cap && cap[dim.key] !== undefined ? cap[dim.key] : 0;
      const qual = window.getCapQualitative(dim.key, val);

      labelsHtml += `
        <g transform="translate(${lx.toFixed(1)}, ${ly.toFixed(1)})">
          <text x="0" y="-3" text-anchor="${textAnchor}" class="radar-label-title">${dim.icon} ${dim.name}</text>
          <text x="0" y="11" text-anchor="${textAnchor}" class="radar-label-sub">${qual.level} (${val})</text>
        </g>
      `;
    });

    // 3. 计算数据多边形顶点
    const dataPoints = [];
    let dataPointsHtml = '';
    dimensions.forEach((dim, i) => {
      const val = cap && cap[dim.key] !== undefined ? cap[dim.key] : 0;
      const ratio = Math.max(0.08, Math.min(1.0, val / 100));
      const r = maxR * ratio;
      const angle = -Math.PI / 2 + (i * 2 * Math.PI) / N;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      dataPoints.push(`${x.toFixed(1)},${y.toFixed(1)}`);
      dataPointsHtml += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4.5" class="radar-point" data-key="${dim.key}"><title>${dim.name}: ${val}分 (${window.getCapQualitative(dim.key, val).level})</title></circle>`;
    });

    return `
      <div class="radar-chart-container">
        <svg class="radar-chart-svg" viewBox="0 0 500 400">
          <defs>
            <linearGradient id="radarPolyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.55" />
              <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0.35" />
            </linearGradient>
          </defs>
          <!-- 刻度同心七边形网格 -->
          ${gridRingsHtml}
          <!-- 放射轴线 -->
          ${spokesHtml}
          <!-- 能力数据多边形 -->
          <polygon points="${dataPoints.join(' ')}" class="radar-polygon" />
          <!-- 顶点圆点 -->
          ${dataPointsHtml}
          <!-- 维度与等级文字标注 -->
          ${labelsHtml}
        </svg>
      </div>
    `;
  }

  /**
   * 渲染弹窗内容 (根据 activeResumeTab 切换视图)
   */
  function renderResumeModalContent(resume) {
    if (!elResumeContent) return;

    if (activeResumeTab === 'certificate') {
      // 视图 1：中国式家长风格毕业去向荣誉证书
      const end = resume.ending;
      const highlightsHtml = (end.highlights && end.highlights.length > 0)
        ? end.highlights.map(h => `<li>${h}</li>`).join('')
        : '<li>大学四年保持了身心平稳与健康心态</li>';
      const regretsHtml = (end.regrets && end.regrets.length > 0)
        ? end.regrets.map(r => `<li>${r}</li>`).join('')
        : '<li>无重大遗憾</li>';

      const radarHtml = generateRadarChartSVG(resume.capabilities);

      elResumeContent.innerHTML = `
        <div class="parents-outcome-card">
          <div class="outcome-cert-header">
            <div class="cert-stamp-badge">🏆 ${end.rank} 级毕业成就</div>
            <h2 class="cert-main-title">${end.title || end.name}</h2>
            <div class="cert-subtitle">本科毕业发展收口认定证书 · 2029届</div>
          </div>

          <div class="outcome-destination-banner">
            <div class="outcome-dest-label">🎯 最终毕业去向 / 录取录用单位</div>
            <div class="outcome-dest-name">${end.destination || end.name}</div>
            <div class="outcome-salary-box">
              <span>💰 预期薪资 / 待遇补助：</span>
              <span>${end.salary || '面议 / 阶段性发展'}</span>
            </div>
          </div>

          <div class="outcome-details-grid">
            <div class="outcome-box">
              <div class="outcome-box-title">✨ 四年高光时刻 (Highlights)</div>
              <ul class="outcome-list highlights">
                ${highlightsHtml}
              </ul>
            </div>

            <div class="outcome-box">
              <div class="outcome-box-title">💭 人生遗憾与代价 (Regrets)</div>
              <ul class="outcome-list regrets">
                ${regretsHtml}
              </ul>
            </div>
          </div>

          <div class="outcome-box" style="margin-bottom:16px;">
            <div class="outcome-box-title">📊 毕业七大核心能力资产雷达图 (7-Dimensional Asset Radar)</div>
            ${radarHtml}
          </div>

          <div class="outcome-desc-text">
            <strong>🎓 毕业评语：</strong>${end.desc}
          </div>
        </div>
      `;
    } else {
      // 视图 2：大赛级标准 A4 毕业简历 (STAR 经历链收口)
      const projectEntries = resume.entries.filter(e => e.category === '项目研发' || e.category === '开源项目' || e.category === '科研学术');
      const otherEntries = resume.entries.filter(e => e.category !== '项目研发' && e.category !== '开源项目' && e.category !== '科研学术');

      let projectsHtml = projectEntries.map(e => `
        <div class="resume-project-item">
          <div class="project-item-top">
            <span><strong>${e.title}</strong></span>
            <span class="project-role-tag">${e.category} · ${e.stage_contribution || '核心主导'}</span>
          </div>
          <ul class="project-desc-bullets">
            <li>${e.description}</li>
          </ul>
        </div>
      `).join('');

      if (projectEntries.length === 0) {
        projectsHtml = '<p style="font-size:0.84rem; color:#64748b;">大学期间以通识课业为主，暂无独立主导的工程项目积累。</p>';
      }

      let honorsHtml = otherEntries.map(e => `
        <div style="font-size:0.86rem; margin-bottom:6px; color:#334155;">
          • <strong>${e.title}</strong>：${e.description}
        </div>
      `).join('');

      if (otherEntries.length === 0) {
        honorsHtml = '<p style="font-size:0.84rem; color:#64748b;">完成大学常规培养计划，无违纪记录。</p>';
      }

      const radarHtml = generateRadarChartSVG(resume.capabilities);

      elResumeContent.innerHTML = `
        <div class="standard-resume">
          <div class="resume-paper-header">
            <div>
              <div class="resume-candidate-name">${resume.name}</div>
              <div class="resume-target-title">求职 / 深造意向：${resume.ending.name}</div>
            </div>
            <div class="resume-contact-info">
              <div>🎓 毕业年份：${resume.graduation_date}</div>
              <div>📍 毕业院校：${resume.university} (${resume.major})</div>
              <div>⭐ 学业评估：${resume.academic_evaluation}</div>
            </div>
          </div>

          <div class="resume-block">
            <div class="resume-block-heading">
              <span>🎓 教育背景 / Education</span>
            </div>
            <div class="resume-edu-row">
              <span>${resume.university} · 计算机科学与技术</span>
              <span>工学学士 (2025.09 - 2029.06)</span>
            </div>
            <div class="resume-edu-sub">
              <span>主修课程：数据结构、计算机体系结构、操作系统、分布式计算、AI Agent 智能体系统</span>
              <span>综合绩点评级：${resume.academic_evaluation}</span>
            </div>
          </div>

          <div class="resume-block">
            <div class="resume-block-heading">
              <span>💻 核心项目与科研经历 / Projects & Research (STAR 经历链)</span>
            </div>
            ${projectsHtml}
          </div>

          <div class="resume-block">
            <div class="resume-block-heading">
              <span>🏆 荣誉竞赛与实习历程 / Honors & Activities</span>
            </div>
            ${honorsHtml}
          </div>

          <div class="resume-block">
            <div class="resume-block-heading">
              <span>⚡ 专业技能与综合能力雷达 / Professional Skills & Radar</span>
            </div>
            ${radarHtml}
            <div class="resume-skills-grid">
              <div class="skill-pill">
                <div class="skill-pill-name">💻 代码与作品集</div>
                <div class="skill-pill-desc">${window.getCapQualitative('portfolio', resume.capabilities.portfolio).desc}</div>
              </div>
              <div class="skill-pill">
                <div class="skill-pill-name">⚡ 系统工程硬技能</div>
                <div class="skill-pill-desc">${window.getCapQualitative('skill', resume.capabilities.skill).desc}</div>
              </div>
              <div class="skill-pill">
                <div class="skill-pill-name">📦 闭环交付能力</div>
                <div class="skill-pill-desc">${window.getCapQualitative('delivery', resume.capabilities.delivery).desc}</div>
              </div>
              <div class="skill-pill">
                <div class="skill-pill-name">🤖 前沿 AI 实战深度</div>
                <div class="skill-pill-desc">${window.getCapQualitative('ai_depth', resume.capabilities.ai_depth).desc}</div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  }

  /**
   * 显示《大学四年毕业简历》收口弹窗
   */
  function showResumeModal(resume) {
    if (!elResumeModal) return;
    renderResumeModalContent(resume);
    elResumeModal.style.display = 'flex';
  }

  // 选项卡切换绑定
  if (elTabBtnCert) {
    elTabBtnCert.addEventListener('click', () => {
      activeResumeTab = 'certificate';
      elTabBtnCert.classList.add('active');
      if (elTabBtnResume) elTabBtnResume.classList.remove('active');
      if (engine.state.final_resume) {
        renderResumeModalContent(engine.state.final_resume);
      }
    });
  }

  if (elTabBtnResume) {
    elTabBtnResume.addEventListener('click', () => {
      activeResumeTab = 'resume';
      elTabBtnResume.classList.add('active');
      if (elTabBtnCert) elTabBtnCert.classList.remove('active');
      if (engine.state.final_resume) {
        renderResumeModalContent(engine.state.final_resume);
      }
    });
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
      // 快速演练 Route A: 极客 AI-Lab + 顶级大厂 SSP (E04)
      engine.state.capabilities.skill = 80;
      engine.state.capabilities.portfolio = 85;
      engine.state.capabilities.delivery = 80;
      engine.state.capabilities.reputation = 75;
      engine.state.capabilities.ai_depth = 85;
      engine.state.routes.work.status = 'COMPLETED';
      engine.state.routes.ailab.phase = 'CORE';
      engine.state.history.flags['FLAG_WK_OFFER_SSP_ACCEPTED'] = true;
      engine.state.history.resume_pool.push({
        chain_id: 'CHAIN_BIG_PROJECT',
        title: '高并发分布式存储引擎 (开源发布级)',
        category: '开源项目',
        stage_contribution: '架构师 / 独立主导',
        description: '独立基于 C++20 与 Raft 共识协议研发千万级高并发分布式存储系统，GitHub 获星 800+，通过阿里顶级校招面试。'
      });
      engine.state.total_month = 42;
      engine.nextMonth();
      renderAll();
    });
  }

  const btnRouteB = document.getElementById('btn-route-b');
  if (btnRouteB) {
    btnRouteB.addEventListener('click', () => {
      initGame();
      // 快速演练 Route B: 清北华五顶尖名校推免 (E01)
      engine.state.basic_states.academic = 92;
      engine.state.capabilities.research = 75;
      engine.state.capabilities.portfolio = 60;
      engine.state.routes.postgrad_rec.status = 'COMPLETED';
      engine.state.history.flags['FLAG_REC_OFFER_ACCEPTED'] = true;
      engine.state.history.resume_pool.push({
        chain_id: 'CHAIN_ACADEMIC_PAPER',
        title: '多智能体自适应调度算法研究 (顶会拟投)',
        category: '科研学术',
        stage_contribution: '第一作者',
        description: '在国家重点实验室主导多智能体强化学习调度研究，完成全部仿真实验并撰写全英文顶会长文，获全国夏令营优秀营员。'
      });
      engine.state.total_month = 42;
      engine.nextMonth();
      renderAll();
    });
  }

  const btnRouteC = document.getElementById('btn-route-c');
  if (btnRouteC) {
    btnRouteC.addEventListener('click', () => {
      initGame();
      // 快速演练 Route C: 统考高分金榜题名 (E03)
      engine.state.routes.postgrad_exam.status = 'COMPLETED';
      engine.state.routes.postgrad_exam.exam_prep = 90;
      engine.state.capabilities.focus = 80;
      engine.state.basic_states.academic = 70;
      engine.state.history.flags['FLAG_GE_PASSED_FINAL'] = true;
      engine.state.history.resume_pool.push({
        chain_id: 'CHAIN_EXAM_PREP',
        title: '全国硕士研究生统考 (初试 408 分一战成硕)',
        category: '深造备考',
        stage_contribution: '自主攻坚',
        description: '历时一年完成数学一、英语一及计算机专业基础综合 408 全面攻坚，初试成绩位居南京大学软件学院前 3%。'
      });
      engine.state.total_month = 42;
      engine.nextMonth();
      renderAll();
    });
  }

  const btnRouteD = document.getElementById('btn-route-d');
  if (btnRouteD) {
    btnRouteD.addEventListener('click', () => {
      initGame();
      // 快速演练 Route D: 稳健发展·优质名企骨干 (E06)
      engine.state.basic_states.academic = 72;
      engine.state.capabilities.skill = 65;
      engine.state.capabilities.portfolio = 65;
      engine.state.capabilities.delivery = 65;
      engine.state.routes.work.status = 'COMPLETED';
      engine.state.history.flags['FLAG_WK_OFFER_SP_ACCEPTED'] = true;
      engine.state.history.resume_pool.push({
        chain_id: 'CHAIN_CORP_INTERN',
        title: '腾讯云架构与服务中台研发实习',
        category: '项目研发',
        stage_contribution: '研发实习生',
        description: '参与核心服务治理平台接口优化与高可用容灾演练，按时完成全部迭代交付，获评优秀实习生并斩获 SP Offer。'
      });
      engine.state.total_month = 42;
      engine.nextMonth();
      renderAll();
    });
  }

  const btnRouteE = document.getElementById('btn-route-e');
  if (btnRouteE) {
    btnRouteE.addEventListener('click', () => {
      initGame();
      // 快速演练 Route E: 极客创业·真实战场核心力量 (E05)
      engine.state.capabilities.ai_depth = 90;
      engine.state.capabilities.delivery = 85;
      engine.state.capabilities.portfolio = 80;
      engine.state.capabilities.skill = 85;
      engine.state.routes.ailab.phase = 'CORE';
      engine.state.history.flags['FLAG_AI_CORE_ENTREPRENEUR'] = true;
      engine.state.history.resume_pool.push({
        chain_id: 'CHAIN_AILAB_COMMERCIAL',
        title: '企业级前沿大模型 Multi-Agent 商业化协同引擎',
        category: '开源项目',
        stage_contribution: '技术合伙人 / 架构总监',
        description: '主导企业级智能体平台全生命周期调度架构落地，实现数十万级并发与商业化交付，协助团队完成数千万元早期天使轮融资。'
      });
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

