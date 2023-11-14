import './Blog.css';
import { graduated, ghc22Cover, dayTripsCover, ghc21Cover } from '../../assets/blog-images/blogCoverImages';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

export function BlogPreviewTile({previewImage, altText, blogTitle, blogDate, previewText}){
    return(
    <div className="blogTile">
        <img className="blogPreviewImage" src={previewImage}
            alt={altText} />
        <div className="blogPreviewText">
            <h4 className="nomargins">{blogTitle}</h4>
            <h5 className="nomargins">{blogDate}</h5>
            {previewText}
        </div>
    </div>
    );
}

export default function BlogHome(){
    return(
    <div className="container">
        <Navbar/>
        <div className="mainContent">
            <div className="contentBoxLeft">
                <h3>BLOG POSTS</h3>
                <BlogPreviewTile 
                    previewImage={graduated}
                    altText={"Grace wearing a grad cap and gown, pointing to a diploma holder with a post-it note inside that says 'diploma.'"}
                    blogTitle={"I Graduated!"}
                    blogDate={"June 20, 2023"}
                    previewText={
                        <p>
                            Here's a quick update: <b>I graduated with a degree in Computer Science from UC
                            Irvine!</b> I am incredibly grateful for the four years spent here, and the amazing
                            organizations I was involved with. Of course, shoutout to WICS (Women in Information &
                            Computer Sciences), which brought me opportunities...<a href="blog/graduated">READ MORE</a>
                        </p>}/>
                <BlogPreviewTile 
                    previewImage={ghc22Cover}
                    altText={"Grace pointing to a sign that reads 'Thank you for attending GHC today!'."}
                    blogTitle={"My GHC 22 Experience"}
                    blogDate={"September 30, 2022"}
                    previewText={
                        <p>
                            This year, GHC was held in-person for the first time since the pandemic began. Since UCI
                            is a BRAID school, WICS members had the opportunity to attend GHC in-person or virtually
                            through a scholarship. I attended in-person GHC in Orlando, Florida with about 9 other
                            WICS members, and here's how it went…<a href="blog/GHC2022">READ MORE</a>
                        </p>}/>
                <BlogPreviewTile 
                    previewImage={dayTripsCover}
                    altText={"the Corona Del Mar beach; sand and water in the foreground; a hill with houses in the background."}
                    blogTitle={"My Favorite Day Trips from UCI"}
                    blogDate={"March 3, 2022"}
                    previewText={
                        <p>
                            Ever wondered what UC Irvine students do on a day off? As a student currently attending
                            UCI, I'd like to share my top five choices for quick day trips....
                            <a href="blog/UCIdaytrips">READ MORE</a>
                        </p>}/>
                <BlogPreviewTile
                    previewImage={ghc21Cover}
                    altText={"a red coffee mug sitting next to Grace's laptop; the laptop displays a web presentation about accessibility."}
                    blogTitle={"My vGHC 2021 Experience"}
                    blogDate={"October 8, 2021"}
                    previewText={
                        <p>
                            Each year, Anita B.org holds an event called the Grace Hopper Celebration, which is a
                            week-long conference dedicated to women in computing. For the past two years, Grace
                            Hopper Celebration has been...<a href="blog/vGHC2021">READ MORE</a>
                        </p>}/>
            </div>
        </div>
        <Sidebar/>
    </div>
    );
}