import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dawn from './pages/Dawn'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dawn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App