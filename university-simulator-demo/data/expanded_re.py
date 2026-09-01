# -*- coding: utf-8 -*-
"""
大学四年模拟器 - 保研推免主线组 (RE) 扩充事件库 (6个高质事件)
覆盖大一至大四完整阶段：
RE_002 ~ RE_007
"""

RE_EXPANDED_EVENTS = [
  {
    "event_id": "RE_002",
    "title": "大二下保研政策细则研读与综合加分项查漏补缺",
    "package": "RE",
    "type": "NORMAL",
    "priority": "P2",
    "min_month": 17,
    "max_month": 19,
    "repeatable": False,
    "unlock_condition": { "month_in": [17, 18, 19], "min_vars": { "academic": 70 } },
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
        "cost": { "TU": 3, "EP": 35 },
        "variable_delta": { "research": 10, "academic": 8, "reputation": 6, "focus": 6 },
        "tag_add": ["FLAG_RE_POLICY_MASTERED"],
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
        "cost": { "TU": 2, "EP": 25 },
        "variable_delta": { "academic": 10, "focus": 6 },
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "focus": 2 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [21, 22, 23], "min_vars": { "academic": 75 } },
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
        "cost": { "TU": 4, "EP": 60 },
        "variable_delta": { "research": 18, "academic": 10, "reputation": 14, "portfolio": 8 },
        "tag_add": ["FLAG_RE_ACADEMIC_PAPER_AUTHOR"],
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
        "cost": { "TU": 2, "EP": 30 },
        "variable_delta": { "research": 10, "academic": 6, "reputation": 6 },
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "research": -4, "focus": 2 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [23, 24, 25], "min_vars": { "academic": 75 } },
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
        "cost": { "TU": 2, "EP": 25 },
        "variable_delta": { "academic": 10, "reputation": 10, "delivery": 8, "focus": 6 },
        "tag_add": ["FLAG_RE_DOSSIER_PERFECT"],
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
        "cost": { "TU": 1, "EP": 15 },
        "variable_delta": { "academic": 6, "focus": 4 },
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
        "cost": { "TU": 1, "EP": 20 },
        "variable_delta": { "focus": 8, "academic": 4, "health": -4 },
        "tag_add": ["FLAG_RE_MARGINAL_ALERT"],
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
    "repeatable": False,
    "unlock_condition": { "month_in": [25, 26, 27], "min_vars": { "academic": 78 } },
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
        "cost": { "TU": 4, "EP": 50 },
        "variable_delta": { "research": 16, "academic": 10, "reputation": 16, "delivery": 8 },
        "tag_add": ["FLAG_RE_PROFESSOR_ENDORSED"],
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
        "cost": { "TU": 2, "EP": 25 },
        "variable_delta": { "reputation": 8, "academic": 6 },
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "reputation": -2, "focus": 2 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [29, 30, 31], "has_tags": ["FLAG_REC_CAMP_PASS"] },
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
        "cost": { "TU": 4, "EP": 60 },
        "variable_delta": { "academic": 18, "research": 16, "reputation": 16, "delivery": 12 },
        "tag_add": ["FLAG_RE_CAMP_EXCELLENT_TIER1"],
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
        "cost": { "TU": 3, "EP": 35 },
        "variable_delta": { "academic": 10, "research": 8, "reputation": 8 },
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
        "cost": { "TU": 2, "EP": 25 },
        "variable_delta": { "academic": 4, "reputation": -2, "focus": 4 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [33, 34], "has_tags": ["FLAG_REC_CAMP_PASS"] },
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
        "cost": { "TU": 2, "EP": 20 },
        "variable_delta": { "academic": 20, "reputation": 18, "family": 14, "health": 8 },
        "tag_add": ["FLAG_RE_OFFICIAL_QUALIFIED"],
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "academic": 12, "reputation": 10, "family": 8 },
        "tag_add": ["FLAG_RE_OFFICIAL_QUALIFIED"],
        "qualitative_changes": [
          "📜 尘埃落定：顺利完成全部院系推免资格最终官方确认",
          "🔋 彻底释怀：三年高压学业长跑画下完满句号，精神极度放松",
          "🎯 自由展望：拥有整整大四一年的机动自由支配时间"
        ]
      }
    ]
  }
]
