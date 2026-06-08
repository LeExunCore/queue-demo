# 队列传递演示

一个基于SVG的可视化队列传递演示项目，适用于移动端（微信浏览器）展示。

## 功能特点

- 展示A、B两组队列，每组4个小球
- 队头出队 → 动画跑到对面队头 → 入队到对方队尾
- 最后一次传递由B4跑到裁判球完成
- 响应式设计，支持移动端显示

## 部署到GitHub Pages

### 方法一：直接部署（推荐）

1. 在GitHub上创建一个新仓库（例如：`queue-demo`）

2. 在本地初始化git仓库：

```bash
cd c:\Users\HP\Desktop\VueCode
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用户名/queue-demo.git
git push -u origin main
```

3. 在GitHub仓库中启用Pages：
   - 进入仓库的 **Settings** → **Pages**
   - **Source** 选择 `main` 分支
   - **Folder** 选择 `/ (root)`
   - 点击 **Save**

4. 等待几分钟后，访问：`https://你的用户名.github.io/queue-demo/queue-demo.html`

### 方法二：使用index.html

如果希望直接通过仓库地址访问，可以将 `queue-demo.html` 重命名为 `index.html`：

```bash
copy queue-demo.html index.html
git add index.html
git commit -m "Add index.html"
git push origin main
```

然后访问：`https://你的用户名.github.io/queue-demo/`

## 运行本地预览

```bash
cd c:\Users\HP\Desktop\VueCode
python -m http.server 8080
```

然后访问：`http://localhost:8080/queue-demo.html`

## 文件结构

```
VueCode/
├── queue-demo.html    # 主演示文件
├── .gitignore         # Git忽略配置
└── README.md          # 项目说明
```

## 技术实现

- HTML5 + CSS3 + JavaScript（轻量级实现）
- SVG绘制小球和动画
- 队列数据结构模拟（shift/push）
- async/await控制动画流程