import './Cowculator.css';
import { construction, blueMain, blueSettings, blueHistory, pinkMain, pinkSettings, pinkHistory } from '../../assets';

export default function Cowculator() {
  return (
    <div className="mainContent">
      <div className="contentBoxCenter">
          <h1>Cowculator</h1>
          <p>
              A cow-themed calculator, available on iOS and Android!
              <br/>
              <b>Projected release date: September 2023</b>
          </p>
          <br/>
          <p>The Cowculator is currently under construction!</p>
          <br/>
          <img src={construction}
              alt="a construction worker hitting a small object with a hammer. He wears a yellow hard hat. Behind him is a black & yellow caution barrier."/>
      </div>
      <div className="contentBoxCenter">
        <div className="tileContainer">
          <a className="tileLink" href="cowculator/support">
            <div className="buttonTile">Support</div>
          </a>
          <a className="tileLink" href="cowculator/privacy">
            <div className="buttonTile">Privacy Policy</div>
          </a>
        </div>
      </div>
      <div className="contentBoxCenter">
        <h2>App Previews...</h2>
        <div className="previewContainer">
          <img className="previewImage" src={blueMain} alt="calculator with cow-spot-shaped buttons. buttons are light blue on white background." />
          <img className="previewImage" src={blueSettings} alt="settings page with options to change color theme, toggle sound effects, etc." />
          <img className="previewImage" src={blueHistory} alt="history page that lists the previous calculations." />
        </div>
        <div className="previewContainer">
          <img className="previewImage" src={pinkMain} alt="calculator with cow-spot-shaped buttons. buttons are light pink on white background." />
          <img className="previewImage" src={pinkSettings} alt="settings page with options to change color theme, toggle sound effects, etc." />
          <img className="previewImage" src={pinkHistory} alt="history page that lists the previous calculations." />
        </div>
      </div>
      
    </div>
  );
}