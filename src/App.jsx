import {Routes, Route} from "react-router-dom"
import './App.css'
import { Header } from "./components/Header"
import { Homepage } from './pages/homepage/Homepage'
import { About } from './pages/about/About'
import { PageNotFound } from "./pages/error/PageNotFound"
import { Details } from "./pages/details/Details"
import { Footer } from "./components/Footer"



function App() {

  return (

    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/home/:homeId" element={<Details />} />
      </Routes>
      <Footer/>
    </div>
    
  )
}

export default App
