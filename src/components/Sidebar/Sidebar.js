import './Sidebar.css';
import { css, adobe, enchantedForest, gotHTML, homer, imaginaryLand, spongebobWebsite } from '../../assets';
import resume from '../../documents/resume.pdf';

function lastModified(){
  var date = new Date(document.lastModified);
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var dateString = months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
  return dateString;
}

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h3 className="sidebarHeader">my other links</h3>
      <a href="https://github.com/gracebmanning" target="_blank" rel="noreferrer">github</a>
      <br/>
      <a href="https://www.linkedin.com/in/grace-manning/" target="_blank" rel="noreferrer">linkedin</a>
      <br/>
      <a href={resume} target="_blank" rel="noreferrer">resume</a>

      <br/><br/>
      <h3 className="sidebarHeader">contact</h3>
      <a href="mailto:contact@grace-manning.com">email</a>
      <br/>

      <br/>
      <h3 className="sidebarHeader">established</h3>
      <p>May 8, 2023</p>

      <br/>
      <h3 className="sidebarHeader">last updated</h3>
      <p id="lastModified">{lastModified()}</p>

      <br/>
      <p className="navSeparator">-------------------------------</p>

      <h3 className="sidebarHeader">my 88x31 collection</h3>
      <br/>
      <div className="collection">
        <img className="littleGuys" src={css} alt="88x31 made with cascading style sheets" />
        <img className="littleGuys" src={adobe} alt="88x31 get Adobe Flash Player" />
        <img className="littleGuys" src={enchantedForest} alt="88x31 GeoCities Enchanted Forest" />
        <img className="littleGuys" src={gotHTML} alt="88x31 got HTML?" />
        <img className="littleGuys" src={homer} alt="88x31 Homer Now!" />
        <img className="littleGuys" src={imaginaryLand} alt="88x31 imaginary land rainbow text" />
        <img className="littleGuys" src={spongebobWebsite} alt="88x31 The Spongebob Website" />
      </div>
  </div>
  );
}