# 大学四年模拟器：AI-Lab 隐藏路线 IF 系统详细设计文档 v0.1

> **模块**：AI-Lab Hidden Route  
> **所属项目**：大学四年模拟器  
> **文档性质**：IF / 多分支游戏结构设计文档  
> **版本**：v0.1  
> **核心目标**：用 AI-Lab 路线作为样例，建立“玩家过去的选择 → 当前状态 → 可见事件 → 新选择 → 后续机会”的完整路径依赖系统。  
> **重点**：本模块不是宣传页设计，也不是剧情文案库，而是游戏规则、状态转换和事件关系设计。

---

# 1. 这份文档解决什么问题

【任务书既定】

“大学四年模拟器”必须做成多分支剧情游戏，而不能退化成问卷、测评或宣传页。AI-Lab 不应作为显性结局推荐，而应以隐藏事件链的形式出现在玩家大学路径过程中。

因此，本 IF 模块要解决的核心问题不是：

```text
玩家想不想加入 AI-Lab？
```

而是：

```text
玩家过去经历了什么
↓
玩家现在拥有什么状态
↓
因此他能看见哪些机会
↓
玩家面对机会如何行动
↓
新的选择改变状态
↓
后续机会发生变化
```

一句话：

> **IF 系统负责把“大学事件”变成“具有路径依赖的大学人生”。**

---

# 2. AI-Lab 路线在整个模拟器中的定位

【任务书既定】

AI-Lab 不应该出现在首页、标题、第一轮选择或显性推荐中，而应该像现实中的机会一样，由技术社团、课程项目、竞赛失败、学长交流、讲座、朋友圈、任务卡等事件逐渐暴露。

同时：

> AI-Lab 不是捷径。

加入或接触 AI-Lab 不能自动产生好结局；如果玩家长期围观、失约或不交付，路线应逐渐消失。

因此 AI-Lab 在游戏中应被定义为：

```text
Hidden Opportunity System
隐藏机会系统
```

而不是：

```text
Faction Selection
阵营选择
```

更不是：

```text
Join AI-Lab → Good Ending
```

---

# 3. 你的 IF 工作在这里具体负责什么

以 AI-Lab 为例，IF 设计需要负责六件事：

## 3.1 定义玩家状态

回答：

```text
系统如何知道这个玩家过去做过什么？
```

---

## 3.2 定义事件触发条件

回答：

```text
为什么 A 玩家能看到这个机会，而 B 玩家看不到？
```

---

## 3.3 定义选择后果

回答：

```text
玩家选择以后，哪些变量、标签和路线发生变化？
```

---

## 3.4 定义事件生命周期

回答：

```text
事件什么时候出现？
什么时候过期？
什么时候永久关闭？
```

---

## 3.5 定义分支收束

回答：

```text
不同选择怎样最终形成不同大学路径？
```

---

## 3.6 检查是否问卷化

回答：

```text
这个事件是真的在让玩家做决策，
还是只是披着游戏外衣测试他的性格？
```

---

# 4. IF 系统整体架构

【IF 实现设计】

建议整个游戏采用下面的逻辑：

```text
┌──────────────────────┐
│      Player State    │
│ 玩家当前完整状态      │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│   Unlock Evaluation  │
│ 检查所有事件触发条件  │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│    Available Pool    │
│ 生成当前可选事件池    │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│    Player Choice     │
│ 玩家选择一个事件行动  │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│   State Transition   │
│ 修改变量/标签/事件集  │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ Deadline / Timeout   │
│ 推进其他事件倒计时    │
└──────────┬───────────┘
           ↓
      下一次行动
```

这与任务书规定的基础游戏流程一致：

```text
学年开始
→ 固定行动次数
→ 根据已开启事件集产生事件池
→ 玩家选择事件
→ 改变变量、标签、事件集
→ 未处理事件倒计时
→ 行动次数耗尽
→ 学年结算
```



---

# 5. Player State：玩家状态结构

不能只使用“属性分数”。

