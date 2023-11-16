import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Sidebar/Sidebar";

// posts
import { linefontInfo } from "./linefont";
import { graduatedInfo } from "./graduated";

export const posts = [linefontInfo, graduatedInfo]

export function blogPost(blogItem){
    return (
        <div className="container">
            <Navbar/>
            <div className="mainContent">
                <div className="blogNavigation">
                    <a href={blogItem.prev}>← prev</a>
                    <h4 className="nomargins">BLOG POSTS</h4>
                    <a href={blogItem.next}>next →</a>
                </div>
                <div className="contentBoxLeft">
                    <h2 className="nomargins">{blogItem.title}</h2>
                    <h3 className="nomargins" style={{fontWeight: `normal`}}>{blogItem.date}</h3>
                    <br/>
                    {blogItem.content}
                </div>
            </div>
            <Sidebar/>
        </div>
    );
}
