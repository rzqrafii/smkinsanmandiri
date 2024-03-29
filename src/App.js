import './App.css'
import Home from './pages'
import Profil from './pages/profil'
import Artikel from './pages/artikel'
import DetailArtikel from './pages/artikelDetail'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
// import Content from './components/Content';
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/profil' element={<Profil />}></Route>
        <Route path='/Artikel' element={<Artikel />}></Route>
        <Route path='/DetailArtikel/:id' element={<DetailArtikel />}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
