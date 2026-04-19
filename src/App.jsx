import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
  

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/healthcheck" element={<h1 className='text-amber-700'>yo it is fine</h1>} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
