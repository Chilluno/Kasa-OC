import {Routes, Route} from "react-router-dom"
import './App.css'
import { Header } from "./components/Header"
import { Homepage } from './pages/homepage/Homepage'
import { About } from './pages/about/About'
import { PageNotFound } from "./pages/error/PageNotFound"



function App() {

  return (

    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<PageNotFound />} />
      </Routes>
   
    </div>
    
  )
}

export default App
