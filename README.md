# UEditor Plus Designer

<div align="center">

🎨 **可视化排版编辑器** - 基于 UEditor Plus 的可视化内容设计工具

![](https://ms-assets.modstart.com/data/image/2026/01/19/31777_1ajn_3371.png)

[![npm version](https://badge.fury.io/js/ueditor-plus-designer.svg)](https://www.npmjs.com/package/ueditor-plus-designer)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-blue.svg)](https://www.typescriptlang.org/)
[![Vue](https://img.shields.io/badge/Vue-3.4+-42b883.svg)](https://vuejs.org/)
[![React](https://img.shields.io/badge/React-16.8+-61dafb.svg)](https://reactjs.org/)

</div>

## ✨ 特性

- 🎨 **可视化设计** - 所见即所得的拖拽式编辑体验，轻松创建精美内容布局
- 🧩 **模块化设计** - 基于 Section（区块）的内容组织方式，支持自由插入和编辑
- 🔧 **高度可定制** - 支持自定义样式加载器和分类加载器，适配各种业务场景
- 📱 **响应式布局** - 自动适配不同屏幕尺寸，完美支持移动端和桌面端
- ⚡ **高性能** - 基于 Vue 3 和 TypeScript 构建，提供出色的开发体验和运行性能
- 🔌 **多框架支持** - 原生支持 Vue 3，同时提供 React 版本和纯 HTML/JS 使用方式
- 🎯 **TypeScript** - 完整的类型定义支持，提升开发效率和代码质量
- 📦 **灵活集成** - 支持 ES Module、UMD、Standalone 等多种构建方式

## 📦 安装

### NPM / Yarn

```bash
# 使用 npm
npm install ueditor-plus-designer

# 使用 yarn
yarn add ueditor-plus-designer

# 使用 pnpm
pnpm add ueditor-plus-designer
```

### CDN

```html
<!-- 引入 Vue 3 -->
<script src="https://unpkg.com/vue@3"></script>

<!-- 引入 UEditor Plus Designer -->
<link rel="stylesheet" href="https://unpkg.com/ueditor-plus-designer/dist/vue/vue-style.css">
<script src="https://unpkg.com/ueditor-plus-designer/dist/vue/vue.umd.js"></script>
```

## 🚀 快速开始

### Vue 3 使用

```vue
<template>
  <div class="designer-container">
    <UEditor PlusPlusDesigner
      ref="designerRef"
      :config="config"
      @ready="onReady"
      @change="onChange"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UEditor PlusPlusDesigner } from 'ueditor-plus-designer'
import type { DesignerConfig } from 'ueditor-plus-designer'
import 'ueditor-plus-designer/style'

const designerRef = ref()

const config: DesignerConfig = {
  ueditorPath: '/ueditor-plus', // UEditor Plus 资源路径
  ueditorConfig: {
    // UEditor Plus 配置项
    autoHeightEnabled: false,
    initialFrameHeight: 600
  }
}

const onReady = () => {
  console.log('Designer is ready!')
}

const onChange = (content: string) => {
  console.log('Content changed:', content)
}

// 获取内容
const getContent = () => {
  return designerRef.value?.getContent()
}

// 设置内容
const setContent = (html: string) => {
  designerRef.value?.setContent(html)
}
</script>

<style scoped>
.designer-container {
  width: 100%;
  height: 100vh;
}
</style>
```

### React 使用

```tsx
import React, { useRef } from 'react'
import { UEditor PlusPlusDesigner } from 'ueditor-plus-designer/react'
import type { DesignerConfig, DesignerInstance } from 'ueditor-plus-designer'
import 'ueditor-plus-designer/style'

function App() {
  const designerRef = useRef<DesignerInstance>(null)

  const config: DesignerConfig = {
    ueditorPath: '/ueditor-plus',
    ueditorConfig: {
      autoHeightEnabled: false,
      initialFrameHeight: 600
    }
  }

  const handleReady = () => {
    console.log('Designer is ready!')
  }

  const handleChange = (content: string) => {
    console.log('Content changed:', content)
  }

  const getContent = () => {
    return designerRef.current?.getContent()
  }

  const setContent = (html: string) => {
    designerRef.current?.setContent(html)
  }

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <UEditor PlusPlusDesigner
        ref={designerRef}
        config={config}
        onReady={handleReady}
        onChange={handleChange}
      />
    </div>
  )
}

export default App
```

### 纯 HTML/JavaScript 使用

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>UEditor Plus Designer</title>
  <link rel="stylesheet" href="dist/standalone/standalone.css">
</head>
<body>
  <div id="designer-container"></div>

  <script src="dist/standalone/standalone.umd.js"></script>
  <script>
    const designer = new UEditor PlusPlusDesigner({
      container: '#designer-container',
      ueditorPath: '/ueditor-plus',
      onReady: () => {
        console.log('Designer is ready!')
      },
      onChange: (content) => {
        console.log('Content changed:', content)
      }
    })

    // 获取内容
    const content = designer.getContent()

    // 设置内容
    designer.setContent('<p>Hello World!</p>')
  </script>
</body>
</html>
```

## 📚 核心概念

### Section（区块）

UEditor Plus Designer 的核心是基于 **Section** 的内容组织方式。每个 Section 是一个独立的内容区块，可以包含文本、图片、视频等各种元素。

- **独立编辑**: 每个 Section 可以单独编辑、移动和删除
- **样式控制**: 支持对 Section 进行宽度、透明度、旋转等样式调整
- **灵活布局**: 支持从素材面板拖拽插入新的 Section

### 素材面板

素材面板提供了预设的内容模板，用户可以：

- 浏览分类的素材模板
- 搜索所需的素材
- 一键插入素材到编辑器
- 自定义素材加载逻辑

## 🔧 配置选项

### DesignerConfig

```typescript
interface DesignerConfig {
  /** 容器元素或选择器 */
  container?: HTMLElement | string

  /** UEditor Plus 资源路径 */
  ueditorPath?: string

  /** UEditor Plus 配置（透传给 UEditor Plus 实例） */
  ueditorConfig?: UEditor PlusConfig

  /** 分类加载器 - 自定义素材分类数据源 */
  categoryLoader?: () => Promise<MaterialCategory[]>

  /** 样式加载器 - 自定义素材列表数据源 */
  styleLoader?: (params?: MaterialQueryParams) => Promise<StyleListData>

  /** 就绪回调 */
  onReady?: () => void

  /** 内容变化回调 */
  onChange?: (content: string) => void
}
```

### UEditor PlusConfig

```typescript
interface UEditor PlusConfig {
  /** 服务器 URL */
  serverUrl?: string
  
  /** 工具栏配置 */
  toolbars?: string[][]
  
  /** 自动高度 */
  autoHeightEnabled?: boolean
  
  /** 初始高度 */
  initialFrameHeight?: number
  
  /** 图片弹窗 */
  imagePopup?: boolean
  
  /** 自定义 iframe 样式 */
  iframeCssStylesAddition?: string[]
  
  [key: string]: any
}
```

## 🎯 API 参考

### Props

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `config` | `DesignerConfig` | `{}` | 设计器配置对象 |

### Events

| 事件名 | 参数 | 描述 |
|--------|------|------|
| `ready` | - | 设计器初始化完成时触发 |
| `change` | `content: string` | 编辑器内容发生变化时触发 |
| `section-active` | `sectionData: SectionData` | 选中某个 Section 时触发 |

### 实例方法

```typescript
interface DesignerInstance {
  /** 获取编辑器内容 HTML */
  getContent(): string

  /** 设置编辑器内容 */
  setContent(content: string): void

  /** 插入一个新的 Section */
  insertSection(html: string, options?: any): void

  /** 销毁编辑器实例 */
  destroy(): void

  /** 监听事件 */
  on(event: string, callback: Function): void

  /** 移除事件监听 */
  off(event: string, callback?: Function): void

  /** 重新布局（在容器尺寸变化时调用） */
  doLayout(): void

  /** 获取原始 UEditor Plus 实例 */
  getEditor(): any
}
```

### 使用示例

```typescript
// Vue 3
const content = designerRef.value.getContent()
designerRef.value.setContent('<div class="pb-section">新内容</div>')
designerRef.value.insertSection('<p>新段落</p>')

// React
const content = designerRef.current?.getContent()
designerRef.current?.setContent('<div class="pb-section">新内容</div>')
designerRef.current?.insertSection('<p>新段落</p>')
```

## 🎨 自定义加载器

### 自定义样式加载器

```typescript
const config: DesignerConfig = {
  styleLoader: async (params) => {
    const { categoryId, keywords, page = 1, pageSize = 20 } = params || {}
    
    // 从你的 API 获取素材数据
    const response = await fetch(`/api/materials?categoryId=${categoryId}&page=${page}`)
    const data = await response.json()
    
    return {
      records: data.items,     // 素材列表
      total: data.total,       // 总数
      page: data.page,         // 当前页
      pageSize: data.pageSize  // 每页数量
    }
  }
}
```

### 自定义分类加载器

```typescript
const config: DesignerConfig = {
  categoryLoader: async () => {
    // 从你的 API 获取分类数据
    const response = await fetch('/api/categories')
    const categories = await response.json()
    
    return categories.map(cat => ({
      id: cat.id,
      title: cat.name,
      pid: cat.parentId,
      sort: cat.order,
      _child: cat.children || []
    }))
  }
}
```

### 数据类型定义

```typescript
// 素材分类
interface MaterialCategory {
  id: number | string
  title: string
  pid?: number | string      // 父分类 ID
  sort?: number             // 排序
  _child?: MaterialCategory[] // 子分类
}

// 素材项
interface MaterialItem {
  id: number | string
  title: string
  html: string              // 素材 HTML 内容
  categoryId?: number | string
  cover?: string            // 封面图
  [key: string]: any
}

// 分页数据
interface StyleListData {
  records: MaterialItem[]   // 素材列表
  total: number            // 总数
  page: number             // 当前页
  pageSize: number         // 每页数量
}

// 查询参数
interface MaterialQueryParams {
  categoryId?: number | string
  keywords?: string
  page?: number
  pageSize?: number
}
```

## 📖 进阶用法

### 监听 Section 选中事件

```typescript
// Vue 3
import { onMounted, onUnmounted } from 'vue'

const handleSectionActive = (sectionData: SectionData) => {
  console.log('Selected section:', sectionData)
}

onMounted(() => {
  designerRef.value?.on('section-active', handleSectionActive)
})

onUnmounted(() => {
  designerRef.value?.off('section-active', handleSectionActive)
})
```

### 自定义工具栏

```typescript
const config: DesignerConfig = {
  ueditorConfig: {
    toolbars: [[
      'source', 'undo', 'redo', '|',
      'bold', 'italic', 'underline', 'fontborder', 'strikethrough', '|',
      'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', '|',
      'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|',
      'link', 'unlink', 'inserttable', 'insertcode', 'horizontal'
    ]]
  }
}
```

### 自定义 iframe 样式

```typescript
const config: DesignerConfig = {
  ueditorConfig: {
    iframeCssStylesAddition: [
      'body { background-color: #f5f5f5; }',
      '.pb-section { margin-bottom: 20px; }'
    ]
  }
}
```

## 🛠️ 开发

### 环境要求

- **Node.js**: >= 20.x（参见 `.nvmrc`）
- **npm**: >= 9.x

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
# 启动开发服务器（默认端口 5173）
npm run dev

# 预览生产构建
npm run preview

# 预览 demo 应用
npm run preview:demo
```

### 构建

```bash
# 完整构建（包含所有版本）
npm run build

# 仅构建 Vue 版本
npm run build:vue

# 仅构建 React 版本
npm run build:react

# 仅构建 Demo 应用
npm run build:demo

# 仅构建 Standalone 版本
npm run build:standalone
```

### 类型检查

```bash
npm run type-check
```

### 文档

```bash
# 启动文档开发服务器
npm run docs:dev

# 构建文档
npm run docs:build

# 预览文档
npm run docs:preview
```

### 项目结构

```
ueditor-plus-designer/
├── src/
│   ├── components/        # Vue 组件
│   │   ├── Designer.vue   # 主设计器组件
│   │   ├── MaterialPanel.vue  # 素材面板
│   │   ├── SectionTools.vue   # Section 工具栏
│   │   └── icons/         # 图标组件
│   ├── composables/       # Vue 组合式函数
│   │   ├── useMaterial.ts # 素材管理
│   │   └── useSection.ts  # Section 管理
│   ├── core/              # 核心逻辑（框架无关）
│   │   └── DesignerCore.ts
│   ├── utils/             # 工具函数
│   │   ├── config.ts      # 配置常量
│   │   ├── api-loader.ts  # API 加载器
│   │   └── style-processor.ts  # 样式处理
│   ├── types/             # TypeScript 类型定义
│   │   └── index.ts
│   ├── styles/            # 样式文件
│   │   └── index.scss
│   └── index.ts           # 入口文件
├── examples/              # 示例项目
│   ├── vue/               # Vue 3 示例
│   ├── react/             # React 示例
│   └── html/              # 纯 HTML 示例
├── doc/                   # 文档
│   ├── guide/             # 使用指南
│   ├── api/               # API 文档
│   └── dev/               # 开发文档
├── dist/                  # 构建输出
│   ├── vue/               # Vue 构建产物
│   ├── react/             # React 构建产物
│   ├── standalone/        # Standalone 构建产物
│   ├── demo/              # Demo 构建产物
│   └── types/             # 类型声明文件
├── vite.config.ts         # Vite 开发配置
├── vite.config.vue.ts     # Vue 构建配置
├── vite.config.react.ts   # React 构建配置
├── vite.config.demo.ts    # Demo 构建配置
├── vite.config.standalone.ts  # Standalone 构建配置
├── tsconfig.json          # TypeScript 配置
├── package.json
└── README.md
```

## 📝 示例项目

查看完整的使用示例：

- **[Vue 3 示例](./examples/vue/)** - 展示如何在 Vue 3 项目中集成
- **[React 示例](./examples/react/)** - 展示如何在 React 项目中集成
- **[纯 HTML 示例](./examples/html/)** - 展示如何在纯 HTML 中使用

## 🤝 贡献

欢迎贡献代码、报告问题或提出建议！

### 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交你的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启一个 Pull Request

### 开发规范

- 遵循 TypeScript 严格模式
- 使用 Vue 3 Composition API
- 遵循项目现有的代码风格
- 添加必要的 JSDoc 注释
- 确保 `npm run type-check` 通过

详细的开发指南请参考 [AGENTS.md](./AGENTS.md)

## 📄 许可证

本项目基于 [Apache License 2.0](LICENSE) 开源。

## 🔗 相关链接

- **[完整文档](./doc/)** - 查看详细的使用文档
- **[API 文档](./doc/api/)** - API 接口参考
- **[使用指南](./doc/guide/)** - 快速上手指南
- **[开发文档](./doc/dev/)** - 参与开发的文档
- **[UEditor Plus](http://ueditor.baidu.com/)** - 底层富文本编辑器

## ❓ 常见问题

### 如何部署 UEditor Plus 资源？

UEditor Plus 资源需要单独部署到静态服务器，然后通过 `ueditorPath` 配置项指定路径。

```typescript
const config = {
  ueditorPath: '/static/ueditor-plus'  // 指向 UEditor Plus 资源的 URL 路径
}
```

### 如何自定义编辑器样式？

可以通过 `iframeCssStylesAddition` 配置项注入自定义样式：

```typescript
const config = {
  ueditorConfig: {
    iframeCssStylesAddition: [
      'body { font-family: Arial, sans-serif; }',
      '.pb-section { padding: 20px; }'
    ]
  }
}
```

### React 版本的实现原理？

React 版本基于 [veaury](https://github.com/gloriasoft/veaury) 实现 Vue-React 互操作，将 Vue 3 组件包装为 React 组件。

### 支持哪些浏览器？

- Chrome >= 90
- Firefox >= 88
- Safari >= 14
- Edge >= 90

不支持 IE 浏览器。

## 💬 支持

如果遇到问题或有任何疑问，欢迎：

- 提交 [Issue](https://github.com/modstart-lib/ueditor-plus-designer/issues)
- 查看 [文档](./doc/)
- 参考 [示例项目](./examples/)

---

<div align="center">

Made with ❤️ by UEditor Plus Designer Team

</div>
