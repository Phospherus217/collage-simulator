/**
 * 大学四年模拟器 v2.1 - 玩家状态系统 (state.js)
 * 严格执行：
 * - 46 个月时间系统 (大一9月至大四6月)
 * - 纯定性展示与情境化状态映射 (去算分器化)
 * - 五大基础生活状态 (academic, social, romance, family, health)
 * - 七大能力沉淀资产 (portfolio, research, skill, delivery, reputation, focus, ai_depth)
 * - 严苛双资源模型 (课业底噪 2 TU 锁定, EP_max = 50 + 0.5 * health)
 * - 四大路线状态机 (work, postgrad_exam, postgrad_rec, ailab)
 * - 简历经历池 (resume_pool) 与经历链合并机制
 */

// 状态区间宏定义
const STATE_RANGES = {
  CRITICAL_LOW: { min: 0, max: 20, name: '严重危机', badge: 'danger', tag: '薄弱危机' },
  LOW:          { min: 21, max: 40, name: '偏低受限', badge: 'warning', tag: '受限偏低' },
  NORMAL:       { min: 41, max: 60, name: '平稳正常', badge: 'neutral', tag: '平稳常态' },
  GOOD:         { min: 61, max: 80, name: '良好优势', badge: 'primary', tag: '良好优势' },
  EXCELLENT:    { min: 81, max: 100, name: '拔尖卓越', badge: 'success', tag: '顶尖拔尖' }
};

// 46 个月映射关系 (自然月与学年学期)
const MONTH_TIMELINE = [
  // 大一 (1~10)
  { total: 1, year: 1, semester: 1, month: 9, is_vacation: false, name: '大一上 9月 (开学迎新)' },
  { total: 2, year: 1, semester: 1, month: 10, is_vacation: false, name: '大一上 10月' },
  { total: 3, year: 1, semester: 1, month: 11, is_vacation: false, name: '大一上 11月 (期中周)' },
  { total: 4, year: 1, semester: 1, month: 12, is_vacation: false, name: '大一上 12月 (期末冲刺)' },
  { total: 5, year: 1, semester: 1, month: 1, is_vacation: true, name: '大一上 1月 (寒假休整)' },
  { total: 6, year: 1, semester: 2, month: 2, is_vacation: false, name: '大一下 2月 (春季开学)' },
  { total: 7, year: 1, semester: 2, month: 3, is_vacation: false, name: '大一下 3月' },
  { total: 8, year: 1, semester: 2, month: 4, is_vacation: false, name: '大一下 4月' },
  { total: 9, year: 1, semester: 2, month: 5, is_vacation: false, name: '大一下 5月' },
  { total: 10, year: 1, semester: 2, month: 6, is_vacation: false, name: '大一下 6月 (学年期末)' },
  // 大二 (11~20)
  { total: 11, year: 2, semester: 1, month: 9, is_vacation: false, name: '大二上 9月 (开学与社团招新)' },
  { total: 12, year: 2, semester: 1, month: 10, is_vacation: false, name: '大二上 10月' },
  { total: 13, year: 2, semester: 1, month: 11, is_vacation: false, name: '大二上 11月' },
  { total: 14, year: 2, semester: 1, month: 12, is_vacation: false, name: '大二上 12月 (期末与项目考核)' },
  { total: 15, year: 2, semester: 1, month: 1, is_vacation: true, name: '大二上 1月 (寒假)' },
  { total: 16, year: 2, semester: 2, month: 2, is_vacation: false, name: '大二下 2月 (开学与职业探索)' },
  { total: 17, year: 2, semester: 2, month: 3, is_vacation: false, name: '大二下 3月 (春季日常实习)' },
  { total: 18, year: 2, semester: 2, month: 4, is_vacation: false, name: '大二下 4月 (AI-Lab线索萌芽)' },
  { total: 19, year: 2, semester: 2, month: 5, is_vacation: false, name: '大二下 5月 (考研/保研萌芽)' },
  { total: 20, year: 2, semester: 2, month: 6, is_vacation: false, name: '大二下 6月 (关键期末峰值月)' },
  // 大三 (21~30)
  { total: 21, year: 3, semester: 1, month: 9, is_vacation: false, name: '大三上 9月 (主路线确立决策)' },
  { total: 22, year: 3, semester: 1, month: 10, is_vacation: false, name: '大三上 10月 (AI-Lab正式考核)' },
  { total: 23, year: 3, semester: 1, month: 11, is_vacation: false, name: '大三上 11月 (考研基础复习)' },
  { total: 24, year: 3, semester: 1, month: 12, is_vacation: false, name: '大三上 12月 (期末与保研预审)' },
  { total: 25, year: 3, semester: 1, month: 1, is_vacation: true, name: '大三上 1月 (寒假留校攻坚)' },
  { total: 26, year: 3, semester: 2, month: 2, is_vacation: false, name: '大三下 2月 (春季冲刺启动)' },
  { total: 27, year: 3, semester: 2, month: 3, is_vacation: false, name: '大三下 3月 (暑期实习与夏令营申报)' },
  { total: 28, year: 3, semester: 2, month: 4, is_vacation: false, name: '大三下 4月 (考研强化攻坚)' },
  { total: 29, year: 3, semester: 2, month: 5, is_vacation: false, name: '大三下 5月 (大厂暑期实习面试)' },
  { total: 30, year: 3, semester: 2, month: 6, is_vacation: false, name: '大三下 6月 (大三峰值月撞车)' },
  // 大四 (31~42, 共 12 个月涵盖毕业收口)
  { total: 31, year: 4, semester: 1, month: 7, is_vacation: true, name: '大四上 7月 (暑期实习/夏令营决战)' },
  { total: 32, year: 4, semester: 1, month: 8, is_vacation: true, name: '大四上 8月 (秋招提前批)' },
  { total: 33, year: 4, semester: 1, month: 9, is_vacation: false, name: '大四上 9月 (秋招金九 & 保研资格公示)' },
  { total: 34, year: 4, semester: 1, month: 10, is_vacation: false, name: '大四上 10月 (秋招银十 & 推免系统确认)' },
  { total: 35, year: 4, semester: 1, month: 11, is_vacation: false, name: '大四上 11月 (考研冲刺模拟)' },
  { total: 36, year: 4, semester: 1, month: 12, is_vacation: false, name: '大四上 12月 (全国考研统考初试决战)' },
  { total: 37, year: 4, semester: 1, month: 1, is_vacation: true, name: '大四上 1月 (秋招Offer签约/寒假)' },
  { total: 38, year: 4, semester: 2, month: 2, is_vacation: false, name: '大四下 2月 (考研初试出分与春招启动)' },
  { total: 39, year: 4, semester: 2, month: 3, is_vacation: false, name: '大四下 3月 (春招补录 & 考研复试调剂)' },
  { total: 40, year: 4, semester: 2, month: 4, is_vacation: false, name: '大四下 4月 (毕业论文盲审与春招收尾)' },
  { total: 41, year: 4, semester: 2, month: 5, is_vacation: false, name: '大四下 5月 (毕业设计答辩)' },
  { total: 42, year: 4, semester: 2, month: 6, is_vacation: false, name: '大四下 6月 (大学四年毕业典礼 & 简历收口)' }
];