完整状态建议拆成四层。

---

## 5.1 Variables：连续变量

【任务书既定】

任务书已经定义了包括 GPA、Portfolio、Research、Skill、Delivery、Social、Health、Focus、AI-Depth、Reputation 等核心变量。

AI-Lab 路线主要读取以下变量：

| 变量 | 在 AI-Lab 线中的作用 |
|---|---|
| Portfolio | 是否拥有可展示成果 |
| Research | 是否适合论文/研究型路线 |
| Skill | 是否具备技术实施能力 |
| Delivery | 是否能稳定完成任务 |
| Social | 是否容易接触学长、项目、信息 |
| Health | 是否适合继续承担高强度任务 |
| Focus | 是否能够持续完成任务 |
| AI-Depth | 对 AI 工具和项目的实际深度 |
| Reputation | 他人是否认为玩家可靠 |

AI-Lab **不直接控制 GPA、Internship 等变量**。

它们应通过玩家实际分配时间和后续事件间接受到影响。

---

# 6. Tags：经历标签

【IF 实现设计】

变量回答：

> 这个玩家现在大概有多强？

Tag 回答：

> 这个玩家到底经历过什么？

建议 AI-Lab 第一版支持：

```text
heard_ai_lab
lab_first_contact

first_ai_demo
project_documented

ai_lab_task_received
ai_lab_task_completed
ai_lab_task_late
missed_lab_deadline

accepts_revision
communicates_before_revision
unreliable_revision

reliable_delivery
overcommitted

joined_lab_deep

line1_active
line2_active
line3_active
line4_active

completed_showcase_project

burnout_risk

serious_integrity_issue

real_project_candidate
real_project_passed
real_project_failed
```

例如：

```text
Delivery = 60
```

本身不能证明玩家适合 Deep。

更合理的是：

```text
Delivery >= 55
AND
ai_lab_task_completed_count >= 2
AND
accepts_revision = true
AND
serious_integrity_issue = false
```

---

# 7. Event Set：事件集

【任务书既定】

任务书已经定义：

```text
AI_LAB_HINT_SET
AI_LAB_TASK_SET
AI_LAB_DEEP_SET
REAL_PROJECT_SET
```

并规定 AI-Lab 路线要从浅层线索逐渐进入任务卡，再进入深层路线。

---

## 7.1 AI_LAB_HINT_SET

作用：

```text
玩家开始有机会“听说”AI-Lab。
```

事件例子：

- 技术社团有人展示 Demo；
- 学长交流；
- 项目被学长注意；
- 讲座；
- 竞赛失败后求助；
- 群聊中看到项目；
- 朋友圈看到论文或 Agent Demo。

---

## 7.2 AI_LAB_TASK_SET

作用：

```text
玩家开始真正接受小任务。
```

事件包括：

- 调研；
- 资料整理；
- 复现；
- 流程记录；
- Demo 检查；
- 内容调研；
- 数据整理。

---

## 7.3 AI_LAB_DEEP_SET

作用：

```text
玩家已经不再只是偶尔接一张任务卡，
而开始承担完整模块。
```

---

## 7.4 REAL_PROJECT_SET

作用：

```text
部分高稳定交付玩家才有机会看到。
```

它不是 AI-Lab 的必然结果。

---

# 8. AI-Lab Route State Machine

【IF 实现设计】

建议把整个隐藏路线进一步定义成 7 个状态。

---

## LAB_0：未接触

```text
UNSEEN
```

玩家不知道这条路线存在。

默认：

```text
AI_LAB_TASK_SET = LOCKED
AI_LAB_DEEP_SET = LOCKED
REAL_PROJECT_SET = LOCKED
```

---

## LAB_1：看见线索

```text
EXPOSED
```

玩家偶然看到：

```text
技术社团
课程项目
学长交流
分享会
朋友圈
群聊
竞赛
```

这里只发生：

```text
heard_ai_lab = true
```

不代表玩家进入任何组织。

---

