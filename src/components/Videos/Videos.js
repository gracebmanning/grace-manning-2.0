import './Videos.css';
import { construction } from '../../assets/gifs/gifsindex';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

export default function Videos() {
  return (
    <div className="container">
      <Navbar/>
      <div className="mainContent">
        <div className="contentBoxCenter">
            <p>
                videos page is under construction!
            </p>
            <br/>
            <img src={construction} alt="a construction worker hitting a small object with a hammer. He wears a yellow hard hat. Behind him is a black & yellow caution barrier."/>
        </div>
      </div>
      <Sidebar/>
    </div>
  );
}