/**
 * 初始基础生活状态 (5大维度)
 */
const INITIAL_BASIC_STATES = {
  academic: 55,  // 学业 [0, 100], 初始基准 55 (普通高考生水平)
  social: 40,    // 社交 [0, 100], 初始基准 40 (普通新生圈子)
  romance: 30,   // 恋爱 [0, 100], 非单调轴, 初始 30 (平稳单身状态)
  family: 55,    // 家庭 [0, 100], 经济与精神支持, 初始 55
  health: 80     // 健康 [0, 100], 初始 80 (身心充沛, EP上限 90)
};

/**
 * 初始七大沉淀能力资产
 */
const INITIAL_CAPABILITIES = {
  portfolio: 0,   // 作品集 [0, 100], 真实代码、Demo、上线产品
  research: 0,    // 科研 [0, 100], 学术训练、论文、组会
  skill: 10,      // 硬技能 [0, 100], 编程、框架、工具实战
  delivery: 20,   // 交付力 [0, 100], 按时交差闭环、不画饼
  reputation: 30, // 声誉口碑 [0, 100], 靠谱诚信不失约
  focus: 50,      // 专注度 [0, 100], 深度工作抗干扰定力
  ai_depth: 0     // AI深度 [0, 100], Agent/前沿大模型理解实战深度
};

/**
 * 初始进阶路线状态
 */
const INITIAL_ROUTES = {
  work: {
    status: 'LOCKED',    // LOCKED / POTENTIAL / AVAILABLE / PRIMARY / COMPLETED / EXITED
    resume_sent: 0,
    offer_grade: 'NONE'  // NONE / WHITE / SP / SSP
  },
  postgrad_exam: {
    status: 'LOCKED',
    exam_prep: 0         // 备考值 [0, 100]
  },
  postgrad_rec: {
    status: 'LOCKED',
    qualify_score: 0     // 保研推免综合评分
  },
  ailab: {
    phase: 'HIDDEN',     // HIDDEN / FORESHADOW / DISCOVERED / ACTIVE / CORE / EXITED
    task_completed: 0,
    missed_count: 0
  }
};