## LAB_2：主动接触

```text
CONTACTED
```

玩家做出了实际行为，例如：

```text
问学长
请求反馈
参加分享
展示 Demo
主动了解项目
```

产生：

```text
lab_first_contact = true
```

---

## LAB_3：任务试用期

```text
TASK_TRIAL
```

玩家领取第一张任务卡。

任务书明确规定，中层任务应包括调研、复现、数据整理、宣传稿、网页流程记录等低门槛任务。

这一阶段重点不是测试：

```text
技术到底有多强
```

而是测试：

```text
会不会开始
会不会按时交
会不会沟通
会不会返工
```

---

## LAB_4：稳定交付

```text
RELIABLE
```

【任务书既定】

进入深层路线需要：

- 至少完成两次任务卡；
- Delivery ≥ 55；
- Reputation ≥ 50；
- 能接受修改反馈；
- 至少拥有一个方向的初步成果。

建议程序条件：

```text
task_completed_count >= 2

AND Delivery >= 55

AND Reputation >= 50

AND accepts_revision == true

AND serious_integrity_issue == false
```

---

## LAB_5：深层路线

```text
DEEP_MEMBER
```

开启：

```text
AI_LAB_DEEP_SET
```

玩家开始进入：

```text
Line1
Line2
Line3
Line4
```

开始承担完整模块。

---

## LAB_6：真实项目候选

```text
REAL_PROJECT_CANDIDATE
```

【任务书既定】

真实项目候选要求：

```text
AI-Lab 深层路线已开启
Delivery >= 70
Reputation >= 65
Portfolio >= 60 OR Skill >= 65
Health >= 45
至少完成一个可展示项目
没有严重失约或诚信问题
玩家主动选择接触真实项目
```



注意：

```text
LAB_6 ≠ 得到工作
```

只意味着：

```text
可以看到“真实项目试做”事件。
```

---

# 9. 路线总状态转换

```text
LAB_0 未接触
      ↓
   看见线索
      ↓
LAB_1 EXPOSED
      ↓
   主动行动？
   ├─ 否 → 停留 / 概率下降
   └─ 是
       ↓
LAB_2 CONTACTED
       ↓
   获得任务卡
       ↓
LAB_3 TASK_TRIAL
       ↓
   稳定完成？
   ├─ 连续失约 → 路线关闭
   ├─ 偶尔晚交 → 继续但 Reputation↓
   └─ 是
       ↓
   接受返工？
   ├─ 否 → 难以进入 Deep
   └─ 是
       ↓
LAB_4 RELIABLE
       ↓
满足 Deep 条件
       ↓
LAB_5 DEEP_MEMBER
       ↓
Line1 / Line2 / Line3 / Line4
       ↓
满足真实项目候选条件？
       ├─ 否 → 继续积累资产
       └─ 是
            ↓
LAB_6 REAL_PROJECT_CANDIDATE
            ↓
        项目试做
        ├─ Pass
        └─ Fail
```

---

# 10. Event 生命周期

【任务书既定】

每个事件必须拥有：

```text
unlock_condition
close_condition
time_limit
timeout_effect
```

而不能只是剧情文本。

---

## 10.1 LOCKED

条件不满足。

例如：

```text
LAB_TASK_001
```

只有：

```text
lab_first_contact == true
AND Focus >= 35
```

才能进入候选池。

---

## 10.2 AVAILABLE

满足条件，可以在 Event Pool 中出现。

---

## 10.3 ACTIVE

玩家选择了这个事件。

例如：

```text
接下任务卡
```

则：

```text
remaining_actions = 2
```

---

## 10.4 COMPLETED

玩家完成。

---

## 10.5 EXPIRED

事件超时。

例如：

```text
任务卡剩余行动次数 = 0
```

且没有提交。

---

## 10.6 CLOSED

永久关闭。

例如：

```text
missed_lab_deadline_count >= 2
```

则：

```text
AI_LAB_TASK_SET = CLOSED
```

---

