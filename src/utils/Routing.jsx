import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Resume from '../pages/Resume'
import Intro from '../Component/Intro'
import Name from '../Component/Name'

const Routing = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";
  return (
    <div>
      <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={isHome ? <><Name /><Intro /></> : <Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
    </div>
  )
}

export default Routing
