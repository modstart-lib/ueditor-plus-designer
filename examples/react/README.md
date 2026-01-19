# UEditor Plus Designer - React Example

这是一个演示如何在React应用中使用UEditor Plus Designer组件的示例项目。

## 技术栈

- **React 18** - 前端框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具
- **Veaury** - Vue与React组件互操作桥接库

## 工作原理

本示例使用[Veaury](https://github.com/gloriasoft/veaury)库将Vue 3编写的Designer组件桥接到React应用中。Veaury提供了无缝的Vue-React互操作能力，允许我们：

1. 在React项目中直接导入和使用Vue组件
2. 保持完整的类型安全支持
3. 正常传递props和处理事件
4. 访问组件的方法（通过ref）

## 目录结构

```
examples/react/
├── src/
│   ├── UEditorPlusDesigner.tsx  # Vue组件的React包装器
│   ├── App.tsx                  # 示例应用
│   ├── App.css                  # 应用样式
│   ├── main.tsx                 # 应用入口
│   └── index.css                # 全局样式
├── public/                      # 静态资源
├── index.html                   # HTML模板
├── vite.config.ts               # Vite配置
├── tsconfig.json                # TypeScript配置
└── package.json                 # 项目依赖
```

## 快速开始

### 1. 构建Vue组件库

在项目根目录运行：

```bash
npm run build:vue
```

这将在`dist/vue/`目录下生成Vue组件库的构建产物。

### 2. 安装依赖

进入React示例目录：

```bash
cd examples/react
npm install
```

### 3. 运行开发服务器

```bash
npm run dev
```

这将启动开发服务器，默认地址为 http://localhost:3001

### 4. 构建生产版本

```bash
npm run build
```

## 使用方法

### 基础用法

```tsx
import React, { useRef } from 'react'
import { UEditorPlusDesigner } from '../../../src/react/UEditorPlusDesigner'
import 'ueditor-plus-designer/style'

function App() {
  const designerRef = useRef(null)

  const config = {
    ueditorPath: '/ueditor-plus',
    ueditorConfig: {}
  }

  const handleReady = () => {
    console.log('Designer ready')
    // Now you can safely access component methods
    if (designerRef.current) {
      const content = designerRef.current.getContent()
      console.log('Initial content:', content)
    }
  }

  const handleChange = (content: string) => {
    console.log('Content changed:', content)
  }

  return (
    <UEditorPlusDesigner
      ref={designerRef}
      config={config}
      onReady={handleReady}
      onChange={handleChange}
    />
  )
}
```

### API

#### Props

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `config` | `DesignerConfig` | `{}` | 编辑器配置对象 |
| `isIframe` | `boolean` | `false` | 是否在iframe模式下运行 |
| `onReady` | `() => void` | - | 编辑器就绪时的回调 |
| `onChange` | `(content: string) => void` | - | 内容变化时的回调 |
| `onConfirm` | `(content: string) => void` | - | 确认时的回调（iframe模式） |

#### DesignerConfig

```typescript
interface DesignerConfig {
  /** UEditor路径 */
  ueditorPath?: string
  
  /** UEditor配置 */
  ueditorConfig?: Record<string, any>
  
  /** 分类加载器 */
  categoryLoader?: () => Promise<any[]>
  
  /** 素材加载器 */
  styleLoader?: (params?: any) => Promise<any>
}
```

#### Ref方法

通过ref可以访问以下方法：

```typescript
interface DesignerRef {
  /** 获取编辑器内容 */
  getContent: () => string
  
  /** 设置编辑器内容 */
  setContent: (content: string) => void
}
```

示例：

```tsx
const designerRef = useRef(null)

// 在组件ready后访问方法
const handleReady = () => {
  // Veaury包装后，ref直接指向Vue组件实例
  if (designerRef.current) {
    const content = designerRef.current.getContent()
    console.log('Content:', content)
    
    designerRef.current.setContent('<div>New content</div>')
  }
}

<UEditorPlusDesigner
  ref={designerRef}
  onReady={handleReady}
/>
```

**重要**: 
- **Ref访问**: 由于使用Veaury桥接，ref通过`__veauryVueRef__`属性访问Vue组件实例。包装器已处理此细节，你可以直接调用`designerRef.current.getContent()`等方法。
- **时机要求**: 确保在组件ready后（onReady回调触发后）再调用这些方法。
- **详细说明**: 参见[REF_ACCESS_FIX.md](./REF_ACCESS_FIX.md)了解ref访问的实现细节。

## 注意事项

### 1. UEditor资源

确保UEditor资源文件可访问。本示例通过Vite代理配置从unpkg CDN获取UEditor文件：

```typescript
// vite.config.ts
server: {
  proxy: {
    '/ueditor-plus': {
      target: 'https://unpkg.com/ueditor-plus-main@2.0.0/dist-min/',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/ueditor-plus/, ''),
    }
  }
}
```

生产环境中，你应该将UEditor文件放在`public/ueditor-plus/`目录中。

### 2. 样式导入

确保导入组件样式：

```tsx
import 'ueditor-plus-designer/style'
// 或本地开发时
import '../../../dist/vue/vue-style.css'
```

### 3. 依赖要求

本示例同时需要React和Vue依赖：

- `react` >= 18.0.0
- `react-dom` >= 18.0.0
- `vue` >= 3.4.0
- `veaury` >= 2.2.0

Veaury负责桥接两个框架，因此两者都是必需的。

### 4. 构建配置

使用Veaury时，Vite配置必须同时包含React和Vue插件：

```typescript
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [react(), vue()]
})
```

## 性能考虑

由于使用桥接方案，React应用会同时包含Vue和React运行时。这会增加大约100KB左右的bundle大小（gzip后约40KB）。如果对bundle大小有严格要求，可以考虑：

1. 使用代码分割，按需加载Designer组件
2. 完全用React重写Designer组件（需要更多开发时间）

## 自定义素材加载器

你可以通过`config`传递自定义的素材加载器：

```tsx
const config = {
  ueditorPath: '/ueditor-plus',
  categoryLoader: async () => {
    const response = await fetch('/api/categories')
    return response.json()
  },
  styleLoader: async (params) => {
    const response = await fetch('/api/materials', {
      method: 'POST',
      body: JSON.stringify(params)
    })
    return response.json()
  }
}

<UEditorPlusDesigner config={config} />
```

## 故障排除

### 问题1: 组件无法渲染

确保已经：
1. 构建了Vue组件库（`npm run build:vue`）
2. 安装了所有依赖（包括veaury）
3. 正确配置了Vite插件（react + vue）

### 问题2: UEditor无法加载

检查：
1. UEditor路径配置是否正确
2. 网络代理配置是否生效
3. 浏览器控制台是否有资源加载错误

### 问题3: 类型错误

确保TypeScript配置正确：
1. `tsconfig.json`中包含正确的`jsx`设置
2. 安装了`@types/react`和`@types/react-dom`

## 更多信息

- [UEditor Plus Designer主项目](../../README.md)
- [Vue示例](../vue/README.md)
- [Veaury文档](https://github.com/gloriasoft/veaury)

## License

Apache License 2.0 - 压缩版免费使用，商用或源码需授权。详见项目根目录 LICENSE 文件。
