import './emma22bday.css';
import { happyBirthday, cake, balloons, emmaSlaying, pigEatingCake, cake2, wordleSlay, crosswordSlays, balloonsPoohAndPig } from '../../assets/images/emma-bday-images/emma-bday-images-index.js';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

export default function Emma22Bday() {
  return (
    <div className="container">
        <Navbar/>
        <div className="mainContent">
            <div className="contentBoxCenter">
                <h1>Happy 22nd Birthday Emma!!</h1>
                <div className="imageRow" style={{alignItems: "center"}}>
                    <img src={happyBirthday} style={{height: "150px"}} alt="the phrase 'Happy Birthday' in script text. The text has a flashing sunset gradient and is surrounded by balloons." />
                    <img src={cake} style={{height: "120px", width: "120px"}} alt="white cake topped with chocolate frosting, with several colorful candles stuck into the top." />
                </div>
                <br/><br/>
                <div className="imageRow">
                    <img src={balloons} style={{width: "10%"}} alt="blue, green, red, and yellow balloons floating upwards" />
                    <img src={emmaSlaying} style={{width: "80%"}} alt="emma slaying" />
                    <img src={balloons} style={{width: "10%"}} alt="blue, green, red, and yellow balloons floating upwards" />
                </div>
            </div>
            <div className="contentBoxCenter">
                <p style={{fontSize: "24px"}}>
                    You are such an amazing friend and you deserve to eat cake every day.
                </p>
                <img src={pigEatingCake} alt="pig wearing a party hat and eating a pink birthday cake" />
                <p>
                    You're one of the most hardworking people I know! You also wake up the earliest of all my
                    friends and it's truly a sleep schedule I aspire to have. Thank you for turning me into a
                    morning person every time we make plans or hangout (so you basically fix my summer sleep
                    schedule).
                    <br/><br/>
                    There were a lot of times this past quarter where I kept saying "I need to call Emma and
                    tell her about [...]" but then never did because I'm bad at doing those things sometimes. Even if
                    we don't get to see each other often while I'm at school, it's nice to know you're just a phone
                    call away.
                    <br/><br/>
                    Also, I appreciate how much you've made an effort to visit me while I'm at school!! It is so
                    meaningful and I love having you visit! We've had some great times :)
                    <br/><br/>
                    There are lots of things I probably wouldn't have done if it weren't for you (example:
                    snorkeling and slowly getting over my fear of deep ocean water). You're consistently
                    suggesting
                    new things to do or try and I really appreciate having that extra push to do things I
                    wouldn't
                    think of doing. And even if I did think of them, it's nice to have a buddy to join me on
                    adventures. You're a great hiking, snorkeling, mini-golfing, bar-hopping adventure buddy :)
                    My
                    life would be way less interesting without you in it!
                </p>
                <img src={cake2} alt="brown birthday cake topped with pink candles, surrounded by streamers" />
            </div>
            <div className="contentBoxCenter">
                <p>
                    Anyways, here are some fun minigames for you to do. Enjoy!
                </p>

                <h2>Birthday Minigames!</h2>
                <img src={wordleSlay} style={{height: "250px"}} alt="Wordle game where the first guess is the word 'slays'." />
                <p>
                    The game we know and love, Wordle. You slay, I slay, we all slay. Here's a 6-letter Wordle game
                    based on a word you may hear people say to you sometimes... (don't get confused: it's not
                    slay-related, lol).<br/>Hint: one letter repeats 3 times.
                </p>
                <br/>
                <p style={{fontSize: "20px"}}>
                    <b><a href="https://mywordle.strivemath.com/?word=ovdhxqw" target="_blank" rel="noreferrer">
                            Wordle (kinda)
                        </a></b>
                </p>
                <br/>
                <img src={crosswordSlays} style={{height: "250px"}} alt="Crossword game where the first clue entered is the word 'slay'." />
                <p>
                    Of course, the minigames wouldn't be complete without a crossword puzzle. Good luck!
                </p>
                <br/>
                <p style={{fontSize: "20px"}}>
                    <b><a href="https://crosswordlabs.com/embed/emmas-22nd-birthday-crossword" target="_blank"
                            rel="noreferrer">
                            Crossword Puzzle
                        </a></b>
                </p>
            </div>
            <div className="contentBoxCenter">
                <img src={balloonsPoohAndPig} alt="Piglet and Winnie the Pooh holding hands, while Pooh holds a bunch of balloons in the other hand." />
                <br/>
                <p style={{fontSize: "24px"}}>us :)</p>
            </div>
        </div>
        <Sidebar/>
    </div>
  );
}