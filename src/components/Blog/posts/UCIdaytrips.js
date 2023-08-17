/* eslint-disable jsx-a11y/alt-text */
import '../Blog.css';
import { anteater, aquarium1, aquarium2, coronadelmar, disney, moonjelly1, moonjelly2,
  shermanlibrary1, shermanlibrary2, urthcaffe } from '../../../assets/blog-images/ucidaytrips';

export default function UCIdaytrips() {
  return (
    <div className="mainContent">
        <div className="blogNavigation">
            <a href="vGHC2021">← prev</a>
            <h4 className="nomargins">BLOG POSTS</h4>
            <a href="GHC2022">next →</a>
        </div>
        <div className="contentBoxLeft">
            <h2 className="nomargins">My Favorite Day Trips from UCI</h2>
            <h3 className="nomargins" style={{fontWeight: `normal`}}>March 3, 2022</h3>
            <br/>
            <p>
              Ever wondered what UC Irvine students do on a day off? As a student currently attending UCI, I'd
              like to share my top five choices for quick day trips.
            </p>
            <h3>1. Corona Del Mar beach</h3>
            <img className="blogImage" style={{width: '80%'}} src={coronadelmar} />
            <p className="blogCaption">Corona Del Mar beach, photographed in May 2021.</p>
            <br/>
            <p>
                Going to the beach is the perfect way to spend the day, and Corona del Mar is one of my
                favorites. The rock formations have small sea anemones that you can check out up close. Near the
                parking lot, you can also find rock formations that lead to a small cove if you climb over them.
                Note: parking here isn't cheap, but street parking is a great — and free — option.
                <br/><br/>
                Plus, Corona del Mar is only a 15 minute drive from UCI's campus, and there's more to do than
                just go to the beach! Shops and restaurants line Highway 1, plus you can visit Sherman Library
                and Gardens if you're looking to explore a botanical garden (and admission is only $5.00).
            </p>
            <div>
                <img className="blogImage" style={{width: "40%"}} src={shermanlibrary1} />
                <img className="blogImage" style={{width: "40%"}} src={shermanlibrary2} />
            </div>
            <br/>
            <h3>2. Laguna Beach hiking trails</h3>
            <p>
                Laguna Beach is full of coastal hiking spots and only a 15-20 minute drive from campus. It's a
                great way to exercise with a great view of the Orange County coast! I'd recommend the El Moro
                Canyon Loop Trail, which has shorter and longer variations.
                <br/><br/>
                Plus, Laguna is home to many great places to eat, like Urth Caffé. It's pricey, but great for a
                special occasion breakfast!
            </p>
            <img className="blogImage" style={{width: "60%"}} src={urthcaffe} />
            <br/>
            <h3>3. Santa Ana Zoo</h3>
            <p>
                In 2019, the Santa Ana Zoo welcomed a baby anteater to their family. ZOT ZOT ZOT! Visit the
                great UCI mascot at this wonderful zoo, which is just 10 miles from campus. It's also
                budget-friendly! As of September 2022, a General Admission ticket for adults is only $12.00.
                Learn more at SantaAnaZoo.org.
            </p>
            <img className="blogImage" style={{width: "80%"}} src={anteater} />
            <p className="blogCaption">Photo by <a href="https://unsplash.com/@waite17" target="_blank" rel="noreferrer">
                    David Waite</a> on Unsplash.</p>
            <br/>
            <h3>4. Aquarium of the Pacific</h3>
            <p>
                If you're looking for a full day of activity, take a trip to the Aquarium of the Pacific in Long
                Beach. The indoor exhibits are divided by region, like Northern Pacific, Tropical Pacific, and
                Southern California / Baja. It's cool to see what kind of animals are swimming amongst us here
                in SoCal!
            </p>
            <div>
                <img className="blogImage" style={{width: "40%"}} src={aquarium1} />
                <img className="blogImage" style={{width: "40%"}} src={aquarium2} />
            </div>
            <p className="blogCaption">the seals & sea lions exhibit; large model of a whale.</p>
            <br/>
            <p>
                They also have outdoor exhibits, like the seals & sea lions tank and the shark exhibit. You can
                also get a hands-on experience at their Moon Jelly touch tank! (Don't worry, it doesn't harm the
                jellies.)
            </p>
            <div>
                <img className="blogImage" style={{width: "40%"}} src={moonjelly1} />
                <img className="blogImage" style={{width: "40%"}} src={moonjelly2} />
            </div>
            <p className="blogCaption">Moon Jelly touch tank — they're so soft!</p>
            <br/>
            <h3>5. Downtown Disney</h3>
            <p>
                Finally, check out Downtown Disney to get the Disney experience without purchasing an expensive
                ticket! I should mention you need to pay for parking here, but the cost is lowered if you get it
                validated at a restaurant.
                <br/><br/>
                My go-to activities are to shop around in World of Disney and get a good meal somewhere. There
                are lots of restaurants to choose from, but my favorite is the Italian place — Naples. Also,
                make sure to get ice cream at Salt & Straw, which is known for their unique flavor options.
                <br/><br/>
                A band usually sets up in the evenings near the Downtown Disney entrance and plays live music.
                Plus, stick around until 9pm (subject to change) for the fireworks inside Disneyland, which you
                can get a good view of from the Wetzel's Pretzels shop.
                <br/><br/>
                Overall, the vibes here are great if you grew up watching Disney movies or went to Disneyland as
                a kid. Disney songs are playing from the speakers 24/7, so it can feel very nostalgic. I always
                enjoy hanging out here!
            </p>
            <img className="blogImage" style={{width: "70%"}} src={disney} />
            <br/>
            <p>
                Thanks for reading, and happy exploring!
            </p>
        </div>
    </div>
  );
}