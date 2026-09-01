# -*- coding: utf-8 -*-
"""
大学四年模拟器 - 校园社交与竞赛组 (SO) 扩充事件库 (8个高质事件)
覆盖大一至大四完整阶段：
SO_004 ~ SO_011
"""

SO_EXPANDED_EVENTS = [
  {
    "event_id": "SO_004",
    "title": "大一上寝室作息与卫生排班公约协商",
    "package": "SO",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 3,
    "max_month": 5,
    "repeatable": False,
    "unlock_condition": { "month_in": [3, 4, 5] },
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
        "cost": { "TU": 2, "EP": 20 },
        "variable_delta": { "social": 10, "health": 6, "focus": 4, "reputation": 6 },
        "tag_add": ["FLAG_SO_DORM_HARMONY"],
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
        "cost": { "TU": 1, "EP": 15 },
        "variable_delta": { "social": 5, "reputation": 4 },
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "focus": 6, "social": -4 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [8, 9, 10] },
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
        "cost": { "TU": 3, "EP": 45 },
        "variable_delta": { "social": 16, "reputation": 12, "delivery": 8, "focus": -4 },
        "tag_add": ["FLAG_SO_CLUB_PRESIDENT"],
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
        "cost": { "TU": 2, "EP": 20 },
        "variable_delta": { "social": 8, "skill": 4, "reputation": 6 },
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "focus": 8, "academic": 4, "social": -2 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [18, 19, 20], "min_vars": { "skill": 40 } },
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
        "cost": { "TU": 4, "EP": 75 },
        "variable_delta": { "portfolio": 18, "skill": 14, "reputation": 14, "delivery": 12, "health": -8 },
        "tag_add": ["FLAG_SO_HACKATHON_CHAMPION"],
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
        "cost": { "TU": 3, "EP": 40 },
        "variable_delta": { "portfolio": 10, "skill": 8, "reputation": 8, "delivery": 8 },
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
        "cost": { "TU": 2, "EP": 20 },
        "variable_delta": { "social": 6, "reputation": 4 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [19, 20, 21] },
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
        "cost": { "TU": 4, "EP": 60 },
        "variable_delta": { "portfolio": 14, "delivery": 12, "reputation": 14, "research": 8, "social": 8 },
        "tag_add": ["FLAG_SO_INTERNET_PLUS_WINNER"],
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
        "cost": { "TU": 2, "EP": 30 },
        "variable_delta": { "portfolio": 6, "reputation": 6, "academic": 4 },
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "focus": 6, "skill": 4 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [23, 24, 25] },
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
        "cost": { "TU": 3, "EP": 35 },
        "variable_delta": { "reputation": 16, "social": 12, "delivery": 8, "skill": 6 },
        "tag_add": ["FLAG_SO_TECH_SPEAKER"],
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
        "cost": { "TU": 2, "EP": 20 },
        "variable_delta": { "reputation": 8, "social": 6 },
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
        "cost": { "TU": 1, "EP": 5 },
        "variable_delta": { "focus": 4 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [31, 32, 33] },
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
        "cost": { "TU": 2, "EP": 25 },
        "variable_delta": { "social": 14, "reputation": 8, "portfolio": 4, "delivery": 4 },
        "tag_add": ["FLAG_SO_ALUMNI_NETWORK"],
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
        "cost": { "TU": 2, "EP": 20 },
        "variable_delta": { "social": 8, "health": 4 },
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "focus": 4, "academic": 2 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [36, 37, 38] },
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
        "cost": { "TU": 3, "EP": 30 },
        "variable_delta": { "social": 14, "reputation": 10, "family": 4 },
        "tag_add": ["FLAG_SO_CLASS_BOND"],
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
        "cost": { "TU": 2, "EP": 15 },
        "variable_delta": { "social": 8, "delivery": 4, "reputation": 4 },
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "social": 4, "focus": 2 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [41, 42] },
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
        "cost": { "TU": 2, "EP": 25 },
        "variable_delta": { "social": 20, "family": 8, "reputation": 6 },
        "tag_add": ["FLAG_SO_BROTHERS_FOR_LIFE"],
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
        "cost": { "TU": 2, "EP": 15 },
        "variable_delta": { "social": 12, "health": 6 },
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "delivery": 6, "social": 4 },
        "qualitative_changes": [
          "📦 效率达人：有条不紊办妥全部行李托运与离宿",
          "🎯 现实从容：理性迈入独立生活第一章",
          "🤝 礼貌作别：彼此珍重，各自奔赴前程"
        ]
      }
    ]
  }
]
