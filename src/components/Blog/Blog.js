import './Blog.css';
import BlogHome from './BlogHome';
import Graduated from './posts/graduated';
import Linefont from './posts/linefont';

import { Routes, Route } from 'react-router-dom';

export default function Blog() {
  return (
    <Routes>
        <Route path='/*' element={<BlogHome/>} />
        <Route path='/graduated' element={<Graduated/>} />
        <Route path='/linefont' element={<Linefont/>} />
    </Routes>
  );
}