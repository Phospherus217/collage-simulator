# AGY 任务：为《大学四年模拟器》GitHub 部署添加微信验证文件

你现在需要在当前《大学四年模拟器》GitHub 项目中完成一次非常小范围的部署修改。

## 一、任务目标

微信团队要求网站根目录部署一个 TXT 验证文件。

文件名必须严格为：

```text
3e5efac9e4672e18895eb0cc76766b39.txt
```

文件内容必须严格为：

```text
0e03f1d62f3692f934b4f4f9174a5aeb0b43b17aee
```

最终要求：

> 当前游戏网站部署完成后，可以通过网站公开访问路径直接读取这个 TXT 文件。

例如，如果当前试玩网址为：

```text
https://xxx.github.io/university-simulator-demo/
```

则最终必须能够访问：

```text
https://xxx.github.io/university-simulator-demo/3e5efac9e4672e18895eb0cc76766b39.txt
```

页面返回内容必须是：

```text
0e03f1d62f3692f934b4f4f9174a5aeb0b43b17aee
```

不能返回 HTML 页面。

---

# 二、最重要的约束

本任务只解决：

> 微信 TXT 网站验证文件部署。

禁止顺便修改：

- 游戏玩法；
- 游戏事件；
- 页面 UI；
- React/Vue 组件；
- JavaScript 逻辑；
- CSS；
- 路由；
- API；
- 数据库；
- 事件 JSON；
- 数值系统；
- GitHub Pages 配置；

除非现有部署机制确实无法把 TXT 文件复制到最终网站根目录。

即使必须调整部署，也只能做实现 TXT 根目录部署所需的最小修改。

---

# 三、第一步：先检查项目真实部署方式

不要直接猜测文件应该放哪里。

先检查当前项目：

```text
package.json
vite.config.*
next.config.*
src/
public/
dist/
docs/
index.html
.github/workflows/
```

以及 GitHub Pages 相关配置。

确认当前项目属于哪种部署方式。

可能情况包括：

## 情况 A：Vite / React / Vue 等项目

如果项目存在：

```text
public/
```

并且构建时 `public` 内容会原样复制到最终部署目录：

优先放：

```text
public/3e5efac9e4672e18895eb0cc76766b39.txt
```

最终构建后应出现：

```text
dist/3e5efac9e4672e18895eb0cc76766b39.txt
```

---

## 情况 B：纯 HTML GitHub Pages

如果：

```text
index.html
```

直接位于 GitHub Pages 发布目录：

则 TXT 和 `index.html` 放在同一级。

例如：

```text
index.html
3e5efac9e4672e18895eb0cc76766b39.txt
assets/
```

---

## 情况 C：GitHub Pages 从 docs/ 发布

如果当前 Pages 设置使用：

```text
/docs
```

则确保最终存在：

```text
docs/3e5efac9e4672e18895eb0cc76766b39.txt
```

但如果 `docs` 是构建产物：

优先修改构建源文件，而不是只手动编辑生成目录。

---

## 情况 D：GitHub Actions 构建后部署 dist

如果 workflow 类似：

```text
npm install
npm run build
upload-pages-artifact
deploy-pages
```

则必须保证：

```text
npm run build
```

完成后：

```text
dist/3e5efac9e4672e18895eb0cc76766b39.txt
```

真实存在。

不能只把文件放在仓库根目录，却没有进入最终 artifact。

---

# 四、文件内容必须严格一致

创建：

```text
3e5efac9e4672e18895eb0cc76766b39.txt
```

内容：

```text
0e03f1d62f3692f934b4f4f9174a5aeb0b43b17aee
```

注意：

- 不添加 Markdown；
- 不添加说明文字；
- 不添加引号；
- 不添加 HTML；
- 不添加 JSON；
- 不修改大小写；
- 不修改文件名；
- 不增加 `.html`；
- 不增加第二行说明；
- 不要变成富文本。

最好整个文件只有这一段验证码。

---

# 五、不能使用 GitHub blob 页面代替

以下形式是错误的：

```text
https://github.com/.../blob/main/3e5....txt
```

微信需要验证的是：

> 网站公开部署路径。

不是 GitHub 代码浏览页面。

必须保证最终路径属于真正的试玩网站。

---

# 六、注意 GitHub Pages 的项目子路径

如果项目采用：

```text
https://USERNAME.github.io/REPOSITORY/
```

这种 Project Pages：

验证地址通常应该是：

```text
https://USERNAME.github.io/REPOSITORY/3e5efac9e4672e18895eb0cc76766b39.txt
```

不要错误测试：

```text
https://USERNAME.github.io/3e5efac9e4672e18895eb0cc76766b39.txt
```

除非当前网站本来就是用户根站点。

必须根据当前仓库真实 Pages URL 判断。

---

# 七、如果项目绑定了自定义域名

如果项目存在：

```text
CNAME
```

或 GitHub Pages 已绑定独立域名：

最终需要保证微信实际验证的那个域名下能够访问：

```text
https://实际域名/3e5efac9e4672e18895eb0cc76766b39.txt
```

不要只确认 github.io 地址可访问。

---

# 八、修改完成后先做本地构建验证

如果项目存在构建命令：

运行：

```bash
npm install
npm run build
```

或者项目真实已有命令。

不要擅自修改 package manager。

如果项目使用：

```text
npm
pnpm
yarn
```

继续使用项目当前方式。

构建完成后检查最终部署目录。

例如：

```bash
ls dist
```

或 Windows 等效命令。

必须真实确认：

```text
3e5efac9e4672e18895eb0cc76766b39.txt
```

存在。

---

# 九、检查最终构建文件内容

读取最终部署目录中的文件。

确认：

