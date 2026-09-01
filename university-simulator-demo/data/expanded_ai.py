# -*- coding: utf-8 -*-
"""
大学四年模拟器 - AI-Lab 极客隐藏路线 (AI) 扩充事件库 (6个高质事件)
覆盖大一至大四完整阶段：
AI_005, AI_008 ~ AI_012
"""

AI_EXPANDED_EVENTS = [
  {
    "event_id": "AI_005",
    "title": "大二下 AI-Lab 代码规范审查：单元测试与 CI 流水线搭建",
    "package": "AI",
    "type": "HIDDEN",
    "priority": "P2",
    "min_month": 19,
    "max_month": 21,
    "repeatable": False,
    "unlock_condition": { "month_in": [19, 20, 21], "has_tags": ["FLAG_AI_LAB_DISCOVERED"] },
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
        "cost": { "TU": 4, "EP": 55 },
        "variable_delta": { "delivery": 16, "skill": 12, "reputation": 12, "ai_depth": 8 },
        "tag_add": ["FLAG_AI_CI_MASTERED"],
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
        "cost": { "TU": 2, "EP": 30 },
        "variable_delta": { "delivery": 8, "skill": 6, "reputation": 6 },
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "delivery": -4, "reputation": -4 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [21, 22, 23], "has_tags": ["FLAG_AI_TASK_SUBMITTED"] },
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
        "cost": { "TU": 4, "EP": 65 },
        "variable_delta": { "ai_depth": 18, "skill": 14, "portfolio": 12, "reputation": 14 },
        "tag_add": ["FLAG_AI_INFERENCE_OPTIMIZED"],
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
        "cost": { "TU": 2, "EP": 30 },
        "variable_delta": { "ai_depth": 8, "skill": 6, "delivery": 6 },
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "ai_depth": 2, "focus": 2 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [23, 24, 25], "has_tags": ["FLAG_AI_ACCEPTED_REVISION"] },
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
        "cost": { "TU": 3, "EP": 45 },
        "variable_delta": { "ai_depth": 16, "reputation": 18, "skill": 12, "delivery": 10 },
        "tag_add": ["FLAG_AI_ARCHITECT_RECOGNIZED"],
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
        "cost": { "TU": 2, "EP": 25 },
        "variable_delta": { "ai_depth": 8, "skill": 8, "delivery": 6 },
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "ai_depth": 4, "focus": 2 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [25, 26, 27], "has_tags": ["FLAG_AI_ACCEPTED_REVISION"] },
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
        "cost": { "TU": 4, "EP": 70 },
        "variable_delta": { "delivery": 20, "reputation": 20, "skill": 14, "ai_depth": 10, "health": -6 },
        "tag_add": ["FLAG_AI_OPEN_SOURCE_SAVIOR"],
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
        "cost": { "TU": 2, "EP": 35 },
        "variable_delta": { "delivery": 10, "reputation": 8, "skill": 6 },
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "reputation": -2, "focus": 2 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [28, 29, 30], "has_tags": ["FLAG_AI_JOINED_DEEP"] },
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
        "cost": { "TU": 5, "EP": 75 },
        "variable_delta": { "ai_depth": 20, "skill": 16, "delivery": 16, "portfolio": 14, "reputation": 14 },
        "tag_add": ["FLAG_AI_CHIEF_ARCHITECT"],
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
        "cost": { "TU": 3, "EP": 40 },
        "variable_delta": { "ai_depth": 10, "skill": 8, "delivery": 8 },
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
        "cost": { "TU": 3, "EP": 45 },
        "variable_delta": { "skill": 4, "delivery": -4, "reputation": -2 },
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
    "repeatable": False,
    "unlock_condition": { "month_in": [35, 36, 37], "has_tags": ["FLAG_AI_JOINED_DEEP"] },
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
        "cost": { "TU": 4, "EP": 65 },
        "variable_delta": { "delivery": 20, "reputation": 20, "portfolio": 16, "ai_depth": 12, "family": 8 },
        "tag_add": ["FLAG_AI_COMMERCIAL_TRIUMPH"],
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
        "cost": { "TU": 2, "EP": 30 },
        "variable_delta": { "delivery": 10, "skill": 8, "reputation": 8 },
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
        "cost": { "TU": 1, "EP": 10 },
        "variable_delta": { "reputation": 2, "delivery": 2 },
        "qualitative_changes": [
          "🏖️ 清闲自得：保持大四后期的佛系作风",
          "⚠️ 缺席高光：错过了与战友共同庆祝商业胜利的沸腾时刻",
          "⏳ 经历收尾：平淡结束在 AI-Lab 的奋斗历程"
        ]
      }
    ]
  }
]
