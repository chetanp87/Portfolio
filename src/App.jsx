import './App.css'
import NavBar from './Component/NavBar'
import Name from './Component/Name'
import Intro from './Component/Intro'
import { Route, Routes } from 'react-router-dom'

import Routing from './utils/Routing'

function App() {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-900 to-purple-900 min-h-screen">
        <NavBar />
        <Routing/>
        {/* <Name />
        <Intro /> */}
      </div>
    </>
  )
}

export default App