# 11. 第一条完整 AI-Lab Vertical Slice

第一版先设计 12 个核心节点。

不追求数量，先证明 IF 能真正工作。

---

# EVENT 01

## Y1_AI_HINT_001：群里的一个 AI Demo

### Unlock

```text
year == 1
AND
(
    joined_tech_club
    OR Social >= 30
)
```

### 剧情

技术群里有人发了一个正在做的 AI Demo。

很多人回复：

```text
“牛。”
```

然后聊天继续。

### Choice A：自己试一下

```text
Skill +3
AI-Depth +6
Focus -2

ADD:
first_ai_demo
heard_ai_lab
```

提高：

```text
AI_LAB_HINT_SET probability
PROJECT_SET probability
```

---

### Choice B：问一下是谁做的

```text
Social +3

ADD:
heard_ai_lab
```

提高：

```text
lab_contact_event probability
```

---

### Choice C：收藏，之后再看

```text
AI-Depth +1
```

不产生深层影响。

---

### Choice D：没兴趣

无明显惩罚。

降低：

```text
AI_LAB_HINT_SET probability
```

---

# EVENT 02

## Y1_AI_HINT_002：一次分享

### Unlock

```text
heard_ai_lab == true
```

### Choice

```text
A 会后留下交流
B 加群
C 签到后离开
D 回去自己研究
```

A：

```text
Social +4
Reputation +1

ADD:
lab_first_contact
```

---

# EVENT 03

## Y2_PROJECT_001：课程项目队友摆烂

【任务书中已有类似样例】

选择：

### A 自己补完

```text
Portfolio +8
Skill +5
Delivery +6
Health -6

ADD:
completed_course_project
```

---

### B 放弃

```text
Portfolio -4
Reputation -3
```

---

### C 找学长求助

```text
Social +4

提高：
AI_LAB_HINT_SET probability
```

---

### D 改成竞赛作品

需要：

```text
Skill >= 25
```

---

# EVENT 04

## Y2_PROJECT_002：Demo 做完了，接下来呢？

### A 写 README + Demo 视频

```text
Portfolio +8
Delivery +4

ADD:
project_documented
completed_showcase_project
```

---

### B 做完就算

```text
Portfolio +2
```

---

### C 发出去求反馈

```text
Portfolio +5
Social +3

提高：
AI_LAB_HINT_SET probability
```

---

# EVENT 05

## Y2_AI_HINT_003：学长问“这个是你做的吗？”

### Unlock

```text
Portfolio >= 18
AND
project_documented
AND
AI_LAB_HINT_SET == OPEN
```

### A 老实讲自己负责的部分

```text
Reputation +5
Social +2

ADD:
lab_first_contact
```

---

### B 夸大自己贡献

```text
Reputation +1

ADD:
overclaimed_project
```

可能成为后续风险。

---

### C 随便应付

降低后续线索概率。

---

# EVENT 06

## Y2_LAB_TASK_001：第一张任务卡

剧情：

```text
你以为学长可能会邀请你参加项目。

结果他只给你发来一张表：

“帮我整理一下这几个项目，下周前给我。”
```

### Unlock

```text
lab_first_contact
AND
Focus >= 30
```

---

### A 接

```text
ADD:
ai_lab_task_received

OPEN:
AI_LAB_TASK_SET
```

任务进入 ACTIVE。

---

### B 拒绝

不处罚。

降低后续任务卡概率。

---

### C 接，但是现在没时间

任务仍 ACTIVE。

但 Deadline 较短。

---

# EVENT 07

## Y2_LAB_TASK_002：Deadline

### 按时交

```text
Delivery +9
Reputation +7
AI-Depth +3

ADD:
ai_lab_task_completed

task_completed_count += 1
```

---

### 晚交

```text
Delivery +3
Reputation -1

ADD:
ai_lab_task_late
```

---

### 不交

```text
Delivery -5
Reputation -8

ADD:
missed_lab_deadline
```

如果：

```text
missed_lab_deadline_count >= 2
```