/**
 * 创建全新的完整玩家状态 (v2.1 严苛双资源模型)
 */
function createInitialState() {
  const initialTimeline = MONTH_TIMELINE[0];
  const initialBaseHealth = INITIAL_BASIC_STATES.health;
  const initialEPMax = Math.round(50 + initialBaseHealth * 0.5); // 90 EP

  return {
    total_month: 1,
    time: { ...initialTimeline },
    basic_states: { ...INITIAL_BASIC_STATES },
    capabilities: { ...INITIAL_CAPABILITIES },
    resources: {
      TU_current: 8,       // 9月常规学期，锁定 2 TU 课业底噪后，实际可用 8 TU
      TU_locked: 2,        // 常规学期课业底噪占用 2 TU
      EP_current: initialEPMax, // 当前精力 90 EP
      EP_max: initialEPMax,     // 精力上限 90 EP
      overdraft_EP: 0      // 上月透支精力
    },
    routes: JSON.parse(JSON.stringify(INITIAL_ROUTES)),
    history: {
      flags: {},
      future_events: [],     // 延迟事件队列: [{ event_id, trigger_month, forced }]
      completed_events: [],  // 已完成事件ID列表
      resume_pool: [],       // 简历经历池: ResumeEntry 数组
      history_log: []        // 逐月操作日志
    },
    semester_stats: {
      academic_events_count: 0,
      social_events_count: 0,
      consecutive_no_social_months: 0
    },
    game_over: false,
    final_ending: null,
    final_resume: null
  };
}

/**
 * 辅助函数：计算时间定性状态词
 */
function getTimeQualitative(tuCurrent, tuMax = 10) {
  const ratio = tuCurrent / tuMax;
  if (ratio >= 0.7) return { text: '安排宽裕', badge: 'success', desc: '课外时间充裕，可从容开展多项计划' };
  if (ratio >= 0.4) return { text: '尚有余地', badge: 'primary', desc: '可支持 1 项深度攻坚或常规投入' };
  if (ratio >= 0.1) return { text: '日程紧张', badge: 'warning', desc: '仅剩琐碎时间，需谨慎分配' };
  return { text: '本月排满', badge: 'danger', desc: '本月时间已耗尽，请推进至下月' };
}

/**
 * 辅助函数：计算精力定性状态词
 */
function getEnergyQualitative(epCurrent, epMax) {
  const ratio = epMax > 0 ? epCurrent / epMax : 0;
  if (ratio >= 0.75) return { text: '状态充沛', badge: 'success', desc: '身心状态极佳，精力饱满' };
  if (ratio >= 0.50) return { text: '状态稳定', badge: 'primary', desc: '精力平稳，能承受常规研发与课业' };
  if (ratio >= 0.25) return { text: '已有疲惫', badge: 'warning', desc: '身心显露疲态，再高强度将面临透支' };
  if (ratio > 0)    return { text: '接近透支', badge: 'danger',  desc: '极限红线！极易触发健康严重受损' };
  return { text: '精力耗尽', badge: 'danger', desc: '极度透支，次月健康将遭遇重大扣减' };
}

/**
 * 辅助函数：根据数值计算区间等级宏
 */
function getRangeLevel(val) {
  if (val <= 20) return STATE_RANGES.CRITICAL_LOW;
  if (val <= 40) return STATE_RANGES.LOW;
  if (val <= 60) return STATE_RANGES.NORMAL;
  if (val <= 80) return STATE_RANGES.GOOD;
  return STATE_RANGES.EXCELLENT;
}

/**
 * 辅助函数：获取基础五大生活维度的定性情境描述
 */
