# UEditor Plus Designer - Standalone Version

这是 UEditor Plus Designer 的独立版本示例，可以在原生 HTML 中直接使用，无需依赖 Vue 框架。

## 快速开始

### 1. 构建独立版本

```bash
npm run build:standalone
```

这将在 `dist/standalone/` 目录下生成：
- `ueditor-plus-designer.standalone.js` - 包含 Vue 框架的独立 JS 文件
- `ueditor-plus-designer.standalone.css` - 样式文件

### 2. 准备 UEditor Plus

由于设计器依赖 UEditor Plus 编辑器，您需要：

1. 下载 [UEditor Plus](https://github.com/JDCloud-FE/UEditor-Plus)
2. 将 UEditor Plus 文件放置到 `/ueditor-plus` 目录下
3. 或者通过配置项指定其他路径

### 3. 使用示例

#### HTML 引用

```html
<!DOCTYPE html>
<html>
<head>
    <!-- 引入样式 -->
    <link rel="stylesheet" href="path/to/ueditor-plus-designer.standalone.css">
</head>
<body>
    <!-- 设计器容器 -->
    <div id="designer-container"></div>

    <!-- 引入 JS -->
    <script src="path/to/ueditor-plus-designer.standalone.js"></script>
    
    <script>
        // 创建设计器实例
        const designer = UEditorPlusDesigner.createDesigner({
            ueditorPath: '/ueditor-plus',
            width: '100%',
            height: '700px'
        });

        // 监听事件
        designer.on('ready', function() {
            console.log('设计器就绪！');
        });

        designer.on('change', function(content) {
            console.log('内容变化:', content);
        });

        // 挂载到容器
        designer.mount('#designer-container');
    </script>
</body>
</html>
```

## API 文档

### 创建设计器实例

```javascript
const designer = UEditorPlusDesigner.createDesigner(config);
```

#### 配置选项 (config)

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `ueditorPath` | `string` | `'/ueditor-plus'` | UEditor Plus 静态文件路径 |
| `width` | `string` | `'100%'` | 编辑器宽度 |
| `height` | `string\|number` | `600` | 编辑器高度 |
| `categoryLoader` | `function` | - | 自定义分类加载器 |
| `styleLoader` | `function` | - | 自定义素材加载器 |
| `ueditorConfig` | `object` | - | UEditor 配置选项 |

### 方法

#### mount(container)
挂载设计器到指定容器

```javascript
designer.mount('#designer-container');
// 或
designer.mount(document.getElementById('designer-container'));
```

#### unmount()
卸载设计器

```javascript
designer.unmount();
```

#### getContent()
获取编辑器内容

```javascript
const content = designer.getContent();
console.log(content);
```

#### setContent(content)
设置编辑器内容

```javascript
designer.setContent('<div class="pb-section">Hello World</div>');
```

#### on(event, callback)
监听事件

```javascript
designer.on('ready', function() {
    console.log('设计器就绪');
});

designer.on('change', function(content) {
    console.log('内容变化:', content);
});

designer.on('confirm', function(content) {
    console.log('确认内容:', content);
});
```

#### off(event, callback)
移除事件监听

```javascript
const handler = function(content) {
    console.log(content);
};

designer.on('change', handler);
// 稍后移除
designer.off('change', handler);
```

### 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `ready` | - | 设计器初始化完成 |
| `change` | `content: string` | 内容发生变化 |
| `confirm` | `content: string` | 确认操作（iframe 模式） |

## 运行示例

本示例位于 `examples/html/index.html`，您可以：

1. 启动一个本地服务器：
```bash
# 使用 Python
python -m http.server 8080

# 或使用 Node.js
npx serve .
```

2. 访问 `http://localhost:8080/examples/html/index.html`

## 注意事项

1. **UEditor Plus 依赖**：设计器需要 UEditor Plus 编辑器支持，请确保正确配置 `ueditorPath`
2. **跨域问题**：如果从本地文件系统打开 HTML，可能遇到跨域问题，建议使用本地服务器
3. **浏览器兼容性**：支持现代浏览器（Chrome, Firefox, Safari, Edge）

## 完整示例

查看 `examples/html/index.html` 获取完整的使用示例，包括：
- 设计器初始化
- 获取/设置内容
- 事件监听
- 销毁和重建

## License

Apache License 2.0 - 压缩版免费使用，商用或源码需授权。详见项目根目录 LICENSE 文件。
