# 大学四年模拟器：AI-Lab 隐藏路线 IF 系统 Vertical Slice Demo

> **版本**：v0.1  
> **性质**：最小可运行 IF 逻辑验证原型 (Interactive Fiction Vertical Slice)  
> **验证目标**：证明“玩家过去的选择 → 状态与经历标签变更 → 动态事件池生成 → 路径依赖分化”的 IF 机制完全成立。

---

## 1. 运行方式

本 Demo 采用纯前端架构（HTML5 + CSS3 + Vanilla JavaScript + JSON），支持本地零依赖直接运行：

- **方法一（双击即玩）**：在文件管理器中直接双击 `index.html` 即可在默认浏览器中打开运行。
- **方法二（本地静态服务器）**：
  ```bash
  # 在 university-simulator-demo 目录下
  npx -y serve .
  # 或使用 Python
  python -m http.server 8080
  ```

---

## 2. 目录结构与模块分工

```text
university-simulator-demo/
├── index.html            # 游戏主页面结构（顶部学年进度、主事件池、剧情决策区、Debug 面板、历史 Log）
├── css/
│   └── style.css         # 沉浸式专业设计系统样式表（冷灰/品牌调色、响应式栅格、状态指示条）
├── js/
│   ├── state.js          # 玩家初始状态、连续变量、经历标签、事件集与路线阶段状态机
│   ├── engine.js         # IF 核心逻辑引擎（事件解锁判定、选项应用、Deadline 倒计时推进与超时惩罚）
│   ├── events_embed.js   # 内嵌事件数据兜底（支持 file:// 协议免本地服务器即开即用）
│   └── app.js            # 前端交互控制器、DOM 实时渲染、Debug 监控同步与一键自动化测试路线
├── data/
│   └── events.json       # 事件库与分支规则（JSON 格式定义触发条件、选项效果、Deadline 与状态机迁移）
└── README.md             # 本技术与逻辑验证文档
```

---

## 3. 玩家状态系统架构

### 3.1 连续数值变量 (Variables)

| 变量名 | 初始值 | 作用范围与设计含义 |
|---|:---:|---|
| **Portfolio** | 10 | 作品集与可展示资产（Showcase），决定能否被学长/团队发掘 |
| **Skill** | 15 | 核心代码与专业技术硬实力，影响高难度任务与深层研发胜率 |
| **Delivery** | 35 | **稳定交付能力**（AI-Lab 核心指标），按时交付与受挫返工会大幅提升 |
| **Social** | 30 | 社交拓展与信息触达，影响线索暴露与人脉引荐 |
| **Health** | 80 | 身心健康与精力余量，硬肝通宵会扣减，过低会导致透支危机 |
| **Focus** | 50 | 专注度与时间分配，接多项任务或过度承诺会扣减 |
| **AI_Depth** | 5 | 对 AI 框架、Agent 与大模型落地的实际理解深度 |
| **Reputation** | 30 | 师长与团队眼中的靠谱口碑，失约与拖延会遭遇断崖式扣减 |

### 3.2 关键经历标签 (Tags)

- `heard_ai_lab`：听说过技术团队/相关方向线索
- `lab_first_contact`：与团队成员或学长建立了双向互动
- `completed_course_project`：完成了课程大作业
- `project_documented`：为项目编写了规范 README 与视频演示
- `ai_lab_task_received`：正在持有并执行任务卡
- `ai_lab_task_completed`：成功按时/延期完成任务交付
- `accepts_revision`：能接受打回修改与严苛反馈（进入 Deep 关键前置）
- `missed_lab_deadline`：发生过任务卡失约或严重超时
- `missed_lab_deadline_closed`：因连续失约触发路线永久关闭
- `joined_lab_deep`：正式作为核心成员深度加入 AI-Lab
- `politely_exited_lab`：主动提前沟通并体面退出任务卡

### 3.3 事件集 (Event Sets)

- `BASE_CAMPUS_SET`：默认开启（普通课程、考试、社交）
- `PROJECT_SET`：默认开启（大作业实操、Showcase 整理）
- `AI_LAB_HINT_SET`：默认开启（浅层线索、分享会）
- `AI_LAB_TASK_SET`：**默认锁定**（需完成作品规范沉淀与学长实名接触后解锁）
- `AI_LAB_DEEP_SET`：**默认锁定**（需满足 `task_completed_count >= 2`、`Delivery >= 55`、`Reputation >= 50` 且 `accepts_revision == true` 才能解锁）

---

## 4. 当前实现的核心事件列表

