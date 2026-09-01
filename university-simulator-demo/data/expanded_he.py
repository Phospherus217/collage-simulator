# -*- coding: utf-8 -*-
"""
大学四年模拟器 - 身心健康与作息组 (HE) 扩充事件库 (6个高质事件)
覆盖大一至大四完整阶段：
HE_002 ~ HE_007
"""

HE_EXPANDED_EVENTS = [
  {
    "event_id": "HE_002",
    "title": "大一上大学生体质健康测试与 1000 米长跑冲刺",
    "package": "HE",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 3,
    "max_month": 5,
    "repeatable": False,
    "unlock_condition": { "month_in": [3, 4, 5] },
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
        "cost": { "TU": 2, "EP": 35 },
        "variable_delta": { "health": 12, "focus": 8, "reputation": 4 },
        "tag_add": ["FLAG_HE_FITNESS_EXCELLENT"],
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
        "cost": { "TU": 1, "EP": 15 },
        "variable_delta": { "health": 6, "focus": 2 },
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
        "cost": { "TU": 1, "EP": 20 },
        "variable_delta": { "health": -6, "focus": -4 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [8, 9, 10] },
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
        "cost": { "TU": 2, "EP": 10 },
        "variable_delta": { "health": 18, "focus": 6, "social": 4 },
        "tag_add": ["FLAG_HE_FLU_RECOVERED"],
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
        "cost": { "TU": 2, "EP": 20 },
        "variable_delta": { "health": 12, "family": 2 },
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
        "cost": { "TU": 3, "EP": 50 },
        "variable_delta": { "health": -18, "focus": -8, "academic": 2 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [12, 13, 14, 15] },
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
        "cost": { "TU": 3, "EP": 25 },
        "variable_delta": { "health": 22, "focus": 10, "social": 6, "reputation": 4 },
        "tag_add": ["FLAG_HE_RUNNING_HABIT"],
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "health": 10, "focus": 4 },
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "health": 0, "focus": -2 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [18, 19, 20] },
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
        "cost": { "TU": 2, "EP": 20 },
        "variable_delta": { "health": 16, "focus": 8, "delivery": 4 },
        "tag_add": ["FLAG_HE_ERGONOMICS_ADOPTED"],
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "health": 8, "focus": 4 },
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
        "cost": { "TU": 1, "EP": 20 },
        "variable_delta": { "health": -14, "focus": -8 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [23, 24, 25, 26] },
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
        "cost": { "TU": 2, "EP": 20 },
        "variable_delta": { "health": 20, "focus": 12, "reputation": 4 },
        "tag_add": ["FLAG_HE_PSYCHOLOGY_RESILIENT"],
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
        "cost": { "TU": 2, "EP": 15 },
        "variable_delta": { "health": 12, "social": 8, "focus": 6 },
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
        "cost": { "TU": 1, "EP": 25 },
        "variable_delta": { "health": -12, "focus": -10 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [35, 36, 37] },
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
        "cost": { "TU": 2, "EP": 15 },
        "variable_delta": { "health": 18, "focus": 10, "delivery": 6 },
        "tag_add": ["FLAG_HE_PEAK_BODY_STATE"],
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "health": 10, "focus": 4 },
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
        "cost": { "TU": 1, "EP": 25 },
        "variable_delta": { "health": -16, "focus": -8 },
        "qualitative_changes": [
          "💔 肠胃受创：高刺激饮食引发急性胃肠道黏膜损伤",
          "🎯 状态跌落：身体剧痛严重干扰考前一周黄金记忆期",
          "⚠️ 深刻教训：痛感身体才是承载一切野心不可破败的容器"
        ]
      }
    ]
  }
]
