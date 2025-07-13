
import './App.css';
import NavBar from './Component/NavBar';
import Name from './Component/Name';
import Intro from './Component/Intro';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

function App() {
  return (
    <div className="bg-[#242424] text-white min-h-screen">
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
