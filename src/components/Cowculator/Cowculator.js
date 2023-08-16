import './Cowculator.css';
import { construction } from '../../assets';

export default function Cowculator() {
  return (
    <div className="mainContent">
      <div className="contentBoxCenter">
          <p>
              A cow-themed calculator, available on iOS and Android!
              <br/>
              <b>Projected release date: August 2023</b>
          </p>
          <br/>
          <p>Cowculator page is under construction!</p>
          <br/>
          <img src={construction}
              alt="a construction worker hitting a small object with a hammer. He wears a yellow hard hat. Behind him is a black & yellow caution barrier."/>
          <br/><br/>
          <a href="cowculator/privacy">Privacy Policy</a>
      </div>
    </div>
  );
}