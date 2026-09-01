# -*- coding: utf-8 -*-
"""
大学四年模拟器 - 家庭与突发经济组 (FA) 扩充事件库 (7个高质事件)
覆盖大一至大四完整阶段：
FA_002 ~ FA_008
"""

FA_EXPANDED_EVENTS = [
  {
    "event_id": "FA_002",
    "title": "大一上周末家庭例行视频与报喜不报忧的成长",
    "package": "FA",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 3,
    "max_month": 4,
    "repeatable": False,
    "unlock_condition": { "month_in": [3, 4] },
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
        "cost": { "TU": 1, "EP": 15 },
        "variable_delta": { "family": 12, "health": 4, "focus": 4 },
        "tag_add": ["FLAG_FA_WEEKLY_CALL"],
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "family": 6 },
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
        "cost": { "TU": 1, "EP": 15 },
        "variable_delta": { "family": -4, "focus": -4 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [13, 14, 15] },
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
        "cost": { "TU": 2, "EP": 25 },
        "variable_delta": { "family": 16, "focus": 8, "reputation": 6 },
        "tag_add": ["FLAG_FA_CAREER_CONSENSUS"],
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
        "cost": { "TU": 1, "EP": 15 },
        "variable_delta": { "family": 8, "focus": 4 },
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
        "cost": { "TU": 1, "EP": 15 },
        "variable_delta": { "family": -10, "focus": -6 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [16, 17, 18] },
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
        "cost": { "TU": 2, "EP": 25 },
        "variable_delta": { "family": 18, "health": 8, "social": 4 },
        "tag_add": ["FLAG_FA_PARENTS_HEALTH_CHECK"],
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
        "cost": { "TU": 2, "EP": 10 },
        "variable_delta": { "family": 10, "health": 12 },
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
        "cost": { "TU": 2, "EP": 20 },
        "variable_delta": { "family": 2, "social": 6, "health": -4 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [24, 25, 26] },
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
        "cost": { "TU": 1, "EP": 15 },
        "variable_delta": { "family": 20, "reputation": 6, "health": 4 },
        "tag_add": ["FLAG_FA_FINANCIALLY_FILIAL"],
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "family": 10, "delivery": 4 },
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "portfolio": 4, "family": 0 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [29, 30, 31] },
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
        "cost": { "TU": 4, "EP": 50 },
        "variable_delta": { "family": 24, "delivery": 8, "reputation": 6, "academic": -2 },
        "tag_add": ["FLAG_FA_PILLAR_OF_FAMILY"],
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
        "cost": { "TU": 2, "EP": 25 },
        "variable_delta": { "family": 12, "delivery": 6 },
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "family": 4, "focus": 2 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [35, 36, 37] },
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "family": 25, "reputation": 10, "health": 6 },
        "tag_add": ["FLAG_FA_PROUD_OF_FAMILY"],
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "family": 14, "delivery": 4 },
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
        "cost": { "TU": 1, "EP": 5 },
        "variable_delta": { "family": 4, "focus": 4 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [40, 41] },
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
        "cost": { "TU": 1, "EP": 15 },
        "variable_delta": { "family": 20, "delivery": 12, "reputation": 8 },
        "tag_add": ["FLAG_FA_TOTALLY_INDEPENDENT"],
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "family": 12, "delivery": 6 },
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "family": 4, "delivery": -4 },
        "qualitative_changes": [
          "🏡 依赖延续：未能迈出真正独立自立的关键一步",
          "🛋️ 物质舒适：享受家庭托底带来的安逸过渡",
          "⚠️ 自立欠缺：在面对职场真正风雨前心理准备不足"
        ]
      }
    ]
  }
]