| 事件 ID | 学年 | 所属事件集 | 事件标题 | 核心 IF 作用 |
|---|:---:|---|---|---|
| **E01_AI_HINT_001** | Y1 | `AI_LAB_HINT_SET` | 技术群里的一个 AI Agent Demo | 浅层线索分化：自己复现/私聊学长/收藏吃灰/忽视 |
| **E02_AI_HINT_002** | Y1 | `AI_LAB_HINT_SET` | 技术协会的 AI 线下分享会 | 建立初步联系（获取 `lab_first_contact`） |
| **E03_PROJECT_001** | Y2 | `PROJECT_SET` | 专业课大作业队友摆烂危机 | 交付力初筛：硬扛补完/找学长/摆烂/刷笔试分 |
| **E04_PROJECT_002** | Y2 | `PROJECT_SET` | 项目跑通后，如何进行成果沉淀与归档？ | 资产规范化：规范 README 沉淀 Showcase |
| **E05_AI_HINT_003** | Y2 | `AI_LAB_HINT_SET` | 学长微信私信：“这个是你做的吗？” | 开启 `AI_LAB_TASK_SET`，测试诚实交付认知 |
| **E06_LAB_TASK_001** | Y2 | `AI_LAB_TASK_SET` | 第一张试水任务卡：开源工具调研与基准测试 | 创建 Active Task，开启 2 次行动 Deadline 倒计时 |
| **E07_LAB_TASK_002** | Y2 | `AI_LAB_TASK_SET` | 【Deadline 节点】第一张任务卡交付抉择 | 准时交付 / 延期交付 / 彻底失约不交 |
| **E06_RETRY_TASK** | Y2 | `AI_LAB_TASK_SET` | 最后通牒：学长的紧急补救任务卡 | 失约 1 次后的缓冲挽救机会（再次失约直接关线） |
| **E07_RETRY_SUBMIT** | Y2 | `AI_LAB_TASK_SET` | 【Deadline 节点】补救任务卡交付节点 | 挽救成功 / 连续失约彻底触发 CLOSED |
| **E08_LAB_TASK_003** | Y2 | `AI_LAB_TASK_SET` | 任务结果被打回：密密麻麻的修改批注 | 测试受挫返工皮实度（获得 `accepts_revision`） |
| **E09_LAB_TASK_004** | Y2 | `AI_LAB_TASK_SET` | 第二张进阶任务卡：自动化测试脚本与复现 | 进阶任务挑战 / 主动体面退出考研 |
| **E09_SUB_TASK_005**| Y2 | `AI_LAB_TASK_SET` | 【Deadline 节点】第二张任务卡交付与评审 | 满足第 2 次高质交付记录 |
| **E10_LAB_DEEP_001** | Y3 | `AI_LAB_TASK_SET` | 咖啡厅深聊：AI-Lab 核心团队邀请 | **Deep 核心门槛判断**（开启 `AI_LAB_DEEP_SET`） |
| **E11_LAB_DEEP_002** | Y3 | `AI_LAB_DEEP_SET` | 深层研发挑战：独立负责核心子模块 | 团队协作攻坚 / 硬肝透支 / 妥善交接退出 |
| **E12_REAL_001** | Y3 | `AI_LAB_DEEP_SET` | 产业真实项目试做机会 | 高门槛真实战场线验证 |
| **CAMPUS_001~004** | Y1-3| `BASE_CAMPUS_SET` | 校园社团/考试周/科研拜访/毕业分化 | 基础日常与考研/就业主线，提供真实机会成本 |

---

## 5. 四条核心测试路径与自动化验证结果

Demo 界面右侧集成了 4 个自动化预设按钮，并在 CI/测试套件中 100% 自动通过测试：

### 🟢 Route A: 稳定交付 → 进入 Deep → 产业真实项目
1. **执行序列**：
   - Y1：`E01(A)` 通宵复现 Demo → `E02(A)` 会后留步交流 → `CAMPUS_001(A)` 技术社团 → `CAMPUS_002(B)` 学习小组
   - Y2：`E03(A)` 独自补完大作业 → `E04(A)` 规范撰写 README → `E05(A)` 实事求是沟通（解锁 `AI_LAB_TASK_SET`）
   - Y2：`E06(A)` 接第一张任务卡 → `E07(A)` 准时高质交付 → `E08(A)` 积极沟通修改打回
   - Y3：`E09(A)` 接第二张任务卡 → `E09_SUB(A)` 高质交付（完成 2 次交付，Delivery=78, Reputation=80）
   - Y3：`E10(A)` 满足全部 Deep 条件，正式晋升 Deep 核心成员！
   - Y3：`E11(A)` 独立负责复杂子模块 → `E12(A)` 攻克产业真实项目试做！
