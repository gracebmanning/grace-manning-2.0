import './Blog.css';
import { graduated, GHC22, coronaDelMar, GHC21 } from '../../assets';

export default function Blog() {
  return (
    <div className="mainContent">
      <div className="contentBoxLeft">
          <h3>BLOG POSTS</h3>
          <div className="blogTile">
              <img className="blogPreviewImage" src={graduated}
                  alt="Grace wearing a grad cap and gown, pointing to a diploma holder with a post-it note inside that says 'diploma.'" />
              <div className="blogPreviewText">
                  <h4 className="nomargins">I Graduated!</h4>
                  <h5 className="nomargins">June 20, 2023</h5>
                  <p>
                      Here's a quick update: <b>I graduated with a degree in Computer Science from UC
                          Irvine!</b> I am incredibly grateful for the four years spent here, and the amazing
                      organizations I was involved with. Of course, shoutout to WICS (Women in Information &
                      Computer Sciences), which brought me opportunities...<a href="./blog/graduated.html">READ MORE</a>
                  </p>
              </div>
          </div>
          <div className="blogTile">
              <img className="blogPreviewImage" src={GHC22} alt="Grace pointing to a sign that reads 'Thank you for attending GHC today!'." />
              <div className="blogPreviewText">
                  <h4 className="nomargins">My GHC 22 Experience</h4>
                  <h5 className="nomargins">September 30, 2022</h5>
                  <p>
                      This year, GHC was held in-person for the first time since the pandemic began. Since UCI
                      is a BRAID school, WICS members had the opportunity to attend GHC in-person or virtually
                      through a scholarship. I attended in-person GHC in Orlando, Florida with about 9 other
                      WICS members, and here's how it went…<a href="./blog/GHC2022.html">READ MORE</a>
                  </p>
              </div>
          </div>
          <div className="blogTile">
              <img className="blogPreviewImage" src={coronaDelMar}
                  alt="the Corona Del Mar beach; sand and water in the foreground; a hill with houses in the background." />
              <div className="blogPreviewText">
                  <h4 className="nomargins">My Favorite Day Trips from UCI</h4>
                  <h5 className="nomargins">March 3, 2022</h5>
                  <p>
                      Ever wondered what UC Irvine students do on a day off? As a student currently attending
                      UCI, I'd like to share my top five choices for quick day trips....
                      <a href="./blog/UCIdaytrips.html">READ MORE</a>
                  </p>
              </div>
          </div>
          <div className="blogTile">
              <img className="blogPreviewImage" src={GHC21}
                  alt="a red coffee mug sitting next to Grace's laptop; the laptop displays a web presentation about accessibility." />
              <div className="blogPreviewText">
                  <h4 className="nomargins">My vGHC 2021 Experience</h4>
                  <h5 className="nomargins">October 8, 2021</h5>
                  <p>
                      Each year, Anita B.org holds an event called the Grace Hopper Celebration, which is a
                      week-long conference dedicated to women in computing. For the past two years, Grace
                      Hopper Celebration has been...<a href="./blog/vGHC2021.html">READ MORE</a>
                  </p>
              </div>
          </div>
      </div>
  </div>
  );
}