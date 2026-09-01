# -*- coding: utf-8 -*-
"""
大学四年模拟器 - 公共/通识事件组 (PU) 扩充事件库 (6个高质事件)
覆盖大一至大四完整阶段：
PU_003 ~ PU_008
"""

PU_EXPANDED_EVENTS = [
  {
    "event_id": "PU_003",
    "title": "大一上新生军训烈日站军姿与拉歌晚会",
    "package": "PU",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 1,
    "max_month": 2,
    "repeatable": False,
    "unlock_condition": { "month_in": [1, 2] },
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
        "cost": { "TU": 3, "EP": 45 },
        "variable_delta": { "health": 10, "focus": 10, "reputation": 10, "social": 8 },
        "tag_add": ["FLAG_PU_MILITARY_TRAINING_TOP"],
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
        "cost": { "TU": 2, "EP": 25 },
        "variable_delta": { "health": 8, "social": 6, "focus": 4 },
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "health": 2, "social": 2 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [7, 8, 9] },
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
        "cost": { "TU": 2, "EP": 20 },
        "variable_delta": { "delivery": 8, "focus": 8, "academic": 2 },
        "tag_add": ["FLAG_PU_ORGANIZED_HABIT"],
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
        "cost": { "TU": 1, "EP": 15 },
        "variable_delta": { "delivery": 4 },
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
        "cost": { "TU": 1, "EP": 15 },
        "variable_delta": { "social": -4, "focus": -2 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [11, 12, 13] },
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
        "cost": { "TU": 2, "EP": 25 },
        "variable_delta": { "reputation": 14, "academic": 8, "focus": 8, "delivery": 6 },
        "tag_add": ["FLAG_PU_SCHOLARSHIP_TOP"],
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
        "cost": { "TU": 1, "EP": 15 },
        "variable_delta": { "academic": 4, "reputation": 4 },
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
        "cost": { "TU": 0, "EP": 5 },
        "variable_delta": { "reputation": -4, "focus": 2 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [19, 20, 21] },
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
        "cost": { "TU": 2, "EP": 15 },
        "variable_delta": { "academic": 10, "skill": 6, "family": 4, "focus": 6 },
        "tag_add": ["FLAG_PU_LEGENDARY_NOTES"],
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "academic": 4, "family": 2 },
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
        "cost": { "TU": 1, "EP": 5 },
        "variable_delta": { "academic": 2, "focus": 2 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [37, 38] },
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "focus": 12, "health": 8, "reputation": 4 },
        "tag_add": ["FLAG_PU_MATURE_MINDSET"],
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "social": 10, "health": 4 },
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
        "cost": { "TU": 1, "EP": 5 },
        "variable_delta": { "focus": 6, "academic": 2 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [41, 42] },
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
        "cost": { "TU": 2, "EP": 20 },
        "variable_delta": { "reputation": 16, "social": 14, "family": 8, "health": 6 },
        "tag_add": ["FLAG_PU_GRADUATION_PHOTO_PERFECT"],
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "social": 8, "reputation": 6 },
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
        "cost": { "TU": 1, "EP": 5 },
        "variable_delta": { "delivery": 6, "social": 2 },
        "qualitative_changes": [
          "📦 现实干练：高效推进离校手续与物品处置",
          "🎯 务实风格：保持一以贯之的理性作风",
          "⏳ 终点已至：默默准备走出大学校门"
        ]
      }
    ]
  }
]
