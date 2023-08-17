/* eslint-disable jsx-a11y/alt-text */
import '../Blog.css';
import {
    friday1, friday2, friday3, friday4, friday5,
    thursday1, thursday2, thursday3, thursday4, thursday5, thursday6, thursday7,
    thursday8, thursday9, thursday10, thursday11, thursday12, thursday13, thursday14,
    thursday15, thursday16, thursday17, nikePhoto,
    wednesday1,wednesday2,wednesday3,wednesday4,wednesday5,wednesday6,wednesday7,wednesday8,
    wednesday9,wednesday10,wednesday11,wednesday12,wednesday13,wednesday14,wednesday15,
    wednesday16,wednesday17, wednesday18,wednesday19,
    tuesday1, tuesday2, tuesday3, tuesday4, tuesday5, tuesday6, tuesday7, tuesday8
} from '../../../assets/blog-images/ghc22';

export default function GHC2022() {
  return (
    <div className="mainContent">
        <div className="blogNavigation">
            <a href="UCIdaytrips">← prev</a>
            <h4 className="nomargins">BLOG POSTS</h4>
            <a href="graduated">next →</a>
        </div>
        <div className="contentBoxLeft">
            <h2 className="nomargins">My GHC 2022 Experience</h2>
            <h3 className="nomargins" style={{fontWeight: `normal`}}>September 30, 2022</h3>
            <br/>
            <p>
              Hi! My name is Grace Manning and I'm a 4th-year Computer Science major at UC Irvine. Since my
              freshman year, I've been involved in a club called Women in Information & Computer Sciences
              (WICS) at UCI, which has opened my eyes to the many opportunities available to me in the tech
              industry.
              <br/><br/>
              Each year, Anita B.org holds an event called the Grace Hopper Celebration (GHC), which is a
              week-long conference dedicated to women in computing. To learn more, visit <a
                  href="https://ghc.anitab.org/about/" target="_blank" rel="noreferrer">this website</a>.
              <br/><br/>
              This year, GHC was held in-person for the first time since the pandemic began. Since UCI is a
              BRAID school, WICS members had the opportunity to attend GHC in-person or virtually through a
              scholarship. I attended in-person GHC in Orlando, Florida with about 9 other WICS members, and
              here's how it went…
          </p>
          {/* TRAVELING DAY */}
          <h3>Tuesday, September 20: Traveling to Orlando</h3>
          <p>
              Our travel day began at 5:30am, when the airport shuttles came to pick us up from UCI and take
              us to the John Wayne Airport.
          </p>
          <br/>
          <div>
              <img className="blogImage" style={{width: '45%'}} src={tuesday1} />
              <img className="blogImage" style={{width: '40%'}} src={tuesday2} />
          </div>
          <p class="blogCaption">getting picked up; waiting for our plane to board</p>
          <br/>
          <p>
              Our plane boarded around 7am, and then we were off to Houston!
          </p>
          <br/>
          <div>
              <img className="blogImage" style={{width: '40%'}} src={tuesday3} />
              <img className="blogImage" style={{width: '40%'}} src={tuesday4} />
          </div>
          <br/>
          <p>
              I managed to sleep on the plane, but woke up for a Stroopwafel and Coke. My go-to plane snacks!
              <br/><br/>
              When we landed in Houston, some of us had a strong craving for Subway (some of us = Alisa and
              I). We spent almost 30 minutes walking around the different airport terminals in search of a
              Subway that was supposedly nearby, according to Google Maps. Eventually, we gave up and had to
              get sandwiches somewhere else.
          </p>
          <br/>
          <div>
              <img className="blogImage" style={{width: '40%'}} src={tuesday5} />
              <img className="blogImage" style={{width: '40%'}} src={tuesday6} />
          </div>
          <p class="blogCaption">the search in action...and the defeat</p>
          <br/>
          <p>
              After a nearly 4 hour layover, we boarded our flight to Orlando! I bought in-flight Wi-Fi to
              catch up on all those GHC-related emails and prep for the upcoming week. We also got to enjoy a
              beautiful sunset as we landed in Orlando, which I attempted to photograph from my aisle seat.
          </p>
          <br/>
          <div>
              <img className="blogImage" style={{width: '50%'}} src={tuesday7} />
              <img className="blogImage" style={{width: '50%'}} src={tuesday8} />
          </div>
          <p class="blogCaption">reading emails; Orlando sunset.</p>
          <br/>
          <p>
              After we finally landed and made it to our hotel, my roommate Jaedyn and I were moved to a
              different hotel for the night due to overbooking. It made our travel day a bit longer, but we
              eventually settled in around 10pm and got ready for an even bigger day ahead.
          </p>

          {/* DAY 1 */}
          <h3>Wednesday, September 21: GHC Day 1</h3>
          <p>
              Jaedyn and I left our hotel room at 6:50am to get checked in at our (actual) hotel and grab our
              GHC badges. After leaving our bags at the hotel (and an unsuccessful attempt to check in), we
              walked across the skybridge that was conveniently connected to the Orange County Convention
              Center where GHC was held.
              <br/><br/>
              One thing I loved about Florida was the lush greenery all around us. While I personally did not
              appreciate the 90% humidity, the plants sure did!
          </p>
          <br/>
          <div>
              <img className="blogImage" style={{width: '30%'}} src={wednesday1} />
              <img className="blogImage" style={{width: '30%'}} src={wednesday2} />
              <img className="blogImage" style={{width: '30%'}} src={wednesday3} />
          </div>
          <p class="blogCaption">sleep-deprived people; skybridge in the morning; very green plants!</p>
          <br/>
          <p>
              We checked in and got our GHC badges a bit too early…it was 8am and things typically didn't
              start until 9am. In this spare time, we explored the convention center and all it had to offer.
              The conference spanned across the length of the convention center, which was full of natural
              light! We also took a peek at the food court while it was still empty.
          </p>
          <br/>
          <div>
              <img className="blogImage" style={{width: '40%'}} src={wednesday4} />
              <img className="blogImage" style={{width: '40%'}} src={wednesday5} />
          </div>
          <p class="blogCaption">convention center; thumbs up for the Food Court!</p>
          <br/>
          <h4 class="nomargins">Exploring GHC</h4>
          <p>
              I didn't know this going into it, but my main focus of GHC became the Expo Hall. Open from 9am
              to 5pm, this gigantic room held hundreds of company booths and representatives, and lots of
              people trying to make connections that may lead to a job someday. I was one of those people!
          </p>
          <br/>
          <img className="blogImage" style={{width: '70%'}} src={wednesday6} />
          <p class="blogCaption">the Expo Hall</p>
          <br/>
          <p>
              I started by walking around to get an idea of what was around me. Almost immediately, I stumbled
              upon the Snapchat booth and somehow got a fancy water bottle they were handing out.
              <br/><br/>
              It was quite a surprise to see the design of the booths; I might have been most impressed by
              McDonald's display, which mimicked an in-store touchscreen kiosk experience.
              <br/><br/>
              My favorite part was having the opportunity to speak one-on-one with company representatives. It
              was intimidating at first, since you have to walk into a booth space and approach someone (or
              wait until someone is done with their conversation). I had wonderful conversations with
              representatives from Nordstrom and Nike, which are both companies I would be grateful to work
              at. I also got invited to a Nike party…more on that later!
              <br/><br/>
              I also had the opportunity to chat with a rep from Adobe (after waiting in line for about 10
              minutes). She immediately opened my resumé and started giving me tips and ways to improve it. I
              was taken aback at first, but it was actually great advice!
          </p>
          <br/>
          <div>
              <img className="blogImage" style={{width: '40%'}} src={wednesday7} />
              <img className="blogImage" style={{width: '40%'}} src={wednesday8} />
          </div>
          <p class="blogCaption">McDonald's and Nordstrom booths</p>
          <br/>
          <p>
              At 11am, I went to the Main Stage to watch a bit of the Opening Keynote. It started with a
              speech from Brenda Darden Wilkerson, the President and CEO of AnitaB.org. Sitting in a room this
              large, full of people clapping to an inspirational speech, was a very new experience for me.
              It's very hard not to feel motivated while watching something like this.
          </p>
          <br/>
          <img className="blogImage" style={{width: '70%'}} src={wednesday9} />
          <p class="blogCaption">Main Stage, viewing the Opening Keynote</p>
          <br/>
          <p>
              I left the keynote a bit early to try to check in at our hotel, but they didn't have a room
              ready for us yet. So…back to the Expo Hall!
              <br/><br/>
              I learned about a company called Arcadia, which creates software to help people lower their
              energy bills and utilize clean energy. A few other companies I spoke with were Lululemon,
              Starbucks, and Home Depot.
              <br/><br/>
              During my conversation about front-end development with the Home Depot representative, I asked
              how frequently the topic of accessibility is discussed. She said it is actually a recurring
              subject when they consider their website design, because the Home Depot logo colors (orange and
              white) do not meet accessibility guidelines due to insufficient contrast between the text color
              and background color. Low contrast colors can be difficult for low-vision people to read. This
              was really interesting to me because it would require a complete rebrand to make their logo
              actually accessible.
              <br/><br/>
              I also visited the Disney booth, which had a statue of Minnie Mouse, so I took a photo with her
              (and Anushka & Jackie).
          </p>
          <br/>
          <img className="blogImage" style={{width: '70%'}} src={wednesday10} />
          <p class="blogCaption">a lovely photo of us with Minnie!</p>
          <br/>
          <p>
              I tried to talk to a Disney representative about software engineering positions at Disney, but
              she had a pretty limited knowledge about the hiring process and the different teams they have. I
              left their booth feeling a bit unsatisfied, but decided I would go back the next day and try to
              talk to someone else.
              <br/><br/>
              Since it was some time in the afternoon at this point, we all needed food. To the FOOD COURT! I
              got a Nathan's hot dog and some very expensive strawberry lemonade that definitely wasn't worth
              the price. You win some, you lose some. Anushka got a gyro, which is relevant because I'm
              stealing her photo:
          </p>
          <br/>
          <div>
              <img className="blogImage" style={{width: '45%'}} src={wednesday11} />
              <img className="blogImage" style={{width: '35%'}} src={wednesday12} />
          </div>
          <p class="blogCaption">my hotdog & pink lemonade; Anushka's photo of us & her gyro</p>
          <br/>
          <p>
              Later, Mia and I went to a discussion about how to adapt human-centered design to focus on
              groups of users rather than individuals. My takeaway: when approaching a design, we may often
              forget to envision a user as part of a group and how the design plays a role in that.
              Human-centered design can be adapted to consider how a user's individual role vs. group role
              changes their interaction with the technology being considered.
          </p>
          <br/>
          <div>
              <img className="blogImage" style={{width: '30%'}} src={wednesday13} />
              <img className="blogImage" style={{width: '30%'}} src={wednesday14} />
              <img className="blogImage" style={{width: '30%'}} src={wednesday15} />
          </div>
          <br/>
          <p>
              It was almost 5pm and we were all exhausted, so it was time to head back to the hotel…
          </p>
          <br/>
          <img className="blogImage" style={{width: '70%'}} src={wednesday16} />
          <p class="blogCaption">selfies are fun</p>
          <br/>
          <h4 class="nomargins">Dinner with WICS</h4>
          <p>
              For dinner, we went to Mia's Italian Kitchen (it didn't actually belong to our friend Mia
              though). I ordered a Caesar salad and two plates of gnocchi, plus an Italian Spritzer to drink.
              It was delish!
          </p>
          <br/>
          <div>
              <img className="blogImage" style={{width: '40%'}} src={wednesday19} />
              <img className="blogImage" style={{width: '40%'}} src={wednesday18} />
          </div>
          <br/>
          <p>
              Outside of the restaurant was this car with a giant lobster on top. It was amazing!!!
          </p>
          <br/>
          <img className="blogImage" style={{width: '60%'}} src={wednesday17} />
          <br/>
          <p>After dinner, I painted my nails while watching The Office and then promptly fell asleep.</p>

          {/* DAY 2 */}
          <h3>Thursday, September 22: GHC Day 2</h3>
          <p>
              I slept in until 9:30am this day (😲) and it was fantastic! I watched The Office and didn't
              leave the hotel room until 11am. The past two days of getting up very early and staying busy all
              day long were starting to wear on me.
              <br/><br/>
              The previous day, I got a pack of free instant coffee at the Starbucks booth, so I made that
              with the hotel coffee maker. To be honest…it tasted awful! Not sure if that was the fault of the
              coffee or the hotel's powder creamer. Anyways, I got dressed in my cute lil gingham number and
              was ready to take on my 2nd day of GHC!
          </p>
          <br/>
          <div>
              <img className="blogImage" style={{width: '40%'}} src={thursday1} />
              <img className="blogImage" style={{width: '40%'}} src={thursday2} />
          </div>
          <p class="blogCaption">morning beverage, the fit of the day</p>
          <br/>
          <p>
              I spent some more time exploring the convention center. There was a meeting hall for 1:1s, which
              are conversations with company representatives that are basically interviews. I didn't sign up
              for any since the slots filled up very quickly, but it seemed cool!
          </p>
          <br/>
          <div>
              <img className="blogImage" style={{width: '30%'}} src={thursday3} />
              <img className="blogImage" style={{width: '30%'}} src={thursday4} />
              <img className="blogImage" style={{width: '30%'}} src={thursday5} />
          </div>
          <p class="blogCaption">photos of the Orange County Convention Center</p>
          <br/>
          <p>
              I ventured back into the Expo Hall to have a few more conversations. My goals were to speak to
              representatives at Google and Disney, and it was successful! I had a great conversation with a
              representative for Disney who told me about the many options they had for front-end developers,
              since they have so many web and mobile app platforms.
              <br/><br/>
              Since I had lots of extra time, I also took the opportunity to take more pictures at the Expo
              Hall. Snap Inc. also had a device with Snapchat open where you could pick filters to take photos
              with. I also learned about the types of software engineering jobs at places like USAA and John
              Deere. Did you know that tractors use machine learning to determine ideal seed placement over
              time, and use cameras with computer vision that can distinguish between a crop and a weed for
              pesticide application? I had no idea farming equipment was so high-tech.
          </p>
          <br/>
          <div>
              <img className="blogImage" style={{width: '30%'}} src={thursday6} />
              <img className="blogImage" style={{width: '30%'}} src={thursday7} />
              <img className="blogImage" style={{width: '30%'}} src={thursday8} />
          </div>
          <br/>
          <p>
              After a few hours, I felt satisfied with the conversations I had with company representatives
              and had explored enough of the conference. I wasn't super interested in attending a discussion
              and my eyes were tired of being open….so I decided to head back to the hotel for a nap.
          </p>
          <br/>
          <img className="blogImage" style={{width: '60%'}} src={thursday9} />
          <p class="blogCaption">another selfie!</p>
          <br/>
          <h4 class="nomargins">Nike Party</h4>
          <p>
              After a wonderful nap in my hotel room, I got ready for something I was very excited about — the
              Nike party! During my conversation with a Nike rep the previous day, I was handed a card with an
              invite to their GHC afterparty…which felt super fancy and top-secret, even though it wasn't.
              <br/><br/>
              I threw on my cute-but-casual outfit and nervously applied too many layers of deodorant before
              Uber-ing to Disney Springs!
          </p>
          <br/>
          <img className="blogImage" style={{width: '60%'}} src={thursday10} />
          <p class="blogCaption">fit check!</p>
          <br/>
          <p>
              Disney Springs is basically a mall, containing a few Disney-themed shops, but mainly chain
              stores and boutiques. It also has a House of Blues, Planet Hollywood, and many restaurants, with
              bodies of water linked throughout the area.
          </p>
          <br/>
          <div>
              <img className="blogImage" style={{width: '30%'}} src={thursday11} />
              <img className="blogImage" style={{width: '30%'}} src={thursday12} />
              <img className="blogImage" style={{width: '30%'}} src={thursday13} />
          </div>
          <br/>
          <p>
              Most importantly, Disney Springs is home to Splitsville — a bowling alley / restaurant combo
              that was also the location of the Nike party! Nike had the entire second floor rented out for
              the party, and each person got free food and two free drink tickets (for the 21+ attendees).
          </p>
          <br/>
          <img className="blogImage" style={{width: '60%'}} src={thursday14} />
          <p class="blogCaption">Splitsville bowling</p>
          <br/>
          <p>
              When I arrived at the party, I met lots of new people from around the United States. I found a
              group to bowl with, which comprised of 3 people from Vermont, 2 from the Orlando area, 1 from
              Washington, D.C., and 1 from Los Angeles. We had a great time, and it turns out I'm awesome at
              bowling! Some of us made sure to get in on the photo booth action…
          </p>
          <br/>
          <img className="blogImage" style={{width: '60%'}} src={nikePhoto} />
          <br/>
          <p>
              During the party, there was a raffle for Nike prizes (which I did not win), and then a dance
              party in the center of the venue! I am proud to say I helped start the Cupid Shuffle on the
              dance floor. There was also a conga line around the bar, which I observed but ultimately decided
              not to join in. Too much work.
              <br/><br/>
              I also managed to have a conversation with a Nike rep at one point, which was a goal of mine
              going into this. I approached a woman who had been running the raffle and asked her if she knew
              any early talent recruiters. She said, “Follow me!”, and brought me around the party in search
              of someone to talk to. Eventually, she located someone that could sit down and have a chat with
              me. I found out that Nike has a program for new hires in which they get to sample 3 different
              teams over a (9-month?) time period, and determine which team is best for them. Team-sampling
              sounds like a cool way to figure out what you want to do at a company. It was an informative
              conversation!
              <br/><br/>
              Also, it turns out I really like taking selfies. I took one while the party was going on, and
              when everyone was leaving. Feast your eyes…
          </p>
          <br/>
          <div>
              <img className="blogImage" style={{width: '40%'}} src={thursday15} />
              <img className="blogImage" style={{width: '40%'}} src={thursday16} />
          </div>
          <p>selfie 1 & selfie 2</p>
          <br/>
          <p>
              Then my cool new friends gave me a ride back to my hotel. When I got to my room, I found some
              random people in there!! Just kidding — Anushka and Jackie were sitting on the floor and talking
              to Jaedyn, who was just sitting in bed and looked like she could fall asleep at any second.
          </p>
          <br/>
          <img className="blogImage" style={{width: '60%'}} src={thursday17} />
          <p class="blogCaption">attempting to pack...</p>
          <br/>
          <p>
              We hung out for about an hour, talking about our different nights (they had gone to a Google
              party). They also watched me struggle to figure out how to pack up my suitcase. When Jaedyn
              actually started falling asleep, Anushka and Jackie went back to their room and I went to bed.
              It was a good night!
          </p>

          {/* GOING HOME */}
          <h3>Friday, September 23: Going Home</h3>
          <p>
              Friday…another big travel day. Our flight out of Orlando didn't depart until 12pm, so I was able
              to watch The Office in bed while I ate breakfast and had a bit of a slow morning.
          </p>
          <br/>
          <img className="blogImage" style={{width: '60%'}} src={friday1} />
          <p class="blogCaption">classic morning...!</p>
          <br/>
          <p>
              We took Ubers to the airport, got through security, and took a little airport railway shuttle to
              our terminal.
          </p>
          <br/>
          <div>
              <img className="blogImage" style={{width: '40%'}} src={friday2} />
              <img className="blogImage" style={{width: '40%'}} src={friday3} />
          </div>
          <p>Uber; airport railway shuttle thing</p>
          <br/>
          <p>
              Our first flight was pretty quick, and we landed in Houston around 1pm local time, which many
              would consider to be lunch time. As we journeyed to the gate for our next flight, I laid my eyes
              upon something magical. It was the Subway that Alisa and I had spent 30 minutes searching for
              last time we were here. WE FOUND IT! They were out of Italian Herbs & Cheese bread, and their
              payment system was down so we could only use cash, but we got our sandwiches. And they tasted
              like victory.
          </p>
          <br/>
          <img className="blogImage" style={{width: '60%'}} src={friday4} />
          <br/>
          <p>
              We boarded our second flight, and after a few hours in the air we landed in Irvine around
              4:30pm. A shuttle took us back to the UCI flagpoles, right where we had started.
          </p>
          <br/>
          <img className="blogImage" style={{width: '60%'}} src={friday5} />
          <br/>
          <p>
              Overall, I really enjoyed my experience at GHC. I met great people, learned more about the job
              opportunities available within the tech industry, and learned about myself and what I want to do
              when I graduate. Seeing what companies I gravitated towards and what kind of keywords caught my
              attention (i.e., web or app development) was useful in knowing what I should pursue further. I'm
              grateful to have had the opportunity to attend GHC in person and explore everything this event
              had to offer.
              <br/><br/>
              Thanks for reading!
          </p>
        </div>
    </div>
  );
}