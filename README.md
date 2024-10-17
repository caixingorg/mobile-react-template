
```markdown
# Mobile React Template

这是一个功能丰富的移动端 React 模板，集成了现代前端开发中常用的工具和最佳实践。

## 特性

- 🚀 使用 Vite 构建，快速的开发体验
- ⚛️ 基于 React 18 和 TypeScript
- 📱 集成 Ant Design Mobile UI 组件库
- 🌐 React Router 用于路由管理
- 🗃️ Redux Toolkit 用于状态管理
- 🌍 i18next 实现国际化
- 🎨 Less 用于样式管理
- 🧪 Jest 和 React Testing Library 用于单元测试
- 📊 集成性能监控和分析工具
- 🔒 包含基本的安全实践
- 📦 支持 PWA
- 🎭 集成动画和过渡效果
- 📝 包含表单处理和验证
- 📤 文件上传功能
- 🧹 ESLint 和 Prettier 用于代码规范
- 📏 Husky 和 Commitlint 用于 Git 提交规范

## 快速开始

1. 克隆仓库：
   ```
   git clone https://github.com/your-username/mobile-react-template.git
   ```

2. 安装依赖：
   ```
   cd mobile-react-template
   npm install
   ```

3. 启动开发服务器：
   ```
   npm run dev
   ```

4. 打开浏览器访问 `http://localhost:3000`

## 可用脚本

- `npm run dev`: 启动开发服务器
- `npm run build`: 构建生产版本
- `npm run test`: 运行单元测试
- `npm run lint`: 运行 ESLint 检查
- `npm run lint:fix`: 运行 ESLint 检查并自动修复问题

## 项目结构

```
src/
├── components/     # 可复用的 React 组件
├── pages/          # 页面组件
├── store/          # Redux store 和 slices
├── styles/         # 全局样式和主题
├── utils/          # 工具函数和自定义 hooks
├── i18n/           # 国际化配置和翻译文件
├── services/       # API 服务
├── App.tsx         # 根组件
└── main.tsx        # 入口文件
```

## 国际化

本模板使用 i18next 进行国际化。翻译文件位于 `src/i18n` 目录。

## 测试

使用 Jest 和 React Testing Library 进行单元测试。测试文件位于与被测试组件相同的目录，以 `.test.tsx` 结尾。

## 性能监控

性能指标通过 `web-vitals` 库收集，并在 PerformancePanel 组件中显示。

## 安全性

包含了基本的安全实践，如 XSS 防护和 CSRF 保护。请根据你的具体需求进一步加强安全措施。

## PWA 支持

本模板支持 PWA，可以离线使用和添加到主屏幕。

## 贡献

欢迎贡献！请阅读 [CONTRIBUTING.md](CONTRIBUTING.md) 了解如何参与项目。

## 许可

本项目采用 MIT 许可证。详情请见 [LICENSE](LICENSE) 文件。
```
