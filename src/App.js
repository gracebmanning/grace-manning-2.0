import './App.css';
import Landing from './components/Landing/Landing';
import PageDoesNotExist from './components/404/404';
import Home from './components/Home/Home';
import About from './components/About/About';
import Photography from './components/Photography/Photography';
import Blog from './components/Blog/Blog';
import Videos from './components/Videos/Videos';
import Favorites from './components/Favorites/Favorites';
import FortuneTeller from './components/FortuneTeller/FortuneTeller';
import Emma22Bday from './components/zEmma22Bday/emma22bday';
import { Routes, Route } from 'react-router-dom';

// blog
import Graduated from './components/Blog/posts/graduated';
import GHC2022 from './components/Blog/posts/GHC2022';
import UCIdaytrips from './components/Blog/posts/UCIdaytrips';
import GHC2021 from './components/Blog/posts/vGHC2021';

export default function App() {
  return (
    <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='photography' element={<Photography/>} />
        <Route path='blog/*' element={<Blog/>} />
        <Route path='blog/graduated' element={<Graduated/>} />
        <Route path='blog/GHC2022' element={<GHC2022/>} />
        <Route path='blog/UCIdaytrips' element={<UCIdaytrips/>} />
        <Route path='blog/vGHC2021' element={<GHC2021/>} />
        <Route path='videos' element={<Videos/>} />
        <Route path='favorites' element={<Favorites/>} />
        <Route path='fortune-teller' element={<FortuneTeller/>} />
        <Route path='happy22birthdayEmma' element={<Emma22Bday/>} />
        <Route path='*' element={<PageDoesNotExist/>} />
    </Routes>
  );
}