
import reactLogo from './assets/react.svg'
import Photo from "./components/Photo"
import Name from "./components/Name"
import Buttons from "./components/Buttons"
import About from "./components/About"
import Footer from "./components/Footer"
import './App.css'

function App() {
  

  return (
    <div className="container">
      <Photo />
      <Name />
      <Buttons />
      <About />
      <Footer />
    </div>
  )
}

export default App
