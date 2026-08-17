import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Landing() {
  const navigate = useNavigate()
  const [isExiting, setIsExiting] = useState(false)
  const [selectedPath, setSelectedPath] = useState<string | null>(null)

  const options = [
    { label: 'Just woke up', path: '/dawn' },
    { label: 'Wide awake, full energy', path: '/noon' },
    { label: 'Winding down', path: '/husk' },
  ]

  const handleSelect = (path: string) => {
    setSelectedPath(path)
    setIsExiting(true)

    //wait for the fade-out animation to finish before actually navigating
    setTimeout(() => {
      navigate(path)
    }, 500) //matches the duration-500 below
  }

return (
  <div className="min-h-screen bg-black">
    <div
      className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-700 text-white px-4 transition-opacity duration-500 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
        How does your day feel right now?
      </h1>
      <div className="flex flex-col sm:flex-row gap-4">
        {options.map((option) => (
          <button
            key={option.path}
            onClick={() => handleSelect(option.path)}
            disabled={isExiting}
            className={`px-6 py-3 rounded-lg border border-white/30 transition ${
              selectedPath === option.path
                ? 'bg-white/30 scale-95'
                : 'bg-white/10 hover:bg-white/20'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  </div>
)
}

export default Landing