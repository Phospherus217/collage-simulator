/**
 * 大学四年模拟器 v2.0 - 玩家状态系统 (state.js)
 * 严格按照《四人分工文档 v1.0》与《系统设计全补全与收口总文档 v2.0》执行：
 * - 46 个月时间系统 (大一9月至大四6月)
 * - 五大基础生活状态 (academic, social, romance, family, health)
 * - 七大能力沉淀资产 (portfolio, research, skill, delivery, reputation, focus, ai_depth)
 * - 双资源模型 (10 TU/月, EP_max = 60 + 0.5 * health)
 * - 四大路线状态机 (work, postgrad_exam, postgrad_rec, ailab)
 * - 简历经历池 (resume_pool) 与经历链合并机制
 */

// 状态区间宏定义
const STATE_RANGES = {
  CRITICAL_LOW: { min: 0, max: 20, name: '严重不足/危机', badge: 'danger' },
  LOW:          { min: 21, max: 40, name: '偏低/受限',     badge: 'warning' },
  NORMAL:       { min: 41, max: 60, name: '正常/平稳',     badge: 'neutral' },
  GOOD:         { min: 61, max: 80, name: '良好/优势',     badge: 'primary' },
  EXCELLENT:    { min: 81, max: 100, name: '拔尖/卓越',    badge: 'success' }
};

// 46 个月映射关系 (自然月与学年学期)
const MONTH_TIMELINE = [
  // 大一 (1~10)
  { total: 1, year: 1, semester: 1, month: 9, name: '大一上 9月 (开学迎新)' },
  { total: 2, year: 1, semester: 1, month: 10, name: '大一上 10月' },
  { total: 3, year: 1, semester: 1, month: 11, name: '大一上 11月 (期中周)' },
  { total: 4, year: 1, semester: 1, month: 12, name: '大一上 12月 (期末冲刺)' },
  { total: 5, year: 1, semester: 1, month: 1, name: '大一上 1月 (寒假休整)' },
  { total: 6, year: 1, semester: 2, month: 2, name: '大一下 2月 (春季开学)' },
  { total: 7, year: 1, semester: 2, month: 3, name: '大一下 3月' },
  { total: 8, year: 1, semester: 2, month: 4, name: '大一下 4月' },
  { total: 9, year: 1, semester: 2, month: 5, name: '大一下 5月' },
  { total: 10, year: 1, semester: 2, month: 6, name: '大一下 6月 (学年期末)' },
  // 大二 (11~20)
  { total: 11, year: 2, semester: 1, month: 9, name: '大二上 9月 (开学与社团招新)' },
  { total: 12, year: 2, semester: 1, month: 10, name: '大二上 10月' },
  { total: 13, year: 2, semester: 1, month: 11, name: '大二上 11月' },
  { total: 14, year: 2, semester: 1, month: 12, name: '大二上 12月 (期末与项目考核)' },
  { total: 15, year: 2, semester: 1, month: 1, name: '大二上 1月 (寒假)' },
  { total: 16, year: 2, semester: 2, month: 2, name: '大二下 2月 (开学与职业探索)' },
  { total: 17, year: 2, semester: 2, month: 3, name: '大二下 3月 (春季日常实习)' },
  { total: 18, year: 2, semester: 2, month: 4, name: '大二下 4月 (AI-Lab线索萌芽)' },
  { total: 19, year: 2, semester: 2, month: 5, name: '大二下 5月 (考研/保研萌芽)' },
  { total: 20, year: 2, semester: 2, month: 6, name: '大二下 6月 (关键期末峰值月)' },
  // 大三 (21~30)
  { total: 21, year: 3, semester: 1, month: 9, name: '大三上 9月 (主路线确立决策)' },
  { total: 22, year: 3, semester: 1, month: 10, name: '大三上 10月 (AI-Lab正式考核)' },
  { total: 23, year: 3, semester: 1, month: 11, name: '大三上 11月 (考研基础复习)' },
  { total: 24, year: 3, semester: 1, month: 12, name: '大三上 12月 (期末与保研预审)' },
  { total: 25, year: 3, semester: 1, month: 1, name: '大三上 1月 (寒假留校攻坚)' },
  { total: 26, year: 3, semester: 2, month: 2, name: '大三下 2月 (春季冲刺启动)' },
  { total: 27, year: 3, semester: 2, month: 3, name: '大三下 3月 (暑期实习与夏令营申报)' },
  { total: 28, year: 3, semester: 2, month: 4, name: '大三下 4月 (考研强化攻坚)' },
  { total: 29, year: 3, semester: 2, month: 5, name: '大三下 5月 (大厂暑期实习面试)' },
  { total: 30, year: 3, semester: 2, month: 6, name: '大三下 6月 (大三峰值月撞车)' },
  // 大四 (31~46, 共 16 个月涵盖毕业)
  { total: 31, year: 4, semester: 1, month: 7, name: '大四上 7月 (暑期实习/夏令营决战)' },
  { total: 32, year: 4, semester: 1, month: 8, name: '大四上 8月 (秋招提前批)' },
  { total: 33, year: 4, semester: 1, month: 9, name: '大四上 9月 (秋招金九 & 保研资格公示)' },
  { total: 34, year: 4, semester: 1, month: 10, name: '大四上 10月 (秋招银十 & 推免系统确认)' },
  { total: 35, year: 4, semester: 1, month: 11, name: '大四上 11月 (考研冲刺模拟)' },
  { total: 36, year: 4, semester: 1, month: 12, name: '大四上 12月 (全国考研统考初试决战)' },
  { total: 37, year: 4, semester: 1, month: 1, name: '大四上 1月 (秋招Offer签约/寒假)' },
  { total: 38, year: 4, semester: 2, month: 2, name: '大四下 2月 (考研初试出分与春招启动)' },
  { total: 39, year: 4, semester: 2, month: 3, name: '大四下 3月 (春招补录 & 考研复试调剂)' },
  { total: 40, year: 4, semester: 2, month: 4, name: '大四下 4月 (毕业论文盲审与春招收尾)' },
  { total: 41, year: 4, semester: 2, month: 5, name: '大四下 5月 (毕业设计答辩)' },
  { total: 42, year: 4, semester: 2, month: 6, name: '大四下 6月 (大学四年毕业典礼 & 简历收口)' }
];

