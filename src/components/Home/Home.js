import './Home.css';
import { orangeCow, frogResult, graduated } from '../../assets';
import { BlogPreviewTile } from '../Blog/BlogHome';

export default function Home() {
  return (
    <div className="mainContent">
      <div className="contentBoxCenter">
          <p id="hiImGrace">Hi, I'm Grace!</p>
          <img id="cow" src={orangeCow} alt="orange cow"/>
          <p>(I'm not a cow...I'm a person.)</p>
      </div>
      <div className="contentBoxLeft">
        <h3><b>welcome to my *~*~portal~*~* on the internet.</b></h3>
        <br/>
        <h4>About Me</h4>
        <p>
          I am passionate about front-end development, human-centered design, and creating technology that
          impacts people positively (and isn't boring!). Read more <a href='about'>HERE</a>!
        </p>
        <br/>
        <h4>Latest Blog Post</h4>
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
        <br/>
        <h4>Looking For Answers?</h4>
        <p>
          Check out my <a href="fortune-teller">Fortune Teller</a> that I created in the midst of a 5-hour caffeine-fueled coding session, during which I didn't blink a single time! If that doesn't make me qualified to read into the future, I don't know what does.
        </p>
      </div>
      <div className="contentBoxCenter">
          What kind of frog am I?<br/><br/>
          <a href="http://www.allaboutfrogs.org/funstuff/frogtest.php3" target="_blank" rel="noreferrer">
              <img src={frogResult} width="215" height="100" alt="I'm a Pac Man Frog!" border="0" />
          </a>
          <br/>Argentinian Horned frogs seem to have been designed for the sole purpose of eating as
          much as possible. They appear to consist of two main parts: a mouth and a stomach. This is
          probably where they got the nickname "PacMan". Their needs are fairly simple, a warm habitat
          in a simple plastic box or aquarium with some shallow water and a few rocks so that they can
          laze around all day suits them just fine. They don't mix well with other frogs, even in
          their own species, as they are just as likely to eat them. <a href="http://www.allaboutfrogs.org/funstuff/frogtest.php3" target="_blank" rel="noreferrer">What kind of Frog are <i>you</i>?</a>
      </div>
    </div>
  );
}