则：

```text
CLOSE:
AI_LAB_TASK_SET
```

任务书明确要求，两次任务超时或连续失约后，应允许 AI-Lab 线索减少或退出。

---

# EVENT 08

## Y2_LAB_TASK_003：第一次被打回

剧情：

```text
你觉得已经完成。

对方回复：

“结构不对，再整理。”
```

### A 直接按照反馈改

```text
Delivery +6
Reputation +5

ADD:
accepts_revision
```

---

### B 先问清楚哪里有问题，再修改

```text
Delivery +7
Reputation +6
Social +2

ADD:
accepts_revision
communicates_before_revision
```

---

### C 觉得要求太多

```text
Reputation -4
```

---

### D 表面答应，继续拖

```text
Delivery -4
Reputation -5

ADD:
unreliable_revision
```

---

# EVENT 09

## Y2_LAB_TASK_004：第二张任务卡

第二张任务根据玩家已有状态产生差异。

例如：

### 技术倾向

```text
复现一个最小 Demo
```

### Research 倾向

```text
整理 5 篇论文
```

### 内容倾向

```text
调研 10 个大学路径内容
```

---

# EVENT 10

## Y3_LAB_DEEP_001：进入 Deep

### Unlock

```text
task_completed_count >= 2
AND
Delivery >= 55
AND
Reputation >= 50
AND
accepts_revision
AND
Health >= 35
AND
NOT serious_integrity_issue
```

执行：

```text
OPEN:
AI_LAB_DEEP_SET

ADD:
joined_lab_deep
```

---

# EVENT 11

## Y3_LAB_DEEP_002：第一次完整负责一个模块

剧情：

> 这次没人给你一张简单任务表。  
> 负责人直接把一个完整模块交给了你。

### A 拆任务 + 中间节点

```text
Delivery +10
Reputation +6
Skill +5
```

---

### B 一个人全部硬做

```text
Skill +6
Delivery +3
Health -9

ADD:
overcommitted
```

---

### C 一直研究，不提交中间结果

```text
Skill +3
Delivery -7
```

---

### D 主动找人协作

```text
Social +4
Delivery +7
Reputation +5
```

---

# EVENT 12

## Y3_REAL_001：真实项目试做

### Unlock

```text
AI_LAB_DEEP_SET == OPEN

AND Delivery >= 70

AND Reputation >= 65

AND (
    Portfolio >= 60
    OR Skill >= 65
)

AND Health >= 45

AND completed_showcase_project

AND NOT serious_integrity_issue
```

---

### A 接受试做

```text
OPEN:
REAL_PROJECT_SET
```

---

### B 拒绝，继续校招

合法路线。

不处罚。

---

### C 拒绝，准备考研

合法路线。

---

### D 过度承诺

```text
ADD:
overcommitted
```

增加后续失败风险。

---

# 12. Deep 后四条路线

【任务书既定】

AI-Lab Deep 不是只有科研，而是对应四条线。

---

## Line1：论文 / 知识整理

典型事件：

```text
读论文
整理卡片
实验数据
复现论文
文献综述
论文修改
```

主要影响：

```text
Research ↑↑
Portfolio ↑
Delivery ↑
```

---

## Line2：GUI Agent / 自动化

典型事件：

```text
记录操作流程
跑 Demo
写简单脚本
做测试
分析失败
整理实验
```

主要影响：

```text
Skill ↑↑
Portfolio ↑↑
AI-Depth ↑
Delivery ↑
```

---

## Line3：DeepResearch / 比赛 / 复现

典型事件：

```text
调研
Benchmark
比赛
论文复现
失败复盘
```

主要影响：

```text
Research ↑
Skill ↑
Delivery ↑
```

---

## Line4：宣传 / 内容

典型事件：

```text
选题
调研
写稿
发布
数据观察
评论分析
传播复盘
```

主要影响：

```text
Social ↑
Portfolio ↑
Delivery ↑
```

---