/**
 * 初始基础生活状态 (5大维度)
 */
const INITIAL_BASIC_STATES = {
  academic: 55,  // 学业 [0, 100], 初始基准 55 (普通高考生水平)
  social: 40,    // 社交 [0, 100], 初始基准 40 (普通新生圈子)
  romance: 30,   // 恋爱 [0, 100], 非单调轴, 初始 30 (平稳单身状态)
  family: 55,    // 家庭 [0, 100], 经济与精神支持, 初始 55
  health: 80     // 健康 [0, 100], 初始 80 (身心充沛, EP上限 100)
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
 * 创建全新的完整玩家状态
 */
function createInitialState() {
  return {
    total_month: 1,
    time: { ...MONTH_TIMELINE[0] },
    basic_states: { ...INITIAL_BASIC_STATES },
    capabilities: { ...INITIAL_CAPABILITIES },
    resources: {
      TU_current: 10,    // 每月自由支配时间
      TU_locked: 0,      // 被兼职/惩罚占用的时间
      EP_current: 100,   // 当前精力
      EP_max: 100,       // 精力上限: 60 + 0.5 * health
      overdraft_EP: 0    // 上月透支精力
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
 * 辅助函数：获取 AI-Lab 阶段中文说明
 */
function getAILabPhaseCN(phase) {
  const map = {
    'HIDDEN': { name: '完全隐藏 (HIDDEN)', desc: '尚未接触到任何 AI-Lab 线索', badge: 'neutral' },
    'FORESHADOW': { name: '线索萌芽 (FORESHADOW)', desc: '通过开源/讲座感知到前沿极客圈子', badge: 'primary' },
    'DISCOVERED': { name: '正式知晓 (DISCOVERED)', desc: '收到考核邀请，正在完成入组试做', badge: 'warning' },
    'ACTIVE': { name: '深度交付 (ACTIVE)', desc: '正式成员，每月承担 3TU+35EP 项目交付', badge: 'success' },
    'CORE': { name: '极客战场 (CORE)', desc: '实验室骨干，主导企业级工业挑战', badge: 'success' },
    'EXITED': { name: '主动退出 (EXITED)', desc: '体面退出实验室，保留口碑与既有成果', badge: 'info' }
  };
  return map[phase] || { name: phase, desc: '', badge: 'neutral' };
}

// 导出挂载
if (typeof window !== 'undefined') {
  window.MONTH_TIMELINE = MONTH_TIMELINE;
  window.STATE_RANGES = STATE_RANGES;
  window.createInitialState = createInitialState;
  window.getRangeLevel = getRangeLevel;
  window.getRouteStatusCN = getRouteStatusCN;
  window.getAILabPhaseCN = getAILabPhaseCN;
}
