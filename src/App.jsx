import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Articles from './pages/Articles'
import Project from './pages/Project'
import Speaking from './pages/Speaking'

function App() {
  const basename = import.meta.env.MODE === 'production' ? '/Portfolio' : '';
  
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/article" element={<Articles />} />
        <Route path="/project" element={<Project />} />
        <Route path="/speaking" element={<Speaking />} />
      </Routes>
    </Router>
  )
}

export default App