function getBasicStateQualitative(key, val) {
  if (key === 'academic') {
    if (val >= 88) return { level: '顶尖拔尖', desc: '清北华五推免前5% (GPA 3.85+)' };
    if (val >= 80) return { level: '优异优势', desc: '专业前 10% (保研优势梯队)' };
    if (val >= 60) return { level: '良好稳固', desc: '课业掌握扎实，中上游水平' };
    if (val >= 40) return { level: '平稳常态', desc: '成绩中规中矩，及格无虞' };
    return { level: '挂科危机', desc: '基础薄弱，面临挂科重修风险' };
  }
  if (key === 'social') {
    if (val >= 80) return { level: '人脉通达', desc: '结识众多行业大牛与核心圈层' };
    if (val >= 60) return { level: '社交活跃', desc: '人际关系融洽，信息渠道通畅' };
    if (val >= 40) return { level: '圈子稳定', desc: '拥有固定的同窗好友圈子' };
    if (val >= 20) return { level: '独行偏安', desc: '社交面较窄，较少参与集体' };
    return { level: '极度孤立', desc: '严重脱离社交，信息严重闭塞' };
  }
  if (key === 'romance') {
    if (val >= 80) return { level: '深度羁绊', desc: '彼此全力托底，极度甜蜜默契' };
    if (val >= 60) return { level: '甜蜜稳定', desc: '恋爱稳定发展，相互扶持成长' };
    if (val >= 40) return { level: '萌芽暧昧', desc: '心动与好感持续升温中' };
    if (val >= 25) return { level: '平稳单身', desc: '心无挂碍，健康单身状态' };
    return { level: '情感内耗', desc: '陷入冷战内耗，严重消耗心神' };
  }
  if (key === 'family') {
    if (val >= 80) return { level: '全力托底', desc: '家庭全力经济与精神托底支持' };
    if (val >= 60) return { level: '和睦理解', desc: '父母理解支持你的职业选择' };
    if (val >= 40) return { level: '平稳常态', desc: '家庭经济平稳，定期联系' };
    if (val >= 20) return { level: '经济拮据', desc: '生活费需兼职自立自给自足' };
    return { level: '家庭危机', desc: '经济告急，必须强制兼职打工' };
  }
  if (key === 'health') {
    if (val >= 80) return { level: '身心充沛', desc: '精力充沛，抗压韧性极佳' };
    if (val >= 60) return { level: '状态良好', desc: '身体健康，作息相对平稳' };
    if (val >= 40) return { level: '有些疲惫', desc: '偶有熬夜，需适度调养' };
    if (val >= 20) return { level: '透支预警', desc: '免疫力下降，身心亮起红灯' };
    return { level: '崩溃边缘', desc: '身心透支崩溃，高负荷行动锁定' };
  }
  return { level: '平稳', desc: '状态平稳' };
}

/**
 * 辅助函数：获取七大能力资产的定性情境描述
 */
function getCapQualitative(key, val) {
  if (key === 'portfolio') {
    if (val >= 75) return { level: '顶尖工业级', desc: '高星开源/企业级高并发系统' };
    if (val >= 50) return { level: '完整上线作品', desc: '具备可复现的完整工程项目' };
    if (val >= 25) return { level: '实战小工具', desc: '完成课程大作业与小型功能' };
    return { level: '初涉积累', desc: '仅有零星代码片段与草稿' };
  }
  if (key === 'research') {
    if (val >= 65) return { level: '顶会/国奖级', desc: '产出高水平学术论文与国家级竞赛' };
    if (val >= 40) return { level: '课题组学术', desc: '掌握文献调研与学术实验仿真' };
    if (val >= 20) return { level: '学术初探', desc: '掌握 LaTeX 排版与文献阅读' };
    return { level: '尚未涉足', desc: '暂无学术科研与论文产出' };
  }
  if (key === 'skill') {
    if (val >= 70) return { level: '技术翘楚', desc: '精通分布式架构与系统底层原理' };
    if (val >= 50) return { level: '熟练开发者', desc: '能独立主导业务功能开发与调试' };
    if (val >= 30) return { level: '基础扎实', desc: '掌握常用语法与数据结构' };
    return { level: '入门摸索', desc: '基础代码练习中' };
  }
  if (key === 'delivery') {
    if (val >= 70) return { level: '铁人交付力', desc: '高压下必保质按时闭环交付' };
    if (val >= 50) return { level: '靠谱工程师', desc: '具备良好的工程规范与收口习惯' };
    if (val >= 30) return { level: '常规完成', desc: '在提醒下能按部就班交差' };
    return { level: '易拖延画饼', desc: '抗压较弱，偶有赶工或失约' };
  }
  if (key === 'reputation') {
    if (val >= 70) return { level: '极客口碑榜首', desc: '师长学长与大厂面试官极度信赖' };
    if (val >= 50) return { level: '靠谱信誉良好', desc: '团队公认务实可靠的合作者' };
    if (val >= 30) return { level: '平稳常态', desc: '普通学生印象' };
    return { level: '信任赤字', desc: '因失约或敷衍受到口碑质疑' };
  }
  if (key === 'focus') {
    if (val >= 70) return { level: '心流大师', desc: '极度专注抗干扰，深度工作力爆棚' };
    if (val >= 50) return { level: '自律良好', desc: '能保证整块自习与工作专注' };
    if (val >= 30) return { level: '偶受干扰', desc: '注意力易被琐事或手机分散' };
    return { level: '心浮气躁', desc: '难以维持半小时以上深度思考' };
  }
  if (key === 'ai_depth') {
    if (val >= 70) return { level: '工业级 Agent 专家', desc: '主导多智能体调度与大模型生产落地' };
    if (val >= 40) return { level: '前沿极客进阶', desc: '深度掌握 Agent 框架与评测基准' };
    if (val >= 15) return { level: 'AI 技术入门', desc: '跑通大模型 API 与本地 Demo' };
    return { level: '尚未接触', desc: '仅停留在普通用户浅层体验' };
  }
  return { level: '平稳', desc: '常规能力' };
}

