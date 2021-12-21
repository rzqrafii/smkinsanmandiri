import './App.css';
import Home from './pages';
import Profil from './pages/profil';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from './components/Content';
import Navbar from './components/Navbar';
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <Navbar/> 
      <Routes>
        <Route path='/' exact component={Home}></Route>
        <Route path='/profil' component={Profil}></Route>
      </Routes>
      <Content/>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