2. **测试结果**：
   - 最终阶段：`LAB_6: 真实项目候选 (REAL_PROJECT)`
   - 核心数值：`Delivery: 100`, `Reputation: 100`, `Portfolio: 86`
   - 获得标签：`joined_lab_deep`, `real_project_passed`, `reliable_delivery`

---

### 🔴 Route B: 连续失约 → AI-Lab 路线永久关闭 (CLOSED)
1. **执行序列**：
   - Y1：`E01(B)` 私聊学长 → `E02(A)` 建立联系
   - Y2：`E03(A)` 补完项目 → `E04(A)` 规范文档 → `E05(A)` 获得任务卡开启
   - Y2：`E06(A)` 接下第一张任务卡
   - Y2：`E07(C)` **第 1 次失约**：彻底不交已读不回（Delivery -8, Reputation -10, 获得 `missed_lab_deadline`）
   - Y2：`E06_RETRY_TASK(B)` **第 2 次失约/放弃**：最后通牒任务选择放弃
2. **测试结果**：
   - 最终阶段：`LAB_CLOSED: 路线永久关闭 (CLOSED)`
   - 事件集状态：`AI_LAB_TASK_SET` 与 `AI_LAB_DEEP_SET` 永久锁定/关闭
   - 惩罚结算：`missed_deadline_count: 2`, `Delivery: 41`, `Reputation: 36`
   - 后续影响：事件池中不再出现任何 AI-Lab 任务卡或相关晋升机会。

---

### ⚪ Route C: 仅见浅层线索 → 专注学业与考研 (正常校园主线)
1. **执行序列**：
   - Y1：`E01(C)` 随手收藏吃灰（仅有 `heard_ai_lab`）
   - Y1：`CAMPUS_001(B)` 泡图书馆刷绩点 → `CAMPUS_002(A)` 刷真题高分
   - Y2：`E03(D)` 放弃课程大作业，死磕期末笔试分
   - Y2：`CAMPUS_003(B)` 刷保研排位分
   - Y3：`CAMPUS_004(A)` 坚定走考研深造路线（获得 `postgrad_track`）
2. **测试结果**：
   - 最终阶段：`LAB_1: 发现浅层线索 (EXPOSED)`
   - 事件集状态：`AI_LAB_TASK_SET` 从未解锁
   - 特征：没有接触任务卡，专注学业与升学，路线健康自然分化。

---

### 🔵 Route D: 完成部分任务后主动体面退出 (EXITED)
1. **执行序列**：
   - Y1-Y2：前序经历与 Route A 类似，完成第 1 张任务卡交付并成功接受返工修改
   - Y2：`E09_LAB_TASK_004(B)` 面对第 2 张高难度任务卡，主动向学长说明：“下半学期需全力准备保研绩点与高数，精力不足，本次先不参与。”
2. **测试结果**：
   - 最终阶段：`LAB_EXITED: 主动体面退出 (EXITED)`
   - 核心数值：`Reputation: 65`（声誉未受任何惩罚，反而因诚实沟通获得额外认可）
   - 获得标签：`politely_exited_lab`, `ai_lab_task_completed`, `project_documented`
   - 特征：既保留了已沉淀的交付成果和学长好口碑，又避免了过度承诺导致的透支失约。

---

## 6. IF 验证结论与发现的问题

### 6.1 验证结论
1. ✅ **无问卷化**：完全杜绝了“你是否想加入 AI-Lab？”等直球选项，所有机会均由大作业摆烂硬扛、README 规范编写、实测交付、打回返工等微观行为沉淀触发。
2. ✅ **路径依赖强**：前期的每一次文档编写、实事求是或拖延，直接决定后期的可选事件池。
3. ✅ **Deadline 机制有效**：接取任务卡后若选择忙其他事件，倒计时归零自动判定失约并重罚口碑。
4. ✅ **退出与失败逻辑完整**：连续两次失约永久关闭路线；主动提前沟通退出保留成果与口碑。

### 6.2 当前发现的问题与后续迭代建议
1. **多任务并发下的机会成本强化**：当前 Vertical Slice 仅演示了 1~2 个并发任务，未来完整版可增加期末考试周与任务 Deadline 同时撞期的极限博弈。
2. **健康与透支保护机制联动**：可进一步加入当 `Health < 25` 时，高负荷的真实项目事件强制置灰无法选择，并强制触发 `BURNOUT_SET` 休息事件。
3. **大四结局修饰符结算**：将 AI-Lab 的标签资产（如 `real_project_passed`、`joined_lab_deep`、`politely_exited_lab`）无缝接入考研复试、校招面试、保研面试等最终大结局的结算词条中。
