import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Dawn from './pages/Dawn'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dawn" element={<Dawn />} />
        {/* <Route path="/noon" element={<Noon />} /> */}
        {/* <Route path="/husk" element={<Husk />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App