```text
filename:
3e5efac9e4672e18895eb0cc76766b39.txt
```

内容严格为：

```text
0e03f1d62f3692f934b4f4f9174a5aeb0b43b17aee
```

如果文件被：

```text
重命名
hash
压缩成其他路径
打包进 JS
```

都视为失败。

它必须保持原始 TXT 文件名。

---

# 十、不能让 SPA fallback 吞掉 TXT

当前项目如果是 React/Vue SPA：

确认访问：

```text
/3e5efac9e4672e18895eb0cc76766b39.txt
```

时：

不能返回：

```html
<!doctype html>
<html>...
```

也不能被：

```text
404 fallback
index.html fallback
React Router
Vue Router
```

拦截。

它必须返回 TXT 文件本身。

---

# 十一、如果可以本地启动静态服务器，做请求验证

如果环境支持：

启动构建产物，例如：

```bash
npm run preview
```

或：

```bash
python -m http.server
```

具体按照项目已有方式。

然后访问：

```text
/<项目部署路径>/3e5efac9e4672e18895eb0cc76766b39.txt
```

确认响应正文严格是：

```text
0e03f1d62f3692f934b4f4f9174a5aeb0b43b17aee
```

---

# 十二、检查 Content-Type

理想情况下服务器返回：

```text
text/plain
```

如果 GitHub Pages 自动返回合适的 `text/plain`：

保持默认即可。

不要为此新增服务器代码。

---

# 十三、不得破坏当前 GitHub Pages 部署

修改以后运行项目已有：

```text
build
test
lint
```

如果存在。

至少保证：

```text
npm run build
```

仍然成功。

不能为了部署一个 TXT 把游戏网站搞坏。

---

# 十四、修改范围应尽可能只有一个文件

理想情况：

```text
新增：
public/3e5efac9e4672e18895eb0cc76766b39.txt
```

然后结束。

如果确实需要修改 GitHub Actions / build config：

必须在报告中解释：

> 为什么单纯新增 public 文件不能完成最终根路径部署。

否则不要修改部署配置。

---

# 十五、不要创建假的验证码

严格使用：

## 文件名

```text
3e5efac9e4672e18895eb0cc76766b39.txt
```

## 内容

```text
0e03f1d62f3692f934b4f4f9174a5aeb0b43b17aee
```

这两个字符串一个字符都不能错。

---

# 十六、完成以后检查 Git Diff

输出：

```bash
git diff --stat
git diff
```

确认：

理想结果只有新增 TXT。

不能出现：

```text
大量 src 修改
package-lock 大面积变化
UI 修改
事件库修改
README 无意义重写
```

---

# 十七、不要自动修改无关文件

尤其禁止：

```text
重新格式化整个项目
升级依赖
修改 Vite 版本
修改 Node 版本
修改 base URL
修改 router
修改 deployment branch
```

除非验证文件无法部署且有明确技术原因。

---

# 十八、最终必须告诉用户真实验证 URL

根据项目当前 GitHub Pages 配置推导：

```text
最终试玩网址
```

以及：

```text
最终微信 TXT 验证网址
```

例如：

```text
Game:
https://username.github.io/university-simulator-demo/

Verification:
https://username.github.io/university-simulator-demo/3e5efac9e4672e18895eb0cc76766b39.txt
```

不要虚构 URL。

必须从当前仓库配置、README、CNAME 或 GitHub workflow 中确认。

如果本地代码不能确定真实 GitHub Pages 域名：

明确写：

```text
无法仅从当前本地仓库确认公网 Pages 域名。
```

然后给出路径结构，不得猜用户名或域名。

---

# 十九、如果 AGY 有权限提交 GitHub

如果当前环境已经连接对应 GitHub 仓库并允许 commit/push：

可以完成：

```text
添加验证文件
→ commit
→ push
```

Commit message 推荐：

```text
Add WeChat domain verification file
```

不得顺带提交无关修改。

---

# 二十、如果没有 GitHub push 权限

不要声称已经部署。

只完成本地仓库修改，并告诉用户：

```text
需要将本次 commit 推送到 GitHub 才会触发 GitHub Pages 部署。
```

明确区分：

```text
文件已创建
```

和：

```text
公网已经部署
```

这两种状态。

---

# 二十一、最终交付报告

完成后输出一个简短报告：

```text
WeChat Verification Deployment Report

Repository:
...

Deployment type:
Vite / static / GitHub Actions / docs / other

File added:
...

Source path:
...

Expected deployed path:
...

Verification content:
MATCH / MISMATCH

Build:
PASS / FAIL

TXT present in final build artifact:
YES / NO

Game files modified:
YES / NO

Deployment config modified:
YES / NO

Git push:
DONE / NOT DONE

Expected public verification URL:
...

Ready to click “已部署，开始验证”:
YES / NO / WAITING FOR PUSH
```

---

# 二十二、任务成功标准

只有满足以下条件才算完成：

1. 文件名完全正确；
2. TXT 内容完全正确；
3. 文件进入实际 GitHub Pages 部署产物；
4. 不被打包器重命名；
5. 不被 SPA fallback 返回 index.html；
6. 游戏原页面不受影响；
7. 构建正常；
8. 不修改任何游戏逻辑；
9. 不修改事件库；
10. 不修改 UI；
11. 不升级依赖；
12. 不改变 GitHub Pages URL；
13. 最终验证 URL 可以明确推导；
14. 如果已有 GitHub 权限则完成最小 commit/push；
15. 如果没有 push 权限则明确说明仍需用户 push。

本任务的唯一目的：

> **让微信能够通过当前网站公开 URL 读取指定 TXT 验证文件。**

不要做任何与此无关的修改。
