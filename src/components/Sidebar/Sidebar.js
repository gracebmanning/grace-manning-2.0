import './Sidebar.css';
import { flyingEnvelope, css, adobe, enchantedForest, gotHTML, homer, imaginaryLand, spongebobWebsite } from '../../assets';

export default function Sidebar() {
  return (
    <div class="sidebar">
      <h2 hidden>sidebar</h2>

      <h3 class="nomargins">my other links</h3>
      <a href="https://github.com/gracebmanning" target="_blank" rel="noreferrer">github</a>
      <br/>
      <a href="https://www.linkedin.com/in/grace-manning/" target="_blank" rel="noreferrer">linkedin</a>

      <br/><br/>
      <h3 class="nomargins">contact</h3>
      <a href="mailto:gracebmanning@gmail.com">email</a>
      <br/>
      <img src={flyingEnvelope} alt="white envelope with yellow wings" />

      <br/>
      <h3 class="nomargins">established</h3>
      <p>May 8, 2023</p>

      <br/>
      <h3 class="nomargins">last updated</h3>
      <p id="lastModified"></p>

      <br/>
      <p class="navSeparator">-------------------------------</p>

      <h3 class="nomargins">little guys</h3>
      <br/>
      <img class="littleGuys" src={css} alt="88x31 made with cascading style sheets" />
      <img class="littleGuys" src={adobe} alt="88x31 get Adobe Flash Player" />
      <img class="littleGuys" src={enchantedForest} alt="88x31 GeoCities Enchanted Forest" />
      <img class="littleGuys" src={gotHTML} alt="88x31 got HTML?" />
      <img class="littleGuys" src={homer} alt="88x31 Homer Now!" />
      <img class="littleGuys" src={imaginaryLand} alt="88x31 imaginary land rainbow text" />
      <img class="littleGuys" src={spongebobWebsite} alt="88x31 The Spongebob Website" />
  </div>
  );
}