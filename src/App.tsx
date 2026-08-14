import { useState } from 'react'
import bg from './assets/dawn2.png'
import Header from './components/Header'
import SunSlider from './components/SunSlider'
import InfoSidebar from './components/SideBar'

function App() {
  const [brightness, setBrightness] = useState(1)

  //this is for the brightness, changes the min/max output based on the equation below
  const handleSunMove = (percent: number) => {
    const newBrightness = 0.7 + (percent / 100) * 0.5
    setBrightness(newBrightness)
  }

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat transition-[filter] duration-150"
      style={{
        backgroundImage: `url(${bg})`,
        filter: `brightness(${brightness})`,
      }}
    >
      <Header/>
      <SunSlider onPositionChange={handleSunMove} />
      <InfoSidebar/>
    </div>
  )
}

export default App