import { useRef, useState } from 'react'
// @ts-ignore - veaury type compatibility
import { UEditorPlusDesigner, type DesignerRef } from 'ueditor-plus-designer'
import './App.css'
// Import styles - adjust path based on your setup
// import 'ueditor-plus-designer/style'  // Use this when installed from npm
// import { UEditorPlusDesigner } from 'ueditor-plus-designer/react'  // Use this for React
import '../../../dist/vue/vue-style.css'  // Use this for local development

function App() {
  // Designer instance ref
  const designerRef = useRef(null)
  // Track if designer is ready
  const [isReady, setIsReady] = useState(false)

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
    setIsReady(true)
  }

  const handleChange = (content: string) => {
    console.log('Content changed:', content.length, 'characters')
  }

  const handleGetContent = () => {
    if (!isReady) {
      alert('Editor not ready yet! Please wait for the "Editor is ready" message.')
      return
    }

    if (designerRef.current) {
      try {
        // @ts-ignore
        const content = designerRef.current.getContent()
        console.log('Current content:', content)
        alert(`Content length: ${content.length} characters. Check console for full content.`)
      } catch (error) {
        console.error('Error getting content:', error)
        alert('Failed to get content. Check console for details.')
      }
    }
  }

  const handleSetContent = () => {
    if (!isReady) {
      alert('Editor not ready yet! Please wait for the "Editor is ready" message.')
      return
    }

    if (designerRef.current) {
      try {
        const sampleContent = '<div class="pb-section" style="padding: 20px; text-align: center;"><h2>Sample Content from React</h2><p>This content was set programmatically!</p></div>'
        // @ts-ignore
        designerRef.current.setContent(sampleContent)
        console.log('Content set successfully')
        alert('Content set successfully!')
      } catch (error) {
        console.error('Error setting content:', error)
        alert('Failed to set content. Check console for details.')
      }
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>UEditor Plus Designer - React Example</h1>
        <div className="app-actions">
          <button onClick={handleGetContent} disabled={!isReady} className="btn">
            Get Content
          </button>
          <button onClick={handleSetContent} disabled={!isReady} className="btn btn-secondary">
            Set Sample Content
          </button>
        </div>
      </header>

      <main className="app-main">
        {/* @ts-ignore - veaury wrapped component */}
        <UEditorPlusDesigner
          ref={designerRef}
          config={editorConfig}
          onReady={handleReady}
          onChange={handleChange}
        />
      </main>
    </div>
  )
}

export default App
