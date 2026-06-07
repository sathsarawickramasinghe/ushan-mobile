import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Service1 from './pages/Service1/Service1'
import Service2 from './pages/Service1/Service2'
import Service3 from './pages/Service1/Service3'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/service1' element={<Service1/>} />
        <Route path='/service2' element={<Service2/>} />
        <Route path='/service3' element={<Service3/>} />
      </Routes>
    </BrowserRouter>
      

  )
}

export default App