# 13. Opportunity Cost：必须存在机会成本

这是整个 IF 系统特别重要的一部分。

【任务书既定】

玩家每学年行动次数有限，大一 8 次、大二 10 次、大三 10 次、大四 8 次。行动次数代表关键决策机会，玩家不能把所有事情全部完成。

因此：

不能设计成：

```text
交任务
Delivery +10
所有其他状态不变
```

应该发生：

```text
本回合交 AI-Lab 任务
↓
因此不能同时处理：
期末复习
竞赛
恋爱问题
实习准备
其他项目
```

例如：

```text
当前 Event Pool：

① 期末复习
② AI-Lab Task Deadline
③ 竞赛报名
④ 和对象解决矛盾
⑤ 项目 Demo
```

玩家只能处理其中一个。

这才形成真正选择。

---

# 14. Timeout：错过也是一种选择

【任务书既定】

事件需要支持：

```text
short
medium
long
deadline
```

超时后可以：

- 消失；
- 降低 Social / Reputation；
- 降低 Delivery；
- 关闭事件组；
- 触发负面状态。

AI-Lab 应重点使用：

```text
short
medium
deadline
```

因为机会不能无限等待玩家。

---

# 15. 退出机制

AI-Lab 路线必须允许合理退出。

---

## 15.1 合理退出

例如：

```text
为了保研减少项目
为了考研进入全职复习
Health 太低主动降低负荷
选择实习或校招
```

这些选择：

```text
不应严重降低 Reputation
```

甚至：

```text
主动提前沟通退出
```

可以：

```text
Reputation 不变
```

---

# 16. 失败退出

例如：

```text
连续接任务不交
长期不回复
反复拖延
严重过度承诺
```

应：

```text
Delivery ↓
Reputation ↓
```

并逐步：

```text
降低 AI_LAB_TASK_SET probability
```

最终可能：

```text
CLOSE AI_LAB_TASK_SET
```

---

# 17. 诚信问题

任务书已经规定，把别人成果包装成自己的应作为退出条件。

建议定义：

```text
serious_integrity_issue
```

一旦产生：

```text
CLOSE:
AI_LAB_DEEP_SET
REAL_PROJECT_SET
```

但是否永久关闭普通 PROJECT_SET，需要由整体游戏另行决定。

---

# 18. Health 保护机制

AI-Lab 不能设计成：

```text
越卷越好
```

建议：

```text
Health < 40
```

则：

```text
BURNOUT_SET probability ↑
```

如果：

```text
Health < 25
```

则高强度事件：

```text
REAL_PROJECT_SET
```

暂时停止进入 Event Pool。

这可以避免出现：

```text
只要不断选最努力的按钮就必胜
```

的问题。

---

# 19. AI-Lab 与结局的关系

【任务书既定】

AI-Lab 不应该作为独立的 7、8、9、10 类主结局。

最终结构应该是：

```text
Main Ending
+
AI-Lab Modifier
+
其他 Modifier
```



例如：

---

## E05 普通软件就业

基础：

```text
普通软件 / 数据岗位
```

如果：

```text
AI_LAB_DEEP_SET == OPEN
```

Modifier：

```text
拥有更完整的项目资产；
面试可以讲失败、返工、交付。
```

---

## E06 AI 应用 / Agent 岗

AI-Lab 可以：

```text
显著增加匹配概率
```

但仍需要：

```text
Skill
Portfolio
```

足够高。

---

## E03 考研

玩家完全可以：

```text
大一大二参与 AI-Lab
↓
大三主动退出
↓
准备考研
```

最终保留：

```text
Portfolio
Skill
Project Experience
```

---

# 20. Anti-Questionnaire Audit：问卷化审计

每个事件写完以后，都必须过下面六个问题。

---

## Audit 01

这个事件是否在问：

```text
你喜欢科研吗？
你喜欢 AI 吗？
你是不是一个努力的人？
```

如果是：

> 不合格。

应该转换成实际情境。

---

## Audit 02

选项是否有成本？

