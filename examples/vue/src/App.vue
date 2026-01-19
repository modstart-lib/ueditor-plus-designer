<template>
  <div class="app">
    <header class="app-header">
      <h1>UEditor Plus Designer - Vue Example</h1>
      <div class="app-actions">
        <button @click="handleGetContent" :disabled="!isReady" class="btn">
          Get Content
        </button>
        <button @click="handleSetContent" :disabled="!isReady" class="btn btn-secondary">
          Set Sample Content
        </button>
      </div>
    </header>

    <main class="app-main">
      <UEditorPlusDesigner
          ref="designerRef"
          :config="editorConfig"
          @ready="handleReady"
          @change="handleChange"
      />
    </main>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {UEditorPlusDesigner} from 'ueditor-plus-designer'
// Import styles - adjust path based on your setup
// import 'ueditor-plus-designer/style'  // Use this when installed from npm
import '../../../dist/vue/vue-style.css'  // Use this for local development

// Designer instance ref
const designerRef = ref(null)
// Track if designer is ready
const isReady = ref(false)

// Editor configuration
const editorConfig = {
  // UEditor path - you need to have UEditor files in public/ueditor-plus/
  ueditorPath: 'https://open-cdn.modstart.com/ueditor-plus/dist-min/',
  // UEditor config
  ueditorConfig: {
    serverUrl: 'https://open.modstart.com/ueditor-plus/_demo_server/handle.php',
    UEDITOR_CORS_URL: window.location.host==='open.modstart.com'?'https://open.modstart.com/ueditor-plus/dist-min/':'',
  }
}

// Event handlers
const handleReady = () => {
  console.log('Editor is ready')
  isReady.value = true
}

const handleChange = (content) => {
  console.log('Content changed:', content.length, 'characters')
}

const handleGetContent = () => {
  if (!isReady.value) {
    alert('Editor not ready yet! Please wait for the "Editor is ready" message.')
    return
  }

  if (designerRef.value) {
    const content = designerRef.value.getContent()
    console.log('Current content:', content)
    alert(`Content length: ${content.length} characters. Check console for full content.`)
  }
}

const handleSetContent = () => {
  if (!isReady.value) {
    alert('Editor not ready yet! Please wait for the "Editor is ready" message.')
    return
  }

  if (designerRef.value) {
    const sampleContent = '<div class="pb-section" style="padding: 20px; text-align: center;"><h2>Sample Content from Vue</h2><p>This content was set programmatically!</p></div>'
    designerRef.value.setContent(sampleContent)
  }
}
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.app-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.app-header h1 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
}

.app-actions {
  display: flex;
  gap: 0.5rem;
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background: white;
  color: #667eea;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid white;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.3);
}

.app-main {
  flex: 1;
  overflow: hidden;
}
</style>
