# UEditor Plus Designer - Vue Example

这是一个使用 `ueditor-plus-designer` 组件的**最简示例**项目。

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 构建主项目

在运行示例之前，需要先构建主项目：

```bash
# 回到项目根目录
cd ../..

# 构建主项目
npm run build

# 回到示例目录
cd examples/vue
```

### 3. 准备 UEditor 文件

将 UEditor Plus 文件放置到 `public/ueditor-plus/` 目录：

```bash
# 在 examples/vue 目录下
mkdir -p public/ueditor-plus

# 将 UEditor Plus 文件复制到 public/ueditor-plus/ 目录
# 确保包含: ueditor.config.js, ueditor.all.js, themes/, lang/ 等
```

### 4. 运行开发服务器

```bash
npm run dev
```

浏览器会自动打开 `http://localhost:3000`

## 示例代码

本示例展示了最基本的组件用法：

```vue
<template>
  <div class="app">
    <UEditorPlusDesigner
      ref="designerRef"
      :config="editorConfig"
      @ready="handleReady"
      @change="handleChange"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { UEditorPlusDesigner } from 'ueditor-plus-designer'
import 'ueditor-plus-designer/style'

const designerRef = ref(null)

const editorConfig = {
  ueditorPath: '/ueditor-plus',
  ueditorConfig: {
    autoHeightEnabled: false
  }
}

const handleReady = () => {
  console.log('Editor is ready')
}

const handleChange = (content) => {
  console.log('Content changed:', content.length, 'characters')
}
</script>

<style scoped>
.app {
  width: 100vw;
  height: 100vh;
}
</style>
```

## 组件 API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `config` | `DesignerConfig` | `{}` | 编辑器配置 |
| `isIframe` | `boolean` | `false` | 是否在 iframe 中显示 |

### Events

| 事件 | 参数 | 说明 |
|------|------|------|
| `ready` | - | 编辑器初始化完成 |
| `change` | `(content: string)` | 内容变化 |
| `confirm` | `(content: string)` | 确认按钮点击 (仅 iframe 模式) |

### Methods

通过 ref 访问组件方法：

```javascript
// 获取内容
const content = designerRef.value.getContent()

// 设置内容
designerRef.value.setContent('<p>Hello World</p>')
```

## 配置选项

### DesignerConfig

```typescript
interface DesignerConfig {
  // UEditor 文件路径
  ueditorPath?: string
  
  // UEditor 配置对象
  ueditorConfig?: object
  
  // 分类加载函数
  categoryLoader?: (params) => Promise<CategoryData>
  
  // 样式加载函数
  styleLoader?: (categoryId, params) => Promise<MaterialData>
}
```

## 常见问题

### UEditor 加载失败

**解决方案**: 
- 确保 `public/ueditor-plus/` 目录存在且包含所有必要文件
- 检查 `ueditorPath` 配置是否正确

### 样式显示异常

**解决方案**:
- 确保导入了样式: `import 'ueditor-plus-designer/style'`
- 确保父容器有明确的高度 (`height: 100vh`)

## 相关链接

- [UEditor Plus 官方文档](https://github.com/JakHuang/ueditor-plus)
- [Vue 3 文档](https://vuejs.org/)

## License

Apache License 2.0 - 压缩版免费使用，商用或源码需授权。详见项目根目录 LICENSE 文件。
