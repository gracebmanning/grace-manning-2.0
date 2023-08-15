import './Blog.css';
import BlogHome from './BlogHome';
import Graduated from './posts/graduated';
import GHC2022 from './posts/GHC2022';
import { Routes, Route } from 'react-router-dom';

export default function Blog() {
  return (
    <Routes>
        <Route path='/*' element={<BlogHome/>} />
        <Route path='blog/graduated' element={<Graduated/>} />
        <Route path='blog/GHC2022' element={<GHC2022/>} />
    </Routes>
  );
}