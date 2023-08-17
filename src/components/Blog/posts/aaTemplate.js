import '../Blog.css';

export default function Template() {
  return (
    <div className="mainContent">
        <div className="blogNavigation">
            <a href="blog">← prev</a>
            <h4 className="nomargins">BLOG POSTS</h4>
            <a href="blog">next →</a>
        </div>
        <div className="contentBoxLeft">
            <h2 className="nomargins">Title</h2>
            <h3 className="nomargins" style={{fontWeight: `normal`}}>Date</h3>
            <br/>
            <p>
                Text
            </p>
        </div>
    </div>
  );
}