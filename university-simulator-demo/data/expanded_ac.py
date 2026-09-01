# -*- coding: utf-8 -*-
"""
大学四年模拟器 - 学业与专业课组 (AC) 扩充事件库 (10个高质事件)
覆盖大一至大四完整阶段：
AC_006 ~ AC_015
"""

AC_EXPANDED_EVENTS = [
  {
    "event_id": "AC_006",
    "title": "大一选修课大作业与学术小论文初体验",
    "package": "AC",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 4,
    "max_month": 5,
    "repeatable": False,
    "unlock_condition": { "month_in": [4, 5] },
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
        "cost": { "TU": 3, "EP": 40 },
        "variable_delta": { "academic": 8, "research": 8, "focus": 6, "reputation": 4 },
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
        "cost": { "TU": 2, "EP": 20 },
        "variable_delta": { "academic": 5, "focus": 3 },
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "academic": 2, "research": -2 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [12, 13, 14] },
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
        "cost": { "TU": 5, "EP": 70 },
        "variable_delta": { "skill": 14, "academic": 10, "delivery": 10, "health": -6, "focus": 6 },
        "tag_add": ["FLAG_AC_OS_PASSED"],
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
        "cost": { "TU": 3, "EP": 45 },
        "variable_delta": { "skill": 8, "academic": 8, "social": 6, "delivery": 6 },
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
        "cost": { "TU": 2, "EP": 25 },
        "variable_delta": { "academic": 4, "skill": 2 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [17, 18, 19] },
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
        "cost": { "TU": 4, "EP": 60 },
        "variable_delta": { "portfolio": 14, "skill": 12, "delivery": 10, "academic": 8 },
        "tag_add": ["FLAG_AC_NETWORK_SERVER"],
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
        "cost": { "TU": 3, "EP": 35 },
        "variable_delta": { "skill": 8, "portfolio": 6, "academic": 6 },
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
        "cost": { "TU": 1, "EP": 15 },
        "variable_delta": { "academic": 3, "reputation": -2 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [19, 20, 21], "min_vars": { "academic": 65 } },
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
        "cost": { "TU": 3, "EP": 35 },
        "variable_delta": { "reputation": 12, "skill": 8, "social": 8, "delivery": 6 },
        "tag_add": ["FLAG_AC_COURSE_TA"],
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
        "cost": { "TU": 2, "EP": 20 },
        "variable_delta": { "family": 4, "reputation": 6, "social": 4 },
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
        "cost": { "TU": 1, "EP": 5 },
        "variable_delta": { "focus": 6, "academic": 2 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [22, 23, 24] },
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
        "cost": { "TU": 4, "EP": 55 },
        "variable_delta": { "skill": 14, "portfolio": 12, "delivery": 10, "academic": 6 },
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
        "cost": { "TU": 2, "EP": 30 },
        "variable_delta": { "skill": 7, "delivery": 6, "academic": 5 },
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "academic": 3, "skill": 1 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [24, 25, 26] },
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
        "cost": { "TU": 4, "EP": 55 },
        "variable_delta": { "research": 16, "academic": 10, "reputation": 12, "focus": 6 },
        "tag_add": ["FLAG_AC_LAB_SEMINAR_PASSED"],
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
        "cost": { "TU": 2, "EP": 25 },
        "variable_delta": { "research": 8, "academic": 6, "social": 4 },
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "focus": 4, "research": -4 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [28, 29, 30] },
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
        "cost": { "TU": 4, "EP": 50 },
        "variable_delta": { "academic": 12, "research": 10, "reputation": 10, "skill": 6 },
        "tag_add": ["FLAG_AC_ENGLISH_PRESENTATION_TOP"],
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
        "cost": { "TU": 2, "EP": 25 },
        "variable_delta": { "academic": 7, "research": 5, "focus": 4 },
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
        "cost": { "TU": 1, "EP": 15 },
        "variable_delta": { "academic": 3, "focus": 2 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [31, 32] },
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
        "cost": { "TU": 5, "EP": 75 },
        "variable_delta": { "academic": 18, "focus": 10, "health": -8, "reputation": 8 },
        "tag_add": ["FLAG_AC_SEMESTER_TOP_GPA"],
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
        "cost": { "TU": 3, "EP": 45 },
        "variable_delta": { "academic": 10, "focus": 6, "health": -2 },
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
        "cost": { "TU": 2, "EP": 25 },
        "variable_delta": { "academic": 4, "focus": -2 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [35, 36, 37] },
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
        "cost": { "TU": 4, "EP": 50 },
        "variable_delta": { "research": 14, "academic": 10, "reputation": 10, "portfolio": 8 },
        "tag_add": ["FLAG_AC_THESIS_TOP_TOPIC"],
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
        "cost": { "TU": 2, "EP": 25 },
        "variable_delta": { "academic": 6, "delivery": 6, "portfolio": 4 },
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
        "cost": { "TU": 1, "EP": 15 },
        "variable_delta": { "academic": 3, "delivery": 4 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [39, 40] },
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
        "cost": { "TU": 4, "EP": 50 },
        "variable_delta": { "delivery": 14, "academic": 10, "portfolio": 10, "reputation": 8 },
        "tag_add": ["FLAG_AC_MIDTERM_EXCELLENT"],
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
        "cost": { "TU": 2, "EP": 25 },
        "variable_delta": { "academic": 6, "delivery": 6, "focus": 4 },
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
        "cost": { "TU": 1, "EP": 15 },
        "variable_delta": { "academic": 2, "delivery": -4, "reputation": -2 },
        "qualitative_changes": [
          "⚠️ 黄牌警告：收到毕设中期整改通知书",
          "⏳ 债务堆积：将巨大的编码压力推迟到毕业答辩前夕",
          "🎯 心理焦虑：大四下后期将面临严苛时间死线"
        ]
      }
    ]
  }
]
