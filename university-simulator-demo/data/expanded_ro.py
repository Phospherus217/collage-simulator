# -*- coding: utf-8 -*-
"""
大学四年模拟器 - 恋爱与情感事件组 (RO) 扩充事件库 (8个高质事件)
覆盖大一至大四完整阶段：
RO_002 ~ RO_009
"""

RO_EXPANDED_EVENTS = [
  {
    "event_id": "RO_002",
    "title": "大一下恋爱初期的周末约会与日常作息磨合",
    "package": "RO",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 8,
    "max_month": 10,
    "repeatable": False,
    "unlock_condition": { "month_in": [8, 9, 10], "has_tags": ["FLAG_RO_IN_RELATIONSHIP"] },
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
        "cost": { "TU": 3, "EP": 30 },
        "variable_delta": { "romance": 20, "health": 8, "social": 4 },
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
        "cost": { "TU": 2, "EP": 20 },
        "variable_delta": { "romance": 12, "academic": 5, "focus": 4 },
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
        "cost": { "TU": 1, "EP": 15 },
        "variable_delta": { "romance": -6, "focus": -4 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [14, 15, 16], "has_tags": ["FLAG_RO_IN_RELATIONSHIP"] },
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
        "cost": { "TU": 3, "EP": 35 },
        "variable_delta": { "romance": 18, "academic": 12, "focus": 8, "reputation": 6 },
        "tag_add": ["FLAG_RO_STUDY_PARTNERS"],
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
        "cost": { "TU": 2, "EP": 15 },
        "variable_delta": { "romance": 14, "academic": 6, "health": 6 },
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
        "cost": { "TU": 2, "EP": 20 },
        "variable_delta": { "romance": 4, "academic": -4, "focus": -6 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [18, 19, 20], "has_tags": ["FLAG_RO_IN_RELATIONSHIP"] },
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
        "cost": { "TU": 2, "EP": 30 },
        "variable_delta": { "romance": 22, "health": 6, "social": 4 },
        "tag_add": ["FLAG_RO_COMMUNICATION_MASTER"],
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
        "cost": { "TU": 1, "EP": 15 },
        "variable_delta": { "romance": 10, "focus": 4 },
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
        "cost": { "TU": 1, "EP": 20 },
        "variable_delta": { "romance": -18, "focus": -10, "health": -6 },
        "tag_add": ["FLAG_RO_COLD_WAR"],
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
    "repeatable": False,
    "unlock_condition": { "month_in": [24, 25, 26], "has_tags": ["FLAG_RO_IN_RELATIONSHIP"] },
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
        "cost": { "TU": 2, "EP": 20 },
        "variable_delta": { "romance": 20, "health": 10, "social": 6 },
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
        "cost": { "TU": 2, "EP": 15 },
        "variable_delta": { "romance": 12, "health": 8 },
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "romance": -8, "skill": 4, "focus": -2 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [28, 29, 30], "has_tags": ["FLAG_RO_IN_RELATIONSHIP"] },
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
        "cost": { "TU": 3, "EP": 35 },
        "variable_delta": { "romance": 25, "health": 4, "reputation": 6 },
        "tag_add": ["FLAG_RO_ROCK_SOLID_SUPPORT"],
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
        "cost": { "TU": 2, "EP": 25 },
        "variable_delta": { "romance": 15, "delivery": 6, "social": 4 },
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "romance": -10, "focus": -2 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [32, 33, 34], "has_tags": ["FLAG_RO_IN_RELATIONSHIP"] },
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
        "cost": { "TU": 2, "EP": 30 },
        "variable_delta": { "romance": 24, "family": 8, "focus": 6 },
        "tag_add": ["FLAG_RO_SAME_CITY_COMMITTED"],
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
        "cost": { "TU": 2, "EP": 20 },
        "variable_delta": { "romance": 12, "focus": 6 },
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
        "cost": { "TU": 1, "EP": 20 },
        "variable_delta": { "romance": -12, "focus": -6 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [36, 37], "has_tags": ["FLAG_RO_IN_RELATIONSHIP"] },
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
        "cost": { "TU": 2, "EP": 20 },
        "variable_delta": { "romance": 20, "focus": 10, "health": 6 },
        "tag_add": ["FLAG_RO_PEAK_COMPANION"],
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "focus": 8, "academic": 4, "romance": 6 },
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
        "cost": { "TU": 1, "EP": 25 },
        "variable_delta": { "romance": -16, "focus": -12, "health": -6 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [40, 41], "has_tags": ["FLAG_RO_IN_RELATIONSHIP"] },
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
        "cost": { "TU": 2, "EP": 25 },
        "variable_delta": { "romance": 30, "family": 12, "health": 8 },
        "tag_add": ["FLAG_RO_LIFELONG_PARTNER"],
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
        "cost": { "TU": 1, "EP": 15 },
        "variable_delta": { "romance": 16, "delivery": 6 },
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
        "cost": { "TU": 1, "EP": 20 },
        "variable_delta": { "romance": -10, "focus": 6, "health": 2 },
        "tag_add": ["FLAG_RO_POLITELY_SEPARATED"],
        "qualitative_changes": [
          "🍂 青春散场：以极具尊严与体面的方式向校园爱情告别",
          "💖 感恩过往：将最美好的回忆封存在四年最好的年华里",
          "🎯 独立前行：释怀过去，轻装上阵奔赴未知未来"
        ]
      }
    ]
  }
]
