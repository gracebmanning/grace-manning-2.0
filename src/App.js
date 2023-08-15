import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Graduated from './components/Blog/posts/graduated';
import GHC2022 from './components/Blog/posts/GHC2022';
import Videos from './components/Videos/Videos';
import Favorites from './components/Favorites/Favorites';
import Cowculator from './components/Cowculator/Cowculator';
import PrivacyPolicy from './components/Cowculator/PrivacyPolicy';

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
                <Route path='about' element={<About/>} />
                <Route path='blog/*' element={<Blog/>} />
                <Route path='blog/graduated' element={<Graduated/>} />
                <Route path='blog/GHC2022' element={<GHC2022/>} />
                <Route path='videos' element={<Videos/>} />
                <Route path='favorites' element={<Favorites/>} />
                <Route path='cowculator' element={<Cowculator/>} />
                <Route path='cowculator/privacy' element={<PrivacyPolicy/>} />
            </Routes>
            <div id="sidebarSection">
              <Sidebar />
            </div>
        </div>
    </div>
  );
}