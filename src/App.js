import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
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
            <div id="sidebarSection">
              <Sidebar />
            </div>
        </div>
    </div>
  );
}