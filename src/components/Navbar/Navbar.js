import './Navbar.css';
import { cowGif, rainbowStars } from '../../assets';

export default function Navbar() {
  return (
    <div class="nav">
      <div class="navheader">
          <img src={cowGif} alt="cow.gif"/>
          <div class="navheadertext">
              <h1 id="navtitle">grace-manning.com</h1>
              <h2 id="navsubtitle">...where dreams come true!</h2>
          </div>
      </div>

      <div class="navstars">
          <img src={rainbowStars} alt="line of rainbow stars"/>
      </div>

      <div class="navlinks">
          <p><b>personal</b></p>
          <p class="navlink">★
              <a href="/">home</a>
          </p>
          <p class="navlink">★
              <a href="/about">about</a>
          </p>
          <p class="navlink">★
              <a href="../blog.html">blog</a>
          </p>
          <p class="navlink">★
              <a href="../videos.html">videos</a>
          </p>
          <p class="navlink">★
              <a href="../favorites.html">my favorites</a>
          </p>
          <p class="navSeparator">-------------------------------</p>
          <p><b>software projects</b></p>
          <p class="navlink">★
              <a href="../cowculator.html">cowculator</a>
          </p>
          <p class="navlink">★
              <a href="../undergrad-research.html">research</a>
          </p>
          <p class="navSeparator">-------------------------------</p>
          <p><b>fun stuff</b></p>
          <p class="navlink">★
              <a href="../fortune-teller.html">fortune teller</a>
          </p>
          <p class="navSeparator">-------------------------------</p>
          <p><b>miscellaneous</b></p>
          <p class="navlink">★
              <a href="../sources.html">sources</a>
          </p>
      </div>

      <div class="navstars">
          <img src={rainbowStars} alt="line of rainbow stars"/>
      </div>
    </div>
  );
}