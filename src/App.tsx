import bg from './assets/dawn2.png'
import Header from './components/header'

function App() {

  return (
    <>
      <div className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}>
        <Header/>
          
      </div>
    </>
  )
}

export default App
