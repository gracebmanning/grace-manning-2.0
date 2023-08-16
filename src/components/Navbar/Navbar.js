import './Navbar.css';
import { cowGif, rainbowStars } from '../../assets';

export default function Navbar() {
  return (
    <div className="nav">
      <div className="navheader">
          <img src={cowGif} alt="cow.gif"/>
          <div className="navheadertext">
              <h1 id="navtitle">grace-manning.com</h1>
              <h2 id="navsubtitle">...where dreams come true!</h2>
          </div>
      </div>

      <div className="navstars">
          <img src={rainbowStars} alt="line of rainbow stars"/>
      </div>

      <div className="navlinks">
          <p><b>personal</b></p>
          <p className="navlink">★
              <a href="/">home</a>
          </p>
          <p className="navlink">★
              <a href="/about">about</a>
          </p>
          <p className="navlink">★
              <a href="/blog">blog</a>
          </p>
          <p className="navlink">★
              <a href="/videos">videos</a>
          </p>
          <p className="navlink">★
              <a href="/favorites">my favorites</a>
          </p>
          <p className="navSeparator">-------------------------------</p>
          <p><b>software projects</b></p>
          <p className="navlink">★
              <a href="/cowculator">cowculator</a>
          </p>
          <p className="navlink">★
              <a href="/undergrad-research">research</a>
          </p>
          <p className="navSeparator">-------------------------------</p>
          <p><b>fun stuff</b></p>
          <p className="navlink">★
              <a href="/fortune-teller">fortune teller</a>
          </p>
          <p className="navSeparator">-------------------------------</p>
          <p><b>miscellaneous</b></p>
          <p className="navlink">★
              <a href="/asset-sources">asset sources</a>
          </p>
      </div>

      <div className="navstars">
          <img src={rainbowStars} alt="line of rainbow stars"/>
      </div>
    </div>
  );
}