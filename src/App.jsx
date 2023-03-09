import About from './pages/about';
import Moreinfo from './pages/moreinfo';
import Contact from './pages/contact';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/more-info' element={<Moreinfo />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