如果：

```text
A 努力 → +10
B 不努力 → -10
```

不合格。

---

## Audit 03

选择是否改变后续事件？

如果只改变量：

```text
Skill +5
```

但下一轮事件完全一样：

> IF 强度不足。

---

## Audit 04

是否允许错过？

真实机会不能永远等玩家。

---

## Audit 05

是否存在明显的标准答案？

如果每轮：

```text
认真
努力
坚持
负责
```

永远最好：

> 系统失效。

---

## Audit 06

拒绝 AI-Lab 是否也可能合理？

答案必须：

```text
是。
```

例如：

```text
为了 GPA
为了考研
为了健康
为了实习
因为职业方向不同
```

都可以合理拒绝。

---

# 21. Event 标准字段

【任务书既定】

任务书已经要求事件至少包含：

- event_id
- year
- event_set
- category
- title
- unlock_condition
- close_condition
- time_limit
- timeout_effect
- text
- choices
- variable_delta
- tag_delta
- open_event_sets
- close_event_sets
- probability_delta
- hidden_flag
- ending_tag



---

# 22. IF 负责人建议新增字段

【IF 实现设计】

建议额外增加：

```text
route_stage
event_state

prerequisite_events

task_deadline

next_event_boost

failure_counter

repeatable

priority

exclusive_group
```

例如：

```text
route_stage = LAB_3

priority = opportunity

exclusive_group = Y2_MAJOR_ACTION
```

---

# 23. 单事件配置示例

```text
event_id:
Y2_LAB_TASK_001

year:
2

event_set:
AI_LAB_TASK_SET

route_stage:
LAB_3

title:
第一张任务卡

unlock_condition:
lab_first_contact == true
AND Focus >= 30

time_limit:
medium

deadline:
2 actions

choices:

A:
  text: 接下来认真做

  variable_delta:
    Focus: -2

  tag_add:
    ai_lab_task_received

  event_state:
    ACTIVE

B:
  text: 拒绝

  probability_delta:
    AI_LAB_TASK_SET: -30%

C:
  text: 接下来，但先忙别的

  tag_add:
    ai_lab_task_received

  event_state:
    ACTIVE
```

---

# 24. Event Pool 生成规则

【IF 实现设计】

每次行动不直接固定触发一个事件。

而应该：

```text
Event Pool
=
2-3 个主路径事件
+
1-2 个机会事件
+
0-1 个危机事件
+
满足条件的隐藏事件
```

这一原则本身已经在任务书中提出。

AI-Lab 应主要属于：

```text
Opportunity / Hidden Event
```

而不能长期霸占主事件池。

---

# 25. AI-Lab 路线的最小 MVP

第一版不需要一次把整个 AI-Lab 做完。

建议 MVP 只实现：

## Hint

3 个事件。

例如：

```text
AI Demo
课程项目
学长第一次交流
```

---

## Task

3 个事件。

```text
第一张任务卡
Deadline
返工
```

---

## Deep

2 个事件。

```text
完整模块
需求变化
```

---

## Real Project

2-3 个事件。

```text
试做
需求变化
Deadline
```

---

总计：

```text
约 10-12 个核心事件
```

足以证明路线成立。

---

# 26. Playtest：你需要怎么测试 IF 线

不要只看剧情。

至少手动模拟 8 种玩家。

---

## Player A

```text
高 Skill
低 Delivery
```

应该：

```text
能做项目
但难进入 Deep
```

---

## Player B

```text
Skill 一般
Delivery 很高
```

应该：

```text
可以稳定进入任务系统
但技术路线发展有限
```

---

## Player C

```text
高 GPA
低 Social
```

应该：

```text
AI-Lab 触发概率较低
但可以走强保研路线
```

---

## Player D

```text
高 Delivery
低 Health
```

应该：

```text
系统不应该继续无脑推高强度路线
```

---

## Player E

```text
接任务
两次不交
```

应该：

```text
AI_LAB_TASK_SET 逐渐关闭
```

