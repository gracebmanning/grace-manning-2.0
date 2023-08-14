import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div id="container">
        <div id="navbarSection">
            <Navbar />
        </div>
        <div id="mainSection">
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
            </Routes>
        </div>
    </div>
  );
}