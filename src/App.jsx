import Navbar from "./components/navbar"
import { useState } from "react"
import './assets/styles/style.css'
import Footer from "./components/footer"
import { Route, Routes } from "react-router-dom"
import Home from "./views/home"
import Courses from "./views/courses"
import Login from "./views/login"
import Blog from "./views/blog"
import AboutUs from "./views/aboutUs"
import Forum from "./views/forum"
import AdminDashboard from "./views/adminDashboard/adminDashboard"
import TeacherDashboard from "./views/teacherDashboard/teacherDashboard"
import StudentDashboard from "./views/studentDashboard/studentDashboard"

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='row m-0 p-0'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/forum' element={<Forum/>}/>
        <Route path='/admin/*' element={<AdminDashboard/>}/>
        <Route path='/teacher/*' element={<TeacherDashboard/>}/>
        <Route path='/student/*' element={<StudentDashboard/>}/>
        <Route path='/login' element={<Login  layout='login' />}/>
        <Route path='/register' element={<Login  layout='register' />}/>
      </Routes>
      <Footer/>
      <ToastContainer/>
    </div>
  )
}

export default App
