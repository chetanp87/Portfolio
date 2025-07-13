// import './App.css'
// import NavBar from './Component/NavBar'
// import Name from './Component/Name'
// import Intro from './Component/Intro'
// import { Route, Routes, useLocation } from 'react-router-dom'
// import Projects from './pages/Projects'
// import Resume from './pages/Resume'
// import About from './pages/About'
// import Home from './pages/Home'

// function App() {

//     const location = useLocation();
//     const isHome = location.pathname === "/";

//   return (
//     <>
//       <div className="bg-gradient-to-br from-gray-900 to-purple-900 min-h-screen">
//         <NavBar />
//         {/* <Name />
//         <Intro /> */}
//         <Routes>
//           {/* <Route path="/" element={<Home />} /> */}
//           <Route path="/" element={isHome ? <><Name /><Intro /></> : <Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/resume" element={<Resume />} />
//         </Routes>
//       </div>
//     </>
//   )
// }

// export default App




import './App.css';
import NavBar from './Component/NavBar';
import Name from './Component/Name';
import Intro from './Component/Intro';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-purple-900 min-h-screen">
      <NavBar />

      {/* One-page layout */}
      <Name />
      <Intro />
      <About />
      <Projects />
      <Resume />
    </div>
  );
}

export default App;
