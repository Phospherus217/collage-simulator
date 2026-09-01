/**
 * 大学四年模拟器 v2.1 - 内嵌全量事件数据库 (105高质事件全景覆盖)
 */
window.EMBEDDED_EVENTS = [
  {
    "event_id": "PU_001",
    "title": "大学报到：初见宿舍与室友破冰",
    "package": "PU",
    "type": "NORMAL",
    "priority": "P0",
    "min_month": 1,
    "max_month": 1,
    "repeatable": false,
    "unlock_condition": {
      "month_is": 1
    },
    "content": {
      "background": "大一上 9 月，你拖着行李箱踏入大学校门，来到未来四年的宿舍。",
      "scene": "室友们来自天南海北，正热络地互相介绍，提议今晚一起去校门口吃火锅破冰。",
      "conflict": "是积极参与聚餐融入宿舍圈子，还是兼顾个人整理，亦或独自制定四年自律清单？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "跟大家一起去聚餐，主动畅聊彼此对大学生活的期待",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 微耗心神",
          "intent": "深度融入宿舍关系，建立良好寝室初印象",
          "tradeoff": "占用当晚个人规划安排与部分零花钱"
        },
        "result_text": "一顿热气腾腾的火锅让大家迅速熟络起来。室友们性格各异但相处融洽，宿舍氛围其乐融融！",
        "cost": {
          "TU": 2,
          "EP": 25
        },
        "variable_delta": {
          "social": 10,
          "romance": 5,
          "family": 2
        },
        "tag_add": [
          "FLAG_PU_DORM_BOND"
        ],
        "qualitative_changes": [
          "🤝 宿舍关系：迅速破冰并建立深厚羁绊",
          "💬 社交圈层：初涉校园同辈群体",
          "🔋 当月精力：消耗适度，身心愉悦"
        ]
      },
      {
        "choice_id": "B",
        "text": "先帮室友分担打扫卫生，再晚些过去聚餐露个面",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 兼顾协调",
          "intent": "有限参与，兼顾寝室公共人情与个人节奏",
          "tradeoff": "两头兼顾但精力略显分散"
        },
        "result_text": "你主动帮忙把宿舍打扫得干干净净，聚餐时大家纷纷称赞你细心靠谱，人际口碑得到认可。",
        "cost": {
          "TU": 2,
          "EP": 30
        },
        "variable_delta": {
          "social": 6,
          "reputation": 6,
          "focus": 4
        },
        "qualitative_changes": [
          "🌟 个人口碑：赢得室友信任与好感",
          "🤝 社交关系：平稳融入",
          "🎯 个人专注：保持良好生活秩序"
        ]
      },
      {
        "choice_id": "C",
        "text": "留在宿舍安静收拾书桌与行李，制定四年大学自律计划",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 独处自律",
          "intent": "确立开局自律心流，明确大学学业目标",
          "tradeoff": "寝室关系破冰较慢，略显不合群"
        },
        "result_text": "你把书桌整理得井井有条，并列好了大一第一学期的自律清单。室友回来后带了小吃，你礼貌道谢。",
        "cost": {
          "TU": 1,
          "EP": 15
        },
        "variable_delta": {
          "focus": 10,
          "academic": 5,
          "social": -2
        },
        "qualitative_changes": [
          "🎯 专注定力：确立清晰学期目标",
          "📚 学业基础：提前进入备战心流",
          "🤝 人际距离：保持独立边界"
        ]
      }
    ]
  },
  {
    "event_id": "AC_000",
    "title": "新生第一课：全校通识课与选课博弈",
    "package": "AC",
    "type": "NORMAL",
    "priority": "P1",
    "min_month": 1,
    "max_month": 2,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        1,
        2
      ]
    },
    "content": {
      "background": "教务系统开放新生选课，通识课名额秒空。",
      "scene": "面临选择：是抢高难度硬核计算机理论课、重实践的项目课，还是选给分友好的通识水课？",
      "conflict": "是在大一打下硬核技术理论基础，还是追求高绩点保险与充裕课外时间？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "选修高难度计算机前沿理论课，趁大一把底层原理打深",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 硬核挑战",
          "intent": "深度掌握算法与体系结构理论，筑牢专业护城河",
          "tradeoff": "课业负荷巨大，平时作业与期末考核要求极其严苛"
        },
        "result_text": "课程挑战巨大但收获极其扎实！你掌握了底层原理与系统视野，授课教授对你印象深刻。",
        "cost": {
          "TU": 4,
          "EP": 45
        },
        "variable_delta": {
          "skill": 10,
          "academic": 8,
          "focus": 6
        },
        "tag_add": [
          "FLAG_AC_HARDCORE_COURSE"
        ],
        "qualitative_changes": [
          "⚡ 硬核技能：底层系统与算法视野质变",
          "📚 专业学业：打下极扎实的理论基石",
          "🔋 课余精力：日常课业占用明显增加"
        ]
      },
      {
        "choice_id": "B",
        "text": "选修软件项目实践课，用动手写代码检验自己是否真正感兴趣",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 实践检验",
          "intent": "注重工程代码实战，初步积累项目经验",
          "tradeoff": "需投入周末时间调试工程 Bug"
        },
        "result_text": "你跟着项目课完成了一个小型 Web 工具，虽然架构简单，但真切体验到了代码跑通的成就感！",
        "cost": {
          "TU": 3,
          "EP": 40
        },
        "variable_delta": {
          "skill": 6,
          "portfolio": 6,
          "delivery": 6
        },
        "qualitative_changes": [
          "💻 作品沉淀：完成第一个可运行小工具",
          "📦 工程交付：体验从需求到代码的闭环",
          "⚡ 技术应用：初步熟悉开发工具链"
        ]
      },
      {
        "choice_id": "C",
        "text": "选修给分友好的通识人文课，把课外时间留给自由自主安排",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 稳妥保底",
          "intent": "保证期末高分绩点，保留充裕的课余精力与弹性",
          "tradeoff": "专业技术积累相对平缓"
        },
        "result_text": "轻松拿到优秀成绩与学分，同时拥有充裕的课外时间自由支配，身心状态保持良好。",
        "cost": {
          "TU": 2,
          "EP": 20
        },
        "variable_delta": {
          "academic": 5,
          "health": 4,
          "family": 2
        },
        "qualitative_changes": [
          "📚 学业绩点：稳妥收获期末通识高分",
          "🌿 身心状态：课外负担轻松无压力",
          "⏳ 自由时间：留出充足自习与探索空间"
        ]
      }
    ]
  },
  {
    "event_id": "SO_001",
    "title": "百团大战：校级科技创新社团选拔",
    "package": "SO",
    "type": "OPPORTUNITY",
    "priority": "P2",
    "min_month": 1,
    "max_month": 3,
    "repeatable": false,
    "unlock_condition": {
      "min_vars": {
        "social": 25
      }
    },
    "content": {
      "background": "学校核心科技创新协会招新，学长学姐在现场考核动手能力与团队沟通。",
      "scene": "面试分为无领导小组讨论与现场手撕 Demo，需要投入周末时间深度参与。",
      "conflict": "是积极竞聘项目部骨干，还是参与短期试用，亦或只做普通会员？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "竞聘核心项目部骨干！主动承担团队组织与技术研发任务",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 深度参与",
          "intent": "进入核心技术圈子，结识高年级技术大牛学长",
          "tradeoff": "需承担每周固定例会与项目研发任务"
        },
        "result_text": "你的现场 Demo 受到会长高度评价，成功当选项目部骨干，结识了多位优秀的学长学姐！",
        "cost": {
          "TU": 4,
          "EP": 50
        },
        "variable_delta": {
          "social": 12,
          "reputation": 10,
          "skill": 6,
          "delivery": 6
        },
        "tag_add": [
          "FLAG_SO_CLUB_CORE"
        ],
        "resume_entry": {
          "category": "CAMPUS_ACT",
          "chain_id": "EXP_SO_CLUB_01",
          "stage_contribution": "CORE",
          "title": "校级科技创新协会核心骨干",
          "description": "参与协会技术研发与新成员培训，组织多场校内技术沙龙与开源项目工作坊。"
        },
        "qualitative_changes": [
          "🌟 行业声誉：在技术社团内树立靠谱口碑",
          "🤝 核心人脉：结识高年级极客学长",
          "📦 交付能力：开始承担团队项目职责"
        ]
      },
      {
        "choice_id": "B",
        "text": "报名项目制试用，先跟着完成一次短期开源分享活动",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 先试后定",
          "intent": "轻度参与了解团队氛围，为后续转正保留入口",
          "tradeoff": "参与度相对有限，信息获取较浅"
        },
        "result_text": "你顺利完成了短期分享活动任务，学长对你评价良好，并表示下学期随时欢迎你转入核心组。",
        "cost": {
          "TU": 2,
          "EP": 25
        },
        "variable_delta": {
          "social": 6,
          "skill": 4,
          "reputation": 4
        },
        "qualitative_changes": [
          "🤝 人际网络：与技术社团建立良好连接",
          "⚡ 技能体验：初步了解团队协作流程",
          "⏳ 自由度：未承担长期固定时间负荷"
        ]
      },
      {
        "choice_id": "C",
        "text": "作为普通会员参加讲座与开放日，随缘旁听前沿技术分享",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 随缘旁听",
          "intent": "获取外部前沿信息，不承担任何团队硬性指标",
          "tradeoff": "无法进入核心圈层与人脉网络"
        },
        "result_text": "你旁听了几场干货满满的技术讲座，开阔了视野，同时保有完全自由的周末自习时间。",
        "cost": {
          "TU": 1,
          "EP": 15
        },
        "variable_delta": {
          "social": 3,
          "focus": 4,
          "skill": 2
        },
        "qualitative_changes": [
          "💡 技术视野：了解行业与前沿技术动向",
          "🎯 专注自律：完整保有个人课外时间",
          "🤝 社交人脉：保持浅层了解"
        ]
      },
      {
        "choice_id": "D",
        "text": "暂不加入社团，把整块周末时间留给个人自主编程与课业",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 专注独行",
          "intent": "杜绝一切社交琐事，全力聚焦单兵技术自研",
          "tradeoff": "失去社团人脉与信息渠道"
        },
        "result_text": "你婉拒了所有社团招新，周末在图书馆独自死磕代码与算法题，沉浸在个人的专注心流中。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "focus": 8,
          "skill": 5,
          "social": -4
        },
        "qualitative_changes": [
          "🎯 专注心流：极高密度的个人代码练习",
          "⚡ 单兵技术：稳步提升算法基础",
          "🤝 圈子拓展：本学期未建立社团人脉"
        ]
      }
    ]
  },
  {
    "event_id": "SO_002",
    "title": "学院学生会干事竞聘与例会拉扯",
    "package": "SO",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 1,
    "max_month": 3,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        1,
        2,
        3
      ]
    },
    "content": {
      "background": "院学生会外联部与组织部招新，辅导员鼓励新生积极参与锻炼综合协调能力。",
      "scene": "干事每周需要参加例会并负责大型迎新晚会赞助拉取，任务琐碎且经常临时加塞。",
      "conflict": "是深度参与学生会积累行政人脉，还是仅做短期志愿者，亦或婉拒专注个人技术？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "竞聘外联部干事，负责跨院系联络与迎新晚会赞助拉取",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 行政锻炼",
          "intent": "熟悉高校行政流程与师长沟通，积累人际组织经验",
          "tradeoff": "频繁的周例会和突发任务会严重割裂整块自习时间"
        },
        "result_text": "你跑通了多家校外商家赞助，晚会圆满举行，辅导员和主席对你的执行力非常赏识！",
        "cost": {
          "TU": 4,
          "EP": 45
        },
        "variable_delta": {
          "social": 12,
          "reputation": 8,
          "focus": -6,
          "academic": -2
        },
        "tag_add": [
          "FLAG_SO_STUDENT_UNION"
        ],
        "qualitative_changes": [
          "🤝 社交组织：大幅提升沟通协调与人际处理",
          "🌟 师长口碑：在辅导员处建立良好可靠印象",
          "🎯 专注程度：自习时间受到琐碎事务割裂"
        ]
      },
      {
        "choice_id": "B",
        "text": "不做常驻干事，只报名迎新晚会的一次性现场志愿工作",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 一次性奉献",
          "intent": "体验大型活动氛围，结识朋友且无长期例会负担",
          "tradeoff": "无法进入学生会管理序列"
        },
        "result_text": "晚会当晚你负责后台签到与道具引导，活动结束后大家一起开心合影，度过了一个充实的夜晚。",
        "cost": {
          "TU": 2,
          "EP": 20
        },
        "variable_delta": {
          "social": 6,
          "reputation": 4,
          "health": -2
        },
        "qualitative_changes": [
          "🤝 校园社交：结识不同专业的同学伙伴",
          "🌟 志愿经历：获得学院志愿时长认证",
          "⏳ 自由安排：未产生长期驻留负担"
        ]
      },
      {
        "choice_id": "C",
        "text": "婉拒竞聘，维持完整的个人自习与编程项目时间",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 拒绝内耗",
          "intent": "坚守自习节奏，避免被行政琐碎事务消耗",
          "tradeoff": "彻底关闭学生会与体制内行政经历入口"
        },
        "result_text": "你礼貌婉拒了学长的邀请，将全部精力投入到机房自习与课业中，保持了高效专注。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "focus": 6,
          "skill": 4,
          "social": -2
        },
        "qualitative_changes": [
          "🎯 专注心流：保持高度自律与整块自习",
          "⚡ 专业技能：稳步推进基础课程",
          "🤝 圈子定位：明确技术专精路线"
        ]
      }
    ]
  },
  {
    "event_id": "AI_000",
    "title": "大一浅层线索：选修课上的 AI Agent 演示",
    "package": "AI",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 2,
    "max_month": 4,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        2,
        3,
        4
      ]
    },
    "content": {
      "background": "前沿计算机选修课上，助教学长展示了一个基于大模型多智能体协作的自动化代码生成 Demo。",
      "scene": "屏幕上的 Agent 自动拆解任务、编写测试并修复 Bug，台下掌声雷动。",
      "conflict": "是课后主动向助教学长追问实现细节，还是扫码自行克隆复现，亦或拍张照收藏吃灰？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "下课后留下来，向助教学长请教多智能体架构与开源实现细节",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 积极请教",
          "intent": "建立真人联系，了解学校前沿极客圈子与 AI-Lab 线索",
          "tradeoff": "需要一定的专业技术基础与沟通主动性"
        },
        "result_text": "学长看到你问到了 Prompt 调度与状态机核心，赞许地留了微信，并邀请你关注实验室开源仓库！",
        "cost": {
          "TU": 2,
          "EP": 25
        },
        "variable_delta": {
          "ai_depth": 8,
          "social": 6,
          "reputation": 6
        },
        "tag_add": [
          "FLAG_AI_HEARD_LAB",
          "FLAG_AI_MET_SENIOR"
        ],
        "qualitative_changes": [
          "🤖 前沿AI认知：理解 Agent 框架与多智能体协作",
          "🌟 行业口碑：在极客学长心中留下积极求知印象",
          "🚩 隐藏线索：AI-Lab 路线从完全隐藏跃迁为【线索萌芽】"
        ]
      },
      {
        "choice_id": "B",
        "text": "扫下 PPT 上的开源仓库链接，约定周末自己在宿舍尝试复现",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 独立复现",
          "intent": "动手跑通前沿开源代码，提升实战动手能力",
          "tradeoff": "需花费周末时间配置环境与调试 API"
        },
        "result_text": "周末你在宿舍折腾了整整一天，终于跑通了本地 Demo！对大模型应用开发有了第一手感知。",
        "cost": {
          "TU": 3,
          "EP": 35
        },
        "variable_delta": {
          "ai_depth": 6,
          "skill": 6,
          "portfolio": 4
        },
        "tag_add": [
          "FLAG_AI_HEARD_LAB"
        ],
        "qualitative_changes": [
          "🤖 技术前沿：亲手跑通多智能体代码 Demo",
          "⚡ 硬核技能：掌握环境部署与 API 调试",
          "💻 作品沉淀：积累初步 AI 实验记录"
        ]
      },
      {
        "choice_id": "C",
        "text": "随手拍下 PPT 演示页面，先回寝室完成手头高数作业",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 浅层印象",
          "intent": "仅保留浅层线索，不打乱现有课业安排",
          "tradeoff": "未建立任何实质技术积累与人脉联系"
        },
        "result_text": "照片静静躺在相册里。你按部就班地完成了当晚的高数作业，对 AI 仅保留了酷炫的初印象。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "academic": 4,
          "focus": 3
        },
        "qualitative_changes": [
          "📚 课业平稳：按时完成基础专业课作业",
          "🤖 认知边界：仅停留在浅层观望",
          "⏳ 资源状态：未产生额外时间开销"
        ]
      }
    ]
  },
  {
    "event_id": "AC_001",
    "title": "大一上高数期中失利与刷题救赎",
    "package": "AC",
    "type": "CRISIS",
    "priority": "P1",
    "min_month": 3,
    "max_month": 4,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        3,
        4
      ]
    },
    "content": {
      "background": "大一上高等数学期中考试出分，满分 100 分你只考了 58 分，排在专业后 30%。",
      "scene": "高数是后续所有专业课与保研/考研的核心地基，期末若不及格将直接面临挂科重修危机。",
      "conflict": "是开启高压自救建立错题体系，还是组团答疑互助，亦或求稳保及格？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "建立错题体系！每日早起泡图书馆，连续两周刷完同济高数习题集",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 高压自救",
          "intent": "彻底攻克微积分薄弱考点，实现学业成绩逆袭",
          "tradeoff": "消耗大块课外时间与大量心神，当月无暇顾及其他活动"
        },
        "result_text": "两周高强度刷题让你彻底吃透了极限与积分定理！在期末考试中高数逆风翻盘斩获 92 分！",
        "cost": {
          "TU": 5,
          "EP": 65
        },
        "variable_delta": {
          "academic": 16,
          "focus": 10,
          "health": -6
        },
        "tag_add": [
          "FLAG_AC_MATH_RECOVERED"
        ],
        "qualitative_changes": [
          "📚 学业基础：高数成绩大幅逆袭并筑牢地基",
          "🎯 专注定力：磨练出极强的抗压刷题韧性",
          "🌿 身体状态：连续早起与高压略有疲惫"
        ]
      },
      {
        "choice_id": "B",
        "text": "约学霸同学与室友参加答疑帮扶小组，重点攻克最常考的题型套路",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 协作纠偏",
          "intent": "借助同伴互助精准提分，兼顾社交与课业",
          "tradeoff": "提分上限不如深度单兵刷题彻底"
        },
        "result_text": "在互助小组的讲解下你掌握了高频解题技巧，期末顺利考得 80 分，同时拉近了同学友情！",
        "cost": {
          "TU": 3,
          "EP": 40
        },
        "variable_delta": {
          "academic": 9,
          "social": 6,
          "reputation": 4
        },
        "qualitative_changes": [
          "📚 学业提升：平稳化解期末挂科危机",
          "🤝 同窗羁绊：在互助学习中增进同学友谊",
          "🔋 资源平衡：消耗适度，状态平稳"
        ]
      },
      {
        "choice_id": "C",
        "text": "以不挂科为及格底线，做几套往年期末真题保底，把时间留给其他探索",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 及格万岁",
          "intent": "投入最少资源保住 60 分基本盘，释放精力给个人兴趣",
          "tradeoff": "学业 GPA 受损，后续保研与高阶课程面临硬伤"
        },
        "result_text": "期末考了 65 分勉强通过。虽然省下了时间，但绩点排位明显落后，保研形势蒙上阴影。",
        "cost": {
          "TU": 2,
          "EP": 20
        },
        "variable_delta": {
          "academic": 3,
          "health": 4
        },
        "qualitative_changes": [
          "📚 绩点受挫：高数成绩一般，拉低综合 GPA",
          "⏳ 资源保留：保留了课外自由度与健康",
          "⚠️ 长期隐患：后续保研门槛受到限制"
        ]
      }
    ]
  },
  {
    "event_id": "PU_002",
    "title": "寒假返乡：家庭聚餐与同龄人职业比较",
    "package": "PU",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 5,
    "max_month": 5,
    "repeatable": false,
    "unlock_condition": {
      "month_is": 5
    },
    "content": {
      "background": "大一寒假返乡过年，家族亲戚聚餐上，长辈们热议体制内公务员与大厂高薪。",
      "scene": "亲戚询问你未来的打算，并拿着在读师范、军校或早早考公的同龄人进行比较。",
      "conflict": "是认真坦诚说明自己的技术理想与规划，还是先虚心听取，亦或打哈哈顺从应和？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "认真向父母与长辈说明自己的专业兴趣、技术积累与长远规划",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 正面沟通",
          "intent": "争取家庭的深度理解与长期精神/经济支持",
          "tradeoff": "需耐心倾听并化解老一辈的求稳顾虑"
        },
        "result_text": "看到你条理清晰、目光坚定，父母虽然不懂具体技术，但由衷为你感到自豪并决定全力支持你！",
        "cost": {
          "TU": 2,
          "EP": 25
        },
        "variable_delta": {
          "family": 12,
          "focus": 6,
          "social": 4
        },
        "qualitative_changes": [
          "🏡 家庭托底：获得父母全力精神与经济支持",
          "🎯 目标确信：更加明确大学四年的奋进方向",
          "🔋 心理安慰：内心充满安全感与底气"
        ]
      },
      {
        "choice_id": "B",
        "text": "先虚心倾听长辈的建议，答应开学后拿出一份更详尽的学业规划再谈",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 缓兵折中",
          "intent": "化解当场摩擦，用周全准备换取良性沟通",
          "tradeoff": "将沟通责任延后至开学"
        },
        "result_text": "聚餐氛围融洽，父母觉得你成熟懂事，家庭关系保持平稳。",
        "cost": {
          "TU": 1,
          "EP": 15
        },
        "variable_delta": {
          "family": 6,
          "focus": 3
        },
        "qualitative_changes": [
          "🏡 家庭和睦：巧妙避开同辈比较冲突",
          "🎯 心理调节：平稳度过假期聚会",
          "⏳ 时间充裕：假期节奏未受干扰"
        ]
      },
      {
        "choice_id": "C",
        "text": "顺着长辈的话打哈哈应和，尽快结束话题回房间刷手机",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 消极应付",
          "intent": "避免任何当场摩擦，迅速脱身独处",
          "tradeoff": "家庭隔阂未解，父母对你的规划依然焦虑"
        },
        "result_text": "聚餐在敷衍中结束。虽然避免了争论，但父母眼中的担忧并未消散。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "family": -2,
          "focus": -2
        },
        "qualitative_changes": [
          "🏡 家庭沟通：产生一定心理隔阂",
          "🔋 心情状态：略显压抑与烦躁",
          "⏳ 独处时间：迅速结束聚餐"
        ]
      }
    ]
  },
  {
    "event_id": "RO_000",
    "title": "大一下校园漫步：心动与青涩萌芽",
    "package": "RO",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 6,
    "max_month": 8,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        6,
        7,
        8
      ],
      "min_vars": {
        "social": 30
      }
    },
    "content": {
      "background": "春暖花开的大一下学期，在通识选修课与图书馆自习中，你与一位志趣相投的同学越走越近。",
      "scene": "周末夜晚微风习习，两人漫步在操场林荫道，气氛暧昧而温馨。",
      "conflict": "是鼓起勇气真诚表白确立关系，还是继续以朋友身份深入了解，亦或保持克制聚焦学业？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "真诚表白心意，认真询问对方是否愿意在大学共同前行",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 勇敢拥抱",
          "intent": "正式确立恋爱关系，开启甜蜜羁绊与情感托底",
          "tradeoff": "未来需要规律分配约会时间与心力投入"
        },
        "result_text": "在路灯的微光下，对方羞涩而坚定地点了点头！你们正式确立了恋爱关系，内心充满甜蜜与力量！",
        "cost": {
          "TU": 3,
          "EP": 35
        },
        "variable_delta": {
          "romance": 35,
          "social": 8,
          "health": 6
        },
        "tag_add": [
          "FLAG_RO_IN_RELATIONSHIP"
        ],
        "qualitative_changes": [
          "💖 恋爱羁绊：正式开启大学恋爱，关系甜蜜稳定",
          "🌿 心理健康：获得极强的情感托底与幸福感",
          "⏳ 日常生活：未来需分配时间共同自习与约会"
        ]
      },
      {
        "choice_id": "B",
        "text": "再约几次周末单独自习与探店，给彼此更多深入了解的时间",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 暧昧观察",
          "intent": "维持高质量暧昧互动，增进彼此了解",
          "tradeoff": "关系处于未定状态，存在不确定性"
        },
        "result_text": "你们一起在图书馆刷题并探索了学校周边的美食，默契日渐加深，关系愈发亲近。",
        "cost": {
          "TU": 2,
          "EP": 20
        },
        "variable_delta": {
          "romance": 15,
          "social": 5,
          "academic": 3
        },
        "qualitative_changes": [
          "💖 情感升温：默契与好感度持续上升",
          "📚 互促共进：相约图书馆共同自习",
          "🔋 节奏适宜：兼顾课业与情感体验"
        ]
      },
      {
        "choice_id": "C",
        "text": "继续维持纯洁的同窗好友边界，把精力重心留给大一的专业打底",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 坚守学业",
          "intent": "保持清醒自律，不投入过多情感精力",
          "tradeoff": "错过一次美好的心动恋爱契机"
        },
        "result_text": "你礼貌地拉开了距离，将注意力收回到当晚的专业课复习中。生活平静而专注。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "focus": 6,
          "academic": 4,
          "romance": -5
        },
        "qualitative_changes": [
          "🎯 专注自律：全身心聚焦专业课程学习",
          "💖 情感边界：维持健康普通朋友关系",
          "⏳ 个人自由：完全保有课外支配权"
        ]
      }
    ]
  },
  {
    "event_id": "FA_001",
    "title": "突如其来的生活费缺口与兼职自立抉择",
    "package": "FA",
    "type": "CRISIS",
    "priority": "P0",
    "min_month": 6,
    "max_month": 10,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        6,
        7,
        8,
        9,
        10
      ]
    },
    "content": {
      "background": "家中因突发经济周转困难，本月无法按时足额汇寄生活费，饭卡余额仅剩两位数。",
      "scene": "你必须在本月解决生存经济问题，否则连基本伙食都难以维持。",
      "conflict": "是认领校内勤工助学与家教，还是到软件群接短期外包，亦或向好友借款应急？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "认领校内勤工助学岗位与周末稳定初中家教，靠双手自立解决缺口",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 勤工自立",
          "intent": "稳定解决经济困难，大幅减轻父母经济负担",
          "tradeoff": "占用每周固定晚间与周末工时，身体较为劳累"
        },
        "result_text": "你做完了食堂打饭与周末家教，虽然脚步疲惫，但手里赚到的工资让你体会到了前所未有的踏实自立！",
        "cost": {
          "TU": 4,
          "EP": 50
        },
        "variable_delta": {
          "family": 15,
          "delivery": 8,
          "health": -6,
          "social": 4
        },
        "tag_add": [
          "FLAG_FA_PARTTIME_INDEPENDENT"
        ],
        "qualitative_changes": [
          "🏡 家庭自立：彻底解决经济燃眉之急，父母欣慰感动",
          "📦 交付责任：大幅锻炼吃苦耐劳与守时习惯",
          "🌿 身心状态：奔波兼职略显疲倦"
        ]
      },
      {
        "choice_id": "B",
        "text": "到学院技术接单群认领一个小型 Python 数据清洗短期外包任务",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 技能变现",
          "intent": "用专业编程技能赚取报酬，兼顾代码实操练习",
          "tradeoff": "需求变更可能导致改稿返工压力"
        },
        "result_text": "你熬夜写完脚本并交付给委托人，顺利拿到 800 元报酬！不仅补上了生活费，还检验了编程实战能力！",
        "cost": {
          "TU": 3,
          "EP": 45
        },
        "variable_delta": {
          "skill": 8,
          "delivery": 8,
          "family": 8,
          "portfolio": 4
        },
        "qualitative_changes": [
          "⚡ 技能变现：第一次用真实代码创造商业价值",
          "📦 工程交付：按时交付客户需求并获得好评",
          "🏡 经济脱困：顺利补齐本月伙食费缺口"
        ]
      },
      {
        "choice_id": "C",
        "text": "向辅导员申请学院临时困难补助，同时极度节约日常开支",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 制度求助",
          "intent": "借助学校资助政策平稳过渡，不占用宝贵的专业自习时间",
          "tradeoff": "需提交申请证明材料，审批流程需数周"
        },
        "result_text": "辅导员快速为你审批了紧急临时助学金，学校的关怀让你倍感温暖，成功度过难关。",
        "cost": {
          "TU": 1,
          "EP": 15
        },
        "variable_delta": {
          "family": 8,
          "reputation": 4,
          "academic": 2
        },
        "qualitative_changes": [
          "🏡 制度关怀：获得学校临时助学金支持",
          "🎯 学业不受扰：完整保留了自习复习时间",
          "🌟 师长关怀：辅导员密切关注你的生活状态"
        ]
      },
      {
        "choice_id": "D",
        "text": "向要好的室友暂借 500 元应急，严格压缩日常伙食开支度过难关",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 朋友周转",
          "intent": "快速应急，不消耗任何工时",
          "tradeoff": "背负人情借贷压力，生活拮据营养受损"
        },
        "result_text": "室友二话不说转账借你应急。你省吃俭用熬过了这个月，虽然渡过难关，但内心充满借债焦虑。",
        "cost": {
          "TU": 1,
          "EP": 15
        },
        "variable_delta": {
          "social": 4,
          "health": -4,
          "focus": -4
        },
        "tag_add": [
          "FLAG_FA_DEBT_BORROWED"
        ],
        "qualitative_changes": [
          "🤝 朋友情义：患难见真情，拉近室友信任",
          "🌿 生活质量：节衣缩食导致抵抗力下降",
          "🎯 心理负担：产生欠款心理压力"
        ]
      }
    ]
  },
  {
    "event_id": "HE_001",
    "title": "连续熬夜后的身心透支警告",
    "package": "HE",
    "type": "CRISIS",
    "priority": "P1",
    "min_month": 7,
    "max_month": 10,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        7,
        8,
        9,
        10
      ]
    },
    "content": {
      "background": "期末复习、项目赶工与社团活动交织，你连续两周日均睡眠不足 5 小时。",
      "scene": "早晨醒来你感到头晕目眩、心悸胸闷，身体亮起了极度透支的红灯警告。",
      "conflict": "是主动砍掉非必要安排彻底休整，还是去校医院检查，亦或继续靠咖啡硬撑？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "果断砍掉非必要日程！周末完整推掉聚会，补足睡眠并在操场散步调养",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 深度休整",
          "intent": "身体是革命本钱，彻底恢复身心元气与精力上限",
          "tradeoff": "需顺延部分非紧急项目的推进进度"
        },
        "result_text": "连续两晚 9 小时的深度睡眠让你的脸色重新红润起来，心悸消失，精力重新满格！",
        "cost": {
          "TU": 3,
          "EP": 10
        },
        "variable_delta": {
          "health": 18,
          "focus": 8
        },
        "qualitative_changes": [
          "🌿 身心健康：元气彻底恢复，精力充沛",
          "🎯 专注定力：大脑恢复清醒与敏锐",
          "⏳ 节奏重整：建立起健康的作息边界"
        ]
      },
      {
        "choice_id": "B",
        "text": "前往校医院全科与心理中心做健康评估，在医生指导下调整作息饮食",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 科学求助",
          "intent": "科学排查身体潜在风险，获得专业调理方案",
          "tradeoff": "需花费半天时间排队与检查"
        },
        "result_text": "医生为你开具了维生素并叮嘱不可再通宵。科学调理后，你的疲劳感得到显著改善。",
        "cost": {
          "TU": 2,
          "EP": 20
        },
        "variable_delta": {
          "health": 12,
          "family": 4
        },
        "qualitative_changes": [
          "🌿 科学调养：掌握身体极限与防透支技巧",
          "🔋 状态回暖：疲劳感显著缓解",
          "🏡 父母安心：向家里报平安"
        ]
      },
      {
        "choice_id": "C",
        "text": "仅保留最核心的一项必做事项，设定晚上 11 点强制关机熄灯底线",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 止损控度",
          "intent": "在保住关键进度的同时阻止健康进一步恶化",
          "tradeoff": "恢复速度相对平缓"
        },
        "result_text": "你严格执行了早睡底线，虽然进度稍慢，但身体没有继续恶化，平稳度过了危机周。",
        "cost": {
          "TU": 2,
          "EP": 25
        },
        "variable_delta": {
          "health": 8,
          "delivery": 4,
          "focus": 4
        },
        "qualitative_changes": [
          "🌿 健康止跌：成功遏制身体持续滑坡",
          "📦 交付韧性：在有限精力下保全关键底线",
          "🎯 自律管理：学会给工作设定边界"
        ]
      },
      {
        "choice_id": "D",
        "text": "买两罐功能饮料硬扛！坚信年轻抗造，必须把手头任务全部通宵做完",
        "player_hint": {
          "load_level": "Lv3",
          "load_name": "🔥 极限透支 · 冒险硬撑",
          "intent": "极致压榨身体换取当月任务全满贯",
          "tradeoff": "必然触发身心重度透支，次月精力暴跌并埋下严重健康隐患"
        },
        "result_text": "你在凌晨狂灌红牛敲完了最后一行代码，但随即发起了高烧，卧床整整三天，身心受到重创。",
        "cost": {
          "TU": 5,
          "EP": 90
        },
        "variable_delta": {
          "health": -22,
          "academic": 6,
          "delivery": 6,
          "focus": -10
        },
        "tag_add": [
          "FLAG_HE_BURNOUT_WARNING"
        ],
        "qualitative_changes": [
          "🚨 身心重创：身体免疫力崩塌，触发重度透支",
          "🎯 精神涣散：大脑出现严重注意力涣散",
          "⚠️ 严重警告：下月初可用精力上限被大幅压制"
        ]
      }
    ]
  },
  {
    "event_id": "SO_003",
    "title": "全国大学生数学建模 / 蓝桥杯组队攻坚",
    "package": "SO",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 11,
    "max_month": 13,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        11,
        12,
        13
      ]
    },
    "content": {
      "background": "大二上学期，全国大学生数学建模竞赛与蓝桥杯大赛启动报名，是保研加分与求职简历的硬通货。",
      "scene": "需要三人组队在 72 小时内完成算法建模、代码实现与学术论文排版，极其考验团队协作与综合抗压能力。",
      "conflict": "是担任队长统揽全盘，还是作为核心算法手/论文手参与，亦或专注期末放弃参赛？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "担任队长！统筹团队分工，主导核心算法建模与最终论文终审提交",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 领军攻坚",
          "intent": "冲击国家级/省级一等奖，全方位沉淀竞赛资产与领导力",
          "tradeoff": "连续三天三夜高强度通宵，身心负荷极大"
        },
        "result_text": "在你的带领下团队通宵攻坚，模型鲁棒性与论文排版极度惊艳，最终斩获国家级二等奖！",
        "cost": {
          "TU": 5,
          "EP": 75
        },
        "variable_delta": {
          "portfolio": 16,
          "skill": 12,
          "research": 10,
          "reputation": 12,
          "delivery": 12,
          "health": -8
        },
        "tag_add": [
          "FLAG_SO_MCM_WINNER"
        ],
        "resume_entry": {
          "category": "HONORS",
          "chain_id": "EXP_SO_COMP_01",
          "stage_contribution": "LEADER",
          "title": "全国大学生数学建模竞赛二等奖 (队长)",
          "description": "主导复杂系统微分方程与启发式算法建模，撰写高水平竞赛论文，带领团队获国家级奖项。"
        },
        "qualitative_changes": [
          "🏆 国家级荣誉：斩获权威竞赛大奖，保研/求职关键硬通货",
          "💻 作品沉淀：形成高质量学术与算法工程沉淀",
          "🌟 领袖声誉：团队领导与高压收口能力获得公认"
        ]
      },
      {
        "choice_id": "B",
        "text": "作为核心算法手，专注负责核心模型代码实现与仿真测试",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 算法专精",
          "intent": "专注代码与算法实现，不承担繁琐的团队行政协调",
          "tradeoff": "需保证代码在截止前无 Bug 跑通"
        },
        "result_text": "你编写的代码高效稳健，为论文提供了详实的数据图表支撑，团队顺利拿下省级一等奖！",
        "cost": {
          "TU": 4,
          "EP": 50
        },
        "variable_delta": {
          "skill": 10,
          "portfolio": 10,
          "delivery": 8,
          "research": 6
        },
        "tag_add": [
          "FLAG_SO_MCM_PROV_WINNER"
        ],
        "qualitative_changes": [
          "🏆 省级奖项：荣获省级一等奖荣誉",
          "⚡ 算法实战：算法代码调试与仿真能力大幅跃升",
          "📦 团队交付：准时交付关键计算数据"
        ]
      },
      {
        "choice_id": "C",
        "text": "负责数据清洗、文献查阅与论文排版，积累首次大型竞赛流程经验",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 辅助支持",
          "intent": "低门槛熟悉高阶竞赛全流程，打好辅助角色",
          "tradeoff": "核心成果贡献相对较轻"
        },
        "result_text": "你精心绘制了论文插图并规范了排版，团队顺利完赛并获得成功参赛奖，收获了宝贵的实战流程认知。",
        "cost": {
          "TU": 2,
          "EP": 30
        },
        "variable_delta": {
          "research": 6,
          "social": 6,
          "focus": 4
        },
        "qualitative_changes": [
          "🔬 学术素养：掌握专业 LaTeX 论文排版与绘图",
          "🤝 团队协作：完整体验 72 小时高压团队合作",
          "⏳ 负荷适中：未发生重度身心透支"
        ]
      },
      {
        "choice_id": "D",
        "text": "评估当前课业繁重，婉拒组队邀请，优先稳固本学期专业核心课 GPA",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 保留学业",
          "intent": "保全精力专注日常课业，避免竞赛翻车影响期末绩点",
          "tradeoff": "错失大二上学期重要的竞赛加分窗口"
        },
        "result_text": "你专注复习专业课程，期末各项核心课基础扎实，但简历中少了一项竞赛经历。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "academic": 6,
          "focus": 4
        },
        "qualitative_changes": [
          "📚 专业绩点：稳固期末核心课程成绩",
          "🎯 专注独行：不受多任务并发干扰",
          "⏳ 机会成本：本学期未新增竞赛奖项"
        ]
      }
    ]
  },
  {
    "event_id": "AC_003",
    "title": "数据结构核心大作业与队友摆烂危机",
    "package": "AC",
    "type": "CRISIS",
    "priority": "P1",
    "min_month": 13,
    "max_month": 15,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        13,
        14,
        15
      ]
    },
    "content": {
      "background": "大二上期末核心专业课《数据结构与算法》要求三人组队开发高性能 B+ 树持久化存储引擎，占期末总评 40%。",
      "scene": "距离截止仅剩 5 天，两名队友突然以准备四六级为由停止提交代码，工程代码甚至无法编译通过。",
      "conflict": "是独自通宵重构硬扛完整交付，还是紧急召集会议删减功能求稳，亦或求助老师/放弃挣扎？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "接管核心模块！独自通宵重构底层并发与存储引擎，完成全部规范答辩",
        "player_hint": {
          "load_level": "Lv3",
          "load_name": "🔥 极限透支 · 单兵救火",
          "intent": "将危机转化为顶级作品集，极致打磨个人独立交付力与硬核代码功底",
          "tradeoff": "连续高强度通宵，身心受到严重损耗，造成短期透支"
        },
        "result_text": "你一人写了 3000 行高质量 C++ 代码并跑通了千万级并发压力测试！大作业获全系满分，成为全院传奇项目！",
        "cost": {
          "TU": 6,
          "EP": 85
        },
        "variable_delta": {
          "delivery": 20,
          "skill": 18,
          "portfolio": 16,
          "academic": 10,
          "health": -12
        },
        "tag_add": [
          "FLAG_AC_TOP_PROJECT",
          "FLAG_AC_HERO_DELIVERY"
        ],
        "resume_entry": {
          "category": "PROJECT_EXP",
          "chain_id": "EXP_AC_PROJECT_01",
          "stage_contribution": "CORE",
          "title": "高性能 B+ 树持久化存储引擎研发",
          "description": "独立主导核心并发锁与页面置换算法，完成千万级并发读写压力测试，获专业课程满分评价。"
        },
        "qualitative_changes": [
          "💻 硬核作品：诞生极具含金量的底层系统作品",
          "📦 交付神话：独立交付力获得里程碑式飞跃",
          "⚡ 技能质变：C++ 底层编程与性能调优能力大成",
          "🚨 身体警告：严重透支导致身体处于疲惫边缘"
        ]
      },
      {
        "choice_id": "B",
        "text": "紧急召集队友协商，果断砍掉高难度非核心特性，重新划分可执行模块",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 团队协商",
          "intent": "以现实可落地的敏捷目标化解危机，保住及格基本盘",
          "tradeoff": "作品亮点有所缩水，需承受沟通拉扯压力"
        },
        "result_text": "你重新整理了任务清单并盯紧队友提交，项目在截止前 2 小时勉强跑通，顺利拿到良好成绩。",
        "cost": {
          "TU": 3,
          "EP": 45
        },
        "variable_delta": {
          "delivery": 10,
          "skill": 8,
          "academic": 6,
          "social": 4
        },
        "qualitative_changes": [
          "📦 危机化解：展现出色的团队协调与止损收口能力",
          "📚 学业良好：稳住期末大作业关键得分",
          "🤝 团队关系：经历了一次有压力的硬核沟通"
        ]
      },
      {
        "choice_id": "C",
        "text": "整理 Git 提交记录与聊天证据，请任课老师介入确认个人独立贡献",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 规则求助",
          "intent": "通过制度规则保护个人成绩评价，免受队友拖累",
          "tradeoff": "团队关系彻底破裂，项目无法形成完整产品展示"
        },
        "result_text": "老师认可了你的代码贡献并单独给你的模块评定高分，队友则被扣减了平时分。你保住了个人绩点。",
        "cost": {
          "TU": 2,
          "EP": 25
        },
        "variable_delta": {
          "academic": 8,
          "reputation": 6,
          "social": -6
        },
        "qualitative_changes": [
          "📚 成绩保护：个人学业绩点未受队友拖累",
          "🌟 师长认可：严谨有据的沟通赢得老师尊重",
          "🤝 人际代价：与摆烂队友关系彻底破裂"
        ]
      },
      {
        "choice_id": "D",
        "text": "只写完自己分内模块的代码，放弃整合，把时间全部留给期末笔试背题",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 划清界限",
          "intent": "明确个人边界拒绝当冤大头，保全期末笔试精力",
          "tradeoff": "大作业总评受到牵连，彻底丧失工程作品资产"
        },
        "result_text": "项目最终因无法整合只拿了及格分，但你因笔试高分勉强拉回了总评。你意识到没有沉淀下拿得出手的作品。",
        "cost": {
          "TU": 2,
          "EP": 20
        },
        "variable_delta": {
          "academic": 4,
          "skill": -4,
          "delivery": -6
        },
        "qualitative_changes": [
          "📚 笔试保底：期末理论试卷拿到不错分数",
          "💻 作品空白：错失一次宝贵的工程作品沉淀",
          "📦 交付受限：未能在复杂危机中完成收口"
        ]
      }
    ]
  },
  {
    "event_id": "AC_004",
    "title": "项目跑通后：规范 README、架构图与 Showcase 沉淀",
    "package": "AC",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 14,
    "max_month": 16,
    "repeatable": false,
    "unlock_condition": {
      "has_tags": [
        "FLAG_AC_TOP_PROJECT"
      ]
    },
    "content": {
      "background": "大作业虽然答辩结束，但源码散落在本地文件夹中，缺少规范文档与演示 Demo。",
      "scene": "学长曾建议：真正值钱的工程师资产是‘即使外行也能 5 分钟跑通的开源 Showcase’，而不是一堆只有自己看得懂的草稿。",
      "conflict": "是花费周末撰写专业中英文 README 与演示动图开源发布，还是随手压缩归档？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "专业重构！撰写规范中英文 README、绘制系统架构图并录制 1 分钟演示动图开源",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 资产化规范",
          "intent": "将课程作业升华为工业级开源 Showcase，为后续 AI-Lab 与大厂面试埋下杀手级资产",
          "tradeoff": "需投入大块时间打磨文档排版与 Benchmark 压测数据"
        },
        "result_text": "你将仓库精心发布在 GitHub 上，工整的架构图与详实的性能评测获得了数十个 Star，成为你简历上的闪耀名片！",
        "cost": {
          "TU": 3,
          "EP": 40
        },
        "variable_delta": {
          "portfolio": 18,
          "reputation": 14,
          "delivery": 12,
          "skill": 8
        },
        "tag_add": [
          "FLAG_PROJECT_DOCUMENTED"
        ],
        "qualitative_changes": [
          "💻 资产质变：形成极其规范的工业级开源 Showcase",
          "🌟 行业口碑：技术规范与文档编写水准获得高度认可",
          "📦 交付素养：展现远超同龄人的工程收口品味"
        ]
      },
      {
        "choice_id": "B",
        "text": "写一份简短的中文快速运行指南，将代码上传至个人私有仓库保存",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 基础归档",
          "intent": "完成基础代码备份，留出精力处理其他课程",
          "tradeoff": "对外传播力与展示度较为普通"
        },
        "result_text": "代码被妥善备份在云端，日后需要时随时可以查阅复用。",
        "cost": {
          "TU": 1,
          "EP": 15
        },
        "variable_delta": {
          "portfolio": 6,
          "delivery": 4
        },
        "qualitative_changes": [
          "💻 代码归档：完成规范的基础代码备份",
          "⏳ 负荷极轻：未占用过多课余时间",
          "🎯 状态平稳：平稳推进后续学业"
        ]
      },
      {
        "choice_id": "C",
        "text": "直接打包为 zip 压缩包扔在硬盘角落，不再额外花费时间整理",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 随手归档",
          "intent": "零成本结束当前事务，立即切换至假期模式",
          "tradeoff": "代码难以对外展示，容易逐渐遗忘"
        },
        "result_text": "压缩包静静躺在硬盘里。几个月后你几乎忘记了当时的架构设计细节。",
        "cost": {
          "TU": 0,
          "EP": 5
        },
        "variable_delta": {
          "focus": 2
        },
        "qualitative_changes": [
          "⏳ 零消耗：立刻投入其他活动",
          "💻 资产沉淀：未形成对外可展示资产"
        ]
      }
    ]
  },
  {
    "event_id": "AI_001",
    "title": "开源社区里的神秘校友项目与私聊引荐",
    "package": "AI",
    "type": "HIDDEN",
    "priority": "P2",
    "min_month": 16,
    "max_month": 19,
    "repeatable": false,
    "unlock_condition": {
      "has_tags": [
        "FLAG_PROJECT_DOCUMENTED"
      ],
      "min_vars": {
        "skill": 30
      }
    },
    "content": {
      "background": "大二下学期，你在 GitHub 上发布的开源存储引擎与相关技术文章在技术社群里被转发。",
      "scene": "一位自称学校 AI-Lab 核心骨干的大四学长微信私信你：“同学，看到你的项目 README 规范和底层设计很扎实，我们实验室在做一个企业级 Agent 框架，有兴趣聊聊吗？”",
      "conflict": "是实事求是与学长深入交流技术，还是借机吹嘘，亦或坦诚说明精力婉拒？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "实事求是地交流项目优缺点与踩坑细节，积极请教前沿大模型工程架构",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 诚恳交流",
          "intent": "通过诚实可靠的技术认知打动学长，正式开启 AI-Lab 任务卡考核通道",
          "tradeoff": "学长将根据你的能力为你安排一张限时试做任务卡"
        },
        "result_text": "学长对你实事求是的态度非常赞赏：“很多同学喜欢画大饼，但我们更看重能把细节做扎实的交付力！下周我给你一张入组试做任务卡。”",
        "cost": {
          "TU": 2,
          "EP": 30
        },
        "variable_delta": {
          "reputation": 14,
          "delivery": 10,
          "ai_depth": 10,
          "social": 8
        },
        "tag_add": [
          "FLAG_AI_LAB_DISCOVERED"
        ],
        "qualitative_changes": [
          "🌟 靠谱口碑：实事求是的态度赢得学长极高信任",
          "🤖 极客接轨：深入探讨企业级 Agent 工程挑战",
          "🚩 路线跃迁：AI-Lab 路线正式进入【正式知晓 / 考核期】"
        ]
      },
      {
        "choice_id": "B",
        "text": "在学长面前夸大自己的技术掌握度，承诺能独立搞定任何前沿算法",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 过度承诺",
          "intent": "试图用华丽辞藻快速获得认可",
          "tradeoff": "极容易在后续高难度实操考核中暴露短板导致声誉崩塌"
        },
        "result_text": "学长给你抛了两个分布式通信底层的硬核问题，你答得漏洞百出，气氛一度尴尬，学长语气变得客套起来。",
        "cost": {
          "TU": 1,
          "EP": 20
        },
        "variable_delta": {
          "reputation": -8,
          "social": 2
        },
        "qualitative_changes": [
          "⚠️ 口碑警示：过度承诺暴露底蕴不足，引发信任顾虑",
          "🤖 路线阻滞：学长对你的真实工程能力产生怀疑",
          "🎯 心理教训：深刻体会到脚踏实地的重要性"
        ]
      },
      {
        "choice_id": "C",
        "text": "坦诚说明当前大二下课业与备考压力，表达感谢并约定大三有余力时再交流",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 体面暂缓",
          "intent": "保全极佳口碑，不因过度承诺而透支",
          "tradeoff": "暂缓进入 AI-Lab 考核通道"
        },
        "result_text": "学长理解地表示：“没问题，精力管理也是一种能力，随时欢迎你准备好后再联系。”口碑完好保留！",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "reputation": 6,
          "social": 4,
          "focus": 4
        },
        "qualitative_changes": [
          "🌟 诚实口碑：体面透明的沟通获得学长尊重",
          "🎯 专注课业：避免多线作战带来的身心内耗",
          "🚩 关系保留：保持良好联系通道"
        ]
      }
    ]
  },
  {
    "event_id": "RO_001",
    "title": "一周年纪念日与紧急项目 DDL 冲突",
    "package": "RO",
    "type": "CRISIS",
    "priority": "P2",
    "min_month": 16,
    "max_month": 20,
    "repeatable": false,
    "unlock_condition": {
      "has_tags": [
        "FLAG_RO_IN_RELATIONSHIP"
      ]
    },
    "content": {
      "background": "今晚是与伴侣确立恋爱关系的一周年纪念日，早已提前预订了温馨的西餐厅。",
      "scene": "然而下午 5 点，核心技术项目突然爆出主干崩溃严重 Bug，学长要求必须今晚 9 点前提交修复补丁并重新部署。",
      "conflict": "是协调请假准时赴约，还是通宵修 Bug 延期补过，亦或折中短聚？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "与团队紧急协调请假 2 小时准时赴约，回来后通宵补齐修复补丁",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 双线硬兼顾",
          "intent": "全力维系深厚情感羁绊，同时兑现工程交付承诺",
          "tradeoff": "两头奔波协调，深夜需连续通宵补工，身体极为疲劳"
        },
        "result_text": "你在餐厅给伴侣送上惊喜礼物，度过了浪漫的纪念日；随后赶回机房熬夜将 Bug 彻底修复！虽然疲惫但两全其美！",
        "cost": {
          "TU": 4,
          "EP": 65
        },
        "variable_delta": {
          "romance": 25,
          "delivery": 10,
          "reputation": 6,
          "health": -8
        },
        "tag_add": [
          "FLAG_RO_ROMANTIC_DEVOTED"
        ],
        "qualitative_changes": [
          "💖 情感升温：伴侣感动于你的真诚守护，关系坚不可摧",
          "📦 交付兑现：顶住高压完成深夜 Bug 修复",
          "🌿 身心透支：连续奔波与通宵导致严重困倦"
        ]
      },
      {
        "choice_id": "B",
        "text": "向伴侣坦诚说明系统崩溃危机，改成下课后在食堂短聚切蛋糕，周末再隆重补过",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 坦诚折中",
          "intent": "以成熟理性的沟通寻求伴侣包容，保全项目第一现场",
          "tradeoff": "纪念日仪式感有所缩水"
        },
        "result_text": "伴侣非常通情达理，不仅没有生气，还贴心地给你送来了热咖啡！你在机房顺利修复了 Bug，心中满是温暖。",
        "cost": {
          "TU": 3,
          "EP": 45
        },
        "variable_delta": {
          "romance": 12,
          "delivery": 12,
          "reputation": 8
        },
        "qualitative_changes": [
          "💖 相互包容：成熟理性的沟通让感情更加深厚",
          "📦 项目闭环：高效排查并修复系统主干 Bug",
          "🌟 团队口碑：展现极强的职业担当与责任心"
        ]
      },
      {
        "choice_id": "C",
        "text": "直接留在机房死磕 Bug，微信发一句“在忙，改天说”，已读不回",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 冷处理失约",
          "intent": "全身心聚焦技术救火，忽视情感沟通",
          "tradeoff": "感情遭遇重大信任危机，陷入长期冷战内耗"
        },
        "result_text": "虽然 Bug 修好了，但看着伴侣发来的几十条未接语音和“你到底在不在乎我”，两人陷入了长达两周的冰冷冷战。",
        "cost": {
          "TU": 3,
          "EP": 50
        },
        "variable_delta": {
          "romance": -25,
          "delivery": 8,
          "focus": -12
        },
        "tag_add": [
          "FLAG_RO_DATE_BROKEN"
        ],
        "qualitative_changes": [
          "💔 情感危机：伴侣极度失望，爆发严重冷战",
          "🎯 精神内耗：感情内耗严重影响后续自习专注",
          "📦 工程交付：虽然按时修好 Bug 但代价惨痛"
        ]
      }
    ]
  },
  {
    "event_id": "WK_001",
    "title": "大二下职业探索：首份中小型企业日常技术实习",
    "package": "WK",
    "type": "OPPORTUNITY",
    "priority": "P2",
    "min_month": 17,
    "max_month": 20,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        17,
        18,
        19,
        20
      ],
      "min_vars": {
        "skill": 35,
        "portfolio": 20
      }
    },
    "content": {
      "background": "大二下春季，一家本地中型互联网科技公司在校内发布日常后端研发实习生招聘（每周需到岗 3 天）。",
      "scene": "真实职场与校内象牙塔截然不同，涉及真实的敏捷迭代、Git 冲突与跨部门沟通。",
      "conflict": "是全力以赴线下实习提前积累职场经验，还是协商远程兼职，亦或留校死磕保研绩点？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "接受线下实习！每周到岗 3 天，深度参与企业真实业务系统功能开发",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 真实职场",
          "intent": "提前斩获首份真实商业研发实习履历，大幅提升职场工程交付力",
          "tradeoff": "往返通勤与每周 3 天到岗会大幅挤压校内自习与课业时间"
        },
        "result_text": "在企业导师的指导下，你独立完成了两个微服务接口与自动化测试，获得了主管道地好评与首份实战履历！",
        "cost": {
          "TU": 5,
          "EP": 70
        },
        "variable_delta": {
          "portfolio": 16,
          "delivery": 16,
          "skill": 14,
          "reputation": 10,
          "academic": -4
        },
        "tag_add": [
          "FLAG_WK_FIRST_INTERN"
        ],
        "resume_entry": {
          "category": "INTERNSHIP",
          "chain_id": "EXP_WK_INTERN_01",
          "stage_contribution": "PARTICIPANT",
          "title": "中型科技企业日常后端研发实习生",
          "description": "负责企业级微服务 API 接口研发与高并发压测，参与敏捷开发全流程，沉淀工业级实战经验。"
        },
        "qualitative_changes": [
          "💼 职场履历：斩获第一段极具说服力的企业研发实习",
          "📦 工程交付：深刻理解企业级代码规范与交付标准",
          "⚡ 技术实战：掌握分布式与真实业务系统开发"
        ]
      },
      {
        "choice_id": "B",
        "text": "与公司协商每周到岗 1 天并远程承接部分外围需求，兼顾校内课业",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 灵活兼顾",
          "intent": "以折中方式接触企业开发，同时保住学校 GPA",
          "tradeoff": "核心业务参与深度受限"
        },
        "result_text": "你保质保量完成了远程分配的辅助功能，既体验了工业代码，又没有落下本学期的核心专业课考试。",
        "cost": {
          "TU": 3,
          "EP": 45
        },
        "variable_delta": {
          "portfolio": 10,
          "skill": 8,
          "delivery": 8,
          "academic": 2
        },
        "qualitative_changes": [
          "💼 实战感知：初步体验企业敏捷开发流程",
          "📚 课业平稳：校内专业课成绩未受明显冲击",
          "🔋 节奏自如：保持良好的多任务平衡感"
        ]
      },
      {
        "choice_id": "C",
        "text": "暂不外出实习，留校专注大二核心课 GPA 冲刺与校内科研实验室探索",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 留校深造",
          "intent": "专注学术与课业，全力冲击保研推免与高分绩点",
          "tradeoff": "大二阶段职场实习经历保持空白"
        },
        "result_text": "你留校死磕算法与专业理论，期末绩点稳居专业前列，为后续保研推免打下了扎实的学业基本盘。",
        "cost": {
          "TU": 2,
          "EP": 20
        },
        "variable_delta": {
          "academic": 10,
          "research": 6,
          "focus": 6
        },
        "qualitative_changes": [
          "📚 绩点优势：专业核心课成绩保持顶尖梯队",
          "🔬 学术地基：开始接触学术文献与科研课题",
          "🎯 路线专注：更加明确升学深造意向"
        ]
      }
    ]
  },
  {
    "event_id": "AI_002",
    "title": "咖啡厅深聊：AI-Lab 第一张试水任务卡",
    "package": "AI",
    "type": "HIDDEN",
    "priority": "P1",
    "min_month": 18,
    "max_month": 20,
    "repeatable": false,
    "unlock_condition": {
      "has_tags": [
        "FLAG_AI_LAB_DISCOVERED"
      ]
    },
    "content": {
      "background": "学长约你在校门口咖啡厅详聊，当面介绍了实验室正在推进的多智能体 Agent 开源生态与工业落地方向。",
      "scene": "学长递给你一份任务清单：“这是第一张试水任务卡：需要对主流开源 LLM 评测工具进行深度基准测试，并撰写可复现的自动化脚本与评测报告，限期 2 个月交付。”",
      "conflict": "是严肃接下完整任务卡，还是请求缩小任务范围，亦或坦诚婉拒？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "严肃承接！接下开源评测与基准测试完整任务卡，开启限期高质交付",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 极客考核",
          "intent": "进入 AI-Lab 核心考核流程，开启 2 个月限时交付倒计时",
          "tradeoff": "需投入大块课外时间，失约将面临严重口碑惩罚"
        },
        "result_text": "学长为你开通了实验室服务器集群账号与内部知识库权限：“两个月后期待你的基准报告，有问题随时沟通！”",
        "cost": {
          "TU": 5,
          "EP": 70
        },
        "variable_delta": {
          "delivery": 12,
          "skill": 10,
          "portfolio": 8,
          "ai_depth": 10
        },
        "tag_add": [
          "FLAG_AI_TASK1_RECEIVED"
        ],
        "future_event": {
          "event_id": "AI_003",
          "trigger_month": 20,
          "forced": true
        },
        "qualitative_changes": [
          "🤖 极客入局：获得实验室集群权限与技术导师指导",
          "📦 交付倒计时：开启限期 2 个月第一张任务卡交付",
          "⚡ 专业技能：进入前沿大模型评测实战"
        ]
      },
      {
        "choice_id": "B",
        "text": "说明当前课业负荷，请求先承接其中一个边界清晰的小型子任务试水",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 减负试做",
          "intent": "降低交付风险，以轻量方式保持实验室连接",
          "tradeoff": "考核评级与深入程度相对较浅"
        },
        "result_text": "学长同意将任务拆分，让你先负责单个开源框架的部署体验文档，约定下个月底交付小结。",
        "cost": {
          "TU": 3,
          "EP": 40
        },
        "variable_delta": {
          "ai_depth": 6,
          "delivery": 6,
          "reputation": 6
        },
        "tag_add": [
          "FLAG_AI_TASK1_LITE"
        ],
        "qualitative_changes": [
          "🤖 轻量试做：以可控负荷参与实验室任务",
          "🌟 诚恳沟通：实事求是的负荷评估获得学长理解",
          "⏳ 节奏从容：未对校内课业造成过大冲击"
        ]
      },
      {
        "choice_id": "C",
        "text": "坦诚评估精力不足以承担高强度项目，礼貌婉拒任务卡，专注于升学备考",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 体面退出",
          "intent": "体面退出当前考核，保全极佳口碑与关系",
          "tradeoff": "关闭本次 AI-Lab 深度进阶通道"
        },
        "result_text": "学长赞赏你的诚实与清晰的人生定位，送了你一本技术书籍，并表示实验室大门常开。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "reputation": 8,
          "focus": 6,
          "academic": 4
        },
        "tag_add": [
          "FLAG_AI_POLITELY_EXITED"
        ],
        "qualitative_changes": [
          "🌟 良好口碑：诚恳透明的沟通留下极佳声誉",
          "🎯 路线明晰：全神贯注投入校内课业与升学",
          "🚩 体面收口：AI-Lab 路线平稳退出"
        ]
      }
    ]
  },
  {
    "event_id": "AI_003",
    "title": "【Deadline 节点】第一张任务卡交付与评审抉择",
    "package": "AI",
    "type": "CRISIS",
    "priority": "P0",
    "min_month": 20,
    "max_month": 20,
    "repeatable": false,
    "unlock_condition": {
      "has_tags": [
        "FLAG_AI_TASK1_RECEIVED"
      ]
    },
    "content": {
      "background": "大二下 6 月期末峰值月，AI-Lab 第一张任务卡到达交付 Deadline，同时撞上两门专业课期末考试。",
      "scene": "代码与基准报告还差最后一部分边界测试与可视化图表，如果不通宵可能只能交半成品，甚至有人选择拖延已读不回。",
      "conflict": "是通宵冲刺高质交付，还是提交半成品申请延期，亦或彻底失约放弃？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "准时高质交付！通宵补齐自动化测试脚本与详实可视化对比报告，准时提交评审",
        "player_hint": {
          "load_level": "Lv3",
          "load_name": "🔥 极限透支 · 高质交付",
          "intent": "以极其震撼的高标准按时交付，树立无可挑剔的铁人交付口碑",
          "tradeoff": "身心极度疲惫，需消耗极高精力"
        },
        "result_text": "学长看完你的报告后在团队群里实名点赞：“数据详实，结论一目了然，甚至比许多研究生做得还要规整！”",
        "cost": {
          "TU": 5,
          "EP": 75
        },
        "variable_delta": {
          "delivery": 18,
          "reputation": 18,
          "portfolio": 14,
          "ai_depth": 12,
          "health": -8
        },
        "tag_add": [
          "FLAG_AI_TASK1_PASSED"
        ],
        "future_event": {
          "event_id": "AI_004",
          "trigger_month": 22,
          "forced": true
        },
        "qualitative_changes": [
          "🌟 口碑爆棚：在实验室团队中树立顶尖靠谱交付声誉",
          "📦 交付力质变：完成工业级前沿评测体系闭环",
          "🚩 考核通关：第一张任务卡满分通过，解锁进阶考核"
        ]
      },
      {
        "choice_id": "B",
        "text": "提前 24 小时向学长说明期末撞车情况，提交已完成的 80% 核心成果并申请延期两天",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 提前沟通",
          "intent": "展现专业的职业沟通素养，用透明度控制延期影响",
          "tradeoff": "评价略有折损但完全守住信任底线"
        },
        "result_text": "学长回复：“提前沟通非常好，期末考试要紧，两天后补齐剩余图表即可。”你如期补交并通过！",
        "cost": {
          "TU": 3,
          "EP": 45
        },
        "variable_delta": {
          "delivery": 10,
          "reputation": 8,
          "portfolio": 8,
          "ai_depth": 8
        },
        "tag_add": [
          "FLAG_AI_TASK1_PASSED"
        ],
        "future_event": {
          "event_id": "AI_004",
          "trigger_month": 22,
          "forced": true
        },
        "qualitative_changes": [
          "📦 职业素养：透明的预警沟通守住合作底线",
          "🌟 稳健信任：学长认可你的责任心与沟通态度",
          "🚩 平稳过关：补全后顺利通过第一阶段考核"
        ]
      },
      {
        "choice_id": "C",
        "text": "遭遇困难后心生畏难，选择逃避失约，在微信群里已读不回彻底失联",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 失约逃避",
          "intent": "逃避交付压力，完全不付出行动",
          "tradeoff": "信誉遭遇断崖式崩塌，AI-Lab 路线面临永久关闭风险"
        },
        "result_text": "学长发了几次消息见你已读不回，默默将你移出了技术协作群，你的名字被记入了失信观察名单。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "delivery": -15,
          "reputation": -20,
          "focus": -8
        },
        "tag_add": [
          "FLAG_AI_MISSED_DEADLINE"
        ],
        "qualitative_changes": [
          "🚨 信任崩塌：遭遇极其严重的口碑与诚信打击",
          "📦 交付惩罚：交付力遭遇断崖式扣减",
          "⚠️ 关线警告：若再次失约，AI-Lab 路线将永久关闭"
        ]
      }
    ]
  },
  {
    "event_id": "GE_000",
    "title": "大三上关键抉择：确立考研统考主路线",
    "package": "GE",
    "type": "DEVELOPMENT",
    "priority": "P0",
    "min_month": 21,
    "max_month": 23,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        21,
        22,
        23
      ]
    },
    "content": {
      "background": "大三上开学 9 月，大学进入关键分水岭。考研大军开始占座自习，考研数学与专业课 408 必须启动一轮复习。",
      "scene": "一旦确立考研统考为主线，每月必须支付 5 TU + 50 EP 刚性驻留备考成本，意味着必须压缩社团、游戏与大块实习。",
      "conflict": "是正式确立考研为主线启动系统复习，还是先试水一轮，亦或转向秋招求职与保研？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "正式确立考研为主路线！立即购买考研数学全套真题与资料，开启每日自律闭关",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 确立主线",
          "intent": "锁定考研路线进入【进行中 (PRIMARY)】，每月系统自动累积备考值",
          "tradeoff": "每月自动扣除 5 TU + 50 EP 刚性备考成本，自由时间大幅收紧"
        },
        "result_text": "你将考研倒计时设为壁纸，每天清晨 7 点准时坐在图书馆同一张书桌前，沉着开启了一轮复习！",
        "cost": {
          "TU": 5,
          "EP": 60
        },
        "variable_delta": {
          "focus": 14,
          "academic": 10,
          "social": -8
        },
        "tag_add": [
          "FLAG_GE_PRIMARY_CONFIRMED"
        ],
        "qualitative_changes": [
          "🚩 路线锁定：考研统考主路线正式进入【进行中】",
          "🎯 极高专注：建立极其自律的备考生活节奏",
          "⏳ 刚性成本：每月需持续投入大块时间与心力"
        ]
      },
      {
        "choice_id": "B",
        "text": "先进行为期两个月的试复习与真题模拟摸底，根据复习效率再做最终决断",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 试水摸底",
          "intent": "保留多方选择权，用阶段性摸底数据检验自己的考研适应度",
          "tradeoff": "路线确认较晚，备考累积相对平缓"
        },
        "result_text": "你做完了两套考研数学历年真题，对自己的基础有了客观认识，为后续决策提供了明确依据。",
        "cost": {
          "TU": 3,
          "EP": 40
        },
        "variable_delta": {
          "academic": 6,
          "focus": 6
        },
        "qualitative_changes": [
          "📚 摸底评估：清晰掌握自身考研学科薄弱点",
          "🎯 保持弹性：未立即锁定刚性驻留负荷",
          "⏳ 节奏从容：兼顾本学期常规课业"
        ]
      },
      {
        "choice_id": "C",
        "text": "不走统考路线！把主要精力全力转向校招日常实习、技术作品与秋招准备",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 转向求职",
          "intent": "确立就业工作为主线，全力打磨作品集与简历",
          "tradeoff": "彻底放弃大四考研统考赛道"
        },
        "result_text": "你坚定了直接就业的决心，开始系统整理简历、刷 LeetCode 算法并搜集大厂实习招聘信息。",
        "cost": {
          "TU": 3,
          "EP": 40
        },
        "variable_delta": {
          "portfolio": 10,
          "skill": 10,
          "social": 6
        },
        "tag_add": [
          "FLAG_WK_TRACK_CHOSEN"
        ],
        "qualitative_changes": [
          "💼 赛道确立：全面转向求职与实习积累",
          "💻 作品攻坚：启动求职简历与算法刷题",
          "🚩 战略聚焦：果断放弃考研赛道诱惑"
        ]
      },
      {
        "choice_id": "D",
        "text": "不走统考路线！专注冲击推免保研夏令营与导师课题组科研论文",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 转向保研",
          "intent": "确立保研学术路线，死磕前三年 GPA 与顶尖科研论文",
          "tradeoff": "对绩点与学术成果要求极高，若推免落榜需承担分流风险"
        },
        "result_text": "你联系了系里学术声誉最好的博导，主动申请加入课题组文献讨论班，向推免发起全力冲刺！",
        "cost": {
          "TU": 3,
          "EP": 45
        },
        "variable_delta": {
          "research": 12,
          "academic": 8,
          "reputation": 6
        },
        "tag_add": [
          "FLAG_REC_TRACK_CHOSEN"
        ],
        "qualitative_changes": [
          "🔬 学术进阶：正式进入导师科研课题组",
          "📚 绩点冲刺：全力巩固专业排名前列",
          "🚩 目标锁定：冲刺名校推免保研资格"
        ]
      }
    ]
  },
  {
    "event_id": "AI_004",
    "title": "任务结果被打回修改：密密麻麻的严苛批注",
    "package": "AI",
    "type": "HIDDEN",
    "priority": "P1",
    "min_month": 22,
    "max_month": 24,
    "repeatable": false,
    "unlock_condition": {
      "has_tags": [
        "FLAG_AI_TASK1_PASSED"
      ]
    },
    "content": {
      "background": "大三上学期，第一张任务卡进入实验室终审，核心技术评审学长发回了长达 5 页的修改批注。",
      "scene": "批注中指出你的基准脚本缺少异常重试机制、缺乏内存泄漏监控，部分统计图例不规范，要求 3 天内重构提交。",
      "conflict": "是虚心接受打回批注连夜返工重构，还是情绪抵触消极应付？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "积极返工！虚心接受全部批注，连夜重构异常重试模块与监控指标",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 受挫返工",
          "intent": "展现极强受挫抗压力与皮实度，打通晋升 AI-Lab 深度核心的关键前置",
          "tradeoff": "需连续通宵攻克深层工程 Bug"
        },
        "result_text": "重构后的代码极其精炼健壮，学长感叹：“很多新人被批注打回就玻璃心退缩了，你的工程皮实度与交付韧性非常难得！”",
        "cost": {
          "TU": 4,
          "EP": 65
        },
        "variable_delta": {
          "delivery": 18,
          "reputation": 16,
          "skill": 12,
          "ai_depth": 12
        },
        "tag_add": [
          "FLAG_AI_ACCEPTS_REVISION"
        ],
        "future_event": {
          "event_id": "AI_006",
          "trigger_month": 26,
          "forced": true
        },
        "qualitative_changes": [
          "🌟 终极认可：展现极强的受挫返工韧性与工程品味",
          "📦 交付力大成：代码鲁棒性与异常处理达到工业水准",
          "🚩 核心晋升：满足全部 Deep 阶段跃迁核心前置！"
        ]
      },
      {
        "choice_id": "B",
        "text": "与学长沟通澄清争议点，针对核心缺陷做精简修复，其余非关键批注保留讨论",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 理性沟通",
          "intent": "以专业技术论据与学长平等探讨架构取舍",
          "tradeoff": "需花费精力准备技术论证材料"
        },
        "result_text": "学长认可了你在部分架构设计上的独到思考，采纳了你的精简方案，任务顺利结项。",
        "cost": {
          "TU": 3,
          "EP": 45
        },
        "variable_delta": {
          "delivery": 10,
          "skill": 10,
          "reputation": 8
        },
        "tag_add": [
          "FLAG_AI_ACCEPTS_REVISION"
        ],
        "future_event": {
          "event_id": "AI_006",
          "trigger_month": 26,
          "forced": true
        },
        "qualitative_changes": [
          "💡 架构思辨：展现独立技术思考与沟通能力",
          "📦 顺利结项：完成核心缺陷修复并结项",
          "🚩 资质认可：保留进入深度阶段的资格"
        ]
      },
      {
        "choice_id": "C",
        "text": "认为学长吹毛求疵，消极应付只改几个错别字重新提交",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 敷衍退缩",
          "intent": "逃避深度返工压力",
          "tradeoff": "失去学长信任，进阶晋升通道中止"
        },
        "result_text": "学长看到敷衍的修改后没有再多说什么，只回复了“已收到”。后续的核心项目不再分发给你。",
        "cost": {
          "TU": 1,
          "EP": 15
        },
        "variable_delta": {
          "reputation": -10,
          "delivery": -8
        },
        "qualitative_changes": [
          "⚠️ 信任受损：敷衍态度导致技术声誉受损",
          "🤖 晋升中止：失去进入 AI-Lab 核心团队的机会",
          "⏳ 负荷释放：不再承担后续高强度研发"
        ]
      }
    ]
  },
  {
    "event_id": "RE_000",
    "title": "大三下名校保研夏令营与预推免申报",
    "package": "RE",
    "type": "DEVELOPMENT",
    "priority": "P1",
    "min_month": 26,
    "max_month": 28,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        26,
        27,
        28
      ],
      "min_vars": {
        "academic": 70
      }
    },
    "content": {
      "background": "大三下 3~5 月，清华、北大、华东五校与中科院各大科研院所陆续发布保研夏令营招生简章。",
      "scene": "夏令营不仅考核前三年 GPA 排名，更加看重高水平科研论文、顶级竞赛荣誉与现场专业英语机试面试。",
      "conflict": "是集中精力冲刺少数顶尖名校直博，还是多梯度院校稳妥投递，亦或主攻本校课题组？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "冲击清北华五顶尖名校夏令营！精心整理论文成果与代码库，主动自荐联系顶尖博导",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 冲击学术顶峰",
          "intent": "冲刺全国最顶级学府推免名额与优秀营员（E01 顶尖推免必经之路）",
          "tradeoff": "竞争极度白热化，对科研论文与 GPA 综合战力要求极高"
        },
        "result_text": "你的扎实科研与优秀大作业给招生委员会留下了深刻印象，成功斩获顶尖名校夏令营【优秀营员 (入围即拟录取)】！",
        "cost": {
          "TU": 5,
          "EP": 75
        },
        "variable_delta": {
          "research": 18,
          "academic": 12,
          "reputation": 14,
          "portfolio": 10
        },
        "tag_add": [
          "FLAG_REC_TOP_CAMP_PASSED"
        ],
        "resume_entry": {
          "category": "HONORS",
          "chain_id": "EXP_REC_CAMP_01",
          "stage_contribution": "CORE",
          "title": "顶尖名校全国优秀大学生学术夏令营「优秀营员」",
          "description": "通过机试、全英文专业面试与论文答辩考核，在数百名名校申请者中脱颖而出获得拟录取资格。"
        },
        "qualitative_changes": [
          "🏆 学术巅峰：斩获清北华五顶尖夏令营优秀营员！",
          "🔬 科研认可：学术研究与科研论文能力获得权威认证",
          "🚩 保研锁定：提前锁定 9 月推免拟录取核心筹码"
        ]
      },
      {
        "choice_id": "B",
        "text": "广撒网同时申报 3~4 所不同梯度 985/211 优势高校夏令营，平衡上限与稳妥度",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 分散风险",
          "intent": "确保手握多份保底 Offer，平稳度过推免季",
          "tradeoff": "多套材料与频繁面试占用大量精力"
        },
        "result_text": "你顺利拿到了两所优势 985 高校的优秀营员证书，推免上岸有了稳稳的保底依托！",
        "cost": {
          "TU": 4,
          "EP": 60
        },
        "variable_delta": {
          "research": 10,
          "academic": 8,
          "reputation": 8
        },
        "tag_add": [
          "FLAG_REC_CAMP_PASSED"
        ],
        "qualitative_changes": [
          "🏆 稳妥保底：收获多所优势 985 高校夏令营 Offer",
          "📚 材料周全：推免申报材料准备极其详实",
          "🔋 信心倍增：心理压力大幅释放"
        ]
      },
      {
        "choice_id": "C",
        "text": "主攻本校熟悉课题组与导师推免考核，提前进入实验室开展毕设与科研",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 本校稳健",
          "intent": "熟悉的人际与科研环境，名额最为稳健",
          "tradeoff": "放弃外部名校探索机会"
        },
        "result_text": "本校导师欣然为你锁定直博/硕士名额，你提前获得了实验室固定工位与科研资源。",
        "cost": {
          "TU": 3,
          "EP": 40
        },
        "variable_delta": {
          "research": 8,
          "academic": 6,
          "reputation": 8
        },
        "tag_add": [
          "FLAG_REC_LOCAL_PASSED"
        ],
        "qualitative_changes": [
          "🔬 提前入组：锁定本校课题组推免直通车",
          "🌟 师长关照：获得本校知名导师全力托底",
          "⏳ 节奏从容：省去跨校奔波面试负担"
        ]
      },
      {
        "choice_id": "D",
        "text": "评估自身绩点排名处于保研边缘，果断停止推免投入，转战统考或求职",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 及时止损",
          "intent": "避免在无把握的推免竞争中浪费宝贵时间",
          "tradeoff": "彻底退出保研路线竞争"
        },
        "result_text": "你清醒地收回了精力，将全部时间投入到考研数学二轮强化或秋招面试刷题中。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "focus": 6,
          "academic": 4
        },
        "qualitative_changes": [
          "🎯 战略聚焦：果断放弃纠结，聚焦备考/求职",
          "⏳ 释放精力：避免材料准备内耗",
          "🚩 路线分流：全力在单兵主线上冲刺"
        ]
      }
    ]
  },
  {
    "event_id": "WK_003",
    "title": "头部名企暑期实习招聘与转正答辩决战",
    "package": "WK",
    "type": "OPPORTUNITY",
    "priority": "P1",
    "min_month": 27,
    "max_month": 30,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        27,
        28,
        29,
        30
      ],
      "min_vars": {
        "skill": 50,
        "portfolio": 35
      }
    },
    "content": {
      "background": "大三下 5~6 月，字节跳动、阿里巴巴、腾讯等头部大厂暑期实习招聘打响，是拿秋招提前批转正 Offer 的核心跳板。",
      "scene": "实习生需要主导核心业务模块交付并在 8 月底参加转正答辩，答辩评级直接决定能否拿到年薪 35W+ 的顶级 SSP Offer。",
      "conflict": "是全力以赴主导转正大项目，还是稳健完成分配任务，亦或提前返校备考/保研？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "全力争取转正！主动承担核心业务高并发模块研发，围绕转正标准打磨完整答辩",
        "player_hint": {
          "load_level": "Lv3",
          "load_name": "🔥 极限透支 · 冲击顶级 Offer",
          "intent": "斩获顶级大厂校招提前批转正 SSP Offer (年薪 35W+，E04 核心前置)",
          "tradeoff": "实习期间高负荷加班攻坚，需消耗极大精力"
        },
        "result_text": "你在转正答辩中凭借扎实的线上性能优化与优雅的架构设计征服了评委，全票通过提前斩获顶级 SSP Offer！",
        "cost": {
          "TU": 6,
          "EP": 85
        },
        "variable_delta": {
          "portfolio": 20,
          "skill": 18,
          "delivery": 18,
          "reputation": 16,
          "health": -8
        },
        "tag_add": [
          "FLAG_WK_OFFER_SSP"
        ],
        "resume_entry": {
          "category": "INTERNSHIP",
          "chain_id": "EXP_WK_INTERN_02",
          "stage_contribution": "CORE",
          "title": "一线大厂核心业务部暑期研发实习生 (转正获评 SSP)",
          "description": "主导核心高并发模块性能重构，压测 QPS 提升 40%，以卓越评级通过转正答辩，斩获最高档校招录用。"
        },
        "qualitative_changes": [
          "🎉 顶级录用：提前锁定顶级大厂 SSP Offer (年薪 35W+)！",
          "💻 工业级大成：具备顶级互联网核心业务一线研发履历",
          "📦 交付巅峰：高并发与业务收口能力获得行业最高认可"
        ]
      },
      {
        "choice_id": "B",
        "text": "稳定完成导师分配的常规业务需求，不额外争抢核心职责，留精力准备秋招海投",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 稳健实习",
          "intent": "获得优质中大厂名企实习履历与常规转正/秋招竞争力",
          "tradeoff": "转正评级为常规白菜/SP 档"
        },
        "result_text": "你稳健地完成了实习期各项任务，顺利通过转正考核，拿到了中大厂 SP 级意向书！",
        "cost": {
          "TU": 4,
          "EP": 50
        },
        "variable_delta": {
          "portfolio": 12,
          "skill": 10,
          "delivery": 10,
          "reputation": 8
        },
        "tag_add": [
          "FLAG_WK_OFFER_SP"
        ],
        "resume_entry": {
          "category": "INTERNSHIP",
          "chain_id": "EXP_WK_INTERN_02",
          "stage_contribution": "PARTICIPANT",
          "title": "知名互联网企业暑期研发实习生",
          "description": "参与核心系统业务迭代开发与线上维护，保质保量完成各项开发需求，获转正录用。"
        },
        "qualitative_changes": [
          "💼 优质录用：斩获知名名企 SP 级校招意向书 (年薪 22W~28W)",
          "💻 履历沉淀：获得大厂认可的规范工程开发经历",
          "🔋 节奏平稳：身心状态保持稳定"
        ]
      },
      {
        "choice_id": "C",
        "text": "提前结束实习返校，集中处理考研最后冲刺、保研确认或毕业论文准备",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 提前返校",
          "intent": "放弃转正窗口，将全部时间释放给升学主线决战",
          "tradeoff": "错失大厂提前批转正机会"
        },
        "result_text": "你向主管坦诚沟通了升学志向，妥善交接工作后返校，将全部精力投入到大四决战中。",
        "cost": {
          "TU": 1,
          "EP": 15
        },
        "variable_delta": {
          "focus": 8,
          "academic": 6,
          "reputation": 4
        },
        "qualitative_changes": [
          "🎯 战略聚焦：释放全部时间给升学复习",
          "🌟 体面交接：规范的工作交接留下良好职场口碑",
          "⏳ 自由度释放：免除日常通勤与打卡负担"
        ]
      }
    ]
  },
  {
    "event_id": "AI_006",
    "title": "咖啡厅深聊：AI-Lab 核心团队邀请与阶段晋升",
    "package": "AI",
    "type": "HIDDEN",
    "priority": "P0",
    "min_month": 26,
    "max_month": 26,
    "repeatable": false,
    "unlock_condition": {
      "has_tags": [
        "FLAG_AI_ACCEPTS_REVISION"
      ]
    },
    "content": {
      "background": "大三下学期，你凭借扎实的代码、两次按时高质交付以及极强的受挫返工韧性，在实验室内部考核中名列前茅。",
      "scene": "实验室创始人与核心教授亲自约见你：“你展现出了远超同龄人的工程交付韧性。我们正式邀请你以核心骨干身份加入 AI-Lab，主导前沿企业级商业项目攻坚！”",
      "conflict": "是正式晋升为 Deep 核心骨干主导研发，还是因精力原因体面退出？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "正式加入！以核心骨干身份深度入组，主导企业级智能体平台研发",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 晋升核心",
          "intent": "正式晋升为 AI-Lab Deep 核心成员 (每月驻留 3 TU + 35 EP)，问鼎极客创业终局 (E05)",
          "tradeoff": "承担更重大的企业级系统研发责任"
        },
        "result_text": "你在热烈的掌声中正式成为 AI-Lab 核心开发者，拥有了独立负责核心子模块架构的最高权限！",
        "cost": {
          "TU": 4,
          "EP": 60
        },
        "variable_delta": {
          "ai_depth": 20,
          "delivery": 18,
          "portfolio": 18,
          "reputation": 18
        },
        "tag_add": [
          "FLAG_AI_JOINED_DEEP"
        ],
        "future_event": {
          "event_id": "AI_007",
          "trigger_month": 34,
          "forced": true
        },
        "resume_entry": {
          "category": "PROJECT_EXP",
          "chain_id": "EXP_AI_LAB_01",
          "stage_contribution": "CORE",
          "title": "AI-Lab 核心开发者 / 企业级 Agent 平台架构师",
          "description": "主导多智能体协作框架底层通信与状态机设计，推动企业级场景落地，沉淀前沿极客工程规范。"
        },
        "qualitative_changes": [
          "🤖 极客巅峰：正式晋升为 AI-Lab 核心团队骨干！",
          "💻 顶级资产：主导企业级 Agent 平台核心架构设计",
          "🌟 行业声誉：成为前沿技术圈公认的实力大牛"
        ]
      },
      {
        "choice_id": "B",
        "text": "坦诚评估大三大四精力需倾斜至考研/保研/秋招，体面婉拒深度邀约",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 体面退出",
          "intent": "保留已完成的极客经历与极佳口碑，不进入深度高负荷驻留",
          "tradeoff": "不再参与后续极客战场商业项目"
        },
        "result_text": "教授和学长对你的坦诚与清晰规划表示理解，并为你撰写了极高评价的推荐信。口碑完美保留！",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "reputation": 12,
          "focus": 8,
          "academic": 6
        },
        "tag_add": [
          "FLAG_AI_POLITELY_EXITED"
        ],
        "qualitative_changes": [
          "🌟 极佳口碑：获得实验室教授与团队极高评价推荐信",
          "🎯 战略聚焦：全心聚焦大四升学或校招决战",
          "🚩 体面收口：AI-Lab 路线圆满达成体面退出"
        ]
      }
    ]
  },
  {
    "event_id": "RE_001",
    "title": "9 月校内推免资格正式遴选公示与研招网系统确认",
    "package": "RE",
    "type": "DEVELOPMENT",
    "priority": "P0",
    "min_month": 33,
    "max_month": 33,
    "repeatable": false,
    "unlock_condition": {
      "has_tags": [
        "FLAG_REC_TOP_CAMP_PASSED"
      ]
    },
    "content": {
      "background": "大四上 9 月，教务处正式公示本届本科生推荐免试攻读研究生名额名单，全国研招网推免系统开放确认。",
      "scene": "你凭借优异的综合战力（高 GPA + 权威夏令营优秀营员 + 顶尖科研资产）毫无悬念荣登保研推免榜首！",
      "conflict": "是正式提交确认锁定顶尖名校推免录取，还是延迟比较，亦或放弃推免？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "在研招网推免系统提交确认！正式锁定清北华五顶尖名校推免直博/学硕录取通知书",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 锁定学术巅峰",
          "intent": "正式达成 E01 顶尖推免·学术新星 / E02 常规推免·名校深造 终局！",
          "tradeoff": "提前结束大四升学焦虑，开启本科科研阶段"
        },
        "result_text": "在研招网点击【接受待录取】的那一刻，屏幕弹出灿烂的金色通知书！四年拼搏在此刻绽放，学术前途一片光明！",
        "cost": {
          "TU": 2,
          "EP": 20
        },
        "variable_delta": {
          "academic": 15,
          "research": 15,
          "reputation": 15,
          "family": 15
        },
        "tag_add": [
          "FLAG_REC_OFFER_ACCEPTED"
        ],
        "resume_entry": {
          "category": "HONORS",
          "chain_id": "EXP_REC_CAMP_01",
          "stage_contribution": "LEADER",
          "title": "教育部推荐免试研究生 (直博/推免拟录取)",
          "description": "以前 5% 优异学业排名与权威科研成果获得免试攻读研究生资格，提前锁定国家级顶尖学术席位。"
        },
        "qualitative_changes": [
          "🎉 金榜题名：正式锁定顶尖名校推免直博/硕士录取！",
          "🏡 门楣荣耀：父母倍感欣慰自豪，家庭支持满格",
          "🚩 终局锁定：保研主线圆满大功告成！"
        ]
      },
      {
        "choice_id": "B",
        "text": "放弃推免资格！将名额让给候补同学，遵从内心追求直接投身产业界创业与大厂研发",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 弃保从工",
          "intent": "将全部实力投入到极客创业或秋招顶尖年薪争夺中",
          "tradeoff": "放弃体制化学术保研名额"
        },
        "result_text": "你的果敢决定震惊了全院，辅导员赞叹你的魄力。你轻装上阵，全面杀入秋招核心战场！",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "focus": 10,
          "portfolio": 10,
          "reputation": 8
        },
        "tag_add": [
          "FLAG_REC_EXITED_FOR_WORK"
        ],
        "qualitative_changes": [
          "💼 魄力非凡：毅然投身产业界顶级技术战场",
          "🎯 极致专注：心无旁骛杀入校招秋招决战",
          "🌟 行业口碑：技术自信与魄力赢得同行钦佩"
        ]
      }
    ]
  },
  {
    "event_id": "WK_002",
    "title": "大四上秋招决战：头部大厂核心研发终面与 Offer 抉择",
    "package": "WK",
    "type": "DEVELOPMENT",
    "priority": "P0",
    "min_month": 34,
    "max_month": 35,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        34,
        35
      ]
    },
    "content": {
      "background": "金九银十秋招巅峰月，你收到了多家一线大厂核心技术研发部的线下终面邀请。",
      "scene": "终面由技术 VP 与首席科学家亲自把关，深入死磕分布式系统高可用、大模型推理加速与实际线上故障排查经验。",
      "conflict": "是围绕核心架构与底层技术深挖冲击年薪 35W+ SSP 岗位，还是强调业务落地争取常规研发岗？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "冲击技术上限！围绕底层架构创新、高并发压力测试与开源 Showcase 深入论述",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 冲击顶级 SSP",
          "intent": "斩获年薪 35W+ 顶级大厂核心研发 SSP Offer (E04 终极前置)",
          "tradeoff": "对技术底蕴与真实作品集要求极高，若能力不足存在被拒风险"
        },
        "result_text": "首席科学家对你的系统视野与真实交付代码赞不绝口，当场拍板发放最高档 SSP Offer (年薪 38W + 签字费 + 股票期权)！",
        "cost": {
          "TU": 4,
          "EP": 60
        },
        "variable_delta": {
          "portfolio": 18,
          "skill": 18,
          "delivery": 18,
          "reputation": 18,
          "family": 15
        },
        "tag_add": [
          "FLAG_WK_OFFER_SSP_ACCEPTED"
        ],
        "resume_entry": {
          "category": "HONORS",
          "chain_id": "EXP_WK_OFFER_01",
          "stage_contribution": "LEADER",
          "title": "一线大厂核心业务研发部 SSP 录用 (年薪 38W)",
          "description": "通过高难度算法与分布式系统架构多轮终面，斩获顶级互联网科技公司核心研发最高档校招录用。"
        },
        "qualitative_changes": [
          "🎉 顶级校招：斩获顶级大厂核心研发最高档 SSP Offer (年薪 38W)！",
          "💻 技术翘楚：技术功底与工程作品获得行业顶级认可",
          "🏡 家庭自豪：高薪待遇大幅改善家庭经济底气"
        ]
      },
      {
        "choice_id": "B",
        "text": "稳健求职！强调踏实的业务工程交付、快速学习能力与团队协作落地经验",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 稳健拿下 SP",
          "intent": "稳稳拿下中大厂优质名企 SP Offer (年薪 22W~28W，E06 前置)",
          "tradeoff": "岗位定位偏向常规业务研发"
        },
        "result_text": "面试官认为你务实稳重、工程习惯良好，顺利向你发放了优质名企研发 SP 录用意向书！",
        "cost": {
          "TU": 3,
          "EP": 40
        },
        "variable_delta": {
          "portfolio": 12,
          "skill": 10,
          "delivery": 12,
          "family": 10
        },
        "tag_add": [
          "FLAG_WK_OFFER_SP_ACCEPTED"
        ],
        "resume_entry": {
          "category": "HONORS",
          "chain_id": "EXP_WK_OFFER_01",
          "stage_contribution": "CORE",
          "title": "知名科技名企核心研发部 SP 录用 (年薪 25W)",
          "description": "凭借扎实的业务系统开发与工程交付能力，顺利通过校招考核获得优质名企研发录用。"
        },
        "qualitative_changes": [
          "💼 优质录用：顺利签约知名名企研发 SP 岗 (年薪 25W)",
          "📦 交付认可：严谨踏实的工程素养赢得面试官信赖",
          "🔋 踏实从容：秋招顺利上岸，生活重回平稳"
        ]
      },
      {
        "choice_id": "C",
        "text": "选择体制内央企/选调生稳定赛道，参加行测面试与综合素质政审考评",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 体制内上岸",
          "intent": "斩获省市定向选调生/重点央国企公职录用 (E08 终极前置)",
          "tradeoff": "看重综合素质、家庭背景与政治面貌"
        },
        "result_text": "你凭借优异的综合成绩与出色的综合表达，顺利通过定向选调生考评并完成政审签约！",
        "cost": {
          "TU": 3,
          "EP": 40
        },
        "variable_delta": {
          "family": 18,
          "reputation": 14,
          "academic": 8,
          "social": 8
        },
        "tag_add": [
          "FLAG_WK_OFFER_CIVIL_ACCEPTED"
        ],
        "resume_entry": {
          "category": "HONORS",
          "chain_id": "EXP_WK_OFFER_01",
          "stage_contribution": "CORE",
          "title": "重点体制内央企/省直定向选调生录用",
          "description": "通过高标准笔面试与政审考核，入选重点公职与数字化研发编制序列。"
        },
        "qualitative_changes": [
          "🏛️ 铁饭碗锁定：成功录用为重点公职体制内骨干！",
          "🏡 家族荣耀：工作稳定、福利健全，家庭极其满意",
          "🌟 综合素质：综合组织协调与政策理解力获得认可"
        ]
      }
    ]
  },
  {
    "event_id": "AI_007",
    "title": "真实战场线：产业 AI 商业项目试做挑战与极客创业",
    "package": "AI",
    "type": "HIDDEN",
    "priority": "P0",
    "min_month": 34,
    "max_month": 36,
    "repeatable": false,
    "unlock_condition": {
      "has_tags": [
        "FLAG_AI_JOINED_DEEP"
      ]
    },
    "content": {
      "background": "大四上学期，AI-Lab 孵化的一家前沿具身智能与大模型 AI 创业公司获得数千万顶级风投。",
      "scene": "创始人邀请你担任初创核心技术合伙人：“这是真实的商业战场，我们需要你独立带队攻坚核心生成式多智能体调度系统，直接对客户业务上线负责！”",
      "conflict": "是接受挑战作为核心合伙人创业，还是与资深技术骨干协作分担，亦或体面退出？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "接受独立负责人角色！从需求澄清一直跟到上线交付，作为核心技术合伙人出征！",
        "player_hint": {
          "load_level": "Lv3",
          "load_name": "🔥 极限透支 · 极客创业合伙人",
          "intent": "问鼎 E05 极客创业·核心力量 终极大结局 (年薪 30W+ 2% 期权)",
          "tradeoff": "承担真实商业上线责任，需极高强度的技术攻坚与身心付出"
        },
        "result_text": "你带领团队连续攻克三个核心算法难题，系统在千万级真实生产环境中零故障稳定运行！你正式成为核心合伙人，问鼎极客巅峰！",
        "cost": {
          "TU": 7,
          "EP": 100
        },
        "variable_delta": {
          "ai_depth": 25,
          "delivery": 25,
          "portfolio": 25,
          "reputation": 25,
          "health": -10
        },
        "tag_add": [
          "FLAG_AI_CORE_ENTREPRENEUR"
        ],
        "resume_entry": {
          "category": "PROJECT_EXP",
          "chain_id": "EXP_AI_LAB_01",
          "stage_contribution": "LEADER",
          "title": "前沿 AI 创业团队核心技术合伙人 / 智能体系统架构总监",
          "description": "全面负责企业级多智能体调度框架落地，管理核心研发团队，实现数千万真实商业流量平稳交付。"
        },
        "qualitative_changes": [
          "🚀 极客创世：成为前沿 AI 创业团队核心合伙人！",
          "🤖 技术巅峰：大模型多智能体工业级落地能力傲视同侪",
          "🌟 行业声誉：成为前沿工业界瞩目的青年技术领袖"
        ]
      },
      {
        "choice_id": "B",
        "text": "作为资深核心研发主抓核心子模块，与全职工程师协同攻关，稳妥上线",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 核心研发",
          "intent": "以技术专家身份深度参与，降低单点商业失败风险",
          "tradeoff": "分享部分合伙人期权收益"
        },
        "result_text": "你负责的核心模块性能卓越，产品成功商用落地，团队为你发放了大额项目奖金与期权奖励！",
        "cost": {
          "TU": 5,
          "EP": 75
        },
        "variable_delta": {
          "ai_depth": 18,
          "delivery": 18,
          "portfolio": 18,
          "reputation": 16
        },
        "tag_add": [
          "FLAG_AI_CORE_ENTREPRENEUR"
        ],
        "qualitative_changes": [
          "💻 工业实战：完成商业级大模型系统核心研发",
          "📦 卓越交付：按时高质闭环商业客户交付",
          "🌟 极高声誉：获得业界高度赞誉与丰厚期权"
        ]
      },
      {
        "choice_id": "C",
        "text": "评估后婉拒商业化对赌，优先保全毕业设计与常规求职/升学安排",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 体面退出",
          "intent": "体面退出商业项目，保留全部既有 AI-Lab 成果与极佳口碑",
          "tradeoff": "退出真实创业战场"
        },
        "result_text": "团队为你举办了温馨的欢送会，感谢你在前期的突出贡献，保留了终身顾问身份。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "reputation": 10,
          "focus": 6
        },
        "tag_add": [
          "FLAG_AI_POLITELY_EXITED"
        ],
        "qualitative_changes": [
          "🌟 终身口碑：保留极客圈极高声誉与深厚人脉",
          "🎯 平稳毕业：从容处理本科毕业设计",
          "⏳ 自由度满格：生活节奏恢复宁静"
        ]
      }
    ]
  },
  {
    "event_id": "GE_001",
    "title": "全国硕士研究生招生考试：12 月初试决战",
    "package": "GE",
    "type": "DEVELOPMENT",
    "priority": "P0",
    "min_month": 36,
    "max_month": 36,
    "repeatable": false,
    "unlock_condition": {
      "has_tags": [
        "FLAG_GE_PRIMARY_CONFIRMED"
      ]
    },
    "content": {
      "background": "寒风凛冽的 12 月最后一个周末，全国硕士研究生统一招生考试在清晨敲响开考铃。",
      "scene": "政治、英语、数学与专业课试卷依次发下，无数个在自习室刷题的清晨与黑夜，在此一举。",
      "conflict": "是稳扎稳打按部就班作答，还是优先冲击优势科目与高分大题？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "按既定节奏稳扎稳打！先拿下全部基础有把握的分数，再沉着攻克综合大题",
        "player_hint": {
          "load_level": "Lv3",
          "load_name": "🔥 极限透支 · 决战初试",
          "intent": "发挥长期备考积累，全力争取考研初试高分过线 (E03 考研上岸核心决战)",
          "tradeoff": "两整天的高强度连续作答，考完后身心彻底释放"
        },
        "result_text": "合上笔盖的那一刻，你有如释重负的释怀。走出考场，天空中漫天飘起了初冬的第一场雪。四年努力问心无愧！",
        "cost": {
          "TU": 5,
          "EP": 80
        },
        "variable_delta": {
          "academic": 15,
          "focus": 15,
          "delivery": 12,
          "health": -6
        },
        "tag_add": [
          "FLAG_GE_EXAM_TAKEN"
        ],
        "future_event": {
          "event_id": "GE_002",
          "trigger_month": 38,
          "forced": true
        },
        "resume_entry": {
          "category": "ACADEMIC",
          "chain_id": "EXP_GE_EXAM_01",
          "stage_contribution": "CORE",
          "title": "全国硕士研究生统一招生考试 (一战初试)",
          "description": "完成高强度数学、计算机专业课408与统考科目系统备考，沉着完成全国统考初试。"
        },
        "qualitative_changes": [
          "📝 决战收官：圆满完成全国硕士研究生统考初试！",
          "🎯 磨砺意志：四年中最坚韧自律的一段备考长征",
          "⏳ 静候出分：等待次年 2 月考研初试成绩公布"
        ]
      },
      {
        "choice_id": "B",
        "text": "全力冲击优势科目与高难度压轴大题，力争考出 400+ 顶尖高分",
        "player_hint": {
          "load_level": "Lv3",
          "load_name": "🔥 极限透支 · 孤注一掷",
          "intent": "上限导向，以极高答题速度冲击总分榜首",
          "tradeoff": "时间分配风险更高，基础题若粗心存在失分风险"
        },
        "result_text": "你在专业课与数学大题上写满了缜密的证明，走出考场时精疲力竭，但内心充满对高分的期盼！",
        "cost": {
          "TU": 5,
          "EP": 85
        },
        "variable_delta": {
          "academic": 12,
          "focus": 12,
          "skill": 8,
          "health": -8
        },
        "tag_add": [
          "FLAG_GE_EXAM_TAKEN"
        ],
        "future_event": {
          "event_id": "GE_002",
          "trigger_month": 38,
          "forced": true
        },
        "qualitative_changes": [
          "📝 极限输出：完成高难度压轴大题深度作答",
          "⚡ 技术发挥：专业课理论功底得到极限展现",
          "🔋 身心释放：长达一年的考研备考正式交卷"
        ]
      }
    ]
  },
  {
    "event_id": "GE_002",
    "title": "大四下考研初试出分与复试/调剂抉择",
    "package": "GE",
    "type": "DEVELOPMENT",
    "priority": "P0",
    "min_month": 38,
    "max_month": 38,
    "repeatable": false,
    "unlock_condition": {
      "has_tags": [
        "FLAG_GE_EXAM_TAKEN"
      ]
    },
    "content": {
      "background": "大四下 2 月下旬，考研初试成绩正式公布，研招网查分系统开放。",
      "scene": "你颤抖着输入准考证号，屏幕上弹出了你的总分成绩单！",
      "conflict": "依据备考充分度结算考研初试过线情况。"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "查询初试成绩！根据备考积累全力准备 3 月研究生复试机试与面试",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 查分与复试",
          "intent": "若备考充分度达标直接上岸（E03 金榜题名），若未过线平稳分流二战或春招",
          "tradeoff": "需认真准备专业机试与英语口语"
        },
        "result_text": "初试成绩高分过线！你在 3 月的复试机试中凭借前三年的代码功底技惊四座，成功斩获全日制硕士录取通知书！",
        "cost": {
          "TU": 4,
          "EP": 50
        },
        "variable_delta": {
          "academic": 15,
          "focus": 10,
          "family": 15,
          "reputation": 10
        },
        "tag_add": [
          "FLAG_GE_PASSED_FINAL"
        ],
        "resume_entry": {
          "category": "HONORS",
          "chain_id": "EXP_GE_EXAM_01",
          "stage_contribution": "LEADER",
          "title": "全国硕士研究生统考一战高分录取",
          "description": "以初试高分过线并顺利通过复试机试与专业面试，成功录取为重点院校全日制硕士研究生。"
        },
        "qualitative_changes": [
          "🎉 一战成硕：考研初试复试双双高分过线，成功上岸！",
          "📚 学术延续：顺利考取目标名校全日制研究生",
          "🏡 阖家欢喜：父母激动落泪，家庭满载荣耀"
        ]
      },
      {
        "choice_id": "B",
        "text": "若初试出现遗憾未达预期，冷静接受结果，在家庭支持下选择全职脱产二战",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 重整旗鼓",
          "intent": "接受不完美，在家庭温暖包容下积蓄力量重整旗鼓 (E09 考研二战)",
          "tradeoff": "毕业后将进入一年脱产备考期"
        },
        "result_text": "父母握着你的手说：“孩子，一次考试定义不了你的人生，家里全力支持你再战一年！”你心中重新燃起斗志！",
        "cost": {
          "TU": 2,
          "EP": 20
        },
        "variable_delta": {
          "family": 12,
          "focus": 8,
          "reputation": 4
        },
        "tag_add": [
          "FLAG_GE_RETRY_CHOSEN"
        ],
        "qualitative_changes": [
          "🏡 家庭托底：感受父母最无私温暖的包容与经济支持",
          "🎯 重整旗鼓：卸下包袱，坚定备战考研二战",
          "🚩 路线分流：毕业收口导向考研二战深造准备"
        ]
      }
    ]
  },
  {
    "event_id": "AC_005",
    "title": "本科毕业设计：论文盲审与终期答辩",
    "package": "AC",
    "type": "NORMAL",
    "priority": "P0",
    "min_month": 41,
    "max_month": 41,
    "repeatable": false,
    "unlock_condition": {
      "month_is": 41
    },
    "content": {
      "background": "大四下 5 月，大学四年最后一门大考——本科毕业设计论文盲审与公开答辩到来。",
      "scene": "全系教授与答辩专家齐聚一堂，盲审意见书与查重报告依次揭晓。",
      "conflict": "是全面展示四年理论与工程大成，还是重点演示工程系统，亦或确保合规通过？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "全面答辩！将四年的系统架构、开源 Showcase 与理论推导完整呈现",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 卓越毕设",
          "intent": "冲击全系「校级优秀毕业设计（论文）」荣誉",
          "tradeoff": "需精心打磨答辩 PPT 与现场演示 Demo"
        },
        "result_text": "你的答辩从容自信、系统运行流畅，全票获评【校级优秀毕业设计（前 2%）】，为大学四年画上完美句号！",
        "cost": {
          "TU": 4,
          "EP": 50
        },
        "variable_delta": {
          "academic": 15,
          "portfolio": 12,
          "reputation": 14,
          "delivery": 12
        },
        "tag_add": [
          "FLAG_AC_EXCELLENT_THESIS"
        ],
        "resume_entry": {
          "category": "ACADEMIC",
          "chain_id": "EXP_AC_THESIS_01",
          "stage_contribution": "LEADER",
          "title": "校级优秀本科毕业设计（论文）",
          "description": "独立研发完整系统架构并完成高水平毕业论文，全票通过答辩获评校级优秀毕业设计（前 2%）。"
        },
        "qualitative_changes": [
          "🏆 最高荣誉：全票获评校级优秀毕业设计（前 2%）！",
          "📚 学术圆满：大学四年学业迎来最闪耀的收官答卷",
          "🌟 师长赞誉：全系教授对你的工程素养赞赏有加"
        ]
      },
      {
        "choice_id": "B",
        "text": "稳健答辩！重点演示系统可运行功能与核心模块，确保规范合规通过",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 稳健通关",
          "intent": "顺利通过毕业答辩，平稳拿到工学学士学位",
          "tradeoff": "表现中规中矩，无额外特殊荣誉"
        },
        "result_text": "答辩专家认真审核了你的代码与论文，宣布全票通过答辩，准予毕业并授予学士学位！",
        "cost": {
          "TU": 2,
          "EP": 30
        },
        "variable_delta": {
          "academic": 8,
          "delivery": 6,
          "reputation": 6
        },
        "qualitative_changes": [
          "🎓 顺利毕业：全票通过答辩，准予授予工学学士学位",
          "📚 学业收口：四年课程学分与毕业设计全部圆满完成",
          "🔋 轻松释怀：卸下学业重担，迎接毕业典礼"
        ]
      }
    ]
  },
  {
    "event_id": "GRAD_001",
    "title": "大学四年毕业典礼：挥帽散场与人生简历收口",
    "package": "PU",
    "type": "NORMAL",
    "priority": "P0",
    "min_month": 42,
    "max_month": 42,
    "repeatable": false,
    "unlock_condition": {
      "month_is": 42
    },
    "content": {
      "background": "大四下 6 月，夏日蝉鸣悠扬，体育馆里响起了《凤凰花开的路口》，大学四年毕业典礼如期举行。",
      "scene": "你身着学士服，接过校长拨穗的学士帽。身旁的室友、恋人、同窗依依惜别，大屏幕上闪回着四年的点点滴滴。",
      "conflict": "四年的每一个选择、每一次自律、每一张任务卡，最终在今天沉淀为你手里的人生底牌。"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "拨穗礼成！生成属于我的大学四年标准简历与毕业去向总览",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 毕业收口",
          "intent": "检视四年全部经历、核心头衔、具体院校/企业录取与薪资待遇、成就与主要遗憾",
          "tradeoff": "游戏通关结算"
        },
        "result_text": "学士帽高高抛向空中！大学四年正式落幕，新的星辰大海在你脚下徐徐展开！",
        "cost": {
          "TU": 0,
          "EP": 0
        },
        "variable_delta": {
          "reputation": 5,
          "family": 5
        },
        "tag_add": [
          "FLAG_GRADUATION_COMPLETED"
        ],
        "qualitative_changes": [
          "🎓 毕业礼成：圆满完成大学四年全部旅程！",
          "📜 简历收口：生成符合简历大赛标准的个人专属履历",
          "🌟 人生启航：带着四年的沉淀牌面奔赴下一场山海！"
        ]
      }
    ]
  },
  {
    "event_id": "ROUTINE_ACADEMIC",
    "title": "图书馆深度自习：硬核专业课真题与算法刷题",
    "package": "AC",
    "type": "NORMAL",
    "priority": "P3",
    "min_month": 1,
    "max_month": 41,
    "repeatable": true,
    "unlock_condition": {},
    "content": {
      "background": "本月课余时间，阳光洒进图书馆自习室，周围满是伏案苦读的同学。",
      "scene": "你可以利用这段整块时间，自主安排专业核心课复习、刷算法 LeetCode 题目或研读前沿教材。",
      "conflict": "是全天高强度刷题攻关，还是温和查漏补缺，亦或浅尝辄止？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "高强度攻坚！泡在图书馆刷完 50 道高频算法与专业课难点章节",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 深度自律",
          "intent": "大幅提升专业技能与学业专注度",
          "tradeoff": "消耗当月大块课余时间"
        },
        "result_text": "你一口气搞懂了动态规划与图论高频考点，算法逻辑更加清晰，学业信心大幅增强！",
        "cost": {
          "TU": 3,
          "EP": 40
        },
        "variable_delta": {
          "skill": 6,
          "academic": 6,
          "focus": 6
        },
        "qualitative_changes": [
          "⚡ 编程算法：算法思维与解题熟练度明显提升",
          "📚 专业学业：加深对核心课程难点理解",
          "🎯 专注定力：保持高效专注的自律心流"
        ]
      },
      {
        "choice_id": "B",
        "text": "温和复习，整理本月课堂笔记与实验报告，打牢基本功",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 查漏补缺",
          "intent": "巩固日常课程基础，消耗较低精力",
          "tradeoff": "技能提升相对温和"
        },
        "result_text": "笔记整理得井井有条，及时消除了课堂遗留疑点，日常学业保持平稳。",
        "cost": {
          "TU": 2,
          "EP": 20
        },
        "variable_delta": {
          "academic": 4,
          "focus": 3
        },
        "qualitative_changes": [
          "📚 课业稳固：及时消化日常教学知识点",
          "🎯 状态良好：学习节奏轻松从容",
          "⏳ 自由度足：留出充裕的课外调节时间"
        ]
      },
      {
        "choice_id": "C",
        "text": "借阅两本计算机前沿开源与商业化科普书籍，开阔行业眼界",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 行业博览",
          "intent": "了解科技前沿动态与商业模式，拓展视野",
          "tradeoff": "不直接带来考试提分"
        },
        "result_text": "书中的前沿案例让你对科技产业格局有了更广阔的理解，思维格局更加开阔。",
        "cost": {
          "TU": 1,
          "EP": 15
        },
        "variable_delta": {
          "portfolio": 2,
          "social": 2,
          "focus": 2
        },
        "qualitative_changes": [
          "💡 行业眼界：拓展对科技产业与商业模式的认知",
          "🎯 认知升级：跳出单一刷题视角",
          "⏳ 轻松自如：愉悦的阅读体验"
        ]
      }
    ]
  },
  {
    "event_id": "ROUTINE_HEALTH",
    "title": "操场夜跑与规律作息：身心调理与精力充能",
    "package": "HE",
    "type": "NORMAL",
    "priority": "P3",
    "min_month": 1,
    "max_month": 41,
    "repeatable": true,
    "unlock_condition": {},
    "content": {
      "background": "晚风习习，校园田径场上灯火通明，不少同学正在慢跑锻炼。",
      "scene": "科学的体育锻炼与规律作息是支撑大学四年长跑的核心引擎，有助于恢复精力上限与缓解焦虑。",
      "conflict": "是坚持夜跑锻炼增强体质，还是规律早睡早起，亦或散步放松？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "坚持每周操场 5 公里夜跑！强化心肺功能，培养坚韧体魄",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 强身健体",
          "intent": "大幅恢复身心健康，提高精力储备上限",
          "tradeoff": "跑完后需洗澡拉伸休息"
        },
        "result_text": "大汗淋漓之后冲个热水澡，全身肌肉得到放松，焦虑一扫而空，睡眠质量大幅提升！",
        "cost": {
          "TU": 2,
          "EP": 10
        },
        "variable_delta": {
          "health": 12,
          "focus": 4
        },
        "qualitative_changes": [
          "🌿 强身健体：体能与抵抗力得到显著增强",
          "🔋 元气充能：精力储备上限稳步回升",
          "🎯 焦虑缓解：运动多巴胺带来极佳心理韧性"
        ]
      },
      {
        "choice_id": "B",
        "text": "执行严苛的“晚上 11 点熄灯、清晨 7 点起床”规律作息周期",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 规律调养",
          "intent": "调理生物钟，保持白天全天清醒专注",
          "tradeoff": "需戒掉深夜刷手机的不良习惯"
        },
        "result_text": "充足规律的睡眠让你白天听课不再打瞌睡，神清气爽，身体状态平稳健康。",
        "cost": {
          "TU": 1,
          "EP": 5
        },
        "variable_delta": {
          "health": 8,
          "focus": 6
        },
        "qualitative_changes": [
          "🌿 作息健康：建立极度自律的黄金生物钟",
          "🎯 白天专注：上课与自习效率显著提高",
          "🔋 疲劳消退：彻底告别白天困倦嗜睡"
        ]
      },
      {
        "choice_id": "C",
        "text": "与好友在校园林荫道漫步闲聊，放松心情倾诉近期烦恼",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 心理倾诉",
          "intent": "通过同伴社交倾诉缓解精神压力，兼顾人际关系",
          "tradeoff": "运动量相对较小"
        },
        "result_text": "在真诚的交流中心情豁然开朗，感受到同窗的温暖支持，内心倍感轻松。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "health": 6,
          "social": 5
        },
        "qualitative_changes": [
          "🤝 心理抚慰：获得好友真诚理解与情感支持",
          "🌿 压力释放：心理负能量得到有效排解",
          "🔋 心情愉悦：以积极心态面对后续挑战"
        ]
      }
    ]
  },
  {
    "event_id": "ROUTINE_SOCIAL",
    "title": "周末同学校友聚会：交流信息差与行业前沿",
    "package": "SO",
    "type": "NORMAL",
    "priority": "P3",
    "min_month": 1,
    "max_month": 41,
    "repeatable": true,
    "unlock_condition": {},
    "content": {
      "background": "周末社团与班级组织聚餐，来自不同学院的同学以及已毕业的校友学长齐聚一堂。",
      "scene": "大家热烈交流着近期的竞赛信息、大厂实习内推名额、导师课题组风气与考研保研最新政策风向。",
      "conflict": "是主动请教高年级学长搜集关键信息差，还是深度联络同窗友谊，亦或安静倾听？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "主动与高年级校友学长深度交流，打听大厂实习内推与保研导师真实风评",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 破除信息差",
          "intent": "拓展高价值人脉圈，获取一手行业与升学真实信息",
          "tradeoff": "需主动沟通与敬酒交流"
        },
        "result_text": "学长向你透露了许多官方简章上看不到的关键内幕与避坑指南，并主动加了你的微信！",
        "cost": {
          "TU": 2,
          "EP": 25
        },
        "variable_delta": {
          "social": 10,
          "reputation": 6,
          "portfolio": 2
        },
        "qualitative_changes": [
          "🤝 核心人脉：结识多位热心优秀的行业学长",
          "💡 破除壁垒：掌握权威一手升学/校招信息差",
          "🌟 社交口碑：展现积极大方的同窗交际能力"
        ]
      },
      {
        "choice_id": "B",
        "text": "跟同专业同届好友畅聊近期学业与兴趣，吐槽日常压力，加深同窗羁绊",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 同窗共鸣",
          "intent": "加深班级与好友深度友谊，排解日常压力",
          "tradeoff": "主要在同辈圈子内互动"
        },
        "result_text": "大家互相鼓励打气，分享学习资料与小道消息，寝室与班级关系更加紧密团结！",
        "cost": {
          "TU": 2,
          "EP": 20
        },
        "variable_delta": {
          "social": 8,
          "romance": 2,
          "family": 2
        },
        "qualitative_changes": [
          "🤝 同窗羁绊：增进同届同学互助友谊",
          "🔋 压力排解：在欢声笑语中释放焦虑",
          "🏡 归属感强：体会到浓厚的集体温暖"
        ]
      },
      {
        "choice_id": "C",
        "text": "安静旁听大家的热烈讨论，适时补充几句，记录有价值的信息线索",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 旁听观察",
          "intent": "低社交能耗获取信息，保持独立观察",
          "tradeoff": "社交拓展幅度较小"
        },
        "result_text": "你默默记下了几个关键竞赛时间点与实习渠道，聚会后收获颇丰。",
        "cost": {
          "TU": 1,
          "EP": 15
        },
        "variable_delta": {
          "social": 4,
          "focus": 2
        },
        "qualitative_changes": [
          "💡 信息捕获：梳理出有价值的竞赛与考研线索",
          "🔋 社交低耗：未消耗过多社交心力",
          "🎯 保持冷静：清醒审视他人经验"
        ]
      }
    ]
  },
  {
    "event_id": "AC_006",
    "title": "大一选修课大作业与学术小论文初体验",
    "package": "AC",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 4,
    "max_month": 5,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        4,
        5
      ]
    },
    "content": {
      "background": "大一通识核心课进入结课周，任课教授要求提交一份 3000 字的学术文献综述与思考报告。",
      "scene": "许多同学选择在网络上拼凑降重，而图书馆知网检索与 Latex 论文排版对大一新生而言既陌生又充满挑战。",
      "conflict": "是规范查阅十几篇核心期刊认真撰写规范综述，还是按部就班结合教材总结，亦或赶在死线前速成拼凑？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "深入知网检索 15 篇前沿期刊，用规范学术格式完成深度综述与独立思考",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 学术启蒙",
          "intent": "培养规范学术文献阅读与写作能力，建立扎实学术第一印象",
          "tradeoff": "需投入两整天时间精读论文并学习排版"
        },
        "result_text": "教授在结课报告上给出了满分好评，并在班上公开表扬你的学术严谨性，科研萌芽悄然萌发！",
        "cost": {
          "TU": 3,
          "EP": 40
        },
        "variable_delta": {
          "academic": 8,
          "research": 8,
          "focus": 6,
          "reputation": 4
        },
        "qualitative_changes": [
          "🔬 学术素养：掌握学术文献检索与规范综述写作",
          "📚 课业成绩：斩获通识核心课满分评价",
          "🌟 师长口碑：在教授心中建立严谨治学印象"
        ]
      },
      {
        "choice_id": "B",
        "text": "结合教材核心章节与两篇推荐读物，写一篇立论清晰、规范及格的总结报告",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 稳健达标",
          "intent": "高效完成结课要求，留出充裕精力应对期末考试",
          "tradeoff": "缺少前沿文献探索深度"
        },
        "result_text": "报告结构完整、立论稳妥，顺利拿到良好成绩，课业节奏平稳过渡。",
        "cost": {
          "TU": 2,
          "EP": 20
        },
        "variable_delta": {
          "academic": 5,
          "focus": 3
        },
        "qualitative_changes": [
          "📚 学业达标：平稳获得期末结课良好学分",
          "⏳ 精力留存：为后续数学复习保留了充裕时间",
          "🎯 节奏适宜：平稳度过考核周"
        ]
      },
      {
        "choice_id": "C",
        "text": "利用前人范文和课堂笔记快速拼凑，赶在截止前一小时匆匆提交",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 极速交付",
          "intent": "投入最低成本应付结课作业，释放全部自由时间",
          "tradeoff": "给分偏低，错失一次学术素养训练机会"
        },
        "result_text": "报告虽然勉强及格通过，但查重率偏高，教授批注‘缺少独立思考’，拉低了总评绩点。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "academic": 2,
          "research": -2
        },
        "qualitative_changes": [
          "📚 成绩平平：仅拿到通识课基础及格分",
          "⚠️ 习惯隐患：滋生了应付作业的不良心态",
          "⏳ 自由时间：留出了当周的空闲"
        ]
      }
    ]
  },
  {
    "event_id": "AC_007",
    "title": "大二上操作系统内核实验（OS Lab）与段错误调试",
    "package": "AC",
    "type": "CRISIS",
    "priority": "P1",
    "min_month": 12,
    "max_month": 14,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        12,
        13,
        14
      ]
    },
    "content": {
      "background": "大二上核心硬核专业课《操作系统》内核实验截止在即，要求在简易系统上实现虚拟内存分页与缺页异常处理。",
      "scene": "控制台屏幕上反复滚动着冷冰冰的“Segmentation fault (core dumped)”，GDB 调试追踪到深夜仍无进展，群里一片哀嚎。",
      "conflict": "是通宵利用 GDB 逐行单步调试与分析汇编栈帧，还是与同学结对排查边界指针，亦或只求及格抄写伪代码？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "死磕到底！打开 GDB 汇编调试与内存转储，逐行单步排查页表映射溢出 Bug",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 底层攻坚",
          "intent": "彻底打通虚拟内存与系统调用内核原理，磨练硬核底层调试神技",
          "tradeoff": "需通宵鏖战数小时，次日身心极为疲惫"
        },
        "result_text": "凌晨 3 点，随着最后一行缺页异常处理成功返回，内核终端打印出‘ALL TESTS PASSED’！你彻底吃透了操作系统底层！",
        "cost": {
          "TU": 5,
          "EP": 70
        },
        "variable_delta": {
          "skill": 14,
          "academic": 10,
          "delivery": 10,
          "health": -6,
          "focus": 6
        },
        "tag_add": [
          "FLAG_AC_OS_PASSED"
        ],
        "qualitative_changes": [
          "⚡ 硬核功底：底层内核机制与 GDB 调试能力飞跃",
          "📦 交付力：攻克全专业最难内核大实验",
          "🌿 身体状态：熬夜调试导致短期疲倦"
        ]
      },
      {
        "choice_id": "B",
        "text": "约上同宿舍与同班好友，互相审查代码指针边界，共同梳理内存分配逻辑",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 结对排错",
          "intent": "通过代码审查(Code Review)协同突破难点，兼顾效率与体力",
          "tradeoff": "依赖同伴节奏，思考深度略受分散"
        },
        "result_text": "在相互审查下，同学一眼看出了你页表基址偏移量的越界问题。修复后测试顺利通过，大家击掌庆祝！",
        "cost": {
          "TU": 3,
          "EP": 45
        },
        "variable_delta": {
          "skill": 8,
          "academic": 8,
          "social": 6,
          "delivery": 6
        },
        "qualitative_changes": [
          "🤝 协作共赢：掌握代码审查与团队 Debug 方法",
          "📚 课业平稳：顺利通过操作系统核心测试点",
          "🔋 精力适度：未造成极端透支"
        ]
      },
      {
        "choice_id": "C",
        "text": "只实现基础的分页置换逻辑，放弃高分加分项，保住 60 分基本盘通过",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 及格止损",
          "intent": "投入最少工时规避挂科风险，释放精力保全其他课目",
          "tradeoff": "底层系统功底薄弱，后续大厂系统面试面临短板"
        },
        "result_text": "实验拿到了基础及格分。虽然省下了大把时间，但在面对深层内核原理提问时你依旧底气不足。",
        "cost": {
          "TU": 2,
          "EP": 25
        },
        "variable_delta": {
          "academic": 4,
          "skill": 2
        },
        "qualitative_changes": [
          "📚 基础通关：保全期末实验不挂科基本盘",
          "⏳ 时间保留：免受通宵调试之苦",
          "⚠️ 认知薄弱：底层系统视野未形成突破"
        ]
      }
    ]
  },
  {
    "event_id": "AC_008",
    "title": "大二下计算机网络课程设计：高并发网络通信实现",
    "package": "AC",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 17,
    "max_month": 19,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        17,
        18,
        19
      ]
    },
    "content": {
      "background": "大二下《计算机网络》大作业启动，要求基于 Socket 编写一个支持多客户端并发的高性能 Web 服务器。",
      "scene": "传统多线程阻塞模型只能支撑几百并发，而基于 Epoll 的 I/O 多路复用和事件驱动模型是互联网后端核心基石。",
      "conflict": "是挑战 Epoll 事件驱动异步架构冲击优秀工程作品，还是用标准线程池完成基础功能，亦或调用第三方库交差？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "基于 Linux Epoll 实现 Reactor 高并发事件循环，编写完整的压力测试报告",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 工业级实践",
          "intent": "掌握互联网大厂后端的基石技术，沉淀杀手级网络项目资产",
          "tradeoff": "需要深入理解非阻塞 I/O 与状态机，代码量超千行"
        },
        "result_text": "在压测工具下你的服务器跑出了 10 万 QPS 的惊人吞吐！老师给予满分，该项目成为你简历上的闪亮作品！",
        "cost": {
          "TU": 4,
          "EP": 60
        },
        "variable_delta": {
          "portfolio": 14,
          "skill": 12,
          "delivery": 10,
          "academic": 8
        },
        "tag_add": [
          "FLAG_AC_NETWORK_SERVER"
        ],
        "qualitative_changes": [
          "💻 作品沉淀：拥有可直接写进简历的高并发服务器作品",
          "⚡ 技术飞跃：彻底搞懂 Epoll、非阻塞 I/O 与 Reactor 模式",
          "📦 工程交付：形成完整 Benchmark 压测数据文档"
        ]
      },
      {
        "choice_id": "B",
        "text": "使用多线程线程池模型实现多客户端响应，保证代码健壮与超时处理",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 规范标准",
          "intent": "稳扎稳打满足教学设计所有要求，逻辑严密",
          "tradeoff": "无法承受极端高并发测试，项目亮点相对中规中矩"
        },
        "result_text": "系统运行稳定，代码规范整洁，老师称赞你架构清晰，顺利评为 88 分良好等级！",
        "cost": {
          "TU": 3,
          "EP": 35
        },
        "variable_delta": {
          "skill": 8,
          "portfolio": 6,
          "academic": 6
        },
        "qualitative_changes": [
          "⚡ 编程素养：熟练掌握网络套接字与并发线程池",
          "📚 课业成绩：稳妥收获网络课程高分",
          "🔋 投入产出：时间分配极为均衡"
        ]
      },
      {
        "choice_id": "C",
        "text": "套用简易开源 HTTP 框架快速改写，仅测试通过基础 GET 请求就交差",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 极简过关",
          "intent": "花费最少时间应付课程作业，优先安排其他活动",
          "tradeoff": "答辩被老师追问底层协议时答不上来，评价偏低"
        },
        "result_text": "答辩时被问及 TCP 三次握手和粘包处理细节你支支吾吾，老师给了及格分，略显尴尬。",
        "cost": {
          "TU": 1,
          "EP": 15
        },
        "variable_delta": {
          "academic": 3,
          "reputation": -2
        },
        "qualitative_changes": [
          "📚 课业过关：通过基础答辩要求",
          "⚠️ 基础欠缺：对底层协议传输细节模糊不清",
          "⏳ 自由时间：留出了大块个人时间"
        ]
      }
    ]
  },
  {
    "event_id": "AC_009",
    "title": "大二下担任低年级专业基础课助教 (TA) 答疑",
    "package": "AC",
    "type": "OPPORTUNITY",
    "priority": "P2",
    "min_month": 19,
    "max_month": 21,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        19,
        20,
        21
      ],
      "min_vars": {
        "academic": 65
      }
    },
    "content": {
      "background": "大二下学期，C++ 程序设计课程教授因你在大一优异成绩，主动邀请你担任大一新生的课程助教（TA）。",
      "scene": "助教需要每周批改 60 份作业、上机实验指导并在答疑群解答学弟学妹们千奇百怪的编译 Bug。",
      "conflict": "是认真承担助教工作打磨表达并深化理解，还是仅负责基础签到批改，亦或婉拒专注个人安排？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "全心投入！每周整理高频易错点答疑文档，耐心指导新生实验并优化评分脚本",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 教学相长",
          "intent": "以教促学彻底扫清基础死角，赢得教授极高信任与学弟学妹崇拜",
          "tradeoff": "每周固定占用一个晚上与半天周末答疑"
        },
        "result_text": "新生们将你奉为‘神仙助教’，教授对你的责任心赞不绝口，并在学期末为你开具了高含金量助教证明！",
        "cost": {
          "TU": 3,
          "EP": 35
        },
        "variable_delta": {
          "reputation": 12,
          "skill": 8,
          "social": 8,
          "delivery": 6
        },
        "tag_add": [
          "FLAG_AC_COURSE_TA"
        ],
        "qualitative_changes": [
          "🌟 个人口碑：赢得学院师生广泛赞誉与信任",
          "⚡ 理论反刍：在教学答疑中将编程语言基础彻底吃透",
          "🤝 同辈连接：建立横跨年级的影响力"
        ]
      },
      {
        "choice_id": "B",
        "text": "履行基本岗位职责，按时批改作业并回答实验课现场提问",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 尽职尽责",
          "intent": "获得助教经历与津贴，合理控制精力投入",
          "tradeoff": "缺少主动沉淀教学成果"
        },
        "result_text": "你平稳完成了本学期的助教任务，按月领取了勤工助学补助，经历平稳顺利。",
        "cost": {
          "TU": 2,
          "EP": 20
        },
        "variable_delta": {
          "family": 4,
          "reputation": 6,
          "social": 4
        },
        "qualitative_changes": [
          "🌟 经历认证：按部就班完成一学期助教工作",
          "🏡 经济自立：获得固定助教津贴补贴生活费",
          "⏳ 节奏平衡：未对个人课外安排造成过大挤占"
        ]
      },
      {
        "choice_id": "C",
        "text": "评估当前自身规划紧凑，礼貌婉拒教授邀请，推荐其他优秀的同学担任",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 坚守重心",
          "intent": "专注自身的核心技术攻坚或路线规划，不分心事务性工作",
          "tradeoff": "失去一次与任课教授深度结交和简历荣誉的机会"
        },
        "result_text": "教授表示理解并感谢你的推荐。你将全部时间留给了自己的技术打磨，维持高度专注。",
        "cost": {
          "TU": 1,
          "EP": 5
        },
        "variable_delta": {
          "focus": 6,
          "academic": 2
        },
        "qualitative_changes": [
          "🎯 专注自律：全身心投入自身既定赛道",
          "⏳ 时间自主：课余时间完全自由掌控",
          "🌟 师生关系：得体处理推辞沟通"
        ]
      }
    ]
  },
  {
    "event_id": "AC_010",
    "title": "大三上数据库系统压测与 SQL 索引深度调优",
    "package": "AC",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 22,
    "max_month": 24,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        22,
        23,
        24
      ]
    },
    "content": {
      "background": "大三上《数据库系统原理》综合实验，要求模拟千万级电商订单数据的写入、事务并发控制与慢查询优化。",
      "scene": "在默认单表全表扫描下，多表关联查询耗时长达十几秒，系统直接超时崩溃。",
      "conflict": "是深入分析 EXPLAIN 执行计划设计复合索引与分库分表策略，还是添加简单索引过关，亦或仅交测试用例？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "借助 EXPLAIN 深度剖析 B+ 树索引下推与覆盖索引，重构查询将慢查询压至 5 毫秒内",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 工业级优化",
          "intent": "掌握一线大厂核心数据库调优硬实力，成为技术攻坚能手",
          "tradeoff": "需编写大量自动化压测脚本与数据对比分析报告"
        },
        "result_text": "性能提升近千倍！老师对你的报告拍案叫绝，直接将你的优化案例收录为下一届实验示范教材！",
        "cost": {
          "TU": 4,
          "EP": 55
        },
        "variable_delta": {
          "skill": 14,
          "portfolio": 12,
          "delivery": 10,
          "academic": 6
        },
        "qualitative_changes": [
          "⚡ 硬核技能：深刻掌握索引原理、执行计划与事务隔离",
          "💻 作品沉淀：拥有具备说服力的性能优化报告",
          "🌟 学术认可：实验成果被任课教师选作典范"
        ]
      },
      {
        "choice_id": "B",
        "text": "针对报错的三个核心查询添加联合索引，保证系统正常通过基本并发测试",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 实用达标",
          "intent": "高效解决性能瓶颈，达到课程优秀标准",
          "tradeoff": "未探索冷热分离与分布式分片等进阶课题"
        },
        "result_text": "系统查询延迟下降至可接受范围，实验测试全部顺利跑通，拿到 85 分稳妥分值。",
        "cost": {
          "TU": 2,
          "EP": 30
        },
        "variable_delta": {
          "skill": 7,
          "delivery": 6,
          "academic": 5
        },
        "qualitative_changes": [
          "⚡ 技能掌握：学会基础慢查询排查与索引配置",
          "📚 课业进展：平稳通过数据库系统核心实验",
          "🔋 效率兼顾：投入可控，性价比极高"
        ]
      },
      {
        "choice_id": "C",
        "text": "直接使用官方给出的基础配置文件，勉强跑完小规模测试数据提交结项",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 基础跑通",
          "intent": "保证作业提交记录完整，不投入额外精力调优",
          "tradeoff": "无法面对复杂场景并发挑战"
        },
        "result_text": "作业勉强及格通过。对于数据库的理解仅停留在课本理论表面，未建立直观性能感知。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "academic": 3,
          "skill": 1
        },
        "qualitative_changes": [
          "📚 学业及格：完成基础实验课时指标",
          "⚠️ 实践缺乏：错过深入掌握数据库调优的良机",
          "⏳ 个人时间：获得了轻松的空闲时光"
        ]
      }
    ]
  },
  {
    "event_id": "AC_011",
    "title": "大三上参与任课教授课题组组会与前沿论文研读",
    "package": "AC",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 24,
    "max_month": 26,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        24,
        25,
        26
      ]
    },
    "content": {
      "background": "大三上学期，在专业课表现突出的你获得旁听学院知名学术教授课题组周例会的机会。",
      "scene": "会议室里博士生和硕士生正在热烈讨论顶级会议（CCF-A / IEEE）的前沿论文创新点与实验 Baseline 差距。",
      "conflict": "是主动认领一篇前沿顶会论文并在下周组会登台分享，还是安静旁听记录，亦或觉得太难退出？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "主动请缨！通读精读一篇前沿顶会论文，制作精美 PPT 在全组面前作汇报剖析",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 学术汇报",
          "intent": "在教授与研究生学长面前展现极强的学术潜力与阅读表达力",
          "tradeoff": "需耗费大量时间梳理数学推导与实验数据分析"
        },
        "result_text": "你的汇报逻辑严密、切中要害，教授眼中流露出欣赏的光芒，当场邀请你参与课题组在研项目！",
        "cost": {
          "TU": 4,
          "EP": 55
        },
        "variable_delta": {
          "research": 16,
          "academic": 10,
          "reputation": 12,
          "focus": 6
        },
        "tag_add": [
          "FLAG_AC_LAB_SEMINAR_PASSED"
        ],
        "qualitative_changes": [
          "🔬 科研视野：真正踏入学术研究门槛与国际前沿",
          "🌟 导师认可：获得学院权威博导的深度青睐与关注",
          "📜 保研/考研加成：为后续推免推荐信与复试打下杀手级底牌"
        ]
      },
      {
        "choice_id": "B",
        "text": "每次认真旁听研讨，做详细笔记，课后向学长请教看不懂的数学公式",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 潜心蓄势",
          "intent": "低姿态吸收前沿学术养分，逐步熟悉科研方法论",
          "tradeoff": "未进行高光亮相，积累过程相对平缓"
        },
        "result_text": "经过一个月的旁听，你逐渐摸清了学术研究的范式与套路，对科研课题不再心存畏惧。",
        "cost": {
          "TU": 2,
          "EP": 25
        },
        "variable_delta": {
          "research": 8,
          "academic": 6,
          "social": 4
        },
        "qualitative_changes": [
          "🔬 学术感知：熟悉科研前沿动向与实验套路",
          "🤝 组内人脉：结识多位热心指点的研究生师兄师姐",
          "🔋 步调平稳：以良好节奏充实学术底盘"
        ]
      },
      {
        "choice_id": "C",
        "text": "发现组会内容高深难懂且占时间，礼貌向教授说明精力不足，退出例会",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 及时退缩",
          "intent": "避免在自身不适应的领域浪费时间，专注工程或常规课业",
          "tradeoff": "彻底关闭该课题组的科研实习与保研导师直推通道"
        },
        "result_text": "你退出了课题组大群。虽然释怀了学术焦虑，但也失去了最直接的科研导师接触窗口。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "focus": 4,
          "research": -4
        },
        "qualitative_changes": [
          "🎯 方向取舍：明确放弃学术科研，聚焦工程实践",
          "⏳ 时间回收：重回自己熟悉的课业与个人节奏",
          "🔬 科研止步：停止实验室学术探索"
        ]
      }
    ]
  },
  {
    "event_id": "AC_012",
    "title": "大三下专业前沿研讨课与全英文学术报告宣讲",
    "package": "AC",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 28,
    "max_month": 30,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        28,
        29,
        30
      ]
    },
    "content": {
      "background": "大三下高阶双语研讨课考核，要求每位同学挑选一篇近两年的顶级国际会议论文，进行 15 分钟全英文演讲答辩。",
      "scene": "全班同学轮流上台，面对台下外教与系主任的现场刁钻英语提问，许多人紧张得手心出汗、语无伦次。",
      "conflict": "是脱稿演讲并从容应对专业学术提问，还是对照演讲稿流畅朗读，亦或借助简单 PPT 勉强应付？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "反复对着镜子演练十余次！实现全程脱稿英文演讲，精准剖析算法创新点与局限",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 国际风范",
          "intent": "全方位突破专业英文口语与学术答辩瓶颈，展现未来学者/技术领袖气场",
          "tradeoff": "需投入整整一周课余时间反复背诵与听力模拟训练"
        },
        "result_text": "你的从容自如与敏锐回答引得外教连连竖大拇指，系主任当场给出 98 分的全专业最高分！",
        "cost": {
          "TU": 4,
          "EP": 50
        },
        "variable_delta": {
          "academic": 12,
          "research": 10,
          "reputation": 10,
          "skill": 6
        },
        "tag_add": [
          "FLAG_AC_ENGLISH_PRESENTATION_TOP"
        ],
        "qualitative_changes": [
          "📚 综合学力：斩获高阶专业研讨课全系第一高分",
          "🌟 表达突破：具备面对专家流利英文答辩的顶级自信",
          "🔬 国际化能力：跨过学术论文英语表达的高门槛"
        ]
      },
      {
        "choice_id": "B",
        "text": "准备详尽的演讲手稿与提词器，保证发音标准、按部就班读完并礼貌回答问题",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 规范稳重",
          "intent": "不出差错平稳完成高难度英语宣讲，稳拿中上成绩",
          "tradeoff": "互动感相对生硬，难有惊艳表现"
        },
        "result_text": "你的宣讲清晰完整，顺利回答了两个基础提问，最终获得 85 分稳健成绩。",
        "cost": {
          "TU": 2,
          "EP": 25
        },
        "variable_delta": {
          "academic": 7,
          "research": 5,
          "focus": 4
        },
        "qualitative_changes": [
          "📚 课业顺利：稳妥通过双语研讨考核",
          "⚡ 口语锻炼：完成一次完整的专业英文公开演讲",
          "🔋 投入稳健：精力消耗在合理预期之内"
        ]
      },
      {
        "choice_id": "C",
        "text": "制作简短 PPT，照着幻灯片上的要点磕磕绊绊念完，尽量减少台下提问互动",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 勉强过关",
          "intent": "以最低心力克服当众演讲尴尬，迅速结束考核",
          "tradeoff": "外教评价一般，给出了刚过及格线的 70 分"
        },
        "result_text": "虽然略显局促，但总算熬过了这门折磨人的课程。你长舒一口气，总评绩点受到轻微影响。",
        "cost": {
          "TU": 1,
          "EP": 15
        },
        "variable_delta": {
          "academic": 3,
          "focus": 2
        },
        "qualitative_changes": [
          "📚 学分保全：勉强跨过双语课学分门槛",
          "⚠️ 口头表达：专业英语交流短板依然突出",
          "⏳ 精神释怀：彻底摆脱英文演讲焦虑"
        ]
      }
    ]
  },
  {
    "event_id": "AC_013",
    "title": "大三下高难度期末考试周四门连考极限备战",
    "package": "AC",
    "type": "CRISIS",
    "priority": "P1",
    "min_month": 31,
    "max_month": 32,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        31,
        32
      ]
    },
    "content": {
      "background": "大三下学期迎来大学四年课程最重、考查最密集的‘魔鬼考试周’，连续四天考四门硬核必修课。",
      "scene": "自习室灯火通明通宵不熄，每个人都在疯狂刷题背诵，这直接决定大四保研推免终审与奖学金评定！",
      "conflict": "是制定严密复习网全方位冲刺全 A 绩点，还是抓大放小保住主干课程，亦或及格万岁？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "开启魔鬼冲刺计划！按时间片轮转复习法，吃透历年卷并推导全部定理公式冲刺全 A",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 极限满贯",
          "intent": "在决定保研终局的关键学期锁死高绩点，达成学业顶峰",
          "tradeoff": "极度消耗体力，连续数日处于神经高度紧绷"
        },
        "result_text": "四门专业课全部拿下 90+ 优异成绩！你在专业综合排名榜上跃升至最前列，锁定最高学业奖学金！",
        "cost": {
          "TU": 5,
          "EP": 75
        },
        "variable_delta": {
          "academic": 18,
          "focus": 10,
          "health": -8,
          "reputation": 8
        },
        "tag_add": [
          "FLAG_AC_SEMESTER_TOP_GPA"
        ],
        "qualitative_changes": [
          "📚 绩点锁死：前六学期综合 GPA 跃升至专业前 3%",
          "🎯 极致自律：展现出超凡的学习规划与执行力",
          "🌿 身体透支：考试结束后需要深度补觉休养"
        ]
      },
      {
        "choice_id": "B",
        "text": "抓大放小！将 80% 精力投入学分最高、挂科率最高的两门主干课，另外两门求稳过线",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 战略聚焦",
          "intent": "用有限精力守住核心基本盘，避免全线溃败风险",
          "tradeoff": "非核心课成绩平淡，拉低整体综合均分"
        },
        "result_text": "两门主干课考得 88 分良好，另外两门 75 分平稳通过。策略大获成功，平稳度过魔鬼期末！",
        "cost": {
          "TU": 3,
          "EP": 45
        },
        "variable_delta": {
          "academic": 10,
          "focus": 6,
          "health": -2
        },
        "qualitative_changes": [
          "📚 策略见效：两门最危险核心专业课高分过关",
          "🎯 理性决策：在重压下保持清晰的战略取舍",
          "🔋 状态良好：未发生严重健康崩溃"
        ]
      },
      {
        "choice_id": "C",
        "text": "只背学霸总结的高频划重点提纲，以 60 分不挂科为唯一指导思想应考",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 及格万岁",
          "intent": "将时间与精力保留给求职或考研提前复习",
          "tradeoff": "均分下滑，保研资格面临严重危机"
        },
        "result_text": "四门课都在 65~70 分边缘漂移。虽然全科通过，但保研排位下滑明显，只能依靠考研或求职突围。",
        "cost": {
          "TU": 2,
          "EP": 25
        },
        "variable_delta": {
          "academic": 4,
          "focus": -2
        },
        "qualitative_changes": [
          "📚 险象环生：全部科目及格通过，无挂科污点",
          "⚠️ 绩点受挫：综合排名跌出保研安全线",
          "⏳ 路线转折：促使自己坚定走向考研或求职路线"
        ]
      }
    ]
  },
  {
    "event_id": "AC_014",
    "title": "大四上本科毕业设计选题确立与开题报告答辩",
    "package": "AC",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 35,
    "max_month": 37,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        35,
        36,
        37
      ]
    },
    "content": {
      "background": "大四上学期，教务处启动本科毕业设计（论文）双向选报系统，需要确定指导教师与最终课题名称。",
      "scene": "选题清单中既有导师前沿学术研究的硬核课题，也有经典常规工程管理系统，还有结合产业实战的创新自选题目。",
      "conflict": "是选高难度前沿课题冲击校级优秀毕业论文，还是选稳定成熟的工程系统稳妥过关，亦或结合企业实习自拟题目？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "选择人工智能/分布式底层高难度前沿课题，认真撰写长篇开题报告，冲击校优秀毕设",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 拔尖追求",
          "intent": "以高水准科研课题作为大学学术四年集大成总结，追求卓越",
          "tradeoff": "后续实现周期长、理论推导严苛，对大四下精力占用极大"
        },
        "result_text": "开题答辩评审组一致认定该课题具备硕士研究生水平的研究深度与学术价值，全票通过开题！",
        "cost": {
          "TU": 4,
          "EP": 50
        },
        "variable_delta": {
          "research": 14,
          "academic": 10,
          "reputation": 10,
          "portfolio": 8
        },
        "tag_add": [
          "FLAG_AC_THESIS_TOP_TOPIC"
        ],
        "qualitative_changes": [
          "🔬 学术高峰：确立高含金量前沿毕业设计课题",
          "🌟 导师赞赏：指导教授承诺提供算力与论文润色支持",
          "📚 荣誉导向：奠定校级优秀本科毕业设计基调"
        ]
      },
      {
        "choice_id": "B",
        "text": "选择成熟完备的工程实用软件系统开发课题，技术路线清晰稳妥，开题一次通过",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 务实稳妥",
          "intent": "确保毕设平稳无风险，留出充裕精力给秋招入职前准备或考研复试",
          "tradeoff": "题目中规中矩，难评校级优秀"
        },
        "result_text": "技术路线清晰，答辩老师挑不出毛病，顺利平稳通过开题，给大四下留下了极大的机动空间。",
        "cost": {
          "TU": 2,
          "EP": 25
        },
        "variable_delta": {
          "academic": 6,
          "delivery": 6,
          "portfolio": 4
        },
        "qualitative_changes": [
          "📚 稳健开局：毕业设计开题顺利完成，风险完全可控",
          "📦 工程务实：选定明确可落地的架构系统",
          "⏳ 弹性充裕：为大四下求职或考研复试预留时间"
        ]
      },
      {
        "choice_id": "C",
        "text": "将此前实习或课程做过的半成品项目打包扩充作为自选题，用最少精力应对开题",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 资源复用",
          "intent": "复用既有资产，杜绝重复造轮子",
          "tradeoff": "答辩被老师指出创新性不足，责令进一步细化方案"
        },
        "result_text": "老师指出工作量需再扩充 30%，但大体通过了立项。你松了一口气，成功把精力节省了下来。",
        "cost": {
          "TU": 1,
          "EP": 15
        },
        "variable_delta": {
          "academic": 3,
          "delivery": 4
        },
        "qualitative_changes": [
          "📚 立项通过：完成教务系统选题锁定",
          "⏳ 极低负荷：未增加过多额外设计负担",
          "⚠️ 后续提醒：中期检查需补齐所欠代码量"
        ]
      }
    ]
  },
  {
    "event_id": "AC_015",
    "title": "大四下毕业设计中期检查与原型系统预演示",
    "package": "AC",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 39,
    "max_month": 40,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        39,
        40
      ]
    },
    "content": {
      "background": "大四下 4 月份，学院举行毕业设计中期检查答辩，要求现场运行原型系统并汇报论文初稿目录。",
      "scene": "如果中期检查被判定为“进度滞后”，将进入黄色预警名单，并面临延期答辩甚至延毕的风险。",
      "conflict": "是拿出完整度极高的端到端系统现场真机演示，还是展示核心模块功能，亦或用 PPT 静态截图糊弄？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "现场真机部署完整系统！现场演示核心算法吞吐与可视化看板，论文初稿已写完 80%",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 完备交付",
          "intent": "彻底解除中期预警风险，树立毕业答辩全优秀标杆",
          "tradeoff": "需提前投入两周把系统联调并完成万字初稿撰写"
        },
        "result_text": "答辩组专家老师一致评定为‘免检优秀’，指导老师脸上写满了骄傲，直接进入优秀毕业论文备选库！",
        "cost": {
          "TU": 4,
          "EP": 50
        },
        "variable_delta": {
          "delivery": 14,
          "academic": 10,
          "portfolio": 10,
          "reputation": 8
        },
        "tag_add": [
          "FLAG_AC_MIDTERM_EXCELLENT"
        ],
        "qualitative_changes": [
          "📦 完美交付：系统工程进度遥遥领先，彻底免除延期风险",
          "🌟 学术声誉：获得答辩评审专家组最高免检评级",
          "📚 毕业保障：为 6 月最终答辩奠定绝对胜势"
        ]
      },
      {
        "choice_id": "B",
        "text": "跑通核心功能子模块原型，诚恳向专家汇报目前未完成细节与未来两周开发排期",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 务实过关",
          "intent": "展示扎实的关键进展，以合理排期平稳通过中期检查",
          "tradeoff": "需在后续一个月抓紧补齐边角功能与测试"
        },
        "result_text": "评审老师认可你的主体架构，提出两点修改意见并顺利给出了‘合格通过’评定。",
        "cost": {
          "TU": 2,
          "EP": 25
        },
        "variable_delta": {
          "academic": 6,
          "delivery": 6,
          "focus": 4
        },
        "qualitative_changes": [
          "📚 中期合格：平稳跨过大四下关键教学审核关口",
          "📦 步步为营：主干逻辑跑通，方向明确",
          "🔋 节奏自如：为毕业季留出合理从容度"
        ]
      },
      {
        "choice_id": "C",
        "text": "用精心美化的 PPT 架构图和静态截图做概念演示，将实际联调工作一再后延",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 概念过关",
          "intent": "应付中期检查现场，把硬骨头留给最后一个月",
          "tradeoff": "老师指出缺少可执行成果，给出‘基本合格（督促整改）’黄牌"
        },
        "result_text": "老师严厉督促你必须在五一前跑通真机，虽然涉险过关，但最终答辩前你将面临巨大的补坑压力。",
        "cost": {
          "TU": 1,
          "EP": 15
        },
        "variable_delta": {
          "academic": 2,
          "delivery": -4,
          "reputation": -2
        },
        "qualitative_changes": [
          "⚠️ 黄牌警告：收到毕设中期整改通知书",
          "⏳ 债务堆积：将巨大的编码压力推迟到毕业答辩前夕",
          "🎯 心理焦虑：大四下后期将面临严苛时间死线"
        ]
      }
    ]
  },
  {
    "event_id": "SO_004",
    "title": "大一上寝室作息与卫生排班公约协商",
    "package": "SO",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 3,
    "max_month": 5,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        3,
        4,
        5
      ]
    },
    "content": {
      "background": "入住两个月后，宿舍因熄灯后连麦打游戏、垃圾清理不及时和作息差异产生了微妙的摩擦。",
      "scene": "周末夜晚，室友们围坐在一起，空气中弥漫着想要沟通却怕伤和气的尴尬气氛。",
      "conflict": "是主动牵头制定清晰透明的寝室公约与轮值表，还是顺其自然温和提醒，亦或戴上降噪耳机独善其身？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "主动破冰提议！买来零食开个寝室夜聊会，坦诚商定晚上 11:30 关大灯与值日轮换公约",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 坦诚破冰",
          "intent": "以高情商化解潜在矛盾，建立健康融洽的寝室公共秩序",
          "tradeoff": "需主动承担组织与公约落地的协调责任"
        },
        "result_text": "大家在欢声笑语中解开心结，共同在白板上签下寝室公约，宿舍氛围焕然一新，成为文明示范寝室！",
        "cost": {
          "TU": 2,
          "EP": 20
        },
        "variable_delta": {
          "social": 10,
          "health": 6,
          "focus": 4,
          "reputation": 6
        },
        "tag_add": [
          "FLAG_SO_DORM_HARMONY"
        ],
        "qualitative_changes": [
          "🤝 寝室羁绊：化解摩擦，建立深厚舍友情谊",
          "🌿 作息保障：达成夜间安静共识，睡眠质量大幅改善",
          "🌟 领导协调：展现出众的同辈沟通与组织力"
        ]
      },
      {
        "choice_id": "B",
        "text": "遇到影响休息时温和私下提醒，自己主动多承担一点公共卫生打扫",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 隐忍包容",
          "intent": "避免正面交锋，用个人退让维持表面平静",
          "tradeoff": "偶尔仍需忍受突发噪音，内心偶有委屈"
        },
        "result_text": "室友们意识到你的包容，也逐渐收敛了动静，宿舍维持了基本的和平与相安无事。",
        "cost": {
          "TU": 1,
          "EP": 15
        },
        "variable_delta": {
          "social": 5,
          "reputation": 4
        },
        "qualitative_changes": [
          "🤝 人际包容：以退为进维系寝室基础和谐",
          "⏳ 消耗可控：未引发激烈人际争执",
          "🌿 心理调适：逐步适应集体生活节奏"
        ]
      },
      {
        "choice_id": "C",
        "text": "网购高档降噪耳塞与遮光床帘，在宿舍内部打造属于自己的独立个人结界",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 物理隔离",
          "intent": "不干涉他人，用物理手段彻底屏蔽干扰保全个人专注",
          "tradeoff": "与室友互动明显减少，逐渐边缘化"
        },
        "result_text": "床帘一拉就是一个人的小世界。虽然免去了噪音打扰，但跟室友的关系也变成了平淡的点头之交。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "focus": 6,
          "social": -4
        },
        "qualitative_changes": [
          "🎯 独立空间：在寝室内建立高度专注的个人领地",
          "🤝 社交距离：与同寝室友保持礼貌疏离",
          "🔋 独善其身：免除集体规则拉扯的心力负担"
        ]
      }
    ]
  },
  {
    "event_id": "SO_005",
    "title": "大一下学生社团换届选举与骨干留任抉择",
    "package": "SO",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 8,
    "max_month": 10,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        8,
        9,
        10
      ]
    },
    "content": {
      "background": "大一下学期末，校级技术协会与学生社团迎来一年一度的换届竞聘大会。",
      "scene": "现任会长极力挽留你竞聘下一任副部长或部长，但大二即将面临难度陡增的专业课与大作业。",
      "conflict": "是勇挑大梁竞选部长全面锻炼综合管理领导力，还是留任骨干参与重点项目，亦或体面退社回归纯技术？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "竞聘核心部门部长！主导下学期全校技术沙龙、招新策划与赞助谈判",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 挑起大梁",
          "intent": "全方位历练大型活动统筹、跨部门谈判与团队领导综合硬实力",
          "tradeoff": "大二需承担每周固定例会与大量行政琐碎沟通"
        },
        "result_text": "竞聘演讲获得全场高票通过！你正式当选技术协会部长，获得了全校层面的学生干部人脉与领导舞台！",
        "cost": {
          "TU": 3,
          "EP": 45
        },
        "variable_delta": {
          "social": 16,
          "reputation": 12,
          "delivery": 8,
          "focus": -4
        },
        "tag_add": [
          "FLAG_SO_CLUB_PRESIDENT"
        ],
        "resume_entry": {
          "category": "CAMPUS_ACT",
          "chain_id": "EXP_SO_CLUB_02",
          "stage_contribution": "LEAD",
          "title": "校科技创新协会部门负责人",
          "description": "主导全校极客技术沙龙与年度创客大赛，统筹 40 余名干事，对接外部赞助与导师资源。"
        },
        "qualitative_changes": [
          "🌟 骨干声望：跻身校级核心社团中层管理梯队",
          "🤝 资源网络：对接院系领导、外部企业与校友资源",
          "📦 综合组织：统筹大型校园科技赛事与工作坊"
        ]
      },
      {
        "choice_id": "B",
        "text": "转任技术顾问/骨干干事，仅在举办重大赛事时出面提供技术支持",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 顾问退守",
          "intent": "保留社团核心人脉与活动参与权，免除沉重的日常行政琐事",
          "tradeoff": "失去社团最高决策话语权"
        },
        "result_text": "会长感谢你继续坐镇支持。你卸下了琐碎例会包袱，既能随时与极客好友交流，又保全了大二自习时间。",
        "cost": {
          "TU": 2,
          "EP": 20
        },
        "variable_delta": {
          "social": 8,
          "skill": 4,
          "reputation": 6
        },
        "qualitative_changes": [
          "🤝 圈子保留：稳固技术社团人脉与核心信息源",
          "⏳ 弹性时间：摆脱日常琐碎开会占用",
          "🌟 顾问口碑：成为学弟学妹眼中的靠谱技术指导"
        ]
      },
      {
        "choice_id": "C",
        "text": "向社长诚恳致谢并体面退社，将全部精力集中在大二专业核心课与代码工程上",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 功成身退",
          "intent": "彻底告别学生社团琐碎，全力聚焦单兵硬实力深耕",
          "tradeoff": "社团人际网络逐渐淡出"
        },
        "result_text": "大家为你举办了温馨的欢送会，送上纪念徽章。你一身轻松地走出活动室，准备迎接大二专业深水区。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "focus": 8,
          "academic": 4,
          "social": -2
        },
        "qualitative_changes": [
          "🎯 战略聚焦：集中一切精锐兵力攻坚核心课业",
          "⏳ 自由满格：完全收回课余周末时间主导权",
          "🤝 体面告别：留下良好口碑与祝福"
        ]
      }
    ]
  },
  {
    "event_id": "SO_006",
    "title": "大二下 48 小时校园极客黑客松马拉松攻坚",
    "package": "SO",
    "type": "OPPORTUNITY",
    "priority": "P2",
    "min_month": 18,
    "max_month": 20,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        18,
        19,
        20
      ],
      "min_vars": {
        "skill": 40
      }
    },
    "content": {
      "background": "由知名科技企业赞助的校园黑客松大赛打响，要求跨学院自由组队在 48 小时内从零完成一款创新软硬件原型。",
      "scene": "报告厅里摆满了披萨盒、能量饮料与睡袋，大屏幕上的倒计时无情跳动，团队遇到严重 API 跨域与鉴权 Bug。",
      "conflict": "是通宵达旦主导架构实现超预期交互 Demo，还是稳扎稳打完成核心用例，亦或通宵疲惫提前弃赛？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "担任核心主程序员通宵领跑！带领队友连续 36 小时硬核攻关，完成端到端高交互极客原型",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 极客燃爆",
          "intent": "冲击黑客松一等奖与直通名企实习 Green Pass，打出极客圈威名",
          "tradeoff": "两天仅睡 3 小时，对体力与神经造成短期极大负荷"
        },
        "result_text": "在路演答辩环节你们的原型引发评委企业高管全体起立鼓掌！斩获特等奖与 1 万元现金大奖，全校通报表彰！",
        "cost": {
          "TU": 4,
          "EP": 75
        },
        "variable_delta": {
          "portfolio": 18,
          "skill": 14,
          "reputation": 14,
          "delivery": 12,
          "health": -8
        },
        "tag_add": [
          "FLAG_SO_HACKATHON_CHAMPION"
        ],
        "resume_entry": {
          "category": "CONTEST",
          "chain_id": "EXP_SO_HACKATHON_01",
          "stage_contribution": "CHAMPION",
          "title": "校园 48 小时极客黑客松特等奖",
          "description": "担任核心架构师与主程序员，48 小时内从零落地完整多端极客原型，获评委会一致特等奖。"
        },
        "qualitative_changes": [
          "🏆 顶尖荣誉：斩获企业级高含金量黑客松特等奖",
          "💻 杀手资产：诞生足以直接亮瞎面试官的原型项目",
          "🤝 战友羁绊：与并肩通宵作战的队友成为生死之交"
        ]
      },
      {
        "choice_id": "B",
        "text": "制定合理的轮班睡觉排期，稳妥实现核心主流程 Demo，保障答辩顺畅不掉链子",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 稳健打法",
          "intent": "兼顾身体健康与项目完备度，稳拿优秀奖项",
          "tradeoff": "视觉亮点与技术前沿性相对克制"
        },
        "result_text": "演示过程无任何报错崩盘，团队获得大赛二等奖！既体验了黑客松的纯粹快乐，又没有严重透支身体。",
        "cost": {
          "TU": 3,
          "EP": 40
        },
        "variable_delta": {
          "portfolio": 10,
          "skill": 8,
          "reputation": 8,
          "delivery": 8
        },
        "qualitative_changes": [
          "🏆 竞赛战果：斩获黑客松二等奖良好名次",
          "📦 工程稳健：展现清晰有条理的敏捷开发交付力",
          "🌿 节奏健康：团队作息得当，身体恢复迅速"
        ]
      },
      {
        "choice_id": "C",
        "text": "只负责协助队友做做前端页面美化与路演 PPT，把技术重担交给高年级学长",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 辅助体验",
          "intent": "零压力感受比赛氛围，结识极客圈好友",
          "tradeoff": "核心技术积累与履历含金量有限"
        },
        "result_text": "团队拿到优胜奖。你蹭到了免费披萨，认识了几个计算机大牛，度过了一个有趣的周末。",
        "cost": {
          "TU": 2,
          "EP": 20
        },
        "variable_delta": {
          "social": 6,
          "reputation": 4
        },
        "qualitative_changes": [
          "🤝 社交拓展：拓宽在校内极客技术圈的交友面",
          "💡 视野开阔：近距离观察大牛极客敏捷开发流程",
          "⏳ 负荷轻微：未产生任何身心疲劳"
        ]
      }
    ]
  },
  {
    "event_id": "SO_007",
    "title": "大二下“挑战杯”/“互联网+”创新创业大赛组队",
    "package": "SO",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 19,
    "max_month": 21,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        19,
        20,
        21
      ]
    },
    "content": {
      "background": "国家级 A 类竞赛“互联网+”大学生创新创业大赛与“挑战杯”院级选拔开启，是全校保研加分顶格的硬核赛事。",
      "scene": "商学院和法学院的同学找上门来，希望拉你作为“首席技术官 CTO”负责项目技术方案书与交互原型。",
      "conflict": "是深度参与负责全部技术架构冲击省赛国赛，还是仅提供技术咨询作为挂名成员，亦或婉拒专注纯代码？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "担任技术核心负责人！主笔商业计划书技术壁垒章节并搭建高保真落地原型系统",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 跨界争金",
          "intent": "冲击省赛金奖与国赛入围，锁定大三保研顶格加分与创新创业荣誉",
          "tradeoff": "需配合文科商科队友反复打磨 PPT 与应对多轮模拟答辩"
        },
        "result_text": "你们的项目从全校 300 多个项目中杀出重围斩获省赛一等奖！校领导亲自接见并给予重点孵化扶持！",
        "cost": {
          "TU": 4,
          "EP": 60
        },
        "variable_delta": {
          "portfolio": 14,
          "delivery": 12,
          "reputation": 14,
          "research": 8,
          "social": 8
        },
        "tag_add": [
          "FLAG_SO_INTERNET_PLUS_WINNER"
        ],
        "resume_entry": {
          "category": "CONTEST",
          "chain_id": "EXP_SO_CONTEST_02",
          "stage_contribution": "CORE",
          "title": "“互联网+”大学生创新创业大赛省级金奖",
          "description": "担任项目技术负责人与 CTO，主导核心技术架构可行性论证与原型研发，斩获省级一等奖。"
        },
        "qualitative_changes": [
          "🏆 大赛殊荣：斩获国家级 A 类大赛省级金奖最高荣誉",
          "📦 商业视野：深度理解技术转化为商业落地的完整链路",
          "🌟 跨界认可：在商学院与全校师长层面建立领军形象"
        ]
      },
      {
        "choice_id": "B",
        "text": "负责提供技术参数咨询与系统拓扑架构图绘制，不承担繁重的路演路评",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 协同支持",
          "intent": "作为技术顾问共享竞赛获奖名次与综测加分，合理分担精力",
          "tradeoff": "在团队中的主导权由队长全权掌握"
        },
        "result_text": "团队最终获得校级一等奖、省赛铜奖。你顺利拿到了竞赛证书与加分，精力支出适度。",
        "cost": {
          "TU": 2,
          "EP": 30
        },
        "variable_delta": {
          "portfolio": 6,
          "reputation": 6,
          "academic": 4
        },
        "qualitative_changes": [
          "📜 竞赛加分：稳妥拿到校级/省级竞赛荣誉",
          "🤝 跨院协作：体验与不同学科背景同学的合作模式",
          "🔋 投入节制：未对日常专业主线造成过度干扰"
        ]
      },
      {
        "choice_id": "C",
        "text": "审视商业计划书觉得概念炒作成分过大，礼貌婉拒跨学科组队，专注学术与硬核代码",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 拒绝浮夸",
          "intent": "坚守工程师的踏实原则，避免被无意义的 PPT 包装消耗心力",
          "tradeoff": "放弃一次获取大型双创赛事加分的机会"
        },
        "result_text": "你婉拒了邀请，在机房敲下真实的底层代码。内心踏实而清醒，未被外界喧嚣打乱节奏。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "focus": 6,
          "skill": 4
        },
        "qualitative_changes": [
          "🎯 清醒自持：坚守硬核工程师实干作风",
          "⏳ 节约精力：规避多轮商业 PPT 修改内耗",
          "⚡ 单兵深耕：保持在代码实战中的深度专注"
        ]
      }
    ]
  },
  {
    "event_id": "SO_008",
    "title": "大三上学院科技节项目宣讲与学生技术工作坊开课",
    "package": "SO",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 23,
    "max_month": 25,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        23,
        24,
        25
      ]
    },
    "content": {
      "background": "学院科技文化节开幕，团委与科协邀请大三优秀学生代表面向全院开设一期开源技术实战工作坊。",
      "scene": "多媒体阶梯教室坐满了大一和大二学弟学妹，投影仪上展示着你过往做过的优秀项目。",
      "conflict": "是精心准备一套零基础手把手实操教程并公开开源讲义，还是讲讲概念走个过场，亦或推辞不讲？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "精心编写开源教程与随堂代码包！手把手带 100 多名学弟学妹跑通第一个微服务项目",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 倾囊相授",
          "intent": "沉淀高质量技术讲义与公开影响力，树立全院公认的技术标杆形象",
          "tradeoff": "需花费周末精心准备教案与调试避坑指南"
        },
        "result_text": "工作坊好评如潮，开源讲义在校内论坛被狂转 1000+ 次！辅导员和学院院长对你的格局高度赞许！",
        "cost": {
          "TU": 3,
          "EP": 35
        },
        "variable_delta": {
          "reputation": 16,
          "social": 12,
          "delivery": 8,
          "skill": 6
        },
        "tag_add": [
          "FLAG_SO_TECH_SPEAKER"
        ],
        "qualitative_changes": [
          "🌟 院级声望：奠定全院极具号召力的技术带头人声誉",
          "🤝 影响力跃迁：技术成果在校内外形成良好传播效应",
          "📦 输出赋能：通过体系化教学极大巩固技术认知"
        ]
      },
      {
        "choice_id": "B",
        "text": "准备通识 PPT 讲座，分享大学前两年的技术选型避坑与学习路线经验",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 经验漫谈",
          "intent": "以宏观视角传递经验，轻松完成分享任务",
          "tradeoff": "技术硬核度相对普通"
        },
        "result_text": "你的真诚分享打动了许多迷茫的低年级同学，现场提问热烈，收获了大家的真挚掌声。",
        "cost": {
          "TU": 2,
          "EP": 20
        },
        "variable_delta": {
          "reputation": 8,
          "social": 6
        },
        "qualitative_changes": [
          "🌟 师友赞赏：展现高年级学长的成熟担当",
          "🤝 同窗连接：帮助迷茫同伴拨开技术迷雾",
          "🔋 轻松分享：未带来过多课业负担"
        ]
      },
      {
        "choice_id": "C",
        "text": "以近期大三实验与备考繁忙为由，向科协礼貌表示歉意并婉拒主讲",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 婉拒低调",
          "intent": "保持低调内敛，不把精力花费在聚光灯下的公共表达上",
          "tradeoff": "错失一次建立校园公开影响力的大好机会"
        },
        "result_text": "科协更换了主讲人。你安静地坐在图书馆角落继续自己的算法复习，保持了平静的心境。",
        "cost": {
          "TU": 1,
          "EP": 5
        },
        "variable_delta": {
          "focus": 4
        },
        "qualitative_changes": [
          "🎯 低调沉潜：专注于自身关键技术赛道",
          "⏳ 独善其身：完全免除公开演说的备课压力",
          "🌟 人际定位：保持低调的技术极客作风"
        ]
      }
    ]
  },
  {
    "event_id": "SO_009",
    "title": "大三下优秀毕业学长学姐离校饯行与人生长谈",
    "package": "SO",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 31,
    "max_month": 33,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        31,
        32,
        33
      ]
    },
    "content": {
      "background": "大三下 6 月毕业季，实验室和社团当年带你入行的大四学长学姐即将打包行李离开校园。",
      "scene": "校门口的大排档烟火升腾，即将奔赴头部大厂年薪数十万、顶尖直博或考公上岸的前辈们举杯感慨。",
      "conflict": "是主动请教即将入职/读研的第一手生存潜规则与信息差，还是开怀畅饮道别，亦或不去应酬？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "虚心向直博与大厂就职学长深度请教，记录职场生存避坑指南、导师真实风格与校招内推",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 深度求教",
          "intent": "打通未来职业与升学的一手人脉，掌握最真实的信息差底牌",
          "tradeoff": "需用心倾听并认真记录人脉资源"
        },
        "result_text": "学长推心置腹地告知了许多官方简章上绝对看不到的内幕，并把企业内推码和博士组选导避坑指南全给了你！",
        "cost": {
          "TU": 2,
          "EP": 25
        },
        "variable_delta": {
          "social": 14,
          "reputation": 8,
          "portfolio": 4,
          "delivery": 4
        },
        "tag_add": [
          "FLAG_SO_ALUMNI_NETWORK"
        ],
        "qualitative_changes": [
          "💡 掌握先机：拿到一手真实的职场与名校导师内幕",
          "🤝 校友羁绊：与已毕业技术精英建立长久联系通道",
          "🌟 规划成熟：对即将到来的大四决策有了十足底气"
        ]
      },
      {
        "choice_id": "B",
        "text": "放下功利计算，开怀畅饮回忆这几年的并肩作战，为学长学姐送上真挚的毕业祝福",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 纯粹道别",
          "intent": "体会真挚纯粹的校园情谊与送别仪式感，排解学期压力",
          "tradeoff": "未刻意索取职场资源"
        },
        "result_text": "酒过三巡大家相拥而泣，互道珍重。你感受到了大学四年青春传承的热烈温度，内心充满力量！",
        "cost": {
          "TU": 2,
          "EP": 20
        },
        "variable_delta": {
          "social": 8,
          "health": 4
        },
        "qualitative_changes": [
          "🤝 纯真同袍：体会大学最具温度的送别与青春传承",
          "🔋 情感释怀：在相聚离别中获得精神鼓舞",
          "🏡 校园归属：加深对母校与集体的情感认同"
        ]
      },
      {
        "choice_id": "C",
        "text": "微信发送一段诚恳的祝福短信并随份子礼金，自己留在自习室赶考研/实习进度",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 礼到心至",
          "intent": "不打乱个人紧张的既定冲刺节奏，礼貌达标",
          "tradeoff": "错失线下深聚的人情味与一手交流"
        },
        "result_text": "学长回复了感谢与加油。你在安静的自习室里继续奋斗，生活按部就班。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "focus": 4,
          "academic": 2
        },
        "qualitative_changes": [
          "🎯 严守节奏：在毕业季喧嚣中坚守自习阵地",
          "🤝 礼貌相待：得体维系基础同门礼节",
          "⏳ 效率最优：没有产生额外的聚会时间开销"
        ]
      }
    ]
  },
  {
    "event_id": "SO_010",
    "title": "大四上班级毕业合影筹备与同窗就业去向交流",
    "package": "SO",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 36,
    "max_month": 38,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        36,
        37,
        38
      ]
    },
    "content": {
      "background": "大四秋季，班委会组织拍摄毕业照与定制四年班级纪念册，大家三三两两交流着各自的秋招与升学进展。",
      "scene": "有人手握大厂 Offer 意气风发，有人考研冲刺面带疲惫，还有人准备出国正忙着语言成绩。",
      "conflict": "是主动参与班级纪念册编纂策划拉近集体情谊，还是积极交流各地就业房租信息，亦或安静拍照了事？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "主动协助班委策划设计纪念册与文创，收集整理全班四年点滴老照片与语录",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 温暖聚沙",
          "intent": "为全班留下永不褪色的珍贵青春印记，成为班级凝聚力的核心纽带",
          "tradeoff": "需投入数个晚上修图排版与印刷联络"
        },
        "result_text": "全班同学翻开厚实精美的纪念册时赞叹不已，班长和辅导员称赞你为班级做出了最有温度的贡献！",
        "cost": {
          "TU": 3,
          "EP": 30
        },
        "variable_delta": {
          "social": 14,
          "reputation": 10,
          "family": 4
        },
        "tag_add": [
          "FLAG_SO_CLASS_BOND"
        ],
        "qualitative_changes": [
          "🤝 班级至宝：为大学四年同窗岁月铸造永久记忆",
          "🌟 群众口碑：成为全班同学心目中最温暖有心意的人",
          "🏡 归属情怀：深刻体会大学集体生活的温情与意义"
        ]
      },
      {
        "choice_id": "B",
        "text": "与签约北上广深的同学深度交流各地租房、落户政策与入职前技能准备",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 现实互通",
          "intent": "同舟共济，在走向社会的过渡期结成同城生活互助联盟",
          "tradeoff": "交流以实用现实问题为主"
        },
        "result_text": "你们组建了同城奋斗群，商定了毕业后合租与互相照应的方案，对迈入社会不再感到孤立无援。",
        "cost": {
          "TU": 2,
          "EP": 15
        },
        "variable_delta": {
          "social": 8,
          "delivery": 4,
          "reputation": 4
        },
        "qualitative_changes": [
          "🤝 职场盟友：提前锁定毕业同城合租与互助同盟",
          "💡 现实破障：摸清目标城市生活成本与过渡细节",
          "🔋 踏实安定：极大降低初入社会的恐慌感"
        ]
      },
      {
        "choice_id": "C",
        "text": "按时参加统一拍照，微笑着与大家合影后便匆匆返回处理毕设或求职事宜",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 礼貌合影",
          "intent": "不缺席集体关键仪式，同时绝不耽误个人主线推进",
          "tradeoff": "与同学间交流相对简短"
        },
        "result_text": "镜头定格下灿烂的青春笑脸。合影结束，你从容回到既定的人生赛道上继续前行。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "social": 4,
          "focus": 2
        },
        "qualitative_changes": [
          "📸 仪式定格：留下大学同窗合影珍贵档案",
          "🎯 主线不偏：完整保全手头关键攻坚精力",
          "⏳ 简洁干练：平稳度过大四阶段节点"
        ]
      }
    ]
  },
  {
    "event_id": "SO_011",
    "title": "大四下室友毕业聚餐与四年青春散场约定",
    "package": "SO",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 41,
    "max_month": 42,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        41,
        42
      ]
    },
    "content": {
      "background": "毕业答辩尘埃落定，宿舍里堆满了打包好的纸箱与行李袋，同窗四年的室友即将奔赴天南海北。",
      "scene": "今晚是宿舍四人的最后一次聚餐，大家回到了大一刚入学时吃过的那家校门口小餐馆。",
      "conflict": "是大家推心置腹彻夜长谈互道感谢与约定未来，还是简单吃完早点回宿舍休息，亦或组织一次周边散心？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "畅饮长谈！彻夜倾诉四年来的陪伴、摩擦与感动，立下‘五年后再聚首’的庄重诺言",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 终身兄弟",
          "intent": "让四年寝室情谊升华为相伴一生的真挚挚友纽带，圆满告别青春",
          "tradeoff": "通宵夜聊导致次日稍显困倦"
        },
        "result_text": "在黎明破晓前，四只手紧紧相握。无论未来身在何方，彼此都将是人生道路上永远最坚实的后盾！",
        "cost": {
          "TU": 2,
          "EP": 25
        },
        "variable_delta": {
          "social": 20,
          "family": 8,
          "reputation": 6
        },
        "tag_add": [
          "FLAG_SO_BROTHERS_FOR_LIFE"
        ],
        "qualitative_changes": [
          "🤝 终身挚友：收获足以相伴一生、无话不谈的舍友纽带",
          "💖 青春圆满：大学人际关系在这一刻画下最动人的句号",
          "🏡 精神港湾：无论何时何地，总有人在惦念你的成长"
        ]
      },
      {
        "choice_id": "B",
        "text": "组织室友在校园里最后骑一次单车，走遍常去的操场、教学楼与图书馆打卡留念",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 校园巡礼",
          "intent": "用宁静而浪漫的校园巡游定格四年足迹，温和告别",
          "tradeoff": "消耗适度步行动能"
        },
        "result_text": "微风拂过脸庞，你们在每个充满回忆的角落驻足合影。青春的旋律在欢笑中温柔落幕。",
        "cost": {
          "TU": 2,
          "EP": 15
        },
        "variable_delta": {
          "social": 12,
          "health": 6
        },
        "qualitative_changes": [
          "📸 青春画卷：走遍校园每个承载回忆的角落",
          "🤝 温暖温和：以最舒畅的方式向朝夕相处的岁月道别",
          "🌿 心灵宁静：身心处于极度安详与满足的状态"
        ]
      },
      {
        "choice_id": "C",
        "text": "聚餐后各自抓紧回宿舍整理打包行李与托运，以务实干练的态度面对离校倒计时",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 务实告别",
          "intent": "把精力留给现实繁琐的离校手续，高效不拖泥带水",
          "tradeoff": "缺少情感上的深入交流"
        },
        "result_text": "行李打包得井井有条，快递全部顺利发出。平稳理智地完成了向社会身份的交接转换。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "delivery": 6,
          "social": 4
        },
        "qualitative_changes": [
          "📦 效率达人：有条不紊办妥全部行李托运与离宿",
          "🎯 现实从容：理性迈入独立生活第一章",
          "🤝 礼貌作别：彼此珍重，各自奔赴前程"
        ]
      }
    ]
  },
  {
    "event_id": "RO_002",
    "title": "大一下恋爱初期的周末约会与日常作息磨合",
    "package": "RO",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 8,
    "max_month": 10,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        8,
        9,
        10
      ],
      "has_tags": [
        "FLAG_RO_IN_RELATIONSHIP"
      ]
    },
    "content": {
      "background": "确立恋爱关系后的第一个月，周末你们相约探索学校周边的文艺小巷与植物园。",
      "scene": "微风不燥，阳光正好。两个人一边喝着奶茶，一边聊起各自的童年趣事与生活作息习惯。",
      "conflict": "是全心投入当下的甜蜜时光并为对方准备贴心小惊喜，还是兼顾打卡与自习，亦或因消费观产生分歧？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "用心策划浪漫行程！亲手制作旅行手账并赠送手作小礼物，给予对方极致的情感安全感",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 极致浪漫",
          "intent": "深度加深情感联结，让彼此成为最坚实的心灵依靠",
          "tradeoff": "需投入一整天时间与少量个人开销"
        },
        "result_text": "看到你的手作礼物，伴侣眼中闪烁着感动与依恋。你们的感情迅速升温，如胶似漆！",
        "cost": {
          "TU": 3,
          "EP": 30
        },
        "variable_delta": {
          "romance": 20,
          "health": 8,
          "social": 4
        },
        "qualitative_changes": [
          "💖 甜蜜升温：彼此建立极度深厚的信赖与依恋",
          "🌿 精神治愈：获得来自伴侣最温柔的情感抚慰",
          "🔋 幸福充盈：身心处于极度喜悦与从容状态"
        ]
      },
      {
        "choice_id": "B",
        "text": "上午在咖啡厅并肩自习完成各自课业，下午一同散步闲聊，平衡学业与约会",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 互促共进",
          "intent": "形成‘共同进步’的健康良性恋爱模式，兼顾课业",
          "tradeoff": "浪漫仪式感相对平实"
        },
        "result_text": "在咖啡香气与代码声中度过充实的一天。伴侣夸奖你既懂生活又有上进心，感情细水长流。",
        "cost": {
          "TU": 2,
          "EP": 20
        },
        "variable_delta": {
          "romance": 12,
          "academic": 5,
          "focus": 4
        },
        "qualitative_changes": [
          "💖 默契互伴：建立积极向上的自律恋爱节奏",
          "📚 课业两全：约会同时不耽误日常课业推进",
          "🎯 踏实心安：在彼此鼓励中体会共同成长的快乐"
        ]
      },
      {
        "choice_id": "C",
        "text": "因外出游玩排队疲惫产生小摩擦，回寝室后各自冷静，并未及时坦诚沟通",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 情绪波动",
          "intent": "避免当场争吵，选择冷处理",
          "tradeoff": "滋生轻微情感隔阂与内耗"
        },
        "result_text": "一天在沉闷中结束。虽然没有大吵大闹，但晚上微信对话变得格外简短，气氛略显尴尬。",
        "cost": {
          "TU": 1,
          "EP": 15
        },
        "variable_delta": {
          "romance": -6,
          "focus": -4
        },
        "qualitative_changes": [
          "💔 偶有波澜：经历恋爱初期的习惯磨合阵痛",
          "🎯 情绪干扰：琐碎心事略微分散自习注意力",
          "⏳ 经历考验：初探亲密关系相处之道"
        ]
      }
    ]
  },
  {
    "event_id": "RO_003",
    "title": "大二上图书馆专属占座与期末自习相互督促",
    "package": "RO",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 14,
    "max_month": 16,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        14,
        15,
        16
      ],
      "has_tags": [
        "FLAG_RO_IN_RELATIONSHIP"
      ]
    },
    "content": {
      "background": "大二上期末考试周来临，图书馆一座难求。伴侣每天清晨 7 点去排队，为你和自己占下靠窗的双人自习桌。",
      "scene": "冬日晨光透过玻璃窗，桌上放着彼此准备的保温杯和热咖啡，复习资料摊开在各自手边。",
      "conflict": "是制定严格互相背诵考核机制共同冲刺高分，还是劳逸结合互相投喂，亦或忍不住频繁聊天影响效率？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "组建‘神仙学霸情侣档’！互相抽背考点、互画知识树，将自习效率拉至极致",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 顶峰相见",
          "intent": "以爱情为动力双向奔赴，在期末考核中实现双赢",
          "tradeoff": "复习节奏紧张，没有太多嬉笑时间"
        },
        "result_text": "在伴侣的严格监督下，你攻克了全部难点公式！期末两人双双斩获专业前 10%，被全院奉为榜样！",
        "cost": {
          "TU": 3,
          "EP": 35
        },
        "variable_delta": {
          "romance": 18,
          "academic": 12,
          "focus": 8,
          "reputation": 6
        },
        "tag_add": [
          "FLAG_RO_STUDY_PARTNERS"
        ],
        "qualitative_changes": [
          "💖 灵魂共振：将情感升华为共同追逐优秀的强大动力",
          "📚 绩点飙升：在伴侣督促下期末成绩显著跃升",
          "🌟 模范口碑：成为同学们公认的顶级自律情侣"
        ]
      },
      {
        "choice_id": "B",
        "text": "安静并肩看书，累了就在走廊一起喝热饮看雪景，给彼此最舒服的陪伴",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 温柔相守",
          "intent": "不给彼此施加过大竞争压力，提供恰到好处的温情托底",
          "tradeoff": "复习提分幅度不如高强度抽背"
        },
        "result_text": "紧张的考试周因有了温暖的陪伴而不再冰冷。两人均平稳发挥，感情在默契陪伴中愈发醇厚。",
        "cost": {
          "TU": 2,
          "EP": 15
        },
        "variable_delta": {
          "romance": 14,
          "academic": 6,
          "health": 6
        },
        "qualitative_changes": [
          "💖 温润如玉：在平淡真挚的陪伴中深化默契",
          "🌿 压力纾解：有效缓解了期末焦虑与孤单感",
          "📚 学业稳固：平稳度过高难度考试周"
        ]
      },
      {
        "choice_id": "C",
        "text": "自习时频繁传纸条说笑、刷手机讨论八卦，不知不觉荒废了大半个下午",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 甜蜜懈怠",
          "intent": "贪恋轻松玩闹，忽视严肃复习",
          "tradeoff": "复习进度严重拖延，复习计划被打乱"
        },
        "result_text": "虽然下午玩得很开心，但傍晚看到空空的复习本，两人心里都泛起了深深的自责与焦虑。",
        "cost": {
          "TU": 2,
          "EP": 20
        },
        "variable_delta": {
          "romance": 4,
          "academic": -4,
          "focus": -6
        },
        "qualitative_changes": [
          "⚠️ 学业受阻：考试周进度严重滞后",
          "🎯 专注涣散：注意力被嬉闹过度分散",
          "🔋 自责反思：意识到需要给恋爱与学业设立清晰边界"
        ]
      }
    ]
  },
  {
    "event_id": "RO_004",
    "title": "大二下各自项目忙碌带来的情感疏离与沟通化解",
    "package": "RO",
    "type": "CRISIS",
    "priority": "P2",
    "min_month": 18,
    "max_month": 20,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        18,
        19,
        20
      ],
      "has_tags": [
        "FLAG_RO_IN_RELATIONSHIP"
      ]
    },
    "content": {
      "background": "大二下学期，你正全身心投入代码重构与竞赛答辩，而伴侣也在忙着学生会换届与专业大作业。",
      "scene": "连续三周你们只能在食堂匆匆吃个便饭，微信消息往往隔几小时才回复一句，聊天越来越程式化。",
      "conflict": "是主动放下手头代码好好约一次深夜长谈表达在乎，还是互相体谅各自安好，亦或冷战抱怨？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "推掉非核心事务！给伴侣带去最喜欢的甜点，在操场并肩散步进行真诚深度的深夜沟通",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 深度倾听",
          "intent": "主动拆除心墙，在忙碌高压期给感情重新注入确定感与温度",
          "tradeoff": "占用当晚大作业推进的 2 小时时间"
        },
        "result_text": "在晚风中伴侣红着眼眶扑进你的怀里，说出了心底的委屈与想念。你们重新找回了最初的炙热！",
        "cost": {
          "TU": 2,
          "EP": 30
        },
        "variable_delta": {
          "romance": 22,
          "health": 6,
          "social": 4
        },
        "tag_add": [
          "FLAG_RO_COMMUNICATION_MASTER"
        ],
        "qualitative_changes": [
          "💖 感情破局：成熟化解冷淡危机，羁绊坚不可摧",
          "🌿 情绪安定：彻底消除心理悬空与内耗感",
          "🎯 处事成熟：学会平衡个人奋斗与亲密关系维护"
        ]
      },
      {
        "choice_id": "B",
        "text": "睡前给对方发一段长语音说明近期的压力与歉意，约定等考完试一起好好放个假",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 诚恳致意",
          "intent": "用理性而真诚的表达稳住大局，不耗费大块自习工时",
          "tradeoff": "缺乏面对面的肢体温度"
        },
        "result_text": "伴侣发来语音表示理解与心疼，叮嘱你注意休息别太拼，危机在互相体谅中平稳化解。",
        "cost": {
          "TU": 1,
          "EP": 15
        },
        "variable_delta": {
          "romance": 10,
          "focus": 4
        },
        "qualitative_changes": [
          "💖 理解包容：建立理智成熟的情感互信机制",
          "⏳ 效率兼顾：保全手头关键代码冲刺时间",
          "🔋 心态平稳：卸下人际摩擦负担"
        ]
      },
      {
        "choice_id": "C",
        "text": "心力交瘁下回复‘大家都很忙，不要无理取闹’，两人陷入为期一周的相互冷战",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 负面宣泄",
          "intent": "因高压透支导致情绪失控",
          "tradeoff": "感情遭遇重大裂痕，长期陷入内耗深渊"
        },
        "result_text": "微信陷入冰封。整整一周你魂不守舍，写代码频繁写出低级 Bug，内心充满后悔与痛苦。",
        "cost": {
          "TU": 1,
          "EP": 20
        },
        "variable_delta": {
          "romance": -18,
          "focus": -10,
          "health": -6
        },
        "tag_add": [
          "FLAG_RO_COLD_WAR"
        ],
        "qualitative_changes": [
          "💔 情感重创：陷入长达一周的严重情感冷战",
          "🎯 专注暴跌：因情绪内耗导致代码效率极度低下",
          "⚠️ 警钟敲响：亲密关系面临破裂危机"
        ]
      }
    ]
  },
  {
    "event_id": "RO_005",
    "title": "大三上相约观看校园草地音乐节的浪漫喘息",
    "package": "RO",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 24,
    "max_month": 26,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        24,
        25,
        26
      ],
      "has_tags": [
        "FLAG_RO_IN_RELATIONSHIP"
      ]
    },
    "content": {
      "background": "大三秋高气爽的周末，学校操场举办一年一度的草地音乐节，民谣与摇滚在夜空回荡。",
      "scene": "荧光棒汇成璀璨银河，身边是热烈欢呼的同龄人，伴侣悄悄在嘈杂人群中拉紧了你的手。",
      "conflict": "是放下全部求职与升学焦虑全心享受当下的浪漫微醺，还是心系自习提前离场，亦或低头刷题？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "挥舞荧光棒并肩轻声合唱，在万人欢呼中深情拥吻，定格青春最灿烂的瞬间",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 浪漫定格",
          "intent": "在紧绷的高压奋斗期给自己与伴侣一场盛大而纯粹的情感释放",
          "tradeoff": "占用周六夜晚的自习时间"
        },
        "result_text": "在璀璨的星空与旋律下，伴侣眼中倒映着你的笑容。这一刻成为大学四年永生难忘的浪漫壁画！",
        "cost": {
          "TU": 2,
          "EP": 20
        },
        "variable_delta": {
          "romance": 20,
          "health": 10,
          "social": 6
        },
        "qualitative_changes": [
          "💖 浪漫巅峰：在盛大音乐节上铸就终生难忘的情感定格",
          "🌿 精神复苏：彻底洗涤大三以来的紧绷与疲惫",
          "🔋 活力满格：内心被真挚的爱与激情重新点亮"
        ]
      },
      {
        "choice_id": "B",
        "text": "在草坪外围铺上一块野餐垫，一边听着远处的吉他声，一边吹着晚风吃零食闲聊",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 惬意微风",
          "intent": "避开拥挤喧闹，享受温和宁静的二人时光",
          "tradeoff": "氛围感相对柔和"
        },
        "result_text": "微风吹乱了发丝，你们并肩靠在草坪上畅想未来，内心感到前所未有的平和与踏实。",
        "cost": {
          "TU": 2,
          "EP": 15
        },
        "variable_delta": {
          "romance": 12,
          "health": 8
        },
        "qualitative_changes": [
          "💖 岁月静好：享受宁静祥和的高质量二人世界",
          "🌿 身心舒缓：卸下日常防备与奔波疲劳",
          "🎯 踏实前行：在温情抚慰中汲取前进底气"
        ]
      },
      {
        "choice_id": "C",
        "text": "站了半小时就惦记着没调完的实验代码，催促伴侣提前离场回机房赶工",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 扫兴归席",
          "intent": "时刻保持技术赶工的焦虑紧迫感",
          "tradeoff": "扫了伴侣的兴致，气氛骤冷"
        },
        "result_text": "伴侣一言不发地陪你走出操场。虽然代码写完了，但看着对方落寞的背影，你心里隐隐作痛。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "romance": -8,
          "skill": 4,
          "focus": -2
        },
        "qualitative_changes": [
          "💔 浪漫降温：因过度紧绷破坏了美好节日氛围",
          "⚡ 进展平平：心怀愧疚导致编程效率打折",
          "⚠️ 警醒自省：反思生活是否已被功利全面绑架"
        ]
      }
    ]
  },
  {
    "event_id": "RO_006",
    "title": "大三下伴侣遭遇求职/保研挫折时的陪伴与托底",
    "package": "RO",
    "type": "CRISIS",
    "priority": "P2",
    "min_month": 28,
    "max_month": 30,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        28,
        29,
        30
      ],
      "has_tags": [
        "FLAG_RO_IN_RELATIONSHIP"
      ]
    },
    "content": {
      "background": "大三下学期，伴侣在名企大厂暑期实习面试或顶尖保研夏令营中遭遇遗憾淘汰，深受打击陷入自我怀疑。",
      "scene": "电话那头传来伴侣压抑的抽泣声，自尊心极强的对方第一次在你面前流露出对未来的恐惧与迷茫。",
      "conflict": "是立即放下手头任务赶到身边给予最坚实的陪伴托底，还是理性帮其复盘面试找补，亦或生硬讲大道理？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "放下一切！第一时间赶到对方身边紧紧拥抱，陪其痛哭宣泄，做其最温柔的避风港",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 患难托底",
          "intent": "在人生低谷期提供无条件的爱与情感安全感，经受风雨检验",
          "tradeoff": "需投入一整个晚上耐心陪伴与情绪抚慰"
        },
        "result_text": "在你坚定的眼神与温暖怀抱中，伴侣逐渐止住眼泪重拾自信：“谢谢你，有你在我什么都不怕了！”",
        "cost": {
          "TU": 3,
          "EP": 35
        },
        "variable_delta": {
          "romance": 25,
          "health": 4,
          "reputation": 6
        },
        "tag_add": [
          "FLAG_RO_ROCK_SOLID_SUPPORT"
        ],
        "qualitative_changes": [
          "💖 患难真情：在挫折考验下铸就不可动摇的坚固羁绊",
          "🏡 精神避风港：成为伴侣生命中最坚实可靠的港湾",
          "🌟 人格成熟：具备承担他人脆弱与托底的强大担当"
        ]
      },
      {
        "choice_id": "B",
        "text": "给伴侣买来爱吃的热奶茶，等情绪平复后帮其细致复盘面试题与投递复活渠道",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 务实军师",
          "intent": "用专业经验与理性行动帮伴侣快速走出阴霾重新出发",
          "tradeoff": "需兼顾感性安慰与理性建议的平衡"
        },
        "result_text": "在你的分析梳理下，伴侣理清了逻辑短板，并在下一场面试中成功翻盘拿到 Offer！",
        "cost": {
          "TU": 2,
          "EP": 25
        },
        "variable_delta": {
          "romance": 15,
          "delivery": 6,
          "social": 4
        },
        "qualitative_changes": [
          "💖 战友情深：成为伴侣在人生大考中最默契的战友",
          "💡 逆风翻盘：助力伴侣重振旗鼓拿下后续机会",
          "📦 交付共进：展现出色的问题解决与扶持能力"
        ]
      },
      {
        "choice_id": "C",
        "text": "在微信上打出一长段“人生没有过不去的坎，失败很正常”的鸡汤大道理",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 生硬说教",
          "intent": "试图用冰冷逻辑快速说服对方",
          "tradeoff": "缺乏共情，让对方感到冷漠与二次伤害"
        },
        "result_text": "伴侣只回了一个‘嗯’便不再说话。生硬的说教让本就受伤的心灵蒙上了一层厚重的隔阂。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "romance": -10,
          "focus": -2
        },
        "qualitative_changes": [
          "💔 共情缺失：因处理方式生硬导致关系产生距离感",
          "⚠️ 情感冷淡：暴露出在面对他人脆弱时的沟通短板",
          "🔋 懊恼自责：意识到空洞大道理无法替代真实陪伴"
        ]
      }
    ]
  },
  {
    "event_id": "RO_007",
    "title": "大三暑期关于未来城市与毕业去向的深夜长谈",
    "package": "RO",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 32,
    "max_month": 34,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        32,
        33,
        34
      ],
      "has_tags": [
        "FLAG_RO_IN_RELATIONSHIP"
      ]
    },
    "content": {
      "background": "大三暑期，秋招提前批与保研夏令营陆续出结果，两人面临着毕业后留校读研、返乡还是去一线城市的去向抉择。",
      "scene": "深夜空旷的操场看台上，晚风吹拂，关于现实、房租、户口与未来城市选择的严肃课题摆在了面前。",
      "conflict": "是坚定约定选择同一座城市共同奋斗，还是各奔前程接受异地恋考验，亦或因规划冲突陷入迷茫？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "坚定锁定同一座城市！共同对齐求职投递与院校申请目标，愿意为了共同未来协同规划",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 携手同城",
          "intent": "把彼此写入未来人生蓝图，为长久相伴奠定现实地基",
          "tradeoff": "在部分工作/院校选择上需做出互让与妥协"
        },
        "result_text": "两人的手紧紧扣在一起。对未来城市与首站生活的清晰勾画，让你们在激烈的毕业秋招中充满了无畏底气！",
        "cost": {
          "TU": 2,
          "EP": 30
        },
        "variable_delta": {
          "romance": 24,
          "family": 8,
          "focus": 6
        },
        "tag_add": [
          "FLAG_RO_SAME_CITY_COMMITTED"
        ],
        "qualitative_changes": [
          "💖 人生同盟：将校园恋爱成熟升华为人生长久契约",
          "🎯 目标聚拢：秋招与升学城市彻底锚定对齐",
          "🏡 现实托底：满怀期待迎接共同打拼的未来生活"
        ]
      },
      {
        "choice_id": "B",
        "text": "理性探讨现实最优解，坦然接受各自选择最理想的发展城市，约定以高频沟通维系异地考验",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 理性异地",
          "intent": "不强求彼此牺牲个人最好平台，成熟面对现实距离",
          "tradeoff": "未来将面临严峻的异地生活与相思考验"
        },
        "result_text": "彼此坦诚尊重各自的前程追求。虽有不舍，但成熟包容的爱让你们坚信真爱经得起高铁里程的考验。",
        "cost": {
          "TU": 2,
          "EP": 20
        },
        "variable_delta": {
          "romance": 12,
          "focus": 6
        },
        "qualitative_changes": [
          "💖 彼此成全：展现尊重个人发展的高层次爱意",
          "🎯 平台优先：各自奔赴最心仪的发展舞台",
          "⏳ 经受考验：为毕业后的异地相守做好心理建设"
        ]
      },
      {
        "choice_id": "C",
        "text": "因彼此城市选择产生严重分歧，互相认为对方不够迁就自己，不欢而散",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 现实碰撞",
          "intent": "面对现实利益时的僵持与困惑",
          "tradeoff": "暴露出价值观与未来预期的深层裂痕"
        },
        "result_text": "操场上只留下沉默与背影。毕业季的现实残酷第一次赤裸裸地摆在眼前，前路布满迷雾。",
        "cost": {
          "TU": 1,
          "EP": 20
        },
        "variable_delta": {
          "romance": -12,
          "focus": -6
        },
        "qualitative_changes": [
          "💔 现实鸿沟：面对毕业分流展现出深刻的人生分歧",
          "🎯 焦虑蔓延：未来的不确定性极度干扰复习心态",
          "⚠️ 考验降临：感情走向十字路口"
        ]
      }
    ]
  },
  {
    "event_id": "RO_008",
    "title": "大四上各自面临校招/考研冲刺期的默契支持",
    "package": "RO",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 36,
    "max_month": 37,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        36,
        37
      ],
      "has_tags": [
        "FLAG_RO_IN_RELATIONSHIP"
      ]
    },
    "content": {
      "background": "大四上 11~12 月，秋招终面签约与全国考研初试进入白热化倒计时阶段，两个人均处于人生压力最高峰。",
      "scene": "无需多言，每天早晨手机上准时出现的一句“加油”，以及晚上悄悄塞在自习室桌上的暖宝宝与巧克力。",
      "conflict": "是维持极致默契的无声陪伴与营养支持，还是忙碌之余抽空共进温馨晚餐，亦或被各自焦虑压垮？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "无声胜有声的顶级默契！每日互送备考爱心便当与水果，互道鼓励，给予彼此最安宁的定海神针",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 温暖托举",
          "intent": "在人生决战时刻成为彼此最有力的精神后盾，不造成丝毫负担",
          "tradeoff": "牺牲少量备餐与自习间隙时间"
        },
        "result_text": "正是这份无可替代的平静与温柔，支撑着彼此在最残酷的高压决战中咬牙坚持到底，杀出重围！",
        "cost": {
          "TU": 2,
          "EP": 20
        },
        "variable_delta": {
          "romance": 20,
          "focus": 10,
          "health": 6
        },
        "tag_add": [
          "FLAG_RO_PEAK_COMPANION"
        ],
        "qualitative_changes": [
          "💖 精神灯塔：成为彼此生命大考中最纯粹的精神支撑",
          "🎯 专注翻倍：后顾无忧，全身心投入最后决战冲刺",
          "🌿 身心滋养：在爱与关怀中抵御冬日严寒与焦虑"
        ]
      },
      {
        "choice_id": "B",
        "text": "严格划清时间界限，约定考研出分与秋招签约前减少见面，全身心各自死磕主线",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 闭关蓄势",
          "intent": "将时间利用率推到极致，以各自上岸为首要目标",
          "tradeoff": "感情温度稍显平淡"
        },
        "result_text": "彼此理解这种闭关状态。虽然见得少，但目标明确，各项复习进度有条不紊推进。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "focus": 8,
          "academic": 4,
          "romance": 6
        },
        "qualitative_changes": [
          "🎯 高度聚焦：杜绝任何课外情绪波动，专注应考",
          "💖 彼此信任：经得起暂时的空间距离与安静闭关",
          "⏳ 效率最优：没有产生额外的精力消耗"
        ]
      },
      {
        "choice_id": "C",
        "text": "因彼此都处于高压敏感期，无意间的一句牢骚引爆争执，双方在冲刺关头陷入冷战内耗",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 高压失控",
          "intent": "压力超载导致的负面情绪爆发",
          "tradeoff": "极度破坏冲刺心态与备考效率"
        },
        "result_text": "在临考前的关键一周情绪崩溃，自习时满脑子都是争吵细节，严重影响了冲刺心态。",
        "cost": {
          "TU": 1,
          "EP": 25
        },
        "variable_delta": {
          "romance": -16,
          "focus": -12,
          "health": -6
        },
        "qualitative_changes": [
          "💔 决战受挫：在最不该分心的决战期遭遇情感重创",
          "🎯 状态跌落：失眠与焦虑严重削弱临考应变力",
          "⚠️ 沉痛教训：见证了高压对亲密关系的极限破坏"
        ]
      }
    ]
  },
  {
    "event_id": "RO_009",
    "title": "大四下毕业前夕对未来情感承诺与异地规划的郑重决定",
    "package": "RO",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 40,
    "max_month": 41,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        40,
        41
      ],
      "has_tags": [
        "FLAG_RO_IN_RELATIONSHIP"
      ]
    },
    "content": {
      "background": "大四下 5 月，所有学业与毕业去向全部敲定，即将挥别象牙塔走向社会的真正十字路口。",
      "scene": "校园湖畔微风习习，两人坐在长椅上，看着手中即将兑现的录取通知书与三方协议，迎来了最后的约定时刻。",
      "conflict": "是交换象征相伴一生的毕业信物并郑重承诺未来，还是成熟理性平稳过渡，亦或因现实无奈体面分手？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "交换对戒信物与未来居所规划！无论同城还是异地，正式向双方家庭引荐并许下一生承诺",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 终身诺言",
          "intent": "将大学青涩校园爱恋修成正果，携手迈入人生下一篇章",
          "tradeoff": "需承担起成年人面对家庭与现实的厚重责任"
        },
        "result_text": "在落日的余晖中，两颗心紧紧贴在一起。四年的风雨相伴终于铸就了最坚固的人生伴侣之约！",
        "cost": {
          "TU": 2,
          "EP": 25
        },
        "variable_delta": {
          "romance": 30,
          "family": 12,
          "health": 8
        },
        "tag_add": [
          "FLAG_RO_LIFELONG_PARTNER"
        ],
        "qualitative_changes": [
          "💖 终成眷属：四年校园爱情修成正果，锁定相伴一生契约",
          "🏡 家庭共鸣：获得双方父母的高度认可与深情祝福",
          "🌟 人生圆满：大学情感经历画下最璀璨圆满的金色句点"
        ]
      },
      {
        "choice_id": "B",
        "text": "制定详尽的每两周探视高铁排期表，理性平和地开启第一年异地奋斗互促期",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 踏实相守",
          "intent": "以极具执行力的科学排期对抗距离，务实走好第一步",
          "tradeoff": "需严格自律执行后续跨城安排"
        },
        "result_text": "两人打印好了日历并标好探视车次。心中有爱，眼里有光，对即将到来的未来充满平静的信心。",
        "cost": {
          "TU": 1,
          "EP": 15
        },
        "variable_delta": {
          "romance": 16,
          "delivery": 6
        },
        "qualitative_changes": [
          "💖 务实相守：以清晰成熟的行动规划化解异地焦虑",
          "📦 执行到位：展现成年人面对现实挑战的成熟气魄",
          "🎯 携手向前：在各自的城市继续发光发热"
        ]
      },
      {
        "choice_id": "C",
        "text": "面对天南海北的距离与家庭压力，经过平静长谈后，决定在毕业季体面分手、互道珍重",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 体面放手",
          "intent": "不让现实拖垮彼此，将最好的青春记忆永远留在校园",
          "tradeoff": "内心留下一抹淡淡的青春遗憾"
        },
        "result_text": "最后一次深情拥抱后，两人微笑着转身告别。感谢彼此四年的陪伴，青春无悔，各自安好。",
        "cost": {
          "TU": 1,
          "EP": 20
        },
        "variable_delta": {
          "romance": -10,
          "focus": 6,
          "health": 2
        },
        "tag_add": [
          "FLAG_RO_POLITELY_SEPARATED"
        ],
        "qualitative_changes": [
          "🍂 青春散场：以极具尊严与体面的方式向校园爱情告别",
          "💖 感恩过往：将最美好的回忆封存在四年最好的年华里",
          "🎯 独立前行：释怀过去，轻装上阵奔赴未知未来"
        ]
      }
    ]
  },
  {
    "event_id": "FA_002",
    "title": "大一上周末家庭例行视频与报喜不报忧的成长",
    "package": "FA",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 3,
    "max_month": 4,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        3,
        4
      ]
    },
    "content": {
      "background": "入学两个月，周末晚上父母发来微信视频邀请，屏幕那头是熟悉的客厅与关切的面孔。",
      "scene": "妈妈仔细打量着你是否瘦了，询问食堂饭菜合不合胃口，而你刚经历高数作业的折磨与生活琐碎。",
      "conflict": "是耐心陪伴父母拉家常分享校园趣事并宽慰二老，还是简短应付几句，亦或宣泄情绪抱怨压力？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "笑着展示干净的宿舍书桌，挑着军训与选课的趣事讲给父母听，让他们彻底安心",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 孝顺体贴",
          "intent": "展现成年人的独立与懂事，给予父母最踏实的心理慰藉",
          "tradeoff": "需耐心倾听老一辈的琐碎唠叨"
        },
        "result_text": "视频那头父母笑得合不拢嘴，叮嘱你多吃水果。挂断电话后，一股被亲情托底的温暖涌上心头！",
        "cost": {
          "TU": 1,
          "EP": 15
        },
        "variable_delta": {
          "family": 12,
          "health": 4,
          "focus": 4
        },
        "tag_add": [
          "FLAG_FA_WEEKLY_CALL"
        ],
        "qualitative_changes": [
          "🏡 亲情升温：给远方牵挂的父母最放心的安慰",
          "🌿 心理抚慰：体会到家庭永远作为温暖港湾的力量",
          "🎯 自立成长：学会报喜不报忧的成熟担当"
        ]
      },
      {
        "choice_id": "B",
        "text": "边整理桌面边聊 10 分钟，如实告知课业较重但应付得来，平稳结束通话",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 平稳例行",
          "intent": "维持基本的家庭沟通频次，节约时间",
          "tradeoff": "缺少深度的情感流露"
        },
        "result_text": "父母叮嘱注意保暖。通话简短而温馨，家庭关系平稳和睦。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "family": 6
        },
        "qualitative_changes": [
          "🏡 家庭平稳：履行常规家庭联络",
          "⏳ 节奏自主：未过多占用自习时间",
          "🔋 状态平稳：身心无多余负担"
        ]
      },
      {
        "choice_id": "C",
        "text": "因心情烦躁，对着视频抱怨学校饭菜差、高数难，说了两句就匆匆挂断",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 情绪倾倒",
          "intent": "把家庭当成负面情绪宣泄垃圾桶",
          "tradeoff": "引发父母焦虑失眠，内心倍感愧疚"
        },
        "result_text": "挂掉电话后母亲连续发来好几条微信转账与长文安慰。看着长辈的担忧，你内心充满内疚与懊悔。",
        "cost": {
          "TU": 1,
          "EP": 15
        },
        "variable_delta": {
          "family": -4,
          "focus": -4
        },
        "qualitative_changes": [
          "💔 亲情波折：无意间将个人焦虑转嫁给年迈父母",
          "🎯 内疚内耗：情绪宣泄未能解决现实学业问题",
          "⚠️ 警醒自省：意识到不能把最坏脾气留给最亲近的人"
        ]
      }
    ]
  },
  {
    "event_id": "FA_003",
    "title": "大二上父母对技术方向的困惑与考公期望沟通",
    "package": "FA",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 13,
    "max_month": 15,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        13,
        14,
        15
      ]
    },
    "content": {
      "background": "大二上学期，父母看到新闻里关于互联网行业裁员的消息，焦虑地打电话劝你考虑考公务员或选调生体制内路线。",
      "scene": "老一辈眼中的‘稳定编制’与你正在死磕的‘前沿架构与极客技术’发生了强烈的观念代沟碰撞。",
      "conflict": "是拿出扎实行业数据与个人成长路线与父母平等长谈，还是顺从应和，亦或言辞激烈反驳代沟？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "整理详尽的行业认知与个人四年能力图谱，周末花一小时耐心向父母剖析技术核心竞争力与长远规划",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 深度同频",
          "intent": "破除代沟迷雾，赢得父母从担忧到由衷自豪的坚定支持",
          "tradeoff": "需极为克制情绪，将专业技术术语翻译为长辈听得懂的语言"
        },
        "result_text": "看着你条理清晰、自信坚定的模样，父母深深感受到了你的成长：“孩子真的长大了，我们相信你的选择！”",
        "cost": {
          "TU": 2,
          "EP": 25
        },
        "variable_delta": {
          "family": 16,
          "focus": 8,
          "reputation": 6
        },
        "tag_add": [
          "FLAG_FA_CAREER_CONSENSUS"
        ],
        "qualitative_changes": [
          "🏡 家庭同频：彻底消除职业代沟，获得家庭坚定背书",
          "🎯 笃定自信：在向父母的阐述中更加坚定了个人发展方向",
          "🌟 处事成熟：具备高超的跨代际沟通与说服艺术"
        ]
      },
      {
        "choice_id": "B",
        "text": "理解父母求稳的苦心，说明自己会在大三全面考量，目前先以打好专业基础为主",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 缓和折中",
          "intent": "避免激化观念矛盾，给彼此留出观察时间",
          "tradeoff": "未彻底打消父母的顾虑"
        },
        "result_text": "父母的情绪逐渐平复，答应不再催促。你在和谐的气氛中保全了自主空间。",
        "cost": {
          "TU": 1,
          "EP": 15
        },
        "variable_delta": {
          "family": 8,
          "focus": 4
        },
        "qualitative_changes": [
          "🏡 和睦包容：巧妙化解长辈焦虑，避免正面交锋",
          "⏳ 策略缓兵：为后续路线探索保留灵活弹性",
          "🔋 消耗轻微：未产生心力撕扯"
        ]
      },
      {
        "choice_id": "C",
        "text": "不耐烦地打断：“你们根本不懂现在的科技行业，别老拿二十年前的思想管我！”",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 激烈对撞",
          "intent": "捍卫主见的生硬宣示",
          "tradeoff": "严重伤害父母自尊，导致家庭关系陷入僵局"
        },
        "result_text": "电话在一片沉寂中挂断。你知道父母是为你好，但刺耳的话语已经在亲情中划下了一道伤痕。",
        "cost": {
          "TU": 1,
          "EP": 15
        },
        "variable_delta": {
          "family": -10,
          "focus": -6
        },
        "qualitative_changes": [
          "💔 代沟冲突：亲情沟通陷入短暂冰冻期",
          "🎯 心神不宁：争执后的内疚感持续干扰近几日作息",
          "⚠️ 沟通反思：明白表达独立不能以伤害亲情为代价"
        ]
      }
    ]
  },
  {
    "event_id": "FA_004",
    "title": "大二暑期返乡陪伴父母与家乡岁月感触",
    "package": "FA",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 16,
    "max_month": 18,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        16,
        17,
        18
      ]
    },
    "content": {
      "background": "大二暑假，完成期末与竞赛的你挤出两周时间返乡回家，见到了早已在车站翘首以盼的父母。",
      "scene": "进门是满满一桌爱吃的饭菜，而你不经意间发现父亲鬓角新添的白发，以及母亲看手机时不得不戴上的老花镜。",
      "conflict": "是主动帮父母分担家务带他们做一次体检，还是宅在卧室看书刷剧，亦或频繁外出找高中同学聚会？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "陪伴是最长情的告白！陪母亲逛菜市场下厨，带父母去医院做全面健康体检并教会手机挂号",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 温暖反哺",
          "intent": "用实际行动反哺家庭，消除父母健康隐患与数字鸿沟",
          "tradeoff": "需投入数天假期陪伴并自掏部分体检费用"
        },
        "result_text": "体检排除了父母的潜在慢性病风险。看着被你调好大字号界面的手机，二老心里感到无比踏实与自豪！",
        "cost": {
          "TU": 2,
          "EP": 25
        },
        "variable_delta": {
          "family": 18,
          "health": 8,
          "social": 4
        },
        "tag_add": [
          "FLAG_FA_PARENTS_HEALTH_CHECK"
        ],
        "qualitative_changes": [
          "🏡 反哺家庭：筑牢父母健康底线，消除潜在隐患",
          "💖 亲情充盈：享受弥足珍贵的家庭天伦之乐",
          "🌟 顶梁柱初现：逐渐成长为家庭依靠的主心骨"
        ]
      },
      {
        "choice_id": "B",
        "text": "在家安稳休息调养，每天陪父母散步聊天，享受难得的规律三餐与充足睡眠",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 惬意休整",
          "intent": "在家庭温暖中全面回血充电，恢复身心元气",
          "tradeoff": "未深入介入家庭繁复事务"
        },
        "result_text": "母亲的家常菜彻底治愈了过去一学期的疲惫，气色红润，身心重新焕发蓬勃生机！",
        "cost": {
          "TU": 2,
          "EP": 10
        },
        "variable_delta": {
          "family": 10,
          "health": 12
        },
        "qualitative_changes": [
          "🌿 元气恢复：身心健康在家庭滋养下全面回暖",
          "🏡 港湾休憩：在熟悉的生活节奏中排解学期压力",
          "🔋 储备充沛：积攒迎接大三挑战的充沛体能"
        ]
      },
      {
        "choice_id": "C",
        "text": "白天把房门紧闭在屋里钻研技术，晚上天天约高中同学通宵聚餐喝酒",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 频繁外宿",
          "intent": "专注于老同学圈子与个人世界",
          "tradeoff": "忽视了父母在家的落寞，假期陪伴流于形式"
        },
        "result_text": "临返校前母亲默默为你塞满特产。你看着母亲失望的眼神，意识到这短短假期自己并未真正陪到二老。",
        "cost": {
          "TU": 2,
          "EP": 20
        },
        "variable_delta": {
          "family": 2,
          "social": 6,
          "health": -4
        },
        "qualitative_changes": [
          "🤝 故友叙旧：联络了高中老友感情",
          "💔 陪伴欠缺：错失一次深度陪伴父母的珍贵窗口",
          "⚠️ 亲情反思：懂得孝顺不能停留在空头承诺"
        ]
      }
    ]
  },
  {
    "event_id": "FA_005",
    "title": "大三上用兼职/实习收入为父母购置贴心礼物",
    "package": "FA",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 24,
    "max_month": 26,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        24,
        25,
        26
      ]
    },
    "content": {
      "background": "大三上学期，靠着校内助教、兼职外包或日常实习，你的银行卡里第一次积累了完全靠自己双手赚来的结余。",
      "scene": "母亲常年操劳腰椎不好，父亲的剃须刀早已刀网破损却舍不得换新的。",
      "conflict": "是用自己的劳动所得为父母网购高品质保健按摩仪与礼物，还是犒劳自己买数码产品，亦或存进理财？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "毫不犹豫！给母亲下单腰椎按摩仪，给父亲换上全新大牌剃须刀，附上一封真挚感恩信",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 孝心变现",
          "intent": "用人生第一笔独立劳动成果反哺双亲，宣告真正经济自立",
          "tradeoff": "花掉当月大半兼职结余"
        },
        "result_text": "收到快递那天，父母在亲戚群里晒了整整一天！二老眼眶泛红地打电话：“我们用得特别好，我们家孩子有出息了！”",
        "cost": {
          "TU": 1,
          "EP": 15
        },
        "variable_delta": {
          "family": 20,
          "reputation": 6,
          "health": 4
        },
        "tag_add": [
          "FLAG_FA_FINANCIALLY_FILIAL"
        ],
        "qualitative_changes": [
          "🏡 孝心圆满：用第一份独立收入给父母带来无上尊严与骄傲",
          "📦 自立里程碑：彻底告别纯粹向家庭索取的未成年心态",
          "💖 幸福洋溢：体会到通过自身奋斗守护家人的崇高价值"
        ]
      },
      {
        "choice_id": "B",
        "text": "给家里寄去一盒时令高档特产水果，剩余资金存入个人储蓄账户作为紧急储备金",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 务实积累",
          "intent": "心意送到同时保留充裕现金流抵御风险",
          "tradeoff": "礼物仪式感较为轻巧"
        },
        "result_text": "父母开心地尝到了特产，直夸你懂事会过日子，个人财务底气稳步增加。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "family": 10,
          "delivery": 4
        },
        "qualitative_changes": [
          "🏡 心意得当：让父母感受到牵挂与孝心",
          "💰 财务稳健：积累个人独立风险储备金",
          "🎯 理性规划：展现成熟的个人资产打理能力"
        ]
      },
      {
        "choice_id": "C",
        "text": "将这笔钱全部用来升级个人电子数码装备或犒劳自己大吃一顿",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 自我犒赏",
          "intent": "极致满足个人即时消费欲望",
          "tradeoff": "未向家庭分享成果"
        },
        "result_text": "新数码玩得很爽，但月底给家里打电话时，你默默没有提起自己赚到了钱。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "portfolio": 4,
          "family": 0
        },
        "qualitative_changes": [
          "💻 装备升级：改善了日常技术实操工具",
          "⏳ 个人享受：获得短期的物质消费快感",
          "🏡 亲情平淡：错失一次向家庭宣告自立的契机"
        ]
      }
    ]
  },
  {
    "event_id": "FA_006",
    "title": "大三下长辈突发身体不适的远程关切与请假返家抉择",
    "package": "FA",
    "type": "CRISIS",
    "priority": "P1",
    "min_month": 29,
    "max_month": 31,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        29,
        30,
        31
      ]
    },
    "content": {
      "background": "大三下学期正值夏令营申请与实习攻坚期，家里突然传来消息：家中老人突发急性疾病住院手术。",
      "scene": "父母在电话里极力隐瞒：“我们能照顾过来，你在学校好好搞学习，千万别请假耽误前途！”",
      "conflict": "是果断向辅导员请假 3 天返乡探视尽孝，还是远程转账并每天视频问候，亦或专心备战无暇顾及？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "家人无可替代！协调课程果断请假 3 天返乡陪床，守在手术室外为父母分担压力",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 孝义担当",
          "intent": "在家庭重大变故时刻挺身而出，成为真正的家庭顶梁柱",
          "tradeoff": "需奔波往返并顺延当周部分作业与面试排期"
        },
        "result_text": "看到你推门而入的那一刻，疲惫不堪的父母终于忍不住落泪。老人手术顺利，你在床前尽孝，无愧于心！",
        "cost": {
          "TU": 4,
          "EP": 50
        },
        "variable_delta": {
          "family": 24,
          "delivery": 8,
          "reputation": 6,
          "academic": -2
        },
        "tag_add": [
          "FLAG_FA_PILLAR_OF_FAMILY"
        ],
        "qualitative_changes": [
          "🏡 家族顶梁柱：在重大危机中展现成年人的担当与魄力",
          "💖 亲情无价：不留任何‘子欲养而亲不待’的终生遗憾",
          "🌟 坚毅品格：在风雨中磨砺出宠辱不惊的强大心智"
        ]
      },
      {
        "choice_id": "B",
        "text": "转账 2000 元贴补医疗自费开支，每日晚间固定视频联络，协助在网上查询全国专家方案",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 远程尽力",
          "intent": "以理性高效的远程支持为家庭减负，不耽误在校关键节点",
          "tradeoff": "缺少床前陪伴"
        },
        "result_text": "你提供的专家诊疗建议帮大忙，手术成功。父母欣慰你懂事，支持你安心留在学校冲刺。",
        "cost": {
          "TU": 2,
          "EP": 25
        },
        "variable_delta": {
          "family": 12,
          "delivery": 6
        },
        "qualitative_changes": [
          "🏡 务实支援：以专业信息与资金为家庭排忧解难",
          "🎯 学业坚守：保全在校关键实习/科研进度",
          "🔋 应对成熟：展现冷静理智的问题解决能力"
        ]
      },
      {
        "choice_id": "C",
        "text": "听信父母‘别回来’的劝告，寄了一箱营养品后全身心投入自己的事情中",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 听从劝告",
          "intent": "将全部精力锁定在个人前途上",
          "tradeoff": "日后回想起来内心隐隐有一丝自私的愧疚"
        },
        "result_text": "老人顺利出院。虽然前途未受耽搁，但夜深人静时你偶尔会觉得自己有些过于冷酷。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "family": 4,
          "focus": 2
        },
        "qualitative_changes": [
          "🎯 个人至上：严格恪守个人发展优先原则",
          "🏡 亲情平顺：老人顺利康复",
          "⚠️ 道德反思：体会到成年人面对事业与家庭的两难"
        ]
      }
    ]
  },
  {
    "event_id": "FA_007",
    "title": "大四上秋招拿 Offer 时第一时间向父母长途报喜",
    "package": "FA",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 35,
    "max_month": 37,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        35,
        36,
        37
      ]
    },
    "content": {
      "background": "大四秋季，经过数轮高强度技术终面，你终于斩获了心仪已久的高薪大厂 Offer 或顶尖升学拟录取通知！",
      "scene": "走出大楼，夜空星光璀璨，手机屏幕上赫然显示着正式录用意向书。你迫不及待拨通了家里的电话。",
      "conflict": "是与父母深情分享四年奋斗成果与薪资底牌，还是淡然告知，亦或轻描淡写？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "第一时间打通视频！把录取通知与可观年薪大声告诉父母，听二老喜极而泣的掌声",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 荣耀报喜",
          "intent": "让苦心抚养自己二十年的父母彻底放下全部生活重担，享受无上欣慰",
          "tradeoff": "尽情沉浸在喜悦中"
        },
        "result_text": "电话那头父亲声音哽咽，母亲当场流下激动的泪水：“儿子/姑娘太争气了！我们四年所有的辛苦全值了！”",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "family": 25,
          "reputation": 10,
          "health": 6
        },
        "tag_add": [
          "FLAG_FA_PROUD_OF_FAMILY"
        ],
        "qualitative_changes": [
          "🏡 荣耀时刻：用无可争议的顶尖前途给家庭带来最高荣光",
          "💖 亲情释怀：彻底卸下父母半生操劳的后顾之忧",
          "🌟 人生进阶：迈入反哺家庭、独立顶梁的新人生阶段"
        ]
      },
      {
        "choice_id": "B",
        "text": "微信发去录用通知截图并简要汇报薪资待遇，约定过年回家好好庆祝",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 踏实分享",
          "intent": "低调传递喜讯，保持内敛沉稳",
          "tradeoff": "仪式感较为简短"
        },
        "result_text": "父母发来几十条点赞与大红包，在亲友群里分享喜讯，全家沉浸在踏实的欣慰中。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "family": 14,
          "delivery": 4
        },
        "qualitative_changes": [
          "🏡 踏实欣慰：向家庭交出满意答卷",
          "🎯 沉稳作风：在重大胜利面前依然保持低调",
          "🔋 温暖滋养：家庭后盾更加稳固"
        ]
      },
      {
        "choice_id": "C",
        "text": "认为这只是人生起步的常规节点，未主动向家里细说，只在聊天时顺带提了一嘴",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 极简汇报",
          "intent": "专注于后续目标，不沉湎于已有成果",
          "tradeoff": "父母觉得你有些生分"
        },
        "result_text": "父母虽然高兴，但也感慨孩子越大心思越深，感觉离自己越来越远了。",
        "cost": {
          "TU": 1,
          "EP": 5
        },
        "variable_delta": {
          "family": 4,
          "focus": 4
        },
        "qualitative_changes": [
          "🎯 独立超然：心怀更高远目标，步履不停",
          "🏡 亲情疏离：长辈偶有‘孩子渐行渐远’的淡淡失落",
          "⏳ 极简行事：保持纯粹的独立个体姿态"
        ]
      }
    ]
  },
  {
    "event_id": "FA_008",
    "title": "大四下毕业前夕与父母探讨第一站城市租房与独立生活",
    "package": "FA",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 40,
    "max_month": 41,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        40,
        41
      ]
    },
    "content": {
      "background": "大四下 5 月，离校进入倒计时，走向职场或读研需要解决首站城市的租房押金、日常生活启动金等现实问题。",
      "scene": "父母主动转来 1 万元表示支持，而你手中也有了此前实习自立攒下的第一笔积蓄。",
      "conflict": "是坦然收下父母的心意并作为周转、约定按月返还，还是完全靠自己积蓄独立承担，亦或全部依靠父母？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "婉拒资助！坚定表示自己的积蓄完全足以覆盖押一付三，正式宣告全面经济独立脱离原生家庭供养",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 彻底独立",
          "intent": "实现真正意义上的成年经济与精神双重断奶，让父母彻底放心",
          "tradeoff": "个人初期资金较为紧绷，生活需极度精打细算"
        },
        "result_text": "父母既欣慰又心疼地收回了转账，感慨当年那个背着书包的小孩如今已真正长成了能抗风雨的参天大树！",
        "cost": {
          "TU": 1,
          "EP": 15
        },
        "variable_delta": {
          "family": 20,
          "delivery": 12,
          "reputation": 8
        },
        "tag_add": [
          "FLAG_FA_TOTALLY_INDEPENDENT"
        ],
        "qualitative_changes": [
          "🏡 真正断奶：实现全面经济自立，彻底卸除父母经济包袱",
          "📦 自立里程碑：以成年人昂首挺胸的姿态迈向社会第一站",
          "🌟 顶天立地：成为家族下一代中最坚毅骄傲的代表"
        ]
      },
      {
        "choice_id": "B",
        "text": "收下父母的一半支持作为首月应急押金备用，约定转正后全额返还并给父母添置保险",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 务实周转",
          "intent": "理性缓冲毕业第一月的现金流压力，兼顾父母爱意",
          "tradeoff": "仍借助了家庭部分支持"
        },
        "result_text": "租下了通勤便利的安全居所。有了这笔周转，你在毕业过渡期从容自若，顺利完成社会人转换。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "family": 12,
          "delivery": 6
        },
        "qualitative_changes": [
          "🏡 亲情托底：妥善接受家庭爱意，平稳渡过租房难关",
          "🎯 从容起步：避免因资金过分拮据影响入职状态",
          "📦 信用履约：树立清晰的财务归还规划"
        ]
      },
      {
        "choice_id": "C",
        "text": "理所当然收下全部资助，甚至让父母直接包办全年的租房费用",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 继续依赖",
          "intent": "享受家庭庇护，生活安逸无压力",
          "tradeoff": "未能实现真正的精神与经济自立"
        },
        "result_text": "租房环境优渥舒适，但父母的腰包再次缩水。你意识到自己依然在被动‘啃老’。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "family": 4,
          "delivery": -4
        },
        "qualitative_changes": [
          "🏡 依赖延续：未能迈出真正独立自立的关键一步",
          "🛋️ 物质舒适：享受家庭托底带来的安逸过渡",
          "⚠️ 自立欠缺：在面对职场真正风雨前心理准备不足"
        ]
      }
    ]
  },
  {
    "event_id": "HE_002",
    "title": "大一上大学生体质健康测试与 1000 米长跑冲刺",
    "package": "HE",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 3,
    "max_month": 5,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        3,
        4,
        5
      ]
    },
    "content": {
      "background": "大一上学期迎来全校统一的体质健康标准测试，50米跑、引体向上与 1000 米耐力跑是所有学生的期末噩梦。",
      "scene": "操场跑道上寒风凛冽，最后一圈肺部如同火烧，监考体育老师正掐着秒表大声倒计时。",
      "conflict": "是咬牙全力冲刺拿下优秀等级，还是匀速跑完及格过关，亦或中途体力不支弃跑补测？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "最后 200 米咬紧牙关大步冲刺！爆发全部潜能撞线，体测全项目拿下良好以上",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 咬牙冲刺",
          "intent": "磨练坚毅意志力，斩获体测高分保障评优资格",
          "tradeoff": "跑完后双腿酸痛乏力，需静养半天"
        },
        "result_text": "3 分 35 秒！你成功拿下体测高分！虽然躺在草坪上大口喘气，但那种战胜身体极限的快感无与伦比！",
        "cost": {
          "TU": 2,
          "EP": 35
        },
        "variable_delta": {
          "health": 12,
          "focus": 8,
          "reputation": 4
        },
        "tag_add": [
          "FLAG_HE_FITNESS_EXCELLENT"
        ],
        "qualitative_changes": [
          "🌿 体能突破：心肺耐力与意志韧性大幅提升",
          "🎯 坚毅意志：在身体极限关口展现非凡韧劲",
          "🌟 评优保障：体质健康测试高分达标，无后顾之忧"
        ]
      },
      {
        "choice_id": "B",
        "text": "按照自己的节奏匀速呼吸慢跑，以不岔气、不受伤为前提稳妥及格通过",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 稳妥及格",
          "intent": "安全平稳跨过及格门槛，控制身体消耗",
          "tradeoff": "分数中规中矩"
        },
        "result_text": "顺利在及格线内跑完全程，呼吸平稳，没有拉伤肌肉，平稳完成考核。",
        "cost": {
          "TU": 1,
          "EP": 15
        },
        "variable_delta": {
          "health": 6,
          "focus": 2
        },
        "qualitative_changes": [
          "🌿 安全过关：平稳通过大学体质健康基准线",
          "🔋 状态良好：未产生肌肉拉伤或过度透支",
          "⏳ 节奏自控：展现良好的自我身体认知"
        ]
      },
      {
        "choice_id": "C",
        "text": "因平时极度缺乏锻炼，跑到一半肺部剧烈绞痛，申请中途停下办缓考补测",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 体能透支",
          "intent": "身体亮红灯不得不停下",
          "tradeoff": "需在下学期参加补测，敲响日常久坐警钟"
        },
        "result_text": "校医确认你没有大碍，但严厉提醒你不能再天天宅在寝室。你下定决心必须开始锻炼了。",
        "cost": {
          "TU": 1,
          "EP": 20
        },
        "variable_delta": {
          "health": -6,
          "focus": -4
        },
        "qualitative_changes": [
          "⚠️ 体能警报：久坐不动导致身体基础机能严重退化",
          "📜 补测待办：面临后续学期的体测补考负担",
          "🌱 健身决心：深刻意识到没有健康一切归零"
        ]
      }
    ]
  },
  {
    "event_id": "HE_003",
    "title": "大一下换季流感突发高烧与宿舍卧床静养",
    "package": "HE",
    "type": "CRISIS",
    "priority": "P1",
    "min_month": 8,
    "max_month": 10,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        8,
        9,
        10
      ]
    },
    "content": {
      "background": "大一下春夏换季，校园里流感蔓延，由于连日自习受凉，你突发 38.8 度高烧，浑身酸痛无力。",
      "scene": "宿舍里室友为你端来了温水和退烧药，但当天恰好有一节必须签到考核的专业实验课。",
      "conflict": "是向老师请假在宿舍彻底卧床休息补足元气，还是吃退烧药硬撑去教室，亦或拖延治疗？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "身体第一！果断向任课老师请假，按时服药并在宿舍闭门深度睡眠整整两天",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 彻底休养",
          "intent": "科学对待身体疾病，通过彻底休眠快速恢复免疫力",
          "tradeoff": "需在康复后向同学借笔记补课"
        },
        "result_text": "在充分休息与大量饮水下，高烧彻底消退，浑身酸痛消失。老师体谅批假，身体重新充满元气！",
        "cost": {
          "TU": 2,
          "EP": 10
        },
        "variable_delta": {
          "health": 18,
          "focus": 6,
          "social": 4
        },
        "tag_add": [
          "FLAG_HE_FLU_RECOVERED"
        ],
        "qualitative_changes": [
          "🌿 免疫回暖：彻底战胜换季流感，元气满格复苏",
          "🤝 舍友关怀：在生病期间体会到室友端水送药的温暖",
          "🎯 边界清晰：学会健康重于一切的成熟休止符"
        ]
      },
      {
        "choice_id": "B",
        "text": "前往校医院发热门诊输液，请医生开具全套退热抗病毒药物，遵医嘱按时调养",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 专业医疗",
          "intent": "借助专业医疗手段科学退热，保障康复速度",
          "tradeoff": "需在输液室排队并花费半天时间"
        },
        "result_text": "输液后体温平稳下降。校医院医生叮嘱你清淡饮食，三天后身体完全康复正常。",
        "cost": {
          "TU": 2,
          "EP": 20
        },
        "variable_delta": {
          "health": 12,
          "family": 2
        },
        "qualitative_changes": [
          "🌿 科学就医：快速有效控制病情蔓延",
          "🔋 状态恢复：消除发热带来的虚弱与头晕",
          "⏳ 节奏顺畅：平稳重返课堂日常"
        ]
      },
      {
        "choice_id": "C",
        "text": "吞两粒布洛芬强压体温，裹着厚外套摇摇晃晃去实验室硬撑打卡",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 冒险硬扛",
          "intent": "不落下一堂课的极限硬撑",
          "tradeoff": "药效过后病情恶化引发严重咳嗽与数日低烧"
        },
        "result_text": "做完实验回到宿舍你直接虚脱栽倒在床上，病情加重转化为支气管炎，后续咳了整整两周才好。",
        "cost": {
          "TU": 3,
          "EP": 50
        },
        "variable_delta": {
          "health": -18,
          "focus": -8,
          "academic": 2
        },
        "qualitative_changes": [
          "💔 身体受创：硬撑导致普通感冒演变为顽固支气管炎",
          "🎯 效率暴跌：咳嗽与乏力严重拖累了后续数周的学习",
          "⚠️ 沉痛反思：深刻认识到拿健康死磕是最低级的勤奋"
        ]
      }
    ]
  },
  {
    "event_id": "HE_004",
    "title": "大二上加入校园跑团与规律有氧体能提升",
    "package": "HE",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 12,
    "max_month": 15,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        12,
        13,
        14,
        15
      ]
    },
    "content": {
      "background": "大二上学期，为了摆脱日常久坐编程的亚健康状态，你注意到操场每晚都有一个自发的校园夜跑团在打卡。",
      "scene": "荧光跑鞋、整齐的步伐与晚风中畅快的呼吸，大家约定每周二、四、六晚间共同完成 5 公里慢跑。",
      "conflict": "是坚持加入跑团完成一学期打卡养成终身体育习惯，还是自己随缘跑跑，亦或因天气寒冷放弃？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "风雨无阻！坚持每周 3 次 5 公里打卡，配合核心肌群训练，彻底重塑精气神与体魄",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 习惯养成",
          "intent": "建立极度规律的终身有氧运动习惯，将身体抗疲劳上限拉满",
          "tradeoff": "需雷打不动挤出每周固定的锻炼时段"
        },
        "result_text": "一学期累计跑量超 150 公里！你的体脂率下降，双眼炯炯有神，白天面对 8 小时高强度学习毫不疲倦！",
        "cost": {
          "TU": 3,
          "EP": 25
        },
        "variable_delta": {
          "health": 22,
          "focus": 10,
          "social": 6,
          "reputation": 4
        },
        "tag_add": [
          "FLAG_HE_RUNNING_HABIT"
        ],
        "qualitative_changes": [
          "🌿 体魄蜕变：体能精力底盘极大夯实，抗疲劳度质变",
          "🎯 专注充沛：白天自习与写代码时精力如注",
          "🤝 运动圈子：结识了一批阳光自律的跑团伙伴"
        ]
      },
      {
        "choice_id": "B",
        "text": "随缘打卡，天气好、心情轻松时慢跑 3 公里出身微汗，以放松解压为主",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 适度放松",
          "intent": "在运动中释放压力，不设定苛刻指标",
          "tradeoff": "体能提升幅度相对温和"
        },
        "result_text": "慢跑成了你最好的解压方式。跑完步冲个热水澡，当晚睡眠格外香甜，身心平衡舒畅。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "health": 10,
          "focus": 4
        },
        "qualitative_changes": [
          "🌿 身心调节：学会通过温和有氧排解学期焦虑",
          "🔋 睡眠改善：深度睡眠时长明显增加",
          "⏳ 自由从容：没有严苛的打卡心理包袱"
        ]
      },
      {
        "choice_id": "C",
        "text": "只跑了两次就因冬天降温和畏难情绪放弃，重新回到回寝室躺平刷短视频的日常",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 半途而废",
          "intent": "顺从懒惰天性，放弃锻炼",
          "tradeoff": "久坐疲态依旧，抵抗力未得到改善"
        },
        "result_text": "跑鞋在床底积了灰。虽然省下了跑步的力气，但白天上课依旧哈欠连天，精神状态平淡。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "health": 0,
          "focus": -2
        },
        "qualitative_changes": [
          "⚠️ 习惯惰性：未能打破久坐少动的亚健康循环",
          "🔋 精力平淡：白天依旧容易感到困倦乏力",
          "⏳ 舒适陷阱：享受短暂的被窝安逸"
        ]
      }
    ]
  },
  {
    "event_id": "HE_005",
    "title": "大二下连续项目赶工后的视力疲劳与颈椎科学理疗",
    "package": "HE",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 18,
    "max_month": 20,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        18,
        19,
        20
      ]
    },
    "content": {
      "background": "连续一个月在电脑前高强度编码、调参数，你的脖子僵硬酸痛，眼睛干涩红血丝密布，手指关节隐隐作痛。",
      "scene": "低头转动脖子能听到咔咔的骨响，如果不及时干预，程序员常见的颈椎病与干眼症将成为长期不可逆隐患。",
      "conflict": "是主动到校医院康复科做理疗并购买笔记本支架人体工学改造，还是滴眼药水对付，亦或继续硬熬？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "全方位人体工学改造！去校医院做颈椎推拿理疗，购置支架与护眼台灯，执行每 45 分钟远眺法则",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 科学护航",
          "intent": "建立职业工程师标准的长期身体防护体系，从根源消除职业病隐患",
          "tradeoff": "需投入少量零花钱添置设备与理疗"
        },
        "result_text": "推拿后颈部经络彻底舒展开来，视野重新清晰明亮！科学的工位布局让你久坐写代码不再腰酸背痛！",
        "cost": {
          "TU": 2,
          "EP": 20
        },
        "variable_delta": {
          "health": 16,
          "focus": 8,
          "delivery": 4
        },
        "tag_add": [
          "FLAG_HE_ERGONOMICS_ADOPTED"
        ],
        "qualitative_changes": [
          "🌿 职业防护：彻底化解早期颈椎病与干眼症威胁",
          "💻 工位升级：建立符合长期高效研发的人体工学环境",
          "🎯 持久耐力：掌握工间休息与视力保护的专业法则"
        ]
      },
      {
        "choice_id": "B",
        "text": "常备人工泪液眼药水，每天坚持做眼保健操与颈椎米字操进行自我调理",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 自主调理",
          "intent": "以低成本自我拉伸缓解眼颈疲劳",
          "tradeoff": "改善效果相对渐进"
        },
        "result_text": "眼部酸胀感得到有效缓解，每天的拉伸让脖子不再剧烈酸痛，状态平稳维持。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "health": 8,
          "focus": 4
        },
        "qualitative_changes": [
          "🌿 疲劳舒缓：有效遏制眼部与颈椎亚健康恶化",
          "🔋 习惯建立：养成日常拉伸活动筋骨的好习惯",
          "⏳ 简单实用：用极低成本保全身体基本盘"
        ]
      },
      {
        "choice_id": "C",
        "text": "毫不在意，继续窝在床上低头玩手机、伏案写代码，把身体警告抛诸脑后",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 忽视警报",
          "intent": "惯性依赖不良姿势",
          "tradeoff": "颈椎压迫神经引发头晕恶心，埋下严重健康祸根"
        },
        "result_text": "几天后晨起突发严重眩晕，不得不请假就医，拍片显示颈椎生理曲度变直，追悔莫及。",
        "cost": {
          "TU": 1,
          "EP": 20
        },
        "variable_delta": {
          "health": -14,
          "focus": -8
        },
        "qualitative_changes": [
          "💔 颈椎病变：确诊颈椎生理曲度变直早期病变",
          "🎯 头晕受阻：神经压迫严重影响日常听课与屏幕聚焦",
          "⚠️ 痛定思痛：深刻体会身体结构的不可逆损耗"
        ]
      }
    ]
  },
  {
    "event_id": "HE_006",
    "title": "大三上多重压力交织下的心理咨询中心倾诉排解",
    "package": "HE",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 23,
    "max_month": 26,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        23,
        24,
        25,
        26
      ]
    },
    "content": {
      "background": "大三上面临路线分流抉择，保研边缘徘徊、考研题做不对、求职简历石沉大海，各种同辈同龄人同辈压力扑面而来。",
      "scene": "你感到持续的情绪低落与严重的冒名顶替综合征，经常失眠多梦，学校心理健康咨询中心开放了预约通道。",
      "conflict": "是勇敢预约专业心理咨询师进行系统沙盘与认知重塑，还是找好友倾诉排解，亦或死憋在心里内耗？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "放下心理负担！预约专业心理督导咨询，通过 50 分钟深度倾听与认知行为疗法拆解心结",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 心灵清毒",
          "intent": "借助专业心理学工具重构自我认知，彻底粉碎焦虑内耗",
          "tradeoff": "需直面内心最深层的恐惧与不安全感"
        },
        "result_text": "在咨询师温暖包容的引导下，你卸下了伪装痛快倾诉。走出咨询室的那一刻，头顶阳光明媚，内心前所未有的轻盈！",
        "cost": {
          "TU": 2,
          "EP": 20
        },
        "variable_delta": {
          "health": 20,
          "focus": 12,
          "reputation": 4
        },
        "tag_add": [
          "FLAG_HE_PSYCHOLOGY_RESILIENT"
        ],
        "qualitative_changes": [
          "🌿 心理重建：彻底走出冒名顶替焦虑，获得强大心智免疫力",
          "🎯 专注归位：情绪内耗清零，重新建立清醒的专注心流",
          "🌟 人格韧性：学会接纳自己的局限与不完美，从容前行"
        ]
      },
      {
        "choice_id": "B",
        "text": "约上最要好的室友与朋友在操场看台喝热茶长谈，把近期所有的憋屈与迷茫全倒出来",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 同侪共情",
          "intent": "通过同龄人共情排解孤独感与比较焦虑",
          "tradeoff": "朋友能提供情绪价值但无法提供专业心理诊断"
        },
        "result_text": "原来身边的朋友也和你一样迷茫与焦虑。大家互相打气，发现自己绝非孤岛，心情大为好转！",
        "cost": {
          "TU": 2,
          "EP": 15
        },
        "variable_delta": {
          "health": 12,
          "social": 8,
          "focus": 6
        },
        "qualitative_changes": [
          "🤝 同伴共鸣：在同窗互相支持中驱散孤独与绝望",
          "🌿 情绪减负：通过真诚倾诉排解大量心理负能量",
          "🔋 重新出发：感受到同辈携手并进的坚实温度"
        ]
      },
      {
        "choice_id": "C",
        "text": "认为‘看心理医生很丢人’，自己一个人深夜关在被子里死憋硬忍，任由消极情绪发酵",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 封闭内耗",
          "intent": "抗拒求助，选择压抑情绪",
          "tradeoff": "情绪持续恶化导致白天精神萎靡不振"
        },
        "result_text": "持续的压抑引发了失眠和注意力涣散，连续数周效率低下，陷入恶性循环。",
        "cost": {
          "TU": 1,
          "EP": 25
        },
        "variable_delta": {
          "health": -12,
          "focus": -10
        },
        "qualitative_changes": [
          "💔 心理滑坡：长期情绪压抑埋下情绪衰竭隐患",
          "🎯 认知阻滞：失眠导致大脑迟钝，学习效率极度低迷",
          "⚠️ 警觉提示：深刻体会心理求助绝非软弱，而是勇敢自救"
        ]
      }
    ]
  },
  {
    "event_id": "HE_007",
    "title": "大四上考研与秋招高压期的饮食规律调整与抗压呼吸法",
    "package": "HE",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 35,
    "max_month": 37,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        35,
        36,
        37
      ]
    },
    "content": {
      "background": "大四初冬，全国统考初试与校招签约迎来白热化，许多同学因饮食不规律暴饮暴食或胃炎频发。",
      "scene": "决战关头，拼的不仅是脑力，更是最底层、最朴实的消化系统、免疫力与作息节奏稳定性。",
      "conflict": "是严格制定健康营养抗压食谱与每天 10 分钟腹式呼吸冥想，还是靠咖啡外卖硬熬，亦或不管不顾？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "决胜在细节！清淡少油少盐规律三餐，每晚睡前进行 15 分钟 4-7-8 腹式呼吸冥想放松",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 顶级定力",
          "intent": "将生理机能调教至巅峰竞技状态，以绝对稳定的身心底盘决胜大四",
          "tradeoff": "需克制对高糖油炸垃圾食品的依赖"
        },
        "result_text": "你的肠胃无比舒适，每晚倒头便能深睡，晨起神清气爽！这种绝佳的生理状态让你的考场胜率大增！",
        "cost": {
          "TU": 2,
          "EP": 15
        },
        "variable_delta": {
          "health": 18,
          "focus": 10,
          "delivery": 6
        },
        "tag_add": [
          "FLAG_HE_PEAK_BODY_STATE"
        ],
        "qualitative_changes": [
          "🌿 竞技巅峰：生理与心理机能达到四年最完美自律状态",
          "🎯 坚如磐石：在惊涛骇浪的决战周维持绝对内心的宁静",
          "📦 底盘护航：为考研初试与顶级大厂终面提供最强大的生理保障"
        ]
      },
      {
        "choice_id": "B",
        "text": "食堂按时吃饭打卡，每餐保证有绿叶蔬菜和蛋白质，不熬夜暴食",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 朴素规律",
          "intent": "维持最基本的日常作息稳定，避免肠胃掉链子",
          "tradeoff": "未进行深度冥想调理"
        },
        "result_text": "身体状况平稳无虞，胃口良好，没有在关键决战期生病，平稳应对各项考核。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "health": 10,
          "focus": 4
        },
        "qualitative_changes": [
          "🌿 状态平稳：肠胃健康无恙，顺利度过换季考验",
          "🔋 节奏自律：按部就班作息保障了日常自习",
          "⏳ 轻松自持：未产生多余心神开销"
        ]
      },
      {
        "choice_id": "C",
        "text": "一日三餐完全靠重油麻辣外卖和深夜奶茶续命，自习困了就狂灌双倍浓缩黑咖啡",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 刺激续命",
          "intent": "用高刺激饮食与高咖啡因抵御困倦",
          "tradeoff": "引发严重急性胃痉挛与反酸烧心"
        },
        "result_text": "考前一周突发严重胃溃疡反酸，整夜腹痛无法入眠，临考前不得不去校医院打止痛针。",
        "cost": {
          "TU": 1,
          "EP": 25
        },
        "variable_delta": {
          "health": -16,
          "focus": -8
        },
        "qualitative_changes": [
          "💔 肠胃受创：高刺激饮食引发急性胃肠道黏膜损伤",
          "🎯 状态跌落：身体剧痛严重干扰考前一周黄金记忆期",
          "⚠️ 深刻教训：痛感身体才是承载一切野心不可破败的容器"
        ]
      }
    ]
  },
  {
    "event_id": "PU_003",
    "title": "大一上新生军训烈日站军姿与拉歌晚会",
    "package": "PU",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 1,
    "max_month": 2,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        1,
        2
      ]
    },
    "content": {
      "background": "大一 9 月开学季，全校新生必须在烈日下参加为期两周的高强度封闭式军事训练。",
      "scene": "绿茵场上迷彩服整齐划一，教官严厉口令下大家汗流浃背站军姿；夜晚操场灯光亮起，各连队围坐草坪展开激烈的拉歌对决。",
      "conflict": "是主动竞聘标兵排骨干磨砺坚毅意志，还是作为普通方阵一员稳扎稳打，亦或申请见习避开暴晒？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "自告奋勇加入刺杀操/军体拳标兵方阵！烈日下死磕动作细节，在拉歌晚会上带头领唱",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 标兵英姿",
          "intent": "在大学第一堂大课中展现领军担当，树立坚毅刚强的第一印象",
          "tradeoff": "皮肤晒黑蜕皮，肌肉高度酸痛"
        },
        "result_text": "在全校结业分列式上你的方阵斩获第一名！你荣获‘校级优秀军训学员’称号，名字被全院熟知！",
        "cost": {
          "TU": 3,
          "EP": 45
        },
        "variable_delta": {
          "health": 10,
          "focus": 10,
          "reputation": 10,
          "social": 8
        },
        "tag_add": [
          "FLAG_PU_MILITARY_TRAINING_TOP"
        ],
        "qualitative_changes": [
          "🌟 荣誉开局：斩获大学首个校级军训优秀标兵荣誉",
          "🎯 坚毅作风：锤炼雷厉风行、令行禁止的刚强心智",
          "🤝 连队羁绊：在摸爬滚打中结下深厚的战友同窗情"
        ]
      },
      {
        "choice_id": "B",
        "text": "认真听从教官口令，按部就班做好每个正步与齐步动作，享受夜晚拉歌的欢笑",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 踏实达标",
          "intent": "安全平稳完成军训全流程，体会集体生活的纯粹快乐",
          "tradeoff": "未获得特殊个人表彰"
        },
        "result_text": "顺利结业并拿到体育学分，身体素质得到了良好锻炼，与班级同学彻底打成一片。",
        "cost": {
          "TU": 2,
          "EP": 25
        },
        "variable_delta": {
          "health": 8,
          "social": 6,
          "focus": 4
        },
        "qualitative_changes": [
          "🌿 体能打底：两周拉练极大改善了高三以来的亚健康",
          "🤝 班级融入：迅速熟悉了全班男女同学",
          "🔋 适应大学：平稳跨过大学第一道体能门槛"
        ]
      },
      {
        "choice_id": "C",
        "text": "以低血糖为由申请坐看台见习，主要负责看守饮水桶与后勤照看行李",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 避阳清闲",
          "intent": "避免烈日暴晒与体力消耗，悠闲度日",
          "tradeoff": "错失难得的意志淬炼与集体战友情感体验"
        },
        "result_text": "虽然皮肤没有晒黑，但看着大家在操场上欢呼拥抱，你心里隐隐感到少了一份真正的参与感。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "health": 2,
          "social": 2
        },
        "qualitative_changes": [
          "🏖️ 清闲度日：免除高强度日晒雨淋之苦",
          "⚠️ 融入较慢：未能第一时间融入班级最核心的热血圈子",
          "⏳ 个人自由：拥有充裕的看台放空时间"
        ]
      }
    ]
  },
  {
    "event_id": "PU_004",
    "title": "大一下校园一卡通遗失与生活秩序管理警醒",
    "package": "PU",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 7,
    "max_month": 9,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        7,
        8,
        9
      ]
    },
    "content": {
      "background": "大一下忙碌的一天，你去食堂刷卡、进图书馆和宿舍门禁时，突然发现校园卡和宿舍钥匙不翼而飞。",
      "scene": "身无分文且被关在宿舍门外，不得不跑保卫处挂失、发校内寻物启事并在事务大厅排队补办卡片。",
      "conflict": "是借此机会全面排查并建立个人物品与数字资产的防丢归档系统，还是补办了事，亦或借室友卡应付？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "吃一堑长一智！快速挂失补办，并全面建立钥匙扣 AirTag 追踪与书包物品标准化收纳秩序",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 秩序重构",
          "intent": "从微小生活事件中反思个人管理漏洞，建立高度自律的秩序感",
          "tradeoff": "花费半天时间补卡与整理收纳"
        },
        "result_text": "从此你的随身物品井然有序，再也没有丢过任何东西。这种严密的秩序感顺带提升了你的代码规范！",
        "cost": {
          "TU": 2,
          "EP": 20
        },
        "variable_delta": {
          "delivery": 8,
          "focus": 8,
          "academic": 2
        },
        "tag_add": [
          "FLAG_PU_ORGANIZED_HABIT"
        ],
        "qualitative_changes": [
          "📦 秩序革命：建立极其规范严谨的个人物品与事务流秩序",
          "🎯 专注自律：消除丢三落四的粗心习惯",
          "⚡ 隐形收益：规范的生活习惯潜移默化提升了代码交付力"
        ]
      },
      {
        "choice_id": "B",
        "text": "到服务大厅花费 20 元工本费补办一张新卡，生活按部就班继续",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 常规补办",
          "intent": "常规解决问题，恢复日常刷卡进出",
          "tradeoff": "未深入总结生活管理经验"
        },
        "result_text": "新卡片拿到了手里。虽然花了一点小钱，但生活很快恢复了正常运转。",
        "cost": {
          "TU": 1,
          "EP": 15
        },
        "variable_delta": {
          "delivery": 4
        },
        "qualitative_changes": [
          "💳 功能恢复：顺利恢复食堂与图书馆通行权限",
          "⏳ 流程熟悉：了解了学校综合事务大厅的办事流程",
          "🔋 消耗轻微：未引发过多生活震荡"
        ]
      },
      {
        "choice_id": "C",
        "text": "懒得去补卡，连续两周借室友卡蹭饭、让室友开门，把事情一直拖着不办",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 拖延借用",
          "intent": "拖延逃避排队补办手续",
          "tradeoff": "频繁麻烦室友引发轻微人际反感"
        },
        "result_text": "室友最终忍不住提醒你赶紧去办。你意识到过度依赖他人是对彼此边界的消耗，赶紧去补办了卡。",
        "cost": {
          "TU": 1,
          "EP": 15
        },
        "variable_delta": {
          "social": -4,
          "focus": -2
        },
        "qualitative_changes": [
          "⚠️ 拖延教训：逃避琐事导致生活陷入被动局面",
          "🤝 边界摩擦：频繁打扰室友引发微小社交尴尬",
          "🌱 独立反省：懂得自己的事情必须自己及时闭环"
        ]
      }
    ]
  },
  {
    "event_id": "PU_005",
    "title": "大二上学年综合素质测评打分与学年成长复盘",
    "package": "PU",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 11,
    "max_month": 13,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        11,
        12,
        13
      ]
    },
    "content": {
      "background": "大二秋季开学，学院开展大一学年综合素质测评（德育、智育、文体与志愿服务加分）与国家奖学金评定。",
      "scene": "同学们都在打印各种获奖证书、活动证明与志愿时长表，讲台前班委正在严格审核每一个加分佐证材料。",
      "conflict": "是系统梳理上一学年所有加分项并撰写年度自评复盘报告，还是随意提交基础材料，亦或不管不顾？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "严谨规范归档！整理全套加分支撑证明材料，撰写一份条理分明的《大一学年成长复盘总结》",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 深度复盘",
          "intent": "做到一分不漏锁死最高奖学金加分，并对自我四年成长进行战略校准",
          "tradeoff": "需投入一整天翻找证书与扫描规范归档"
        },
        "result_text": "材料审核全票免检！你顺利拿下校级一等奖学金与三好学生荣誉，更对未来的短板有了清醒认识！",
        "cost": {
          "TU": 2,
          "EP": 25
        },
        "variable_delta": {
          "reputation": 14,
          "academic": 8,
          "focus": 8,
          "delivery": 6
        },
        "tag_add": [
          "FLAG_PU_SCHOLARSHIP_TOP"
        ],
        "qualitative_changes": [
          "🏆 荣誉加冕：斩获校级综合一等奖学金与三好学生",
          "🎯 战略校准：在大二伊始对四年短板进行深刻自我诊断",
          "📦 档案规范：建立规范个人学术与荣誉证明资产库"
        ]
      },
      {
        "choice_id": "B",
        "text": "只提交成绩单和手头的两张社团证明，稳拿基础等级综合测评分",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 达标交卷",
          "intent": "不争高名次，拿到应得基础加分即可",
          "tradeoff": "错失角逐更高等级荣誉奖项的机会"
        },
        "result_text": "综测成绩位居班级中游，拿到了三等单项奖学金，心态平稳良好。",
        "cost": {
          "TU": 1,
          "EP": 15
        },
        "variable_delta": {
          "academic": 4,
          "reputation": 4
        },
        "qualitative_changes": [
          "📜 稳妥评定：拿到对应层级奖学金与荣誉",
          "⏳ 省时省力：未花费过多时间反复整理材料",
          "🔋 心态平和：从容对待同辈综合测评"
        ]
      },
      {
        "choice_id": "C",
        "text": "嫌填表上传太繁琐直接弃权不交材料，任由系统默认生成最低德育基准分",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 佛系弃权",
          "intent": "彻底杜绝行政填表内耗",
          "tradeoff": "白白损失数千元奖学金，辅导员认为态度不够积极"
        },
        "result_text": "名单公示时你排在全班末尾。虽然省了事，但看到别人领到真金白银的奖学金，心里还是略有失落。",
        "cost": {
          "TU": 0,
          "EP": 5
        },
        "variable_delta": {
          "reputation": -4,
          "focus": 2
        },
        "qualitative_changes": [
          "⚠️ 利益放弃：错失应得的荣誉与现金奖金奖励",
          "🌟 师长印象：被辅导员评价为对集体事务较为冷淡",
          "⏳ 极度省心：零时间精力开销"
        ]
      }
    ]
  },
  {
    "event_id": "PU_006",
    "title": "大二下校园旧书市集淘二手教材与学习笔记",
    "package": "PU",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 19,
    "max_month": 21,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        19,
        20,
        21
      ]
    },
    "content": {
      "background": "大二下学期，学校在银杏大道举办一年两度的毕业生‘跳蚤旧书市集’，学长学姐摆摊出清教材资料。",
      "scene": "地摊上摆满了历年期末真题手写划重点笔记、珍版国外影印经典教材与学霸考研备考手记，价格只要原价一折。",
      "conflict": "是耐心淘选高含金量的学霸密卷与经典二手书，还是走马观花凑凑热闹，亦或直接买全新正版？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "独具慧眼！淘到一位保研清华直博学长留下的四年全科手写笔记与经典硬核专业书原版",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 慧眼识珠",
          "intent": "以极低成本获取高价值学业传承与前人避坑知识库",
          "tradeoff": "花费一个下午淘选并搬运沉重的书本"
        },
        "result_text": "翻开密密麻麻的红笔批注与复习导图，你如获至宝！这本宝藏笔记在后续期末与考研中为你省下了几百小时！",
        "cost": {
          "TU": 2,
          "EP": 15
        },
        "variable_delta": {
          "academic": 10,
          "skill": 6,
          "family": 4,
          "focus": 6
        },
        "tag_add": [
          "FLAG_PU_LEGENDARY_NOTES"
        ],
        "qualitative_changes": [
          "📚 知识传承：获得顶级学霸四年的期末与考研避坑秘籍",
          "💰 极低成本：省下数百元高昂正版专业书费用",
          "⚡ 启发飞跃：在前人的学术肩膀上加速起跑"
        ]
      },
      {
        "choice_id": "B",
        "text": "随缘挑选两本下学期要用的二手教材和一本考研词汇书，省下大笔开销",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 务实淘书",
          "intent": "满足基础学习需求，环保省钱",
          "tradeoff": "笔记含金量较为一般"
        },
        "result_text": "用买一杯奶茶的钱搞定了下学期全部课本，经济实惠，心情大好。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "academic": 4,
          "family": 2
        },
        "qualitative_changes": [
          "💰 勤俭节约：大幅节约下学期教材购买开支",
          "📚 课本齐备：提前备齐下学期核心参考读物",
          "🌿 淘书乐趣：体验校园跳蚤市场的市井温情"
        ]
      },
      {
        "choice_id": "C",
        "text": "逛了一圈觉得二手书太旧、字迹杂乱，决定还是开学后去书店买全新正版新书",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 追求洁净",
          "intent": "偏爱崭新课本，不习惯二手笔记",
          "tradeoff": "需支付较高的原价购书费用"
        },
        "result_text": "在新学期收到了崭新的塑封正版教材。虽然钱包瘪了一点，但纯白无瑕的页面让你心满意足。",
        "cost": {
          "TU": 1,
          "EP": 5
        },
        "variable_delta": {
          "academic": 2,
          "focus": 2
        },
        "qualitative_changes": [
          "📚 崭新开端：享受纯净新书带来的仪式感",
          "⏳ 快速决断：未在市集逗留过多时间",
          "💰 开销适度：支付标准正版课本费用"
        ]
      }
    ]
  },
  {
    "event_id": "PU_007",
    "title": "大四上初冬校园林荫道漫步与四年时光感慨",
    "package": "PU",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 37,
    "max_month": 38,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        37,
        38
      ]
    },
    "content": {
      "background": "大四初冬，校园迎来了当年的第一场初雪，金黄的银杏叶覆上了洁白的积雪。",
      "scene": "路上都是背着书包匆匆走过的大一新生，看着他们略带青涩的脸庞，你忽然意识到自己在这里的生活已进入最后倒计时。",
      "conflict": "是在安静的雪景中漫步反思大学前三年的得失与沉淀，还是拍照分享朋友圈，亦或无暇感叹继续赶路？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "独自在初雪的校园林荫道漫步一小时，深刻复盘四年的蜕变、遗憾与成长，给未来的自己写一封信",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 灵魂沉淀",
          "intent": "在人生转折期完成深层的自我和解与精神升华，明确未来的真正追求",
          "tradeoff": "暂时抽离紧张的备战或求职焦虑"
        },
        "result_text": "雪落无声，内心澄澈。回首走过的每一步脚印，你对即将走出校门的自己充满了由衷的尊重与平静的底气！",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "focus": 12,
          "health": 8,
          "reputation": 4
        },
        "tag_add": [
          "FLAG_PU_MATURE_MINDSET"
        ],
        "qualitative_changes": [
          "🎯 心智大成：完成四年大学生涯最深刻的精神沉淀与自我和解",
          "🌿 宁静致远：在浮躁喧嚣的毕业季维持强大的内心秩序",
          "🌟 笃定前行：怀着对未来的从容底气从容迈向最后一学期"
        ]
      },
      {
        "choice_id": "B",
        "text": "拍下雪景与图书馆同窗合影，发一条配文‘四年忽焉已至’的朋友圈，收获上百点赞与祝福",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 仪式记录",
          "intent": "用社交镜头记录毕业季的唯美瞬间，联络同学校友",
          "tradeoff": "沉思深度相对轻巧"
        },
        "result_text": "朋友圈下密密麻麻的评论充满了温情回忆与前程祝福，社交暖流拂过心坎，感觉十分温暖。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "social": 10,
          "health": 4
        },
        "qualitative_changes": [
          "📸 青春印记：留下大四最唯美的校园雪景纪念",
          "🤝 校友互动：在社交平台上与远方故友互道珍重",
          "🔋 温暖宽慰：在温情互动中驱散冬日严寒"
        ]
      },
      {
        "choice_id": "C",
        "text": "紧了紧羽绒服拉链，视线未作丝毫停留，顶着风雪快步走向自习室继续自己的任务",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 专注独行",
          "intent": "不被任何感性情绪干扰，恪守绝对务实与专注",
          "tradeoff": "缺少对青春岁月的感性告别"
        },
        "result_text": "拍打掉肩膀上的落雪，你在熟悉的座位坐下，屏幕亮起，世界重回你的代码与公式中。",
        "cost": {
          "TU": 1,
          "EP": 5
        },
        "variable_delta": {
          "focus": 6,
          "academic": 2
        },
        "qualitative_changes": [
          "🎯 极致自律：展现出成年人顶级的专注与执行力",
          "⏳ 时间零损：未在感伤怀旧中浪费分秒",
          "⚡ 实干至上：以扎实的成果作为对大学最好的告别"
        ]
      }
    ]
  },
  {
    "event_id": "PU_008",
    "title": "大四下学士服毕业照定格与同窗校园巡礼",
    "package": "PU",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 41,
    "max_month": 42,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        41,
        42
      ]
    },
    "content": {
      "background": "大四下 6 月，答辩全部通过，全院毕业生领到了属于自己的学士服与垂布，校园里到处是飞舞的学士帽。",
      "scene": "草坪上、校门前、曾经奋战通宵的实验室门口，相机快门声此起彼伏，大家争相留下最后的青春合影。",
      "conflict": "是精心设计拍照路线与每一个恩师、好友、室友郑重合影留念，还是随大流拍几张，亦或低调不拍？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "郑重向四年恩师与每一位挚友鞠躬致谢，在每个见证过汗水的地标拍下最灿烂的学士服合影",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 终章礼赞",
          "intent": "为大学四年奋斗史举行最庄严深情的谢幕仪式，感恩师长与同伴",
          "tradeoff": "在烈日下奔走拍照半天，稍显劳累"
        },
        "result_text": "相框定格下你抛起学士帽时发自内心的开朗大笑。恩师拍着你的肩膀鼓励：‘海阔凭鱼跃，去创造属于你的时代！’",
        "cost": {
          "TU": 2,
          "EP": 20
        },
        "variable_delta": {
          "reputation": 16,
          "social": 14,
          "family": 8,
          "health": 6
        },
        "tag_add": [
          "FLAG_PU_GRADUATION_PHOTO_PERFECT"
        ],
        "qualitative_changes": [
          "🎓 终章谢幕：为四年青春盛宴画下最灿烂动人的视觉休止符",
          "🌟 师长嘱托：带着顶尖学者的厚望与期许阔步迈向社会",
          "💖 青春无悔：胸膛中充盈着对四年所做每一个选择的无憾骄傲"
        ]
      },
      {
        "choice_id": "B",
        "text": "跟着班级集体在大礼堂前拍摄官方毕业大合影，拍完后与室友在校门口留影纪念",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 官方留念",
          "intent": "完成基础毕业典礼与合影仪式，平稳从容",
          "tradeoff": "照片记录相对标准化"
        },
        "result_text": "全班合影圆满结束，大家互相在纪念衫上签名留念，共同分享着学业落定的从容与喜悦。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "social": 8,
          "reputation": 6
        },
        "qualitative_changes": [
          "📸 官方档案：收入全院毕业纪念合影底片",
          "🤝 同窗留别：在毕业衫上留下彼此的名字与祝福",
          "🔋 轻松从容：轻松愉快完成毕业仪式"
        ]
      },
      {
        "choice_id": "C",
        "text": "只草草拍了证件照用于毕业证书，早早脱下闷热的学士服回宿舍打包行李",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 极简务实",
          "intent": "不拘泥于形式主义，注重现实交接",
          "tradeoff": "日后相册里缺少了学士服的珍贵影像"
        },
        "result_text": "行李收拾得极为迅速，效率极高。只是看着走廊里别人热闹的拍照声，偶尔掠过一丝异样。",
        "cost": {
          "TU": 1,
          "EP": 5
        },
        "variable_delta": {
          "delivery": 6,
          "social": 2
        },
        "qualitative_changes": [
          "📦 现实干练：高效推进离校手续与物品处置",
          "🎯 务实风格：保持一以贯之的理性作风",
          "⏳ 终点已至：默默准备走出大学校门"
        ]
      }
    ]
  },
  {
    "event_id": "WK_004",
    "title": "大二上校园名企职业宣讲会与行业前沿招聘认知",
    "package": "WK",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 12,
    "max_month": 14,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        12,
        13,
        14
      ]
    },
    "content": {
      "background": "大二秋季，头部科技互联网名企在学校体育馆举办大型校招宣讲会与高管前沿技术分享论坛。",
      "scene": "各大展位前排起长队，HR 发放着精美的雇主画册，技术专家在讲台上分享微服务架构与大模型落地岗位要求。",
      "conflict": "是主动向技术专家交流提问并递交初步项目主页，还是收集各家招聘简章建立对照表，亦或仅当看客？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "会后主动上前向一线技术总监请教架构选型，递上自己的 GitHub 开源主页并当场互加微信",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 主动出击",
          "intent": "提前建立企业高层技术人脉，摸清大厂最看重的工程能力金字塔",
          "tradeoff": "需克服社恐主动自信表达"
        },
        "result_text": "总监翻看你的开源仓库赞许点头：‘大二能有这个代码规范非常难得，明年暑期实习提前批直接找我内推！’",
        "cost": {
          "TU": 2,
          "EP": 30
        },
        "variable_delta": {
          "reputation": 12,
          "delivery": 8,
          "social": 8,
          "portfolio": 6
        },
        "tag_add": [
          "FLAG_WK_DIRECTOR_CONTACT"
        ],
        "qualitative_changes": [
          "🌟 行业直连：获得大厂技术总监实名认可与内推通道",
          "💡 认知飞跃：彻底摸清一线大厂人才考核真实标准",
          "📦 工程定位：明确未来一年的项目打磨发力点"
        ]
      },
      {
        "choice_id": "B",
        "text": "系统搜集十家头部科技企业的岗位招聘需求，整理成《目标岗位技能矩阵对照表》",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 调研拆解",
          "intent": "以数据驱动求职准备，精准查漏补缺",
          "tradeoff": "缺少直接与面试官的人际互动"
        },
        "result_text": "对照表清晰梳理出了计算机网络、Redis 与分布式锁等高频考点，为后续自习指明了清晰靶向。",
        "cost": {
          "TU": 2,
          "EP": 15
        },
        "variable_delta": {
          "focus": 6,
          "skill": 4,
          "delivery": 4
        },
        "qualitative_changes": [
          "🎯 靶向明确：建立清晰的专业技能与企业岗位映射图",
          "💡 破除迷茫：告别盲目自学，进入精准应试准备",
          "🔋 投入稳健：以极小代价换取宏观行业视野"
        ]
      },
      {
        "choice_id": "C",
        "text": "在各家展台随手领了一堆定制帆布袋和签字笔等文创周边，听了一半就回宿舍了",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 随缘看客",
          "intent": "凑凑热闹，未进行严肃规划",
          "tradeoff": "错失难得的面对面行业洞察机会"
        },
        "result_text": "周边拿得不少，但回到宿舍把传单往桌上一扔，对于毕业究竟要做什么依然毫无概念。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "social": 2
        },
        "qualitative_changes": [
          "🛍️ 周边丰收：收获各类企业纪念礼品",
          "⚠️ 规划滞后：对未来职业竞争态势缺乏敏锐嗅觉",
          "⏳ 体验观摩：完成宣讲会基础打卡"
        ]
      }
    ]
  },
  {
    "event_id": "WK_005",
    "title": "大二下制作第一份专业程序员求职简历与排版打磨",
    "package": "WK",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 15,
    "max_month": 17,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        15,
        16,
        17
      ]
    },
    "content": {
      "background": "大二下学期准备投递日常技术实习，必须拿出一份符合软件工程工业界规范的标准一页纸中文简历。",
      "scene": "满大街都是华丽花哨的双栏设计，但真正能过大厂 HR 和技术专家眼帘的只有极简单栏、STAR 法则与量化收益。",
      "conflict": "是用 Markdown/Latex 深度遵循 STAR 法则打磨每一个项目痛点与数据指标，还是套用现成模板，亦或草草罗列课程？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "死磕 STAR 法则！用专业排版工具精雕细琢一页纸，量化每一个技术选型原因与压测吞吐数据",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 顶级背书",
          "intent": "打造无可挑剔的顶级杀手级简历，让 HR 在 10 秒内产生强烈的面试冲动",
          "tradeoff": "需反复修改 5 版文字细节并请学长逐字审查"
        },
        "result_text": "学长审阅后惊呼这简直是准大厂 P6 级别的专业简历！投递后第二天便接连收到大厂 HR 的面试邀约！",
        "cost": {
          "TU": 3,
          "EP": 40
        },
        "variable_delta": {
          "portfolio": 14,
          "delivery": 12,
          "reputation": 8,
          "skill": 4
        },
        "tag_add": [
          "FLAG_WK_KILLER_RESUME"
        ],
        "resume_entry": {
          "category": "PROJECT",
          "chain_id": "EXP_WK_RESUME_01",
          "stage_contribution": "CORE",
          "title": "工业级全栈工程师专业简历沉淀",
          "description": "严格遵循 STAR 法则重构本科技术经历，量化展示系统架构演进与压测指标，简历筛选通过率超 90%。"
        },
        "qualitative_changes": [
          "📄 杀手资产：拥有直通大厂面试顶级门票的标准工业级简历",
          "📦 表达升华：彻底掌握用商业与技术量化语言总结工程成果",
          "🌟 信心倍增：投递简历通过率产生质的飞跃"
        ]
      },
      {
        "choice_id": "B",
        "text": "使用常规干净模板，条理清晰地罗列学过的语言、课程设计和已拿到的奖项",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 规整达标",
          "intent": "快速完成一份合格无错别字的规范简历，满足常规投递",
          "tradeoff": "亮点描述相对温和，缺少极具说服力的数据指标"
        },
        "result_text": "简历格式规范、排版整齐，顺利通过中小科技公司的初筛，拿到了日常实习笔试机会。",
        "cost": {
          "TU": 2,
          "EP": 20
        },
        "variable_delta": {
          "portfolio": 6,
          "delivery": 6
        },
        "qualitative_changes": [
          "📄 资产起步：完成人生第一份正式软件工程师求职简历",
          "📦 基本合规：格式工整无硬伤，符合常规招聘标准",
          "🔋 投入均衡：平稳跨过求职第一关"
        ]
      },
      {
        "choice_id": "C",
        "text": "从求职网站下载带彩色图表和个性头像的花哨模板，把所有期末考试分数照搬上去",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 模板套用",
          "intent": "图省事套用现成设计",
          "tradeoff": "被学长指出极不专业且抓不住重点，面临多次被筛"
        },
        "result_text": "大厂技术官一眼看出这是外行大学生的学生气简历，投递后多数石沉大海，打击了自信心。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "delivery": -2,
          "focus": 2
        },
        "qualitative_changes": [
          "⚠️ 风格偏离：简历过于花哨缺乏硬核技术细节",
          "📉 筛选受挫：初筛通过率偏低，面临重写打磨",
          "🌱 认知纠偏：意识到工程师简历看重的是代码与数字"
        ]
      }
    ]
  },
  {
    "event_id": "WK_006",
    "title": "大二下日常技术实习首周入职敏捷开发与环境熟悉",
    "package": "WK",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 18,
    "max_month": 20,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        18,
        19,
        20
      ],
      "min_vars": {
        "skill": 35
      }
    },
    "content": {
      "background": "凭借扎实的代码功底，你顺利入职一家本地科技互联网公司的后端研发团队，开启第一份日常实习。",
      "scene": "第一天拉取拥有百万行代码的庞大工程仓库，面对 Git 复杂分支模型、Docker 容器编排与每日早会 Standup。",
      "conflict": "是主动请缨领跑解决遗留技术债务与编写自动化脚本，还是按部就班修小 Bug，亦或遇到报错畏手畏脚？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "两天内啃下全部架构文档与代码流！主动为团队梳理环境初始化脚本并修复 3 个历史遗留 Issue",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 惊艳破冰",
          "intent": "在带教 Mentor 和技术主管面前展现碾压同龄人的自驱力与极速上手能力",
          "tradeoff": "入职首周需连续加班熟悉业务线"
        },
        "result_text": "你的脚本让新员工环境配置时间从 2 天缩短至 10 分钟！技术总监在部门周会上点名表扬，直接给你分配核心模块！",
        "cost": {
          "TU": 4,
          "EP": 60
        },
        "variable_delta": {
          "delivery": 16,
          "skill": 12,
          "reputation": 14,
          "portfolio": 8
        },
        "tag_add": [
          "FLAG_WK_INTERN_STAR"
        ],
        "qualitative_changes": [
          "🏢 职场破圈：以惊艳的自驱工程能力赢得团队全员好评",
          "📦 交付跃升：掌握工业级百万行级代码的协作与发布规范",
          "🌟 核心职责：打破实习生只能打杂的偏见，接管核心特性"
        ]
      },
      {
        "choice_id": "B",
        "text": "遇到不懂的流程及时虚心请教 Mentor，按部就班完成指派的简单日志打印与单元测试",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 务实融入",
          "intent": "少说多看，踏实稳定地融入团队开发节奏",
          "tradeoff": "表现中规中矩"
        },
        "result_text": "Mentor 认为你性格沉稳踏实、不冒进。代码审核顺利通过合并，平稳度过了新人适应期。",
        "cost": {
          "TU": 3,
          "EP": 35
        },
        "variable_delta": {
          "delivery": 8,
          "skill": 6,
          "reputation": 6
        },
        "qualitative_changes": [
          "🏢 职场适应：熟悉日常敏捷研发流程与代码审查规则",
          "⚡ 工程积累：掌握企业级开发工具链与持续集成流程",
          "🤝 团队信赖：与带教老师建立良好的工作默契"
        ]
      },
      {
        "choice_id": "C",
        "text": "面对报错不敢向老员工提问，自己一个人默默在工位憋了三天仍未配好本地开发环境",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 闭门造车",
          "intent": "过度害怕犯错导致缺乏主动沟通",
          "tradeoff": "被主管谈话提醒效率偏慢，错失良好初印象"
        },
        "result_text": "Mentor 发现后帮你指出了权限配置问题并叮嘱‘职场上遇到卡点超过 2 小时必须主动对齐’，敲响警钟。",
        "cost": {
          "TU": 2,
          "EP": 25
        },
        "variable_delta": {
          "delivery": -2,
          "focus": 2
        },
        "qualitative_changes": [
          "⚠️ 职场教训：克服畏难被动心态，学会及时主动求助沟通",
          "⏳ 进度滞后：入职进展慢于预期",
          "🌱 习惯重塑：认识到高效同步是工程师的核心素养"
        ]
      }
    ]
  },
  {
    "event_id": "WK_007",
    "title": "大三上算法 LeetCode 刷题打卡与高频面试题攻关",
    "package": "WK",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 22,
    "max_month": 25,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        22,
        23,
        24,
        25
      ]
    },
    "content": {
      "background": "大三上面对即将到来的大厂春招提前批，手撕算法题（LeetCode Medium/Hard）是技术一面必过的生死门槛。",
      "scene": "动态规划、回溯剪枝、单调栈与图论拓扑排序，许多同学在手撕代码环节直接卡死挂掉。",
      "conflict": "是制定 100 天刷穿高频 200 题与代码模板盲打训练，还是每天随缘做两道，亦或只背高频常考题解？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "开启高强度算法集训！分类系统攻关动态规划与图论，熟练掌握手写白板代码与最优时空复杂度推导",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 算法飞升",
          "intent": "将手撕算法题转化为绝对统治力优势，大厂技术一面秒杀过关",
          "tradeoff": "连续两个月每天固定投入 2 小时死磕烧脑算法"
        },
        "result_text": "刷题量突破 300 题！在各类模拟机试中手撕代码如同行云流水，技术面试官面对你的完美代码赞不绝口！",
        "cost": {
          "TU": 4,
          "EP": 60
        },
        "variable_delta": {
          "skill": 18,
          "academic": 8,
          "focus": 10,
          "reputation": 8
        },
        "tag_add": [
          "FLAG_WK_ALGORITHM_MASTER"
        ],
        "qualitative_changes": [
          "⚡ 算法绝杀：掌握主流数据结构与算法模版的秒杀级熟练度",
          "🎯 逻辑质变：复杂问题抽象与代码调试能力跃迁",
          "📜 面试必过：彻底斩断技术一面挂掉的最大心病"
        ]
      },
      {
        "choice_id": "B",
        "text": "专注刷完‘剑指 Offer’高频 80 题，重点搞透二叉树、链表与排序查找经典套路",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 经典聚焦",
          "intent": "用极高性价比拿下 80% 的中大厂常规面试题",
          "tradeoff": "遇到极难偏题时可能缺乏推导思路"
        },
        "result_text": "高频经典题掌握扎实，面对大部分常规技术面试能够从容作答，复习投入产出比极高。",
        "cost": {
          "TU": 3,
          "EP": 35
        },
        "variable_delta": {
          "skill": 10,
          "focus": 6,
          "delivery": 4
        },
        "qualitative_changes": [
          "⚡ 核心攻克：全面拿下校招最常考的经典数据结构题库",
          "📚 效率极高：以有限时间最大化兑现求职收益",
          "🔋 状态平衡：兼顾了专业课自习与身体健康"
        ]
      },
      {
        "choice_id": "C",
        "text": "只在面试前一天突击看两篇高频面经解法，临阵磨枪，全靠现场运气",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 侥幸应付",
          "intent": "不愿在枯燥算法上花费时间，赌运气",
          "tradeoff": "面试遇到稍有变体的题目直接卡壳当场挂掉"
        },
        "result_text": "在第一次模拟面试中一道简单的反转链表变体卡了半小时没写出，面试官冷冰冰地结束了面试。",
        "cost": {
          "TU": 1,
          "EP": 15
        },
        "variable_delta": {
          "skill": 2,
          "reputation": -2
        },
        "qualitative_changes": [
          "⚠️ 侥幸受挫：惨痛教训证明没有代码量积累无法蒙混过关",
          "📉 信心打击：初次面试碰壁带来不小的挫败感",
          "🌱 痛下决心：老老实实打开编译器开始认真敲代码"
        ]
      }
    ]
  },
  {
    "event_id": "WK_008",
    "title": "大三下名企暑期实习春招笔试海投与机考应对",
    "package": "WK",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 25,
    "max_month": 27,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        25,
        26,
        27
      ],
      "min_vars": {
        "skill": 40
      }
    },
    "content": {
      "background": "大三下 3~4 月，名企大厂暑期实习‘春招黄金档’全面爆发，暑期实习转正率高达 80% 是通往毕业 Offer 的快车道。",
      "scene": "各大招聘官网与内推链接雪花般飞来，每周末都要连续参加数场线上摄像头全开的双机位严肃机考。",
      "conflict": "是海投 20 家头部大厂并制定系统性笔试日志逐场复盘，还是精投 3 家最心仪名企，亦或被繁琐流程劝退？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "全网海投与精准破局！投递 25 家科技领军企业，建立笔试追踪台账并对每一场机考错题进行深入复盘",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 全面开火",
          "intent": "以绝对饱和攻击打破信息不对称，拿下多家顶级大厂面试通行证",
          "tradeoff": "连轴转参加笔试与测评，极其消耗周末精力"
        },
        "result_text": "笔试通过率高达 85%！你一口气收到了腾讯、阿里、美团等 6 家顶级名企的面试邀请函，成为班里的求职神话！",
        "cost": {
          "TU": 4,
          "EP": 60
        },
        "variable_delta": {
          "delivery": 16,
          "reputation": 12,
          "skill": 8,
          "focus": 6
        },
        "tag_add": [
          "FLAG_WK_INTERN_TEST_PASSED"
        ],
        "qualitative_changes": [
          "💼 战果辉煌：手握多张一线大厂核心部门面试入场券",
          "📦 流程掌控：完全适应高强度、快节奏的企业招聘筛选考核",
          "🌟 行业能见度：个人简历进入多家顶级大厂核心人才储备池"
        ]
      },
      {
        "choice_id": "B",
        "text": "精挑细选 3 家与自己技术栈最契合的知名科技名企，针对其业务特点做深度定制投递",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 精准狙击",
          "intent": "有的放矢，避免广撒网带来的精力透支",
          "tradeoff": "容错率相对较低，一旦挂掉需要补充投递"
        },
        "result_text": "针对性投递收到极好反馈，顺利拿到其中 2 家名企的面试通知，投入产出比非常理想。",
        "cost": {
          "TU": 2,
          "EP": 30
        },
        "variable_delta": {
          "delivery": 8,
          "reputation": 6,
          "focus": 4
        },
        "qualitative_changes": [
          "🎯 精准打击：以极高专注度锁定目标岗位面试",
          "🔋 精力从容：未被过多笔试测评拖垮日常课业",
          "💼 平稳推进：稳妥迈入春招核心面试轮次"
        ]
      },
      {
        "choice_id": "C",
        "text": "因笔试题难度太大且测评繁琐，做了一场就心态崩溃，选择放弃春招等待秋招",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 畏难退缩",
          "intent": "逃避当前竞争激烈的春招机考",
          "tradeoff": "彻底错失暑期实习转正的最佳捷径，秋招将面临无实习背书的孤注一掷"
        },
        "result_text": "你关掉了招聘网站。虽然眼下清闲了，但错过了转正率最高的黄金窗口，给大四秋招埋下了巨大隐患。",
        "cost": {
          "TU": 1,
          "EP": 15
        },
        "variable_delta": {
          "delivery": -4,
          "focus": -2
        },
        "qualitative_changes": [
          "⚠️ 战机延误：错失大厂直通转正的暑期实习关键通道",
          "⏳ 压力后置：全部就业压力被推迟到竞争最惨烈的大四秋招",
          "📉 心态动摇：求职自信心遭遇首次重大折损"
        ]
      }
    ]
  },
  {
    "event_id": "WK_009",
    "title": "大三暑期实习阶段性项目成果复盘与答辩彩排",
    "package": "WK",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 29,
    "max_month": 31,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        29,
        30,
        31
      ],
      "has_tags": [
        "FLAG_WK_INTERN_ACCEPTED"
      ]
    },
    "content": {
      "background": "大三暑假在大厂核心部门实习两个月，业务线举行实习期中述职答辩，直接决定能否提前锁定秋招正式校招转正名额。",
      "scene": "会议室里大屏幕投射着你的系统架构图，技术总监与大组资深专家正从架构扩展性、业务 ROI 和故障容灾展开严苛质询。",
      "conflict": "是拿出详尽的数据压测对比、代码 Review 记录与端到端指标闭环震撼全场，还是常规汇报，亦或被问住哑口无言？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "以正式资深工程师标准汇报！用清晰的数据漏斗展示业务提效 40% 的成果，从容对答全部架构底线问题",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 拔得头筹",
          "intent": "以压倒性的业务贡献与架构深度征服专家组，提前锁定最高档转正 Offer",
          "tradeoff": "需提前两周加班撰写长篇技术总结与多轮演讲彩排"
        },
        "result_text": "大组总监当场给予最高转正评级！‘这个实习生的交付水平完全超越了普通正式员工！’提前锁定核心研发正式编制！",
        "cost": {
          "TU": 4,
          "EP": 60
        },
        "variable_delta": {
          "delivery": 18,
          "reputation": 16,
          "skill": 12,
          "portfolio": 10
        },
        "tag_add": [
          "FLAG_WK_INTERN_TOP_REVIEW"
        ],
        "resume_entry": {
          "category": "WORK_EXP",
          "chain_id": "EXP_WK_INTERN_02",
          "stage_contribution": "LEAD",
          "title": "头部名企核心业务线研发实习（提前全优转正）",
          "description": "独立主导微服务高可用重构与消息队列削峰，系统性能吞吐提升 40%，答辩获评大部最高转正评级。"
        },
        "qualitative_changes": [
          "💼 提前锁定：以无可匹敌的表现提前锁定大厂顶级研发 Offer",
          "📦 顶级交付：完成工业界真正认可的高并发商业系统实战闭环",
          "🌟 业界美名：在行业顶尖技术圈树立靠谱青年工程师金字口碑"
        ]
      },
      {
        "choice_id": "B",
        "text": "诚恳梳理完成的每一张需求卡片，如实展示测试覆盖率与日常工作量，按部就班汇报完毕",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 踏实达标",
          "intent": "不出差错展示岗位胜任力，争取常规转正名额",
          "tradeoff": "缺少突破性技术亮点"
        },
        "result_text": "评委老师认为你踏实可靠、执行力强，顺利通过了转正答辩，拿到常规档研发录用意向。",
        "cost": {
          "TU": 2,
          "EP": 30
        },
        "variable_delta": {
          "delivery": 10,
          "skill": 6,
          "reputation": 8
        },
        "qualitative_changes": [
          "💼 转正通过：稳妥跨过实习转正关卡，大四手握保底 Offer",
          "📦 执行受肯：展现良好的工程纪律与任务落地能力",
          "🔋 心态从容：卸下大四秋招最大的失业焦虑包袱"
        ]
      },
      {
        "choice_id": "C",
        "text": "PPT 准备仓促，讲不出具体的业务收益与技术难点，在总监追问系统边界条件时卡壳",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 准备不足",
          "intent": "轻视述职答辩重要性",
          "tradeoff": "转正评级被压至候选池，需参加秋招二次加试"
        },
        "result_text": "虽然没有被直接劝退，但转正名额被排入备选名单。你意识到职场汇报与沟通表达同样致命。",
        "cost": {
          "TU": 1,
          "EP": 20
        },
        "variable_delta": {
          "delivery": 2,
          "reputation": -4
        },
        "qualitative_changes": [
          "⚠️ 险象环生：转正进入待定补选状态，未能提前锁定",
          "📉 口碑受挫：在主管面前留下了总结表达相对欠缺的印象",
          "🌱 痛定思痛：明白做技术不仅要会写，更要清晰讲透价值"
        ]
      }
    ]
  },
  {
    "event_id": "WK_010",
    "title": "大四上秋招多份 Offer 薪资待遇与发展空间权衡选择",
    "package": "WK",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 36,
    "max_month": 37,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        36,
        37
      ],
      "has_tags": [
        "FLAG_WK_OFFER_SSP_ACCEPTED"
      ]
    },
    "content": {
      "background": "大四秋招决战尘埃落定，你的邮箱里静静躺着三家顶级企业的正式录用意向书，各家给出的条件极具诱惑力。",
      "scene": "头部大厂核心业务线开出 38W 年薪与股票期权，独角兽明星企业开出极高技术自由度与导师制，还有外企神仙作息 WLB。",
      "conflict": "是选择高薪高并发核心战场全面历练，还是选择弹性技术成长，亦或选择生活平衡？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "签约一线互联网核心中台！冲击最高年薪与亿级高并发实战，在行业风口中心磨砺最硬核翅膀",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 勇闯风口",
          "intent": "追求极致的平台高度与薪资回报，打造顶级技术履历背书",
          "tradeoff": "业务节奏极快，未来需面对高强度职场挑战"
        },
        "result_text": "郑重按下确认键！以应届最高级别 SSP 签约一线大厂核心架构团队！你的薪资打破了学院近年本科应届纪录！",
        "cost": {
          "TU": 2,
          "EP": 25
        },
        "variable_delta": {
          "reputation": 20,
          "delivery": 14,
          "skill": 10,
          "family": 12
        },
        "tag_add": [
          "FLAG_WK_SIGN_TOP_TIER"
        ],
        "qualitative_changes": [
          "💼 巅峰签约：斩获全院瞩目的一线互联网核心中台最高薪录用",
          "🌟 行业天花板：成为同届本科毕业生中的绝对佼佼者",
          "🏡 家庭自豪：以丰厚的薪资彻底解决全家后顾之忧"
        ]
      },
      {
        "choice_id": "B",
        "text": "签约知名外企研发中心，享受 965 弹性神仙作息、顶级办公环境与全面员工关怀",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 平衡生活",
          "intent": "坚守 Work-Life Balance，留出充裕时间自主生活与探索兴趣",
          "tradeoff": "短期现金回报稍低于国内激进大厂"
        },
        "result_text": "签约成功！拥有完全不加班的健康作息与国际化团队氛围，生活从容体面，幸福感拉满！",
        "cost": {
          "TU": 1,
          "EP": 15
        },
        "variable_delta": {
          "health": 16,
          "reputation": 10,
          "focus": 8
        },
        "tag_add": [
          "FLAG_WK_SIGN_WLB"
        ],
        "qualitative_changes": [
          "🌿 神仙开局：锁定顶级外企 965 不加班的黄金作息生涯",
          "🎯 充盈自主：拥有充裕的业余时间继续探索开源与个人热爱",
          "🔋 身心滋润：彻底远离内卷内耗，活出自我从容"
        ]
      },
      {
        "choice_id": "C",
        "text": "签约快速成长型 AI 独角兽企业，作为早期技术骨干承担核心模块，搏击未来期权",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 极客独角兽",
          "intent": "追求技术主导权与高风险高回报的爆发式成长",
          "tradeoff": "业务具备一定不确定性"
        },
        "result_text": "创始人亲自与你电话深聊并额外授予期权激励！你将作为核心研发骨干主导未来前沿产品落地！",
        "cost": {
          "TU": 2,
          "EP": 25
        },
        "variable_delta": {
          "portfolio": 14,
          "skill": 12,
          "delivery": 10
        },
        "tag_add": [
          "FLAG_WK_SIGN_UNICORN"
        ],
        "qualitative_changes": [
          "🚀 独角兽入局：进入高成长性前沿企业核心研发梯队",
          "⚡ 技术全能：拥有从需求到架构的全链路高度话语权",
          "💻 潜能无限：为未来的技术合伙人乃至技术创业筑牢跳板"
        ]
      }
    ]
  },
  {
    "event_id": "WK_011",
    "title": "大四下正式签署三方就业协议与入职档案派遣手续",
    "package": "WK",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 39,
    "max_month": 41,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        39,
        40,
        41
      ],
      "has_tags": [
        "FLAG_WK_SIGN_TOP_TIER"
      ]
    },
    "content": {
      "background": "大四下春季，全国高校毕业生就业管理系统开放电子三方协议网签，企业正式盖章回传。",
      "scene": "辅导员办公室里，你在国家就业协议上郑重签下自己的名字，档案派遣地址、户口接收函全部对齐完成。",
      "conflict": "是严谨核对劳动合同劳动法各项社保公积金与竞业条款，还是顺畅盖章归档，亦或办理离校入职衔接？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "逐字严格核对薪酬结构、五险一金比例与保密竞业协议条款，确保法律权益万无一失",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 法律严谨",
          "intent": "展现成熟职业人的法律素养，杜绝一切潜在职场劳动陷阱",
          "tradeoff": "需仔细阅读数十页长篇法务文本"
        },
        "result_text": "全部条款完全合规！企业 HR 称赞你具备极其专业的法律严密性，顺利完成全部网签盖章并落户锁定！",
        "cost": {
          "TU": 2,
          "EP": 20
        },
        "variable_delta": {
          "delivery": 14,
          "reputation": 10,
          "family": 8
        },
        "tag_add": [
          "FLAG_WK_OFFICIAL_CONTRACT_SIGNED"
        ],
        "qualitative_changes": [
          "📜 法律护航：正式缔结具有法律保障的国家三方协议与高端合同",
          "📦 职业素养：展现出色的风险防范意识与成年人办事作风",
          "🌟 胜券在握：手握大厂盖章协议，高枕无忧迈向毕业季"
        ]
      },
      {
        "choice_id": "B",
        "text": "按辅导员指导快速完成在线网签并提交落户申请，平稳办结全部高校派遣手续",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 流畅办结",
          "intent": "高效完成毕业派遣流程，不浪费多余时间",
          "tradeoff": "细节条款按大厂标准执行"
        },
        "result_text": "系统状态更新为‘已签约录用’。档案与户口派遣手续一气呵成，全部流程顺利闭环。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "delivery": 8,
          "reputation": 6
        },
        "qualitative_changes": [
          "📜 网签落地：顺利达成高校应届毕业生就业派遣闭环",
          "⏳ 流程顺畅：高效率搞定全部教务与企业对接手续",
          "🔋 踏实无忧：以百分百确定的社会人身份迎接散场"
        ]
      },
      {
        "choice_id": "C",
        "text": "将三方协议暂缓网签，利用手中 Offer 与多方 HR 进行新一轮调薪沟通与补贴争取",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 薪资博弈",
          "intent": "利用自身顶尖市场价值争取额外签字费或房补",
          "tradeoff": "存在一定拉扯风险与时间延宕"
        },
        "result_text": "HR 评估你的卓越实力后，为你成功追加了每月 2000 元房补津贴！随后顺利签约锁定！",
        "cost": {
          "TU": 2,
          "EP": 30
        },
        "variable_delta": {
          "delivery": 10,
          "reputation": 8,
          "family": 6
        },
        "tag_add": [
          "FLAG_WK_OFFICIAL_CONTRACT_SIGNED"
        ],
        "qualitative_changes": [
          "💰 权益增益：凭实力争取到更优厚的入职租房补充津贴",
          "💼 议价高手：展现成熟的市场价值评估与商务谈判能力",
          "📜 圆满签约：最终完成三方正式盖章锁定"
        ]
      }
    ]
  },
  {
    "event_id": "GE_003",
    "title": "大三上考研目标院校与学硕/专硕报录比理性调研",
    "package": "GE",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 21,
    "max_month": 23,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        21,
        22,
        23
      ]
    },
    "content": {
      "background": "大三上面临考研起步关键期，选择比努力更重要。各大高校研招网陆续公布上一年度的报录比与复试分数线。",
      "scene": "有的自划线 985 名校报录比高达 20:1 专业课考 408 极其惨烈，而部分优质特色工科 211 专硕给分透明、保护一志愿。",
      "conflict": "是放手一搏冲刺顶级自划线名校学硕，还是理性求稳选择一志愿保护优质院校，亦或犹豫不决迟迟不定？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "理性致胜！深入研读近五年各校复试大纲与专业课真题，选定专业排名前列且保护一志愿的目标院校",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 理性择校",
          "intent": "用数据打破择校信息差，锁定性价比与平台声誉俱佳的黄金目标",
          "tradeoff": "需投入整整一周深度调研历年考生录取名单与分数分布"
        },
        "result_text": "目标明确，军心大定！你彻底扫除了择校迷茫，制定了针对该校专业课的最优备考节奏！",
        "cost": {
          "TU": 2,
          "EP": 25
        },
        "variable_delta": {
          "focus": 12,
          "academic": 8,
          "reputation": 4
        },
        "tag_add": [
          "FLAG_GE_TARGET_LOCKED"
        ],
        "qualitative_changes": [
          "🎯 目标坚如磐石：精准选定最具胜率与平台价值的目标院校",
          "💡 信息差消除：掌握历年复试差额比与隐形专业课命题偏好",
          "📚 备考提速：彻底摆脱择校内耗，备战状态瞬间拉满"
        ]
      },
      {
        "choice_id": "B",
        "text": "只选顶级名校！坚信不冲顶尖自划线 985 毫无意义，直接选报全国竞争最惨烈的学硕方向",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 孤注一掷",
          "intent": "追求极致的学历跳跃，不留任何求稳退路",
          "tradeoff": "容错率极低，初试分数线极高，考研风险巨大"
        },
        "result_text": "定下了最高目标！书桌上贴满了名校校徽。虽然压力倍增，但也彻底激发了破釜沉舟的血性！",
        "cost": {
          "TU": 2,
          "EP": 30
        },
        "variable_delta": {
          "focus": 10,
          "academic": 6,
          "reputation": 6
        },
        "tag_add": [
          "FLAG_GE_TARGET_TOP_985"
        ],
        "qualitative_changes": [
          "🏔️ 志在巅峰：锚定全国最高难度考研战场",
          "🎯 破釜沉舟：彻底断绝一切妥协侥幸退路",
          "⚠️ 风险骤增：未来一年必须维持超凡备考水准"
        ]
      },
      {
        "choice_id": "C",
        "text": "在三个城市、五所院校之间摇摆不定，听信各路考研博主碎片分析，迟迟下不了决心",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 犹豫摇摆",
          "intent": "过度追求完美决策，导致行动严重滞后",
          "tradeoff": "白白荒废宝贵的备考黄金启动期"
        },
        "result_text": "买回来的专业课参考书堆在角落不敢拆封，每天都在知乎和贴吧刷贴比较，徒增精神内耗。",
        "cost": {
          "TU": 1,
          "EP": 15
        },
        "variable_delta": {
          "focus": -6,
          "academic": -2
        },
        "qualitative_changes": [
          "⚠️ 行动滞后：因决策犹豫耽搁了专业课第一轮基础启动",
          "🎯 精神内耗：被海量碎片化考研信息裹挟焦虑",
          "🌱 警醒反思：明白完成比完美重要得多"
        ]
      }
    ]
  },
  {
    "event_id": "GE_004",
    "title": "大三下考研数学高数线代基础轮地毯式刷题",
    "package": "GE",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 24,
    "max_month": 27,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        24,
        25,
        26,
        27
      ],
      "has_tags": [
        "FLAG_TRACK_GE_PRIMARY"
      ]
    },
    "content": {
      "background": "考研界常言‘得数学者得天下’。大三下学期进入考研数学（数一/数二）第一轮基础全景扫盲地毯式备考。",
      "scene": "极限、微分中值定理、二重积分与特征值二次型，草稿纸在书桌旁堆成小山，刷题进入最枯燥的苦行僧阶段。",
      "conflict": "是亲手手推所有核心定理严密完成全套 1000 题，还是看名师视频为主做例题，亦或遇到难题跳过？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "建立厚重硬核错题本！不留任何死角手推全部中值定理证明，地毯式做完高数 18 讲与全套习题",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 苦行扫盲",
          "intent": "将考研数学底层思维打透，建立足以冲击 135+ 高分的绝对护城河",
          "tradeoff": "每日需在自习室端坐 4 小时以上疯狂手算，极其消耗脑力"
        },
        "result_text": "两厚本错题集写得密密麻麻！在基础轮测评中你拿下 140 分的高分，所有经典陷阱尽在掌握！",
        "cost": {
          "TU": 5,
          "EP": 70
        },
        "variable_delta": {
          "academic": 18,
          "focus": 14,
          "skill": 6,
          "health": -6
        },
        "tag_add": [
          "FLAG_GE_MATH_FOUNDATION_SOLID"
        ],
        "qualitative_changes": [
          "📐 数学地基：彻底攻克微积分与线代全部定理与公式推导",
          "🎯 苦行心流：养成极度抗压耐劳的自习室闭关专注作风",
          "📚 决胜底牌：为考研初试奠定最坚不可摧的核心分数盾牌"
        ]
      },
      {
        "choice_id": "B",
        "text": "跟着名师网课系统梳理题型分类，重点攻克每章核心母题，按部就班推进进度条",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 循序渐进",
          "intent": "稳扎稳打覆盖大纲所有考点，进度可控",
          "tradeoff": "深层复杂证明题的独立手算反应稍慢"
        },
        "result_text": "基础轮复习顺利收尾，常规题型能够准确辨识作答，复习进度平稳咬住大部队。",
        "cost": {
          "TU": 3,
          "EP": 40
        },
        "variable_delta": {
          "academic": 10,
          "focus": 8
        },
        "qualitative_changes": [
          "📐 体系建立：熟悉考研数学常考大纲与基础题型框架",
          "🎯 步调稳健：平稳完成第一轮数学复习进度",
          "🔋 劳逸结合：身体保持健康未发生过度透支"
        ]
      },
      {
        "choice_id": "C",
        "text": "只爱看网课段子和名师视频，手懒不爱动笔算，自以为‘看懂了就是会做了’",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 伪勤奋陷阱",
          "intent": "用看视频的被动接收替代痛苦的手算",
          "tradeoff": "眼高手低，一到独立动笔全卡在算错与断步上"
        },
        "result_text": "模考一套基础卷直接被打回原形，简单的求导由于粗心全算错。你痛定思痛：数学必须拿笔一题题手算！",
        "cost": {
          "TU": 2,
          "EP": 20
        },
        "variable_delta": {
          "academic": 3,
          "focus": -4
        },
        "qualitative_changes": [
          "⚠️ 浮躁受挫：深刻撞破‘只看不算’的伪自律幻觉",
          "📉 模考警醒：分数当头棒喝，警示手算硬功不可投机",
          "🌱 踏实重塑：老老实实买来草稿纸重新起步手推"
        ]
      }
    ]
  },
  {
    "event_id": "GE_005",
    "title": "大三下考研英语真题精读与长难句长跑打底",
    "package": "GE",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 27,
    "max_month": 30,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        27,
        28,
        29,
        30
      ],
      "has_tags": [
        "FLAG_TRACK_GE_PRIMARY"
      ]
    },
    "content": {
      "background": "大三下学期进入考研英语（英语一）真题攻坚期，历年阅读理解真题的长难句剖析与出题逻辑深不可测。",
      "scene": "每天早晨晨读背单词 1 小时，下午限时精读两篇经济学人风格的考研阅读，分析命题人设置的反常识逻辑陷阱。",
      "conflict": "是对近 15 年真题逐字逐句做手译精读拆解出题套路，还是背诵技巧模板蒙题，亦或仅背单词？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "一字不落逐句手译！深挖主谓宾定状从句逻辑主干，将历年 60 篇阅读彻底拆解出题人‘正误选项反差陷阱’",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 逻辑通透",
          "intent": "彻底跨过考研英语长难句与同义替换大关，稳定斩获 75+ 高分",
          "tradeoff": "需投入大量晨读背诵与精读手译时间"
        },
        "result_text": "长难句在你眼中瞬间被庖丁解牛！做阅读 4 篇仅错 1 题，你彻底洞悉了命题组的心理与套路！",
        "cost": {
          "TU": 3,
          "EP": 40
        },
        "variable_delta": {
          "academic": 12,
          "focus": 8,
          "reputation": 4
        },
        "tag_add": [
          "FLAG_GE_ENGLISH_TOP_READING"
        ],
        "qualitative_changes": [
          "📖 英语破壁：彻底掌握学术英文长难句快速解构技巧",
          "💡 逻辑反推：一眼看穿考研出题人的偷换概念与干扰项",
          "📚 降维打击：为初试英语建立极高单科安全垫"
        ]
      },
      {
        "choice_id": "B",
        "text": "坚持每日背诵 100 个核心高频考研单词，做真题并对照答案详解纠正错题思路",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 单词基本盘",
          "intent": "用词汇量构筑基础防线，平稳完成日常英语复习",
          "tradeoff": "深层隐喻长句的阅读速度稍慢"
        },
        "result_text": "词汇量达标，做真题能够读懂大体脉络，阅读成绩稳定在及格线以上，状态平稳。",
        "cost": {
          "TU": 2,
          "EP": 20
        },
        "variable_delta": {
          "academic": 7,
          "focus": 4
        },
        "qualitative_changes": [
          "📖 词汇扩充：掌握考研大纲 5500 核心词汇体系",
          "📚 平稳及格：确保英语单科不拖后腿",
          "🔋 投入均衡：留出大块时间专攻数学与专业课"
        ]
      },
      {
        "choice_id": "C",
        "text": "沉迷于网上各类‘三长一短选最短’、不用读懂文章也能拿高分的玄学解题技巧视频",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 玄学技巧",
          "intent": "试图绕过基础长跑寻找投机捷径",
          "tradeoff": "考题一改风格立刻全军覆没"
        },
        "result_text": "遇到全新真题卷技巧全部失灵，阅读 20 题错了 11 题。你清醒认识到考研英语绝无捷径可走。",
        "cost": {
          "TU": 1,
          "EP": 15
        },
        "variable_delta": {
          "academic": 1,
          "focus": -2
        },
        "qualitative_changes": [
          "⚠️ 技巧幻灭：戳破‘不背单词靠蒙题’的荒唐幻想",
          "📉 警钟长鸣：必须老老实实回归词汇与句子结构",
          "🌱 踏实归正：重新开启每日清晨规范背诵打卡"
        ]
      }
    ]
  },
  {
    "event_id": "GE_006",
    "title": "大三暑假高温留校图书馆全天候高强度备战冲刺",
    "package": "GE",
    "type": "CRISIS",
    "priority": "P1",
    "min_month": 31,
    "max_month": 33,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        31,
        32,
        33
      ],
      "has_tags": [
        "FLAG_TRACK_GE_PRIMARY"
      ]
    },
    "content": {
      "background": "大三暑假 7~8 月是考研分水岭的‘黄金决战期’。室外气温高达 38 度，大部分同学已返乡，只有考研大军留校奋战。",
      "scene": "空荡荡的宿舍只有头顶风扇呼呼作响，每天早晨 6:30 抢占图书馆考研专座，连续 12 小时死磕高数强化与专业课 408。",
      "conflict": "是坚守如铁的作息完成高强度强化轮复习，还是因酷暑疲惫给自己放几天假，亦或耐不住寂寞返乡？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "雷打不动铁人作息！顶住盛夏酷暑每天奋战 13 小时，完整拿下专业课第二轮全真强化题库",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 盛夏苦行",
          "intent": "在别人松懈的暑期实现对竞争对手的弯道超车与绝对领先",
          "tradeoff": "需克服极度枯燥与孤独，身心处于高负荷抗疲劳状态"
        },
        "result_text": "两个月写空了 30 支笔芯！你彻底完成了数学强化与专业课全景大串讲，综合模拟成绩直接迈入 400 分梯队！",
        "cost": {
          "TU": 5,
          "EP": 80
        },
        "variable_delta": {
          "academic": 20,
          "focus": 16,
          "health": -6,
          "reputation": 8
        },
        "tag_add": [
          "FLAG_GE_SUMMER_WARRIOR"
        ],
        "qualitative_changes": [
          "🏔️ 弯道超车：在暑期黄金两个月实现考研实力的质的飞跃",
          "🎯 钢铁意志：耐住酷暑与绝对孤独，磨砺出近乎苦行僧的自律",
          "📚 综合领跑：模考成绩位居目标院校报考群最前列"
        ]
      },
      {
        "choice_id": "B",
        "text": "保持每天 8 小时高质量有效自习，午后在自习室小憩半小时，傍晚慢跑散心防中暑",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 科学抗暑",
          "intent": "注重效率与身心可持续性，平稳健康度过炎炎夏日",
          "tradeoff": "总复习时长略逊于全天极限闭关"
        },
        "result_text": "身体状况极佳，没有中暑也没有焦虑失眠，按部就班完成了强化轮 80% 的任务，节奏极为健康。",
        "cost": {
          "TU": 3,
          "EP": 45
        },
        "variable_delta": {
          "academic": 12,
          "focus": 8,
          "health": 4
        },
        "qualitative_changes": [
          "🌿 科学备考：劳逸结合，身心维持健康稳定的竞技状态",
          "📚 任务达成：扎实拿下暑期强化核心知识点",
          "🔋 续航持久：拥有支撑后续秋冬冲刺的长久耐心"
        ]
      },
      {
        "choice_id": "C",
        "text": "因宿舍没有空调且食堂饭菜单一，在留校两周后选择订高铁票打包回家‘在空调房自学’",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 撤退回家",
          "intent": "追求舒适生活环境",
          "tradeoff": "回家后缺乏竞争氛围，学习效率暴跌 60%"
        },
        "result_text": "回到家后，水果、手机与懒觉让自习时间严重缩水，每天实际有效学习不足 3 小时，进度严重滞后。",
        "cost": {
          "TU": 2,
          "EP": 20
        },
        "variable_delta": {
          "academic": 4,
          "focus": -6,
          "family": 4
        },
        "qualitative_changes": [
          "⚠️ 效率滑坡：脱离备考环境导致复习进度大幅缩水",
          "🎯 自律受损：在家庭舒适圈中滋生懈怠情绪",
          "⏳ 焦虑反噬：意识到必须在开学前赶紧杀回学校自习室"
        ]
      }
    ]
  },
  {
    "event_id": "GE_007",
    "title": "大四上考研百日倒计时全真模拟考受挫心态重建",
    "package": "GE",
    "type": "CRISIS",
    "priority": "P1",
    "min_month": 34,
    "max_month": 35,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        34,
        35
      ],
      "has_tags": [
        "FLAG_TRACK_GE_PRIMARY"
      ]
    },
    "content": {
      "background": "大四秋季 10 月，考研进入最后 100 天冲刺！考研机构与研友组织了一次严格按照初试时间的 3 天全真模拟考试。",
      "scene": "数学大题因为一道计算失误导致全盘崩塌仅得 85 分，专业课时间分配不均最后一题整整 20 分空着没写，心态遭遇雷击。",
      "conflict": "是痛定思痛全面复盘考场时间分配与计算抗压演练，还是陷入‘今年肯定考不上了’的自暴自弃，亦或转投秋招？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "感谢这次摔倒！逐题手撕失分点，制定‘做题时间红线铁律’，每天专门加练 40 分钟极限草稿纸计算精准度",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 绝地反击",
          "intent": "将模拟受挫转化为考前最宝贵的免疫疫苗，彻底封堵考场翻车漏洞",
          "tradeoff": "需强行克服沮丧情绪，以极度冷酷理性的态度面对错题"
        },
        "result_text": "你找出了全部时间管理与计算粗心漏洞！在第二次模考中狂砍 390 分！心态彻底蜕变为波澜不惊的考场战神！",
        "cost": {
          "TU": 4,
          "EP": 65
        },
        "variable_delta": {
          "academic": 16,
          "focus": 14,
          "delivery": 10,
          "reputation": 6
        },
        "tag_add": [
          "FLAG_GE_MINDSET_UNBREAKABLE"
        ],
        "qualitative_changes": [
          "🎯 战神心态：在绝境挫折中铸就泰山崩于前而色不变的强韧心智",
          "📐 考场控盘：建立分秒精确到分钟的顶级答题时间管理体系",
          "📚 漏洞清零：将全部计算失误与答题盲区提前引爆排除"
        ]
      },
      {
        "choice_id": "B",
        "text": "找上岸学长和研友喝咖啡倾诉，倾听他人往年模考同样惨败的经历，自我安慰平复心情",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 心理抚慰",
          "intent": "排解绝望情绪，避免心态彻底崩盘",
          "tradeoff": "技术细节复盘不如高强度重算彻底"
        },
        "result_text": "学长告诉你‘当年我考前模考只有 70 分，最后考了 120’。你重拾信心，重新坐回了自习室书桌前。",
        "cost": {
          "TU": 2,
          "EP": 25
        },
        "variable_delta": {
          "focus": 8,
          "academic": 8,
          "social": 4
        },
        "qualitative_changes": [
          "🌿 心态抚平：走出否定自我阴霾，重燃奋战斗志",
          "🤝 同伴鼓励：在前人经验中找回前行的从容",
          "🔋 斗志重聚：保全大局，继续咬牙冲刺"
        ]
      },
      {
        "choice_id": "C",
        "text": "情绪彻底崩溃撕碎试卷，连旷自习三天，甚至打开招聘软件想要弃考转投秋招残羹冷炙",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 情绪崩溃",
          "intent": "无法承受失败打击",
          "tradeoff": "损失冲刺黄金一周，两头不讨好陷入深度焦虑"
        },
        "result_text": "秋招大厂早已结束，投出去的简历杳无音讯。看着浪费的宝贵时间，你只能擦干眼泪硬着头皮重回考研战场。",
        "cost": {
          "TU": 2,
          "EP": 35
        },
        "variable_delta": {
          "academic": -6,
          "focus": -10,
          "health": -6
        },
        "qualitative_changes": [
          "💔 信心重创：遭遇考研全程最危险的心态雪崩危机",
          "⏳ 战机流失：在情绪内耗中浪费了极为珍贵的考前冲刺周",
          "⚠️ 沉痛教训：体会到意志薄弱者在人生大考中的残酷代价"
        ]
      }
    ]
  },
  {
    "event_id": "GE_008",
    "title": "大四下考研初试出分前的忐忑等待与调剂院校预案",
    "package": "GE",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 37,
    "max_month": 38,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        37,
        38
      ],
      "has_tags": [
        "FLAG_TRACK_GE_PRIMARY"
      ]
    },
    "content": {
      "background": "大四寒假 2 月下旬，全国硕士研究生招生考试初试成绩即将公布，各大研招网进入查分倒计时。",
      "scene": "各大考研论坛上各种估分帖子满天飞，有人高枕无忧，有人在国家线边缘忐忑难眠，全国调剂信息开始陆续释出。",
      "conflict": "是提前制作多套调剂院校信息库与导师自荐信，还是提前全力准备复试专业课，亦或焦躁等待什么都不做？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "双线并行万全准备！一边按一志愿高强度复习复试专业课，一边梳理全国优质调剂院校预案库与导师名单",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 两手硬备",
          "intent": "无论出分如何，均能在第一时间拥有最致命的主动权与备选通道",
          "tradeoff": "假期需持续保持工作状态"
        },
        "result_text": "全套自荐信与复试专业题库准备完毕！这种底气让你在查分前夜睡得无比安稳，万事俱备，只欠东风！",
        "cost": {
          "TU": 2,
          "EP": 30
        },
        "variable_delta": {
          "academic": 12,
          "delivery": 10,
          "focus": 8
        },
        "tag_add": [
          "FLAG_GE_BACKUP_PREPARED"
        ],
        "qualitative_changes": [
          "📦 全局谋划：制定严丝合缝的一志愿复试与全国调剂双重预案",
          "🎯 处变不惊：彻底消除对出分不确定性的精神恐慌",
          "📚 提前起跑：复试专业知识积累领先同行两周以上"
        ]
      },
      {
        "choice_id": "B",
        "text": "坚信自己能上一志愿复试线，心无旁骛专攻目标院校指定的三本复试参考书目",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 专攻一志愿",
          "intent": "全力以赴冲击一志愿，不分心调剂信息",
          "tradeoff": "若压线需临时紧急搜集调剂"
        },
        "result_text": "复试书目复习过半，专业理论扎实。只要过线便有极高把握在复试中逆袭取胜。",
        "cost": {
          "TU": 2,
          "EP": 25
        },
        "variable_delta": {
          "academic": 10,
          "focus": 6
        },
        "qualitative_changes": [
          "📚 专业强化：精读一志愿复试核心理论与专业实验",
          "🎯 目标单一：保持纯粹的奋斗心境",
          "🔋 节奏平稳：假期自习生活有条不紊"
        ]
      },
      {
        "choice_id": "C",
        "text": "每天从早到晚疯狂刷新贴吧与小红书查分玄学，心神不宁，一页书都看不进去",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 焦虑刷屏",
          "intent": "被等待焦虑全面绑架",
          "tradeoff": "白白荒废出分前的两周黄金复习准备期"
        },
        "result_text": "手机屏幕刷到发烫，除了收集了一堆无法验证的谣言与加剧焦虑，专业课没有任何进展。",
        "cost": {
          "TU": 1,
          "EP": 15
        },
        "variable_delta": {
          "focus": -6,
          "health": -4
        },
        "qualitative_changes": [
          "⚠️ 焦虑空转：因等待恐惧浪费了极为关键的复试窗口期",
          "🎯 精神损耗：无休止的信息刷屏导致神经衰弱",
          "🌱 警觉反省：明白只有行动才能真正对抗未知焦虑"
        ]
      }
    ]
  },
  {
    "event_id": "GE_009",
    "title": "大四下研究生复试专业面试与学术潜质现场答辩",
    "package": "GE",
    "type": "DEVELOPMENT",
    "priority": "P0",
    "min_month": 39,
    "max_month": 40,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        39,
        40
      ],
      "has_tags": [
        "FLAG_TRACK_GE_PRIMARY"
      ]
    },
    "content": {
      "background": "大四下 3 月底，目标院校研究生院举行现场复试，包括 20 分钟全英文口语面试、专业综合面试与上机代码测试。",
      "scene": "五位德高望重的教授围坐在长桌对面，系主任拿着你的本科成绩单与毕业设计方案，向你抛出了极具深度的专业追问。",
      "conflict": "是凭借扎实的学术沉淀与大方自信从容对答并展示科研构想，还是规矩作答，亦或被专家问倒当场语塞？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "沉着从容！结合本科硬核大作业与前沿论文，有理有据阐述自己的学术构想，英文口语流利自如",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 现场折服",
          "intent": "在复试面试中逆风翻盘或巩固榜首，让全体博导导师当场抢着要人",
          "tradeoff": "需提前进行多轮全真模拟面试与着装仪态训练"
        },
        "result_text": "全场专家被你的学术见识与自信谈吐折服！复试专业面试斩获 96 分第一名，不仅顺利录取，更有权威博导当场锁定指导名额！",
        "cost": {
          "TU": 4,
          "EP": 55
        },
        "variable_delta": {
          "academic": 20,
          "reputation": 18,
          "research": 14,
          "delivery": 10
        },
        "tag_add": [
          "FLAG_GE_INTERVIEW_CHAMPION"
        ],
        "qualitative_changes": [
          "🎓 金榜题名：以复试断层第一名优异成绩正式录取全日制硕士研究生！",
          "🌟 导师争抢：深得院系顶级专家博导青睐，提前锁定心仪课题组",
          "🏆 四年圆满：向大学四年的艰辛付出交出最荣耀耀眼的答卷"
        ]
      },
      {
        "choice_id": "B",
        "text": "态度极其诚恳谦逊，遇到会的问题条理清晰回答，遇到不会的问题坦承知识盲区并表达求知欲",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 坦诚稳妥",
          "intent": "以靠谱沉稳的学术态度赢得考官基本好感，稳妥过线录取",
          "tradeoff": "学术亮点相对中规中矩"
        },
        "result_text": "考官们赞赏你诚实务实的治学态度，复试成绩位列中游，总成绩稳稳排在录取线内，顺利拟录取！",
        "cost": {
          "TU": 2,
          "EP": 30
        },
        "variable_delta": {
          "academic": 12,
          "reputation": 10,
          "focus": 6
        },
        "qualitative_changes": [
          "🎓 拟录取确认：顺利通过研究生入学复试遴选，成功上岸！",
          "🌟 踏实口碑：展现严谨求实的学风品格",
          "🔋 释怀心安：四年最大心愿尘埃落定，从容迎接毕业"
        ]
      },
      {
        "choice_id": "C",
        "text": "面对教授的专业深挖提问紧张得浑身发抖，声音微弱，甚至在专业常识概念上出现了低级口误",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 临场怯阵",
          "intent": "过度紧张导致临场发挥失常",
          "tradeoff": "复试成绩偏低，面临被差额淘汰至调剂的极端危险"
        },
        "result_text": "走出考场你满头大汗。虽然初试有一定底子，但复试排名垫底，只能在拟录取名单边缘焦灼等待补录通知。",
        "cost": {
          "TU": 1,
          "EP": 25
        },
        "variable_delta": {
          "academic": 4,
          "reputation": -4,
          "focus": -6
        },
        "qualitative_changes": [
          "⚠️ 悬崖边缘：复试表现失常导致录取形势极其凶险",
          "📉 信心重创：临场表达能力的短板暴露无遗",
          "🌱 深刻淬炼：明白真本事必须配合强大的心理承载力"
        ]
      }
    ]
  },
  {
    "event_id": "RE_002",
    "title": "大二下保研政策细则研读与综合加分项查漏补缺",
    "package": "RE",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 17,
    "max_month": 19,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        17,
        18,
        19
      ],
      "min_vars": {
        "academic": 70
      }
    },
    "content": {
      "background": "大二下学期，教务处印发最新一期《优秀应届本科毕业生免试攻读研究生推荐办法细则》。",
      "scene": "学分绩点(GPA)占 80%、国家级 A 类竞赛占 10%、学术论文与科研占 10%，每一分都精确到小数点后三位。",
      "conflict": "是精确测算自身在年级中的相对排位并针对性补齐竞赛/论文加分项，还是仅靠纯绩点硬抗，亦或随遇而安？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "建立加分对照雷达表！锁定一项国家级竞赛与一篇学术短文，有规划地补齐所有加分短板",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 战略补强",
          "intent": "系统化构筑保研综合竞争力，将推免胜率提升至绝对安全区",
          "tradeoff": "大二下需同时兼顾绩点与课外科研竞赛"
        },
        "result_text": "规划清晰明确！你找准了加分杠杆，不仅绩点稳居专业前列，各项软实力指标也全面对齐推免顶格标准！",
        "cost": {
          "TU": 3,
          "EP": 35
        },
        "variable_delta": {
          "research": 10,
          "academic": 8,
          "reputation": 6,
          "focus": 6
        },
        "tag_add": [
          "FLAG_RE_POLICY_MASTERED"
        ],
        "qualitative_changes": [
          "🎓 战略领跑：全面透彻掌握推免加分游戏规则与评分细则",
          "🔬 软实力起跑：定向布局高含金量学术与竞赛加分资产",
          "🎯 安全垫筑牢：推免综合排位稳步向专业前 5% 挺进"
        ]
      },
      {
        "choice_id": "B",
        "text": "死磕专业核心课 GPA，坚信只要纯文化课成绩排进前 3%，加分项自然水到渠成",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 绩点为王",
          "intent": "坚守文化课最高权重基本盘，追求极致 GPA",
          "tradeoff": "一旦遇到有大奖加分的同伴容易在综合榜上被微弱反超"
        },
        "result_text": "你的专业课成绩极为扎实，各门功课均在 90 分以上，牢牢守住了推免的核心文化底盘。",
        "cost": {
          "TU": 2,
          "EP": 25
        },
        "variable_delta": {
          "academic": 10,
          "focus": 6
        },
        "qualitative_changes": [
          "📚 绩点堡垒：筑牢前四个学期过硬的专业平均学分绩",
          "🎯 专注纯粹：未在琐碎事务中分散过大学业精力",
          "🔋 稳扎稳打：保持年级文化课第一梯队优势"
        ]
      },
      {
        "choice_id": "C",
        "text": "大致翻了翻细则文件便扔在一旁，觉得距离大四还很遥远，走一步看一步",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 随缘对待",
          "intent": "不刻意规划，维持佛系心态",
          "tradeoff": "容易因微小规则盲区痛失关键加分"
        },
        "result_text": "由于未提前准备，你错失了一门可以抵扣综合加分的校级科研立项申报窗口，略显遗憾。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "focus": 2
        },
        "qualitative_changes": [
          "⚠️ 敏感度欠缺：因漫不经心错过早期科研加分申报契机",
          "⏳ 佛系前行：未产生多余的竞争焦虑",
          "🌱 警醒意识：意识到保研是一场精细到毫厘的系统工程"
        ]
      }
    ]
  },
  {
    "event_id": "RE_003",
    "title": "大三上重点实验室学术科研见习与初步成果产出",
    "package": "RE",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 21,
    "max_month": 23,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        21,
        22,
        23
      ],
      "min_vars": {
        "academic": 75
      }
    },
    "content": {
      "background": "大三上学期，学院国家重点实验室面向大三拔尖推免苗子开放本科生进所学术科研见习名额。",
      "scene": "实验室服务器机房轰鸣，博士后导师正带领团队攻坚前沿数据挖掘与模型实验，需要对大量 Benchmark 进行复现排查。",
      "conflict": "是主动请缨参与论文实验撰写争取署名作者，还是做好实验辅助记录，亦或觉得科研枯燥想退出？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "通宵攻坚跑出关键对比实验！绘制规范图表并完成论文方法论英文撰写，争取共同作者署名",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 成果跃迁",
          "intent": "在名校夏令营前产出一篇高水平学术论文成果，形成绝杀级保研壁垒",
          "tradeoff": "连续一个月晚间泡在实验室调参，身心负荷极大"
        },
        "result_text": "实验数据完美印证了假设！论文成功被 CCF 核心会议接收，导师将你列为共同作者，保研学术成果全满贯！",
        "cost": {
          "TU": 4,
          "EP": 60
        },
        "variable_delta": {
          "research": 18,
          "academic": 10,
          "reputation": 14,
          "portfolio": 8
        },
        "tag_add": [
          "FLAG_RE_ACADEMIC_PAPER_AUTHOR"
        ],
        "resume_entry": {
          "category": "RESEARCH",
          "chain_id": "EXP_RE_PAPER_01",
          "stage_contribution": "CORE",
          "title": "国家重点实验室高水平学术会议共同作者",
          "description": "主导核心对比基准实验与消融分析，以共同作者在知名学术会议发表前沿论文，获顶级保研科研加分。"
        },
        "qualitative_changes": [
          "🔬 学术封神：本科阶段斩获高水平学术会议共同作者论文",
          "🌟 导师极荐：获得重点实验室权威教授的强力背书与推荐",
          "📜 保研杀手锏：在名校推免申请材料中具备碾压级学术亮点"
        ]
      },
      {
        "choice_id": "B",
        "text": "负责跑通基础代码和数据清洗脚本，学习规范实验记录与文献检索范式",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 扎实见习",
          "intent": "熟悉正规实验室学术运作体系，掌握科研基本功",
          "tradeoff": "短期内难以直接形成第一/共同作者成果"
        },
        "result_text": "你的细致认真获得学长认可，掌握了完整的学术实验流程，科研见习期满顺利拿到优秀结项评定。",
        "cost": {
          "TU": 2,
          "EP": 30
        },
        "variable_delta": {
          "research": 10,
          "academic": 6,
          "reputation": 6
        },
        "qualitative_changes": [
          "🔬 科研入门：掌握严谨的学术实验与文献阅读基本功",
          "🤝 实验室纽带：与课题组师兄师姐建立良好协作信任",
          "🔋 步调平稳：精力投入适度，未破坏既定课业平衡"
        ]
      },
      {
        "choice_id": "C",
        "text": "觉得学术科研过于枯燥且充斥着大量无意义跑实验，参加了两次例会便不再前往",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 学术退缩",
          "intent": "放弃学术深造的尝试",
          "tradeoff": "推免学术科研加分彻底归零，只能依靠纯绩点角逐"
        },
        "result_text": "你退出了实验室群。虽然找回了闲暇时光，但保研材料上的‘科研成果’一栏将不得不保持空白。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "research": -4,
          "focus": 2
        },
        "qualitative_changes": [
          "⚠️ 科研空白：放弃本科进所科研实践的关键机遇",
          "⏳ 精力回收：将精力全面回收至纯文化课考试",
          "🎯 定位受限：保研目标院校档次将受到学术短板限制"
        ]
      }
    ]
  },
  {
    "event_id": "RE_004",
    "title": "大三上整理本科前五个学期综合绩点排名与材料初审",
    "package": "RE",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 23,
    "max_month": 25,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        23,
        24,
        25
      ],
      "min_vars": {
        "academic": 75
      }
    },
    "content": {
      "background": "大三上学期末，教学科研系统开放前五个学期学业成绩权威排名核对，这是名校夏令营申报的最核心门槛硬指标。",
      "scene": "教务大厅机器前，你打印出了盖有鲜红教务处公章的成绩单与官方排名证明，专业前 3% 的字样格外耀眼。",
      "conflict": "是趁热打铁梳理全套材料初审包并制作高颜值科研简历，还是收起证明按部就班，亦或发现排位危险急需抢救？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "打造顶级学术申报包！整理中英文成绩单、排名证明、获奖证书并设计全套名校自荐材料",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 档案完备",
          "intent": "提前备齐夏令营与预推免全部材料，做到申报首发秒递交",
          "tradeoff": "需花费数天时间前往档案馆与公章审批"
        },
        "result_text": "全套申报材料被装订得典雅规范，电子版 PDF 标签详尽无瑕。辅导员赞叹这是全院最规范的推免材料示范！",
        "cost": {
          "TU": 2,
          "EP": 25
        },
        "variable_delta": {
          "academic": 10,
          "reputation": 10,
          "delivery": 8,
          "focus": 6
        },
        "tag_add": [
          "FLAG_RE_DOSSIER_PERFECT"
        ],
        "qualitative_changes": [
          "📜 申报就绪：拥有符合清华/华五顶尖高校审阅标准的顶级材料包",
          "🎯 胜券底定：官方权威排位证明坐实专业前 3% 拔尖地位",
          "🌟 师长认可：提前进入学院重点推荐与外保重点辅导名单"
        ]
      },
      {
        "choice_id": "B",
        "text": "打印好两份纸质成绩单和排名证明放入文件袋保存，心中对排位有数即可",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 常规归档",
          "intent": "完成官方证明留档，不耗费多余精力",
          "tradeoff": "未提前转化为中英文专业自荐学术包"
        },
        "result_text": "证明材料妥善保存在抽屉里，确认自己处于保研安全区，心态平稳安定。",
        "cost": {
          "TU": 1,
          "EP": 15
        },
        "variable_delta": {
          "academic": 6,
          "focus": 4
        },
        "qualitative_changes": [
          "📜 排名锁定：官方确认稳居专业保研名额安全线之内",
          "🔋 释怀踏实：排除了绩点掉出保研线的致命担忧",
          "⏳ 节奏自如：未打乱大三下的复习与生活"
        ]
      },
      {
        "choice_id": "C",
        "text": "发现自己排在推免名额边缘（第 10 名左右），面临前后同学激烈差额竞争的巨大压力",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 边缘警讯",
          "intent": "面对严酷的差额竞争现实",
          "tradeoff": "大三下学期必须实现期末与竞赛的绝地反击"
        },
        "result_text": "刺眼的排位敲响警钟！你清醒意识到：大三下哪怕有一门课稍有松懈，推免资格就会被瞬间挤掉！",
        "cost": {
          "TU": 1,
          "EP": 20
        },
        "variable_delta": {
          "focus": 8,
          "academic": 4,
          "health": -4
        },
        "tag_add": [
          "FLAG_RE_MARGINAL_ALERT"
        ],
        "qualitative_changes": [
          "⚠️ 边缘危机：身处保研资格边缘线，容错率彻底归零",
          "🎯 战意狂飙：彻底激发在大三下绝地死磕高分的危机感",
          "🌱 破釜沉舟：做好保研与考研双重准备的心理防线"
        ]
      }
    ]
  },
  {
    "event_id": "RE_005",
    "title": "大三下学术简历精修与给名校博导发送自荐信（套磁）",
    "package": "RE",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 25,
    "max_month": 27,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        25,
        26,
        27
      ],
      "min_vars": {
        "academic": 78
      }
    },
    "content": {
      "background": "大三下 4 月，清北、华五与中科院顶尖实验室的杰青、长江学者导师陆续开放推免直博/硕博连读考核名额。",
      "scene": "邮箱草稿箱里躺着拟好的自荐信。导师们每天收到上百封推免邮件，平庸套话往往被直接已读不回，只有针对其代表作提出深刻见解才能脱颖而出。",
      "conflict": "是精读意向大牛导师近 3 年代表作撰写定制化深刻科研构想信，还是群发标准化模板自荐，亦或不敢发信坐等夏令营？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "精读导师代表作！针对其顶会论文撰写 2000 字思考与未来科研设想，发送真诚专业的定制化自荐邮件",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 顶级套磁",
          "intent": "以超越本科生的学术洞察力打动权威博导，提前锁定夏令营入营与拟录取承诺",
          "tradeoff": "每封邮件需花费整整两天精读导师论文与实验"
        },
        "result_text": "大牛博导在半小时内亲自秒回长信！‘你的见解非常深刻，正是我们实验室需要的拔尖人才！夏令营欢迎直接报我组！’",
        "cost": {
          "TU": 4,
          "EP": 50
        },
        "variable_delta": {
          "research": 16,
          "academic": 10,
          "reputation": 16,
          "delivery": 8
        },
        "tag_add": [
          "FLAG_RE_PROFESSOR_ENDORSED"
        ],
        "qualitative_changes": [
          "🌟 权威青睐：获得顶尖院校杰青/长江学者博导的实名入组邀约",
          "🔬 学术共鸣：对前沿学术方向的理解达到准研究生高级水平",
          "📜 保研保底：夏令营未开之前已提前锁定心仪大牛名师席位"
        ]
      },
      {
        "choice_id": "B",
        "text": "制作规范精美的统一学术简历与自荐信，向目标学院 3 位心仪导师分别发送邮件自荐",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 规范自荐",
          "intent": "以扎实成绩单与竞赛经历争取面试机会，效率均衡",
          "tradeoff": "缺少针对导师具体论文的深度探讨"
        },
        "result_text": "两位导师礼貌回复‘欢迎报考本课题组，夏令营考核通过后再行深入交流’，达到预期目标。",
        "cost": {
          "TU": 2,
          "EP": 25
        },
        "variable_delta": {
          "reputation": 8,
          "academic": 6
        },
        "qualitative_changes": [
          "📜 导师联络：与意向高校课题组建立正式学术初涉渠道",
          "🎯 方向聚焦：明确目标学院各课题组招生名额分布",
          "🔋 投入稳健：平稳完成夏令营前置接触"
        ]
      },
      {
        "choice_id": "C",
        "text": "害怕导师不理自己，迟迟不敢动笔发邮件，决定放弃提前联系，一切等夏令营系统直接硬投",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 畏缩等待",
          "intent": "逃避主动社交沟通压力",
          "tradeoff": "在没有导师提前背书的情况下容易在初筛环节被海量名校生挤掉"
        },
        "result_text": "虽然省去了写信的紧张，但失去了最重要的提前锁定机会，夏令营申请只能硬拼材料纯背景。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "reputation": -2,
          "focus": 2
        },
        "qualitative_changes": [
          "⚠️ 错失先机：未能在名校夏令营前建立任何导师个人连接",
          "⏳ 被动等待：完全依赖系统官方审核的不确定性",
          "🌱 心智考验：认识到顶尖舞台上主动出击是不可或缺的素质"
        ]
      }
    ]
  },
  {
    "event_id": "RE_006",
    "title": "大三下保研预推免机试与综合素质面试高压演练",
    "package": "RE",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 29,
    "max_month": 31,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        29,
        30,
        31
      ],
      "has_tags": [
        "FLAG_REC_CAMP_PASS"
      ]
    },
    "content": {
      "background": "大三下 7~8 月夏令营期间，顶尖高校推免考核极其严苛，包含 3 小时高难度 ACM 赛制机试与专家组连环追问面试。",
      "scene": "机试提交实时刷新封榜，考场气氛窒息；面试室内专家针对你大一高数到大三算法的所有细节进行全方位极限施压。",
      "conflict": "是提前进行 10 轮高压全真模拟机试与抗压面试演练，还是凭临场经验自由发挥，亦或心生胆怯？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "魔鬼特训！刷通目标院校近 5 年机试原题，找保研清华学长进行 3 轮魔鬼压力模拟面试",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 战无不胜",
          "intent": "在正式考核中做到机试满分、面试兵来将挡，斩获全场唯一的‘最高等优秀营员’",
          "tradeoff": "需连续两周高强度刷题与抗压答辩"
        },
        "result_text": "机试以全场第一名用时拿下 AK（全题解）！面试现场对答如流、落落大方，主考官一致评定为第一顺位优秀营员！",
        "cost": {
          "TU": 4,
          "EP": 60
        },
        "variable_delta": {
          "academic": 18,
          "research": 16,
          "reputation": 16,
          "delivery": 12
        },
        "tag_add": [
          "FLAG_RE_CAMP_EXCELLENT_TIER1"
        ],
        "qualitative_changes": [
          "🏆 傲视群雄：斩获顶尖名校夏令营全场第一名最高等优营资格",
          "⚡ 机试统治：在 ACM 级严苛机试中展现碾压级编程功底",
          "📜 直通门票：提前锁定顶尖名校国家推免直博无条件录取"
        ]
      },
      {
        "choice_id": "B",
        "text": "梳理熟悉过往项目代码细节与核心定理，以真实诚恳的学术态度从容应考",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 务实过关",
          "intent": "不求拔尖但求无过，稳妥跨过优营考核及格线",
          "tradeoff": "机试后半部分高难度压轴题未能全部解答"
        },
        "result_text": "机试解出两道核心题目，面试回答稳健诚恳，顺利通过考核拿到优秀营员资格，达成保研目标！",
        "cost": {
          "TU": 3,
          "EP": 35
        },
        "variable_delta": {
          "academic": 10,
          "research": 8,
          "reputation": 8
        },
        "qualitative_changes": [
          "📜 优营到手：顺利斩获重点名校夏令营拟录取资格",
          "🎯 稳健达标：以务实表现完成关键推免指标跨越",
          "🔋 信心提升：验证自身实力具备名校研究生准入门槛"
        ]
      },
      {
        "choice_id": "C",
        "text": "临场遇到高难度动态规划机试题心态失衡，慌乱中接连提交错误代码导致罚时过高",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 临场受挫",
          "intent": "面对极端高压时的心理波动",
          "tradeoff": "考核成绩排在候补序列，未能直接锁定名额"
        },
        "result_text": "走出考场内心充满自责。虽然进入了候补名单，但你明白必须打起十二分精神准备 9 月的预推免补录战。",
        "cost": {
          "TU": 2,
          "EP": 25
        },
        "variable_delta": {
          "academic": 4,
          "reputation": -2,
          "focus": 4
        },
        "qualitative_changes": [
          "⚠️ 候补险境：考核发挥欠佳进入拟录取候补队列",
          "🎯 警钟惊醒：深刻认识到极端竞技状态下的抗压短板",
          "🌱 绝地重整：迅速投入 9 月预推免补录的紧急准备"
        ]
      }
    ]
  },
  {
    "event_id": "RE_007",
    "title": "大四上推免资格院系最终公示与名单确认的踏实释怀",
    "package": "RE",
    "type": "DEVELOPMENT",
    "priority": "P0",
    "min_month": 33,
    "max_month": 34,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        33,
        34
      ],
      "has_tags": [
        "FLAG_REC_CAMP_PASS"
      ]
    },
    "content": {
      "background": "大四 9 月，学院教务处公告栏贴出了最终审核盖章的《2026 届免试攻读硕士学位研究生正式推荐名单》。",
      "scene": "公示栏前围满了同学，你的名字赫然位列专业第一名，没有任何异议与瑕疵，三年汗水终于凝聚为官方盖章文件。",
      "conflict": "是庄严签署推免承诺书并感谢恩师与室友，还是低调确认，亦或开始规划大四科研启航？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "郑重在推免承诺书上签字！向指导老师与辅导员深情鞠躬致谢，三年苦读终成正果！",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 终章礼赞",
          "intent": "正式锁定教育部官方推荐免试资格，无任何后顾之忧迈向人生新阶段",
          "tradeoff": "需履行不得再参与秋招签约与考研报名的法定义务"
        },
        "result_text": "在全院师生祝贺的目光中，红章盖下！三年所有的早起刷题、所有的大作业通宵在这一刻化作永恒的荣光！",
        "cost": {
          "TU": 2,
          "EP": 20
        },
        "variable_delta": {
          "academic": 20,
          "reputation": 18,
          "family": 14,
          "health": 8
        },
        "tag_add": [
          "FLAG_RE_OFFICIAL_QUALIFIED"
        ],
        "resume_entry": {
          "category": "HONOR",
          "chain_id": "EXP_RE_HONOR_01",
          "stage_contribution": "CORE",
          "title": "国家教育部推荐免试攻读硕士研究生资格（院系综合第一）",
          "description": "以连续三年学分绩点第一与优异学术成果斩获正式推免资格，免试直升顶尖名校深造。"
        },
        "qualitative_changes": [
          "🎓 终成大器：正式锁定教育部推荐免试攻读研究生法定资格",
          "🌟 院系荣耀：以专业综合第一名绝对优势载入院系推免史册",
          "🏡 门楣光大：向家人与恩师交出本科三年最圆满的金色捷报"
        ]
      },
      {
        "choice_id": "B",
        "text": "在辅导员处完成常规签字确认，走出办公室给父母打通电话报喜，内心充满平静从容",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 踏实落定",
          "intent": "水到渠成平稳办结手续，享受卸下重担的释怀",
          "tradeoff": "仪式感较为简短"
        },
        "result_text": "挂掉电话，走出教学楼。秋风拂面，阳光温热，你感到三年来从未有过的踏实与自由！",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "academic": 12,
          "reputation": 10,
          "family": 8
        },
        "tag_add": [
          "FLAG_RE_OFFICIAL_QUALIFIED"
        ],
        "qualitative_changes": [
          "📜 尘埃落定：顺利完成全部院系推免资格最终官方确认",
          "🔋 彻底释怀：三年高压学业长跑画下完满句号，精神极度放松",
          "🎯 自由展望：拥有整整大四一年的机动自由支配时间"
        ]
      }
    ]
  },
  {
    "event_id": "AI_005",
    "title": "大二下 AI-Lab 代码规范审查：单元测试与 CI 流水线搭建",
    "package": "AI",
    "type": "HIDDEN",
    "priority": "P2",
    "min_month": 19,
    "max_month": 21,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        19,
        20,
        21
      ],
      "has_tags": [
        "FLAG_AI_LAB_DISCOVERED"
      ]
    },
    "content": {
      "background": "学长邀请你参与 AI-Lab 的核心开源仓库贡献，但在提交代码前，必须通过极其严苛的工业级 CI/CD 自动化审查门禁。",
      "scene": "仓库配置了严格的 Ruff 代码静态检查、类型注解 Type Hint 与 95% 单元测试覆盖率要求，你的 Pull Request 接连飘红被打回。",
      "conflict": "是静下心编写完善的 Pytest 单元测试与 Docker 镜像重构，还是请求学长降低审查标准，亦或借故放弃？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "死磕工业级标准！补齐 50 个高难度边缘测试用例，重写 Dockerfile 实现秒级自动化测试并绿标通过",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 工业洗礼",
          "intent": "彻底脱离大学玩具代码思维，掌握一线顶级研发团队的代码工程守则",
          "tradeoff": "需花费数个夜晚仔细调试 Mock 桩函数与并发竞态测试"
        },
        "result_text": "GitHub Actions 流水线全部亮起绿灯！学长赞叹道：‘这才是真正专业的工程师作风，代码合入主干！’",
        "cost": {
          "TU": 4,
          "EP": 55
        },
        "variable_delta": {
          "delivery": 16,
          "skill": 12,
          "reputation": 12,
          "ai_depth": 8
        },
        "tag_add": [
          "FLAG_AI_CI_MASTERED"
        ],
        "qualitative_changes": [
          "📦 工程质变：跨越玩具代码到工业级可维护工程的分水岭",
          "⚡ 技能突破：熟练掌握 Pytest、Docker 与自动化 CI/CD 门禁",
          "🌟 团队口碑：被实验室核心骨干认定为极度靠谱的交付主力"
        ]
      },
      {
        "choice_id": "B",
        "text": "虚心向学长请教测试用例编写范式，在指导下逐步补齐缺失的单元测试模块",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 虚心达标",
          "intent": "在带教下完成代码合规改造，逐步熟悉大型开源工作流",
          "tradeoff": "耗时稍长，依赖学长指导"
        },
        "result_text": "在学长的耐心审查下，代码测试覆盖率达到及格线，顺利 Merge 入开发分支，学到了宝贵的规范经验。",
        "cost": {
          "TU": 2,
          "EP": 30
        },
        "variable_delta": {
          "delivery": 8,
          "skill": 6,
          "reputation": 6
        },
        "qualitative_changes": [
          "📦 规范入门：掌握现代大型开源仓库的提交与 Review 规则",
          "🤝 团队互动：与实验室资深开发者建立良好的结对信任",
          "🔋 投入平稳：平稳跨过工程门禁"
        ]
      },
      {
        "choice_id": "C",
        "text": "抱怨‘写测试比写业务代码还烦人’，觉得规矩太多，退缩回自己的个人本地单机练习",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 敬而远之",
          "intent": "抗拒严苛的工业协作纪律",
          "tradeoff": "错失进入专业前沿极客工程圈的绝佳入口"
        },
        "result_text": "学长关闭了你的 PR。虽然摆脱了繁琐的测试要求，但你也失去了参与真实工业级项目的通行证。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "delivery": -4,
          "reputation": -4
        },
        "qualitative_changes": [
          "⚠️ 纪律受挫：暴露个人开发习惯与工业化标准的深刻差距",
          "🚪 门槛止步：暂缓融入 AI-Lab 核心协作主干",
          "🌱 警醒反思：懂得大型系统没有测试保障就是灾难"
        ]
      }
    ]
  },
  {
    "event_id": "AI_008",
    "title": "大二下大模型量化推理与显存极限优化压测",
    "package": "AI",
    "type": "HIDDEN",
    "priority": "P2",
    "min_month": 21,
    "max_month": 23,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        21,
        22,
        23
      ],
      "has_tags": [
        "FLAG_AI_TASK_SUBMITTED"
      ]
    },
    "content": {
      "background": "实验室计划将 70B 规模的开源大模型部署在有限显存的边缘算力卡上，默认精度下直接触发 CUDA Out of Memory (OOM)。",
      "scene": "学长们正在为算力开销发愁，如果能用 AWQ 或 vLLM PagedAttention 技术将推理吞吐翻倍并压入单卡显存，将是一项重大突破。",
      "conflict": "是主动攻关 CUDA 内核与量化推理加速并拿出压测报告，还是使用常规开源量化工具测试，亦或觉得底层太难？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "深入底层！研究 vLLM 显存共享与 AWQ 4-bit 量化加速，连续两晚优化将吞吐提升 3.5 倍成功单卡跑通",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 极限压测",
          "intent": "掌握业界最抢手的大模型底层工程化加速与端侧落地核心硬功夫",
          "tradeoff": "需精读大量 CUDA 驱动与注意力算子底层论文"
        },
        "result_text": "在终端屏幕上，原本 OOM 崩溃的模型流畅输出 80 tokens/s！学长们集体惊呼：‘你一个人帮实验室省了五万块算力费！’",
        "cost": {
          "TU": 4,
          "EP": 65
        },
        "variable_delta": {
          "ai_depth": 18,
          "skill": 14,
          "portfolio": 12,
          "reputation": 14
        },
        "tag_add": [
          "FLAG_AI_INFERENCE_OPTIMIZED"
        ],
        "qualitative_changes": [
          "🤖 算力奇迹：攻克大模型显存墙与极致量化推理加速难题",
          "⚡ 硬核壁垒：掌握大模型工业落地最稀缺的高性能算子优化能力",
          "🌟 核心地位：直接奠定在 AI-Lab 不可替代的技术骨干地位"
        ]
      },
      {
        "choice_id": "B",
        "text": "调用现成的 Ollama/vLLM 标准配置脚本进行基础测试，协助整理不同参数下的性能对比日志",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 规整测试",
          "intent": "为团队提供详尽的基准测试基线数据，完成辅助分工",
          "tradeoff": "未深入介入底层内核算子改造"
        },
        "result_text": "你整理出的表格条理清晰，帮助团队锁定了最佳运行参数，实验顺利平稳收尾。",
        "cost": {
          "TU": 2,
          "EP": 30
        },
        "variable_delta": {
          "ai_depth": 8,
          "skill": 6,
          "delivery": 6
        },
        "qualitative_changes": [
          "🤖 框架熟悉：熟练掌握主流前沿开源模型部署与推理引擎",
          "📦 测试完备：沉淀出规整的多卡部署基准对比报告",
          "🤝 团队支持：有效支撑课题组阶段性基准测试"
        ]
      },
      {
        "choice_id": "C",
        "text": "面对厚重的 CUDA 报错与显存分析工具望而却步，只做简单的概念旁听",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 概念旁听",
          "intent": "避免卷入高难度底层算子调试",
          "tradeoff": "失去一次接触底层算力工程架构的黄金历练"
        },
        "result_text": "任务交由其他研究生攻坚完成。你对大模型显存底层的理解依旧停留在浅层参数配置。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "ai_depth": 2,
          "focus": 2
        },
        "qualitative_changes": [
          "⚠️ 局限尚存：对大模型深层工程加速缺乏实操底气",
          "⏳ 负担轻微：未消耗过多脑力与通宵时间",
          "🌱 见识开阔：至少了解了前沿极客面临的真实算力瓶颈"
        ]
      }
    ]
  },
  {
    "event_id": "AI_009",
    "title": "大三上 AI-Lab 组会技术研讨：前沿 Agent 调度算法激烈争辩",
    "package": "AI",
    "type": "HIDDEN",
    "priority": "P2",
    "min_month": 23,
    "max_month": 25,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        23,
        24,
        25
      ],
      "has_tags": [
        "FLAG_AI_ACCEPTED_REVISION"
      ]
    },
    "content": {
      "background": "大三上周五夜晚，AI-Lab 白板前正在进行一场关于‘多智能体分布式异步状态机’ vs ‘集中式 DAG 编排’的激烈学术争论。",
      "scene": "两派资深开发者各执一词，争论到了系统死锁检测与消息时序一致性的深水区，气氛剑拔弩张。",
      "conflict": "是凭借对并发与状态机的透彻理解上台画出创新的混合架构折服全场，还是附和某一方，亦或置身事外？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "拿起马克笔走上白板！画出创新的‘事件溯源+动态状态机’解耦方案，条理分明化解死锁并消除争端",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 架构折服",
          "intent": "以超越年龄的顶级架构洞察力征服全体极客成员，树立核心架构师威信",
          "tradeoff": "需承担方案落地的核心设计与排期责任"
        },
        "result_text": "白板前鸦雀无声，随即爆发出热烈的掌声与口哨！实验室创始人紧紧握住你的手：‘这正是我们找了半年的解法！’",
        "cost": {
          "TU": 3,
          "EP": 45
        },
        "variable_delta": {
          "ai_depth": 16,
          "reputation": 18,
          "skill": 12,
          "delivery": 10
        },
        "tag_add": [
          "FLAG_AI_ARCHITECT_RECOGNIZED"
        ],
        "qualitative_changes": [
          "🌟 极客领袖：以精妙优雅的设计征服全体顶尖开发者与学术骨干",
          "🤖 架构顶峰：主导设计业界前沿的多智能体异步调度核心范式",
          "📜 深度进阶：为晋升 Deep 核心团队与技术合伙人奠定关键基石"
        ]
      },
      {
        "choice_id": "B",
        "text": "认真记录两派争论的核心技术指标与测试用例，在会后协助搭建基准对比仿真环境",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 仿真求证",
          "intent": "用客观实验数据代替主观争论，以严谨务实态度推动项目",
          "tradeoff": "缺少高光展现机会"
        },
        "result_text": "你搭建的仿真测试精准还原了两套方案在极端网络抖动下的表现，为最终架构选型提供了决定性依据。",
        "cost": {
          "TU": 2,
          "EP": 25
        },
        "variable_delta": {
          "ai_depth": 8,
          "skill": 8,
          "delivery": 6
        },
        "qualitative_changes": [
          "🔬 数据说话：以严谨公正的仿真测试化解团队技术选型分歧",
          "🤖 认知深化：深刻理解复杂分布式系统在极端环境下的容灾机制",
          "🤝 团队中坚：展现极佳的科学求真与工程协作作风"
        ]
      },
      {
        "choice_id": "C",
        "text": "坐在后排安静喝着可乐，觉得神仙打架自己插不上嘴，安静旁听直到散会",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 观战学习",
          "intent": "保持旁观学习姿态，不承担责任",
          "tradeoff": "参与度边缘化"
        },
        "result_text": "虽然见识了大佬们的高水平交锋，但你始终没有走到聚光灯中央，在团队中依然是个普通的边缘跟班。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "ai_depth": 4,
          "focus": 2
        },
        "qualitative_changes": [
          "💡 见识拓宽：近距离感受顶级架构设计的激烈思辨碰撞",
          "⏳ 独善其身：未承担任何繁重的架构开发重担",
          "⚠️ 角色定格：在核心圈层中依然处于边缘旁听地位"
        ]
      }
    ]
  },
  {
    "event_id": "AI_010",
    "title": "大三上开源社区严重 Bug 紧急排查与安全补丁发布",
    "package": "AI",
    "type": "CRISIS",
    "priority": "P1",
    "min_month": 25,
    "max_month": 27,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        25,
        26,
        27
      ],
      "has_tags": [
        "FLAG_AI_ACCEPTED_REVISION"
      ]
    },
    "content": {
      "background": "AI-Lab 的核心开源仓库在 GitHub 上突破 5000 Stars，某海外科技大厂在生产环境集成后突发递归死锁崩溃并提交了紧急 P0 Issue！",
      "scene": "社区 Issue 瞬间涌入上百条质询，如果 24 小时内无法定位根因并发布 Hotfix 补丁，整个开源团队的全球信誉将遭受毁灭性崩塌！",
      "conflict": "是主动请缨通宵复现复杂并发死锁并提交无损补丁，还是协助排查日志，亦或因害怕担责而保持沉默？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "临危受命！通宵使用线程死锁检测与网络抓包，精准定位异步协程竞争条件并提交优雅修复补丁",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 孤勇救火",
          "intent": "在开源社区面临灭顶之灾的绝境下力挽狂澜，树立全球级顶级声誉",
          "tradeoff": "需承受极高心理压力通宵鏖战"
        },
        "result_text": "清晨 6 点，补丁顺利合入并发布 v2.4.1 Hotfix！海外大厂技术副总裁在 Issue 里高呼‘Brilliant fix!’并亲自在 Twitter 感谢你！",
        "cost": {
          "TU": 4,
          "EP": 70
        },
        "variable_delta": {
          "delivery": 20,
          "reputation": 20,
          "skill": 14,
          "ai_depth": 10,
          "health": -6
        },
        "tag_add": [
          "FLAG_AI_OPEN_SOURCE_SAVIOR"
        ],
        "resume_entry": {
          "category": "OPEN_SOURCE",
          "chain_id": "EXP_AI_HOTFIX_01",
          "stage_contribution": "HEROIC",
          "title": "万人星标开源项目紧急 P0 核心补丁主贡献者",
          "description": "独立排查复现复杂协程死锁，24 小时内完成企业级 Hotfix 安全补丁发布，获跨国企业公开致谢。"
        },
        "qualitative_changes": [
          "🌟 国际声名：在全球开源社区赢得无可争议的顶级救火专家声誉",
          "📦 极限交付：在面临巨大信誉崩塌的极限时间死线中力挽狂澜",
          "⚡ 技术封神：彻底吃透高并发异步协程底层竞态的致命隐患"
        ]
      },
      {
        "choice_id": "B",
        "text": "协助编写自动化复现脚本，为排查核心代码的资深学长提供详尽的报错日志追踪",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 协同排查",
          "intent": "在重大危机中做好后勤侦察，保障主力排查效率",
          "tradeoff": "核心修复署名归学长所有"
        },
        "result_text": "在团队协同攻关下危机顺利化解。学长在 Release Notes 里感谢了你的日志协助，团队凝聚力大增。",
        "cost": {
          "TU": 2,
          "EP": 35
        },
        "variable_delta": {
          "delivery": 10,
          "reputation": 8,
          "skill": 6
        },
        "qualitative_changes": [
          "🤝 团队合力：经历真实生产环境危机的严酷战火洗礼",
          "📦 协同保障：展现优秀的故障排查日志分析与复现能力",
          "🔋 共同渡劫：与实验室核心团队结下更深厚的战友情"
        ]
      },
      {
        "choice_id": "C",
        "text": "觉得该模块不是自己写的，担心修不好背黑锅，在群里保持静音未参与排查",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 避险观望",
          "intent": "规避责任风险，明哲保身",
          "tradeoff": "错失一次建立巨大战功与声望的历史契机"
        },
        "result_text": "危机最终被其他学长修复。虽然免去了熬夜压力，但在核心成员眼中，你的担当意识打上了折扣。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "reputation": -2,
          "focus": 2
        },
        "qualitative_changes": [
          "⚠️ 担当欠缺：在团队面临重大生死考验时刻选择退避观望",
          "⏳ 安逸保全：免受通宵排查高压折磨",
          "🌱 认知警示：领悟到真正的技术骨干都是在暴风雨中站出来的"
        ]
      }
    ]
  },
  {
    "event_id": "AI_011",
    "title": "大三下高难度多智能体协作框架架构重构攻坚",
    "package": "AI",
    "type": "HIDDEN",
    "priority": "P2",
    "min_month": 28,
    "max_month": 30,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        28,
        29,
        30
      ],
      "has_tags": [
        "FLAG_AI_JOINED_DEEP"
      ]
    },
    "content": {
      "background": "AI-Lab 框架随着功能膨胀，代码出现严重的架构偶合与性能劣化，学长决定由你主导一次代号为‘Titan’的全面架构重构。",
      "scene": "涉及 200 多个核心文件、数万行核心逻辑的彻底解耦，必须保证在业务零中断的前提下重写底层调度引擎。",
      "conflict": "是凭借极强软件工程架构能力完成优雅的插件化与依赖注入重构，还是小修小补应付，亦或重构失败导致系统瘫痪？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "全盘主导重构！引入现代依赖注入与事件总线架构，连续三周重写核心调度层，测试全绿无缝升级",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 架构蜕变",
          "intent": "真正主导一次大型工业级框架的架构大换血，登顶青年首席架构师地位",
          "tradeoff": "需投入整整三周课外大块时间高强度推演设计模式"
        },
        "result_text": "重构后的系统代码量精简 30%，扩展性能提升 2 倍，被海外技术媒体评选为年度最优雅开源框架之一！",
        "cost": {
          "TU": 5,
          "EP": 75
        },
        "variable_delta": {
          "ai_depth": 20,
          "skill": 16,
          "delivery": 16,
          "portfolio": 14,
          "reputation": 14
        },
        "tag_add": [
          "FLAG_AI_CHIEF_ARCHITECT"
        ],
        "resume_entry": {
          "category": "PROJECT",
          "chain_id": "EXP_AI_TITAN_01",
          "stage_contribution": "CHIEF_ARCHITECT",
          "title": "工业级多智能体开源框架首席架构师（全面重构主导）",
          "description": "全面主导数万行核心代码解耦重构，引入微内核与事件总线，代码精简 30% 且吞吐提升 200%。"
        },
        "qualitative_changes": [
          "🏛️ 架构大成：从基层开发者脱胎换骨为掌控全盘架构的首席架构师",
          "💻 工业传世：拥有足以在任何大厂高薪面试中侃侃而谈的杀手锏架构作品",
          "🌟 行业能见度：个人技术影响力跨出校园，在国内外极客圈声名赫赫"
        ]
      },
      {
        "choice_id": "B",
        "text": "只对最臃肿的两个子模块进行局部解耦，保留大部分既有逻辑，采取渐进式重构策略",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 渐进修缮",
          "intent": "用稳妥保守的方式降低系统崩溃风险，控制精力开销",
          "tradeoff": "架构彻底性相对不足，部分技术债务依然残留"
        },
        "result_text": "局部重构平稳落地，核心接口规范性得到显著改善，团队对你的稳健风格给予高度认可。",
        "cost": {
          "TU": 3,
          "EP": 40
        },
        "variable_delta": {
          "ai_depth": 10,
          "skill": 8,
          "delivery": 8
        },
        "qualitative_changes": [
          "📦 稳中求进：成功消解部分核心模块技术债务",
          "⚡ 工程实践：积累真实复杂系统的局部渐进重构经验",
          "🔋 风险可控：未引发全局系统动荡"
        ]
      },
      {
        "choice_id": "C",
        "text": "重构过程中盲目套用过于复杂的抽象设计模式，导致代码过度设计，多处测试出现无法排查的回归 Bug",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 过度设计",
          "intent": "炫技导致复杂化",
          "tradeoff": "不得不花费大量时间回滚代码，延误排期"
        },
        "result_text": "学长及时叫停了过度抽象，团队回滚了部分提交。你深刻领悟到：‘简单的优雅才是最高级的设计’。",
        "cost": {
          "TU": 3,
          "EP": 45
        },
        "variable_delta": {
          "skill": 4,
          "delivery": -4,
          "reputation": -2
        },
        "qualitative_changes": [
          "⚠️ 弯路淬炼：深刻撞上过度设计的工程陷阱",
          "🌱 认知升维：真正懂得 KISS 原则（Keep It Simple, Stupid）的千金重量",
          "🎯 经验沉淀：在摔跟头中学会克制炫技冲动"
        ]
      }
    ]
  },
  {
    "event_id": "AI_012",
    "title": "大四上商业真实项目交付上线与高可用稳定性复盘",
    "package": "AI",
    "type": "HIDDEN",
    "priority": "P2",
    "min_month": 35,
    "max_month": 37,
    "repeatable": false,
    "unlock_condition": {
      "month_in": [
        35,
        36,
        37
      ],
      "has_tags": [
        "FLAG_AI_JOINED_DEEP"
      ]
    },
    "content": {
      "background": "大四秋季，AI-Lab 与产业龙头企业合作研发的智能自动化运维平台正式在甲方生产数据中心全面上线割接！",
      "scene": "监控大屏上流量陡增，数百台主机实时心跳跳动，一旦出现数据丢失或超时熔断，将面临真金白银的巨额商业违约赔偿。",
      "conflict": "是作为技术现场总指挥通宵驻场保障并制定完备的降级熔断策略，还是常规值班，亦或甩手交给运维？"
    },
    "choices": [
      {
        "choice_id": "A",
        "text": "现场技术总控！亲自制定全套灰度发布、平滑熔断与一键回滚演练方案，通宵驻场盯死全部核心指标",
        "player_hint": {
          "load_level": "Lv2",
          "load_name": "⚡ 深度攻坚 · 商业大成",
          "intent": "完成学生极客向真正企业级 CTO 操盘手的蜕变，铸就商业实战无上战功",
          "tradeoff": "需连续 48 小时在机房现场保持高度警觉"
        },
        "result_text": "百万级真实生产请求零报错平稳切换！企业副总裁亲自到机房倒香槟庆祝，为实验室追加 500 万长期研发合同！",
        "cost": {
          "TU": 4,
          "EP": 65
        },
        "variable_delta": {
          "delivery": 20,
          "reputation": 20,
          "portfolio": 16,
          "ai_depth": 12,
          "family": 8
        },
        "tag_add": [
          "FLAG_AI_COMMERCIAL_TRIUMPH"
        ],
        "resume_entry": {
          "category": "COMMERCIAL",
          "chain_id": "EXP_AI_PRODUCTION_01",
          "stage_contribution": "CHIEF_DIRECTOR",
          "title": "头部科技企业工业级 AI 自动化系统总控交付",
          "description": "担任生产系统上线总控技术负责人，主导高可用熔断演练与端到端割接，实现生产环境百万流量零故障平稳上线。"
        },
        "qualitative_changes": [
          "💼 商业传奇：成功总控千万级商业前沿工程落地，创造巨大产业价值",
          "🌟 业界领袖：提前具备中大型科技公司 Tech Lead / CTO 核心统帅力",
          "🏆 人生巅峰：以全胜战绩为大学四年的极客求索画下最恢弘震撼的休止符"
        ]
      },
      {
        "choice_id": "B",
        "text": "负责主干代码的监控告警阈值配置，远程值班随时准备修复潜在突发 Bug",
        "player_hint": {
          "load_level": "Lv1",
          "load_name": "📘 常规投入 · 远程护航",
          "intent": "履行骨干职责，保障平稳上线",
          "tradeoff": "未深入一线机房第一现场"
        },
        "result_text": "系统顺利上线，几个微小的告警被你快速排查修复，顺利完成了商业交付支撑工作。",
        "cost": {
          "TU": 2,
          "EP": 30
        },
        "variable_delta": {
          "delivery": 10,
          "skill": 8,
          "reputation": 8
        },
        "qualitative_changes": [
          "🏢 商业履历：拥有真实企业级大型系统上线护航实战经验",
          "📦 交付过硬：具备敏锐的生产环境线上 Bug 快速修复力",
          "🔋 沉稳有为：展现成熟可靠的工程大局观"
        ]
      },
      {
        "choice_id": "C",
        "text": "认为‘大四了没必要这么拼’，把上线驻场任务推给低年级学弟，自己回宿舍休息",
        "player_hint": {
          "load_level": "Lv0",
          "load_name": "🌿 轻松闲暇 · 功成身退",
          "intent": "提前开启大四休假模式",
          "tradeoff": "错失见证四年技术心血最终在商业战场开花结果的历史瞬间"
        },
        "result_text": "系统在学长们的奋战下成功上线。虽然免去了值班熬夜，但你并未体会到胜利果实那份最醇厚的热泪盈眶。",
        "cost": {
          "TU": 1,
          "EP": 10
        },
        "variable_delta": {
          "reputation": 2,
          "delivery": 2
        },
        "qualitative_changes": [
          "🏖️ 清闲自得：保持大四后期的佛系作风",
          "⚠️ 缺席高光：错过了与战友共同庆祝商业胜利的沸腾时刻",
          "⏳ 经历收尾：平淡结束在 AI-Lab 的奋斗历程"
        ]
      }
    ]
  }
];