/**
 * 辅助函数：获取路线中文状态
 */
function getRouteStatusCN(status) {
  const map = {
    'LOCKED': '锁定 (LOCKED)',
    'POTENTIAL': '潜在 (POTENTIAL)',
    'AVAILABLE': '可选择 (AVAILABLE)',
    'PRIMARY': '进行中 (PRIMARY)',
    'COMPLETED': '已达成 (COMPLETED)',
    'EXITED': '已放弃 (EXITED)'
  };
  return map[status] || status;
}

/**
 * 辅助函数：获取隐藏极客线阶段说明（支持纯暗示与去剧透式呈现）
 */
function getAILabPhaseCN(phase) {
  const map = {
    'HIDDEN': {
      isHidden: true,
      name: '未解锁',
      hint: '',
      routeTitle: '❓ ？？？ (未探索的课外机遇)',
      statusBadge: '未探索',
      desc: '尚未接触到任何神秘极客线索',
      badge: 'neutral'
    },
    'FORESHADOW': {
      isHidden: false,
      name: '线索萌芽',
      hint: '🔍 传闻：校外极客圈子',
      routeTitle: '🔍 极客传闻 (校外神秘实战圈)',
      statusBadge: '线索萌芽',
      desc: '隐约听闻校外有个前沿极客圈子与开源项目的传说',
      badge: 'warning'
    },
    'DISCOVERED': {
      isHidden: false,
      name: '收到考核',
      hint: '⚡ 极客工坊考核中',
      routeTitle: '⚡ 极客工坊 (收到任务卡试做)',
      statusBadge: '考核试做中',
      desc: '收到神秘任务卡考核邀请，正在完成入组试做',
      badge: 'primary'
    },
    'ACTIVE': {
      isHidden: false,
      name: '极客工程组',
      hint: '🧪 前沿极客实战组(在组)',
      routeTitle: '🧪 前沿极客实战工程组 (核心交付)',
      statusBadge: '正式成员',
      desc: '正式成为实战组研发成员，每月承担高强度项目交付',
      badge: 'success'
    },
    'CORE': {
      isHidden: false,
      name: '技术合伙人',
      hint: '🔥 商业智能体团队合伙人',
      routeTitle: '🔥 商业智能体团队 (核心合伙人)',
      statusBadge: '极客合伙',
      desc: '商业智能体架构核心骨干，主导企业级工业挑战与创业',
      badge: 'success'
    },
    'EXITED': {
      isHidden: false,
      name: '体面告别',
      hint: '🍃 极客圈人脉(已退出)',
      routeTitle: '🍃 极客圈人脉 (已退出日常交付)',
      statusBadge: '体面告别',
      desc: '体面退出日常开发，保留了口碑与行业极客人脉',
      badge: 'neutral'
    }
  };
  return map[phase] || { isHidden: true, name: phase, hint: '', routeTitle: phase, statusBadge: phase, desc: '', badge: 'neutral' };
}

// 导出挂载
if (typeof window !== 'undefined') {
  window.MONTH_TIMELINE = MONTH_TIMELINE;
  window.STATE_RANGES = STATE_RANGES;
  window.createInitialState = createInitialState;
  window.getTimeQualitative = getTimeQualitative;
  window.getEnergyQualitative = getEnergyQualitative;
  window.getRangeLevel = getRangeLevel;
  window.getBasicStateQualitative = getBasicStateQualitative;
  window.getCapQualitative = getCapQualitative;
  window.getRouteStatusCN = getRouteStatusCN;
  window.getAILabPhaseCN = getAILabPhaseCN;
}
