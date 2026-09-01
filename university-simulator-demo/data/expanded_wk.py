# -*- coding: utf-8 -*-
"""
大学四年模拟器 - 求职与就业主线组 (WK) 扩充事件库 (8个高质事件)
覆盖大一至大四完整阶段：
WK_004 ~ WK_011
"""

WK_EXPANDED_EVENTS = [
  {
    "event_id": "WK_004",
    "title": "大二上校园名企职业宣讲会与行业前沿招聘认知",
    "package": "WK",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 12,
    "max_month": 14,
    "repeatable": False,
    "unlock_condition": { "month_in": [12, 13, 14] },
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
        "cost": { "TU": 2, "EP": 30 },
        "variable_delta": { "reputation": 12, "delivery": 8, "social": 8, "portfolio": 6 },
        "tag_add": ["FLAG_WK_DIRECTOR_CONTACT"],
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
        "cost": { "TU": 2, "EP": 15 },
        "variable_delta": { "focus": 6, "skill": 4, "delivery": 4 },
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "social": 2 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [15, 16, 17] },
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
        "cost": { "TU": 3, "EP": 40 },
        "variable_delta": { "portfolio": 14, "delivery": 12, "reputation": 8, "skill": 4 },
        "tag_add": ["FLAG_WK_KILLER_RESUME"],
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
        "cost": { "TU": 2, "EP": 20 },
        "variable_delta": { "portfolio": 6, "delivery": 6 },
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "delivery": -2, "focus": 2 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [18, 19, 20], "min_vars": { "skill": 35 } },
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
        "cost": { "TU": 4, "EP": 60 },
        "variable_delta": { "delivery": 16, "skill": 12, "reputation": 14, "portfolio": 8 },
        "tag_add": ["FLAG_WK_INTERN_STAR"],
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
        "cost": { "TU": 3, "EP": 35 },
        "variable_delta": { "delivery": 8, "skill": 6, "reputation": 6 },
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
        "cost": { "TU": 2, "EP": 25 },
        "variable_delta": { "delivery": -2, "focus": 2 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [22, 23, 24, 25] },
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
        "cost": { "TU": 4, "EP": 60 },
        "variable_delta": { "skill": 18, "academic": 8, "focus": 10, "reputation": 8 },
        "tag_add": ["FLAG_WK_ALGORITHM_MASTER"],
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
        "cost": { "TU": 3, "EP": 35 },
        "variable_delta": { "skill": 10, "focus": 6, "delivery": 4 },
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
        "cost": { "TU": 1, "EP": 15 },
        "variable_delta": { "skill": 2, "reputation": -2 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [25, 26, 27], "min_vars": { "skill": 40 } },
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
        "cost": { "TU": 4, "EP": 60 },
        "variable_delta": { "delivery": 16, "reputation": 12, "skill": 8, "focus": 6 },
        "tag_add": ["FLAG_WK_INTERN_TEST_PASSED"],
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
        "cost": { "TU": 2, "EP": 30 },
        "variable_delta": { "delivery": 8, "reputation": 6, "focus": 4 },
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
        "cost": { "TU": 1, "EP": 15 },
        "variable_delta": { "delivery": -4, "focus": -2 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [29, 30, 31], "has_tags": ["FLAG_WK_INTERN_ACCEPTED"] },
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
        "cost": { "TU": 4, "EP": 60 },
        "variable_delta": { "delivery": 18, "reputation": 16, "skill": 12, "portfolio": 10 },
        "tag_add": ["FLAG_WK_INTERN_TOP_REVIEW"],
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
        "cost": { "TU": 2, "EP": 30 },
        "variable_delta": { "delivery": 10, "skill": 6, "reputation": 8 },
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
        "cost": { "TU": 1, "EP": 20 },
        "variable_delta": { "delivery": 2, "reputation": -4 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [36, 37], "has_tags": ["FLAG_WK_OFFER_SSP_ACCEPTED"] },
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
        "cost": { "TU": 2, "EP": 25 },
        "variable_delta": { "reputation": 20, "delivery": 14, "skill": 10, "family": 12 },
        "tag_add": ["FLAG_WK_SIGN_TOP_TIER"],
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
        "cost": { "TU": 1, "EP": 15 },
        "variable_delta": { "health": 16, "reputation": 10, "focus": 8 },
        "tag_add": ["FLAG_WK_SIGN_WLB"],
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
        "cost": { "TU": 2, "EP": 25 },
        "variable_delta": { "portfolio": 14, "skill": 12, "delivery": 10 },
        "tag_add": ["FLAG_WK_SIGN_UNICORN"],
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
    "repeatable": False,
    "unlock_condition": { "month_in": [39, 40, 41], "has_tags": ["FLAG_WK_SIGN_TOP_TIER"] },
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
        "cost": { "TU": 2, "EP": 20 },
        "variable_delta": { "delivery": 14, "reputation": 10, "family": 8 },
        "tag_add": ["FLAG_WK_OFFICIAL_CONTRACT_SIGNED"],
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "delivery": 8, "reputation": 6 },
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
        "cost": { "TU": 2, "EP": 30 },
        "variable_delta": { "delivery": 10, "reputation": 8, "family": 6 },
        "tag_add": ["FLAG_WK_OFFICIAL_CONTRACT_SIGNED"],
        "qualitative_changes": [
          "💰 权益增益：凭实力争取到更优厚的入职租房补充津贴",
          "💼 议价高手：展现成熟的市场价值评估与商务谈判能力",
          "📜 圆满签约：最终完成三方正式盖章锁定"
        ]
      }
    ]
  }
]
