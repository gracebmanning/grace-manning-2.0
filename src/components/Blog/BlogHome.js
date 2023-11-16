import './Blog.css';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

import { posts } from './posts/posts';
const blogTiles = posts.map((post) =>
    <div className="blogTile">
        <img className="blogPreviewImage" src={post.preview} alt={post.alt} />
        <div className="blogPreviewText">
            <h4 className="nomargins">{post.title}</h4>
            <h5 className="nomargins">{post.date}</h5>
            <a href={post.path}>READ MORE</a>
        </div>
    </div>
);

export default function BlogHome(){
    return(
    <div className="container">
        <Navbar/>
        <div className="mainContent">
            <div className="contentBoxLeft">
                <h3>BLOG POSTS</h3>
                {blogTiles}
            </div>
        </div>
        <Sidebar/>
    </div>
    );
}