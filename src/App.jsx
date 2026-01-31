import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router ,Routes , Route } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'


function App() {

  return (
    <>
    <Router>
    <Home/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
    </Routes>
    </Router>
   
    </>
  )
}

export default App
