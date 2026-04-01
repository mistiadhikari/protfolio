import React from 'react'
import  { Route, Routes } from 'react-router-dom'
import Mainlayout from './Layout/Mainlayout'
import Home from './Pages/Home'
import Skill from './Pages/Skill'
import Contact from './Pages/Contact'
import Project from './Pages/Project'
import About from './Pages/About'






const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element= {<Mainlayout/>}>
        <Route index element ={<Home/>}/>
        <Route path="Contact" element ={<Contact/>}/>
        <Route path="Home" element ={<Home/>}/>
        <Route path="Skill" element ={<Skill/>}/>
        <Route path="Project" element ={<Project/>}/>
        <Route path="About" element ={<About/>}/>
        

      </Route>
    </Routes>
    </>
  )
}

export default App