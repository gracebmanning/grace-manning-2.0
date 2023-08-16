import './Sidebar.css';
import { flyingEnvelope, css, adobe, enchantedForest, gotHTML, homer, imaginaryLand, spongebobWebsite } from '../../assets';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 hidden>sidebar</h2>

      <h3 className="nomargins">my other links</h3>
      <a href="https://github.com/gracebmanning" target="_blank" rel="noreferrer">github</a>
      <br/>
      <a href="https://www.linkedin.com/in/grace-manning/" target="_blank" rel="noreferrer">linkedin</a>

      <br/><br/>
      <h3 className="nomargins">contact</h3>
      <a href="mailto:gracebmanning@gmail.com">email</a>
      <br/>
      <img src={flyingEnvelope} alt="white envelope with yellow wings" />

      <br/>
      <h3 className="nomargins">established</h3>
      <p>May 8, 2023</p>

      <br/>
      <h3 className="nomargins">last updated</h3>
      <p id="lastModified">~nobody knows!~</p>

      <br/>
      <p className="navSeparator">-------------------------------</p>

      <h3 className="nomargins">my 88x31 collection</h3>
      <br/>
      <img className="littleGuys" src={css} alt="88x31 made with cascading style sheets" />
      <img className="littleGuys" src={adobe} alt="88x31 get Adobe Flash Player" />
      <img className="littleGuys" src={enchantedForest} alt="88x31 GeoCities Enchanted Forest" />
      <img className="littleGuys" src={gotHTML} alt="88x31 got HTML?" />
      <img className="littleGuys" src={homer} alt="88x31 Homer Now!" />
      <img className="littleGuys" src={imaginaryLand} alt="88x31 imaginary land rainbow text" />
      <img className="littleGuys" src={spongebobWebsite} alt="88x31 The Spongebob Website" />
  </div>
  );
}