import './InternetExplorer.css';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { sun, mercury, venus, earth, mars } from '../../assets/gifs/gifsindex';

export default function Videos() {
  return (
    <div className="container">
      <Navbar/>
      <div className="mainContent">
        <div id="galaxyBox">
            <div className="planetBox">
              <img src={sun} alt={"yellow sun with pulsing rays"} />
              test text
            </div>
            <div className="planetBox">
              <img src={mercury} alt={"rotating Mercury planet"} />
              test text
            </div>
            <div className="planetBox">
              <img src={venus} alt={"rotating Venus planet"} />
              test text
            </div>
            <div className="planetBox">
              <img src={earth} alt={"rotating Earth planet"} />
              test text
            </div>
            <div className="planetBox">
              <img src={mars} alt={"rotating Mars planet"} />
              test text
            </div>
        </div>
      </div>
      <Sidebar/>
    </div>
  );
}