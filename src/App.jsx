import Navbar from "./components/navbar"

import './assets/styles/style.css'
import Footer from "./components/footer"
import { Route, Routes } from "react-router-dom"
import Home from "./views/home"
import Courses from "./views/courses"

function App() {

  return (
    <div className='row m-0 p-0'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courses' element={<Courses/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
