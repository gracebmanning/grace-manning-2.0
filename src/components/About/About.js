import './About.css';
import { thumbsUp, catOnPiano } from '../../assets';
import resume from '../../documents/resume.pdf';

export default function About() {
  return (
    <div className="mainContent">
      <div className="contentBoxCenter">
          <p>
              hello! I'm Grace. I just recently graduated with a degree in Computer Science from UC Irvine (June 2023).
              <br/>
              pronouns: she/her
              <br/>
              hometown: san diego, ca
          </p>
          <br/>
          <p>
              <b>Am I currently looking for a job?</b>
              <br/>
              <b>Yes!</b>
              <br/>
              <img id="thumbsUpGif" src={thumbsUp} alt="a yellow smiley face emoji wearing sunglasses, next to a thumbs up icon bouncing up and down." />
              <br/>
              I am passionate about front-end and full-stack web development, human-centered design, and creating technology that
              impacts people positively (and isn't boring!). My fields of interest include art, music,
              fashion, marketing/branding, advertising, environmental studies, and urban planning. 
              <br/><br/>
              While making websites is my favorite thing to do, I also have experience working with lots of
              different coding languages, algorithms, data structures, databases, design tools, and all that
              good stuff. If you're interested in the nitty-gritty, <b><a href={resume} target="_blank" rel="noreferrer">click here</a> to view my resume.</b>
          </p>
      </div>
      <div className="twoColumnBox">
          <div className="contentBoxLeft">
            likes:
            <ul>
                <li>cows</li>
                <li>photography</li>
                <li>snorkeling</li>
                <li>hiking</li>
                <li>CSS tricks</li>
                <li>square-toe platform heels</li>
                <li>purchasing jackets at thrift stores</li>
                <li>ambient lighting</li>
                <li>exclamation points!</li>
                <li>ocean facts</li>
                <li>funny socks</li>
                <li>public transportation</li>
            </ul>
            <br/>
            <img id="catonpiano-gif" src={catOnPiano} alt="orange cat walking on piano keys" />
          </div>
          <div className="contentBoxLeft">
            dislikes:
            <ul>
                <li>the absence of headphone jacks in modern smartphones</li>
            </ul>
          </div>
      </div>
    </div>
  );
}