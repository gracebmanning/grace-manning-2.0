import './Blog.css';
import BlogHome from './BlogHome';
import Graduated from './posts/graduated';
import GHC2022 from './posts/GHC2022';
import UCIdaytrips from './posts/UCIdaytrips';
import GHC2021 from './posts/vGHC2021';
import { Routes, Route } from 'react-router-dom';

export default function Blog() {
  return (
    <Routes>
        <Route path='/*' element={<BlogHome/>} />
        <Route path='blog/graduated' element={<Graduated/>} />
        <Route path='blog/GHC2022' element={<GHC2022/>} />
        <Route path='blog/UCIdaytrips' element={<UCIdaytrips/>} />
        <Route path='blog/vGHC2021' element={<GHC2021/>} />
    </Routes>
  );
}