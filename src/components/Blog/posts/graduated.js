import '../Blog.css';
import { graduated } from '../../../assets/blog-images/blogCoverImages';
import { diploma1, diploma2 } from '../../../assets/blog-images/graduated';
import { blogPost } from './posts.js';

const content = 
    <div>
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
    </div>;

export const graduatedInfo = {
    title: "I Graduated!",
    date: "June 20, 2023",
    preview: graduated,
    alt: "Grace wearing a grad cap and gown, pointing to a diploma holder with a post-it note inside that says 'diploma.'",
    content: content,
    path: "/blog/graduated",
    prev: "/blog",
    next: "/blog/linefont"
}

export default function Graduated() {
  return blogPost(graduatedInfo);
}