import { useState, useEffect } from 'react'

function App() {
  const [activeTab, setActiveTab] = useState('enhance')
  const [health, setHealth] = useState(null)

  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(data => setHealth(data))
      .catch(err => console.error(err))
  }, [])

  const tabs = [
    { id: 'enhance', name: '图像增强', icon: '🖼️' },
    { id: 'face', name: '人像处理', icon: '👤' },
    { id: 'detect', name: '目标检测', icon: '🎯' }
  ]

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            🖼️ VisionForge
          </h1>
          <p className="text-white/70 text-sm">轻量级图像处理工具箱</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Status */}
        <div className="mb-6 bg-white/10 rounded-lg p-4 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className={`w-3 h-3 rounded-full ${health ? 'bg-green-400' : 'bg-yellow-400'}`}></span>
            <span className="text-white">
              {health ? `API Running - v${health.version}` : 'Connecting...'}
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-white text-purple-600 shadow-lg'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">
            {tabs.find(t => t.id === activeTab)?.name}
          </h2>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
            <div className="text-6xl mb-4">
              {activeTab === 'enhance' && '🖼️'}
              {activeTab === 'face' && '👤'}
              {activeTab === 'detect' && '🎯'}
            </div>
            <p className="text-gray-500 mb-4">
              点击或拖拽上传图片开始处理
            </p>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="px-6 py-2 bg-purple-600 text-white rounded-lg cursor-pointer hover:bg-purple-700 transition-colors"
            >
              选择图片
            </label>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-white/50">
        <p>Powered by FastAPI + React + ONNX</p>
      </footer>
    </div>
  )
}

export default App