---

## Player F

```text
任务全部完成
但不愿接受返工
```

应该：

```text
难进入 Deep
```

---

## Player G

```text
进入 Deep
但主动准备考研
```

应该：

```text
能够合理退出
并保留已有项目资产
```

---

## Player H

```text
Deep + 高 Delivery + 高 Portfolio
```

才可能：

```text
进入真实项目试做
```

---

# 27. IF 系统的四类常见 Bug

## Bug 1：路线断裂

例如：

```text
玩家完成任务卡
```

但是没有任何后续事件可以触发。

---

## Bug 2：路线自动吸附

玩家只要进入：

```text
AI_LAB_HINT_SET
```

最终几乎必然进入 Deep。

这也是错误。

---

## Bug 3：永远正确选项

例如：

```text
永远选“认真完成”
```

就能得到所有最高收益。

必须通过时间、Health、GPA 等制造代价。

---

## Bug 4：不同路径最终趋同

如果：

```text
按时交
拖延
不交
```

最终都还能看到同一个 Deep 事件：

> 分支事实上无效。

---

# 28. 你作为 IF 负责人最终应该交什么

针对 AI-Lab 样例线，建议你最终交付以下 5 个成果。

## Deliverable 1

### AI-Lab Route State Machine

即：

```text
LAB_0
→ LAB_1
→ LAB_2
→ LAB_3
→ LAB_4
→ LAB_5
→ LAB_6
```

---

## Deliverable 2

### AI-Lab Event Flow

约 10-15 个关键事件。

---

## Deliverable 3

### AI-Lab Event Table

每个事件完整写：

```text
unlock
choices
delta
tags
open
close
timeout
```

---

## Deliverable 4

### Branching Audit

逐个检查：

```text
问卷化？
有没有成本？
有没有真正后果？
能否错过？
是否永远有正确答案？
```

---

## Deliverable 5

### Playtest Report

至少测试：

```text
8种典型玩家
+
多次人工通关
```

记录：

```text
死路
假分支
必胜选项
路线过强
路线过弱
事件无法触发
```

---

# 29. AI-Lab IF 线验收标准

第一版达到以下条件即可认为 IF 设计基本成立。

### 条件 1

至少存在：

```text
没看见 AI-Lab
```

的玩家。

---

### 条件 2

存在：

```text
看到但没有进入
```

的玩家。

---

### 条件 3

存在：

```text
接任务但失败
```

的玩家。

---

### 条件 4

存在：

```text
完成任务但主动退出
```

的玩家。

---

### 条件 5

存在：

```text
进入 Deep
```

但没有真实项目的玩家。

---

### 条件 6

只有少部分符合条件玩家才能：

```text
看到真实项目
```

---

### 条件 7

不进入 AI-Lab 仍然可以得到合理甚至优秀结局。

---

### 条件 8

玩家前期行为确实改变后期 Event Pool。

这是最核心的一项。

---

# 30. 最终设计原则

AI-Lab IF 线最终不是：

```text
“你愿不愿意加入？”
```

而应该表现成：

```text
过去参与项目
      ↓
积累了一些能力和经历
      ↓
因此看见某个机会
      ↓
是否主动靠近
      ↓
得到一个很普通的小任务
      ↓
是否真正交付
      ↓
是否接受反馈
      ↓
是否形成稳定可靠性
      ↓
系统才逐渐向玩家开放更深的路线
```

所以整个 IF 模块最核心的设计公式可以写成：

```text
Past Choices
+
Current State
+
Current Action
=
Future Opportunity Space
```

即：

> **过去的选择 + 当前状态 + 当前行动，共同决定玩家未来能够看到的机会空间。**

这就是你负责的 IF 线最核心的工作。

AI-Lab 只是第一条示范路线。

一旦这一套结构跑通，后续：

```text
科研线
竞赛线
实习线
保研线
恋爱线
学生干部线
```

都可以采用相同的 IF 架构，只更换事件、变量和路线条件。