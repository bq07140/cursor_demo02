# 项目任务管理系统

一个基于React的现代化项目任务管理系统前端原型，采用科技风格设计，支持PC和移动端自适应。

## 🚀 功能特性

### 核心功能
- **项目管理** - 创建、编辑、跟踪项目进度
- **任务看板** - 可视化任务管理，支持拖拽操作
- **数据分析** - 项目进度分析和团队绩效统计
- **团队协作** - 成员管理和实时活动跟踪

### 技术特性
- **响应式设计** - 完美适配PC、平板、手机
- **科技风格UI** - 深色主题，霓虹色彩，动画效果
- **现代化架构** - React 18 + React Router + 函数式组件
- **数据可视化** - 使用Recharts实现图表展示
- **组件化开发** - 高度模块化，易于维护扩展

## 📱 界面预览

### 主要页面
- **仪表板** - 项目概览和关键指标
- **项目列表** - 支持网格/列表视图切换
- **项目详情** - 详细的项目信息和进度跟踪
- **任务看板** - 看板式任务管理界面
- **数据分析** - 丰富的图表和数据洞察

### 设计特色
- 深色科技主题
- 霓虹蓝色彩搭配
- 流畅的动画效果
- 现代化的卡片设计
- 直观的数据可视化

## 🛠️ 技术栈

- **前端框架**: React 18.2.0
- **路由管理**: React Router DOM 6.3.0
- **图表库**: Recharts 2.8.0
- **图标库**: Lucide React 0.263.1
- **动画库**: Framer Motion 10.16.4
- **构建工具**: Create React App
- **样式方案**: CSS3 + CSS Variables

## 📦 安装和运行

### 环境要求
- Node.js >= 14.0.0
- npm >= 6.0.0

### 安装步骤

1. **克隆项目**
```bash
git clone <repository-url>
cd project-management-system
```

2. **安装依赖**
```bash
npm install
```

3. **启动开发服务器**
```bash
npm start
```

4. **构建生产版本**
```bash
npm run build
```

### 可用脚本

- `npm start` - 启动开发服务器 (http://localhost:3000)
- `npm run build` - 构建生产版本
- `npm test` - 运行测试
- `npm run eject` - 弹出配置文件 (不可逆操作)

## 🎨 设计系统

### 颜色主题
```css
--primary-color: #00d4ff      /* 主要蓝色 */
--secondary-color: #0099cc    /* 次要蓝色 */
--accent-color: #ff6b35       /* 强调橙色 */
--success-color: #00ff88      /* 成功绿色 */
--warning-color: #ffb700      /* 警告黄色 */
--error-color: #ff4757        /* 错误红色 */
```

### 响应式断点
- **Desktop**: >= 1024px
- **Tablet**: 768px - 1023px
- **Mobile**: < 768px

## 📁 项目结构

```
src/
├── components/           # React组件
│   ├── Layout/          # 布局组件
│   │   ├── Header.js    # 顶部导航
│   │   └── Sidebar.js   # 侧边栏
│   ├── Dashboard/       # 仪表板
│   ├── Projects/        # 项目管理
│   ├── Tasks/          # 任务管理
│   └── Analytics/      # 数据分析
├── App.js              # 主应用组件
├── App.css             # 全局样式
├── index.js            # 应用入口
└── index.css           # 基础样式
```

## 🔧 自定义配置

### 主题定制
在 `src/index.css` 中修改 CSS 变量来自定义主题色彩：

```css
:root {
  --primary-color: #your-color;
  --background-dark: #your-bg-color;
  /* 其他变量... */
}
```

### 添加新页面
1. 在 `src/components/` 下创建新组件
2. 在 `src/App.js` 中添加路由配置
3. 在 `src/components/Layout/Sidebar.js` 中添加菜单项

## 🚀 部署说明

### 静态部署
```bash
npm run build
# 将 build/ 目录部署到静态服务器
```

### Docker部署
```dockerfile
FROM nginx:alpine
COPY build/ /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 🤝 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 📞 联系方式

- 项目作者: [Your Name]
- 邮箱: [your.email@example.com]
- 项目链接: [https://github.com/yourusername/project-management-system]

## 🔮 未来规划

- [ ] 实现拖拽功能
- [ ] 添加实时通知
- [ ] 集成文件上传
- [ ] 支持多语言
- [ ] 添加离线模式
- [ ] 集成第三方API
- [ ] 移动端应用

---

**注意**: 这是一个前端原型项目，主要用于展示UI设计和交互效果。实际使用需要配合后端API服务。
# cursor_demo02
