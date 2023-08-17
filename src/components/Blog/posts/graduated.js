import '../Blog.css';
import { diploma1, diploma2 } from '../../../assets/blog-images/graduated';

export default function Graduated() {
  return (
    <div className="mainContent">
        <div className="blogNavigation">
            <a href="GHC2022">← prev</a>
            <h4 className="nomargins">BLOG POSTS</h4>
            <p>next →</p>
        </div>
        <div className="contentBoxLeft">
            <h2 className="nomargins">I Graduated!</h2>
            <h3 className="nomargins" style={{fontWeight: `normal`}}>June 20, 2023</h3>
            <br/>
            <p>
                Here's a quick update: <b>I graduated with a degree in Computer Science from UC Irvine!</b> I am
                incredibly grateful for the four years spent here, and the amazing organizations I was involved
                with. Of course, shoutout to WICS <a href="https://wics.ics.uci.edu/" target="_blank" rel="noreferrer">(Women in
                    Information & Computer Sciences)</a>, which brought me opportunities I never would've
                thought possible! I am also very grateful for my amazing roommate of four years, Emmy! College
                wouldn't have been possible without you!! The 2022-2023 school year also brought lots of cool
                new people into my life through being a part of the UCI Fashion Collective and <a
                    href="https://venushacks.com/" target="_blank" rel="noreferrer">VenusHacks 2023</a>. Feeling: grateful!!
            </p>
            <br/>
            <div>
                <img className="blogImage" style={{width: `30%`}} src={diploma1} alt="Grace wearing a grad cap and gown, pointing to a diploma holder with a post-it note inside that says 'diploma.'" />
                <img className="blogImage" style={{width: `30%`}} src={diploma2} alt="Grace wearing a grad cap and gown, smiling and holding a diploma holder with a post-it note inside that says 'diploma.'" />
            </div>
        </div>
    </div>
  );
}