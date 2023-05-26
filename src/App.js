import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Outlet, Link } from "react-router-dom"
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Resume from './Resume'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<AboutMe/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/resume" element={<Resume/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
