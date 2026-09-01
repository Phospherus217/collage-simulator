# -*- coding: utf-8 -*-
"""
大学四年模拟器 - 考研攻坚主线组 (GE) 扩充事件库 (7个高质事件)
覆盖大一至大四完整阶段：
GE_003 ~ GE_009
"""

GE_EXPANDED_EVENTS = [
  {
    "event_id": "GE_003",
    "title": "大三上考研目标院校与学硕/专硕报录比理性调研",
    "package": "GE",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 21,
    "max_month": 23,
    "repeatable": False,
    "unlock_condition": { "month_in": [21, 22, 23] },
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
        "cost": { "TU": 2, "EP": 25 },
        "variable_delta": { "focus": 12, "academic": 8, "reputation": 4 },
        "tag_add": ["FLAG_GE_TARGET_LOCKED"],
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
        "cost": { "TU": 2, "EP": 30 },
        "variable_delta": { "focus": 10, "academic": 6, "reputation": 6 },
        "tag_add": ["FLAG_GE_TARGET_TOP_985"],
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
        "cost": { "TU": 1, "EP": 15 },
        "variable_delta": { "focus": -6, "academic": -2 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [24, 25, 26, 27], "has_tags": ["FLAG_TRACK_GE_PRIMARY"] },
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
        "cost": { "TU": 5, "EP": 70 },
        "variable_delta": { "academic": 18, "focus": 14, "skill": 6, "health": -6 },
        "tag_add": ["FLAG_GE_MATH_FOUNDATION_SOLID"],
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
        "cost": { "TU": 3, "EP": 40 },
        "variable_delta": { "academic": 10, "focus": 8 },
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
        "cost": { "TU": 2, "EP": 20 },
        "variable_delta": { "academic": 3, "focus": -4 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [27, 28, 29, 30], "has_tags": ["FLAG_TRACK_GE_PRIMARY"] },
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
        "cost": { "TU": 3, "EP": 40 },
        "variable_delta": { "academic": 12, "focus": 8, "reputation": 4 },
        "tag_add": ["FLAG_GE_ENGLISH_TOP_READING"],
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
        "cost": { "TU": 2, "EP": 20 },
        "variable_delta": { "academic": 7, "focus": 4 },
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
        "cost": { "TU": 1, "EP": 15 },
        "variable_delta": { "academic": 1, "focus": -2 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [31, 32, 33], "has_tags": ["FLAG_TRACK_GE_PRIMARY"] },
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
        "cost": { "TU": 5, "EP": 80 },
        "variable_delta": { "academic": 20, "focus": 16, "health": -6, "reputation": 8 },
        "tag_add": ["FLAG_GE_SUMMER_WARRIOR"],
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
        "cost": { "TU": 3, "EP": 45 },
        "variable_delta": { "academic": 12, "focus": 8, "health": 4 },
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
        "cost": { "TU": 2, "EP": 20 },
        "variable_delta": { "academic": 4, "focus": -6, "family": 4 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [34, 35], "has_tags": ["FLAG_TRACK_GE_PRIMARY"] },
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
        "cost": { "TU": 4, "EP": 65 },
        "variable_delta": { "academic": 16, "focus": 14, "delivery": 10, "reputation": 6 },
        "tag_add": ["FLAG_GE_MINDSET_UNBREAKABLE"],
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
        "cost": { "TU": 2, "EP": 25 },
        "variable_delta": { "focus": 8, "academic": 8, "social": 4 },
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
        "cost": { "TU": 2, "EP": 35 },
        "variable_delta": { "academic": -6, "focus": -10, "health": -6 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [37, 38], "has_tags": ["FLAG_TRACK_GE_PRIMARY"] },
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
        "cost": { "TU": 2, "EP": 30 },
        "variable_delta": { "academic": 12, "delivery": 10, "focus": 8 },
        "tag_add": ["FLAG_GE_BACKUP_PREPARED"],
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
        "cost": { "TU": 2, "EP": 25 },
        "variable_delta": { "academic": 10, "focus": 6 },
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
        "cost": { "TU": 1, "EP": 15 },
        "variable_delta": { "focus": -6, "health": -4 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [39, 40], "has_tags": ["FLAG_TRACK_GE_PRIMARY"] },
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
        "cost": { "TU": 4, "EP": 55 },
        "variable_delta": { "academic": 20, "reputation": 18, "research": 14, "delivery": 10 },
        "tag_add": ["FLAG_GE_INTERVIEW_CHAMPION"],
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
        "cost": { "TU": 2, "EP": 30 },
        "variable_delta": { "academic": 12, "reputation": 10, "focus": 6 },
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
        "cost": { "TU": 1, "EP": 25 },
        "variable_delta": { "academic": 4, "reputation": -4, "focus": -6 },
        "qualitative_changes": [
          "⚠️ 悬崖边缘：复试表现失常导致录取形势极其凶险",
          "📉 信心重创：临场表达能力的短板暴露无遗",
          "🌱 深刻淬炼：明白真本事必须配合强大的心理承载力"
        ]
      }
    ]
  }
]
