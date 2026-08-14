import bg from './assets/MorningBg.png'

function App() {

  return (
    <>
      <div className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}>
          <div>
            <h1>Yes this works or no....</h1>
            <p>Lets see!</p>
          </div>
      </div>
    </>
  )
}

export default App
