import './AssetSources.css'
import { cowGif, construction, flyingEnvelope, catOnPiano, butterfly, thumbsUp, pinkPanther, 
    rainbowStars, css, adobe, enchantedForest, gotHTML, homer, imaginaryLand, spongebobWebsite, rollingHills } from '../../assets';

export default function AssetSources(){
    return(
    <div class="mainContent">
        <div class="contentBoxCenter">
            <p>items are linked to their original source :-)</p>
            most gifs are from <a href="https://gifcities.org/" target="_blank" rel="noreferrer">GifCities.org</a>!
        </div>
        <div class="contentBoxCenter">
            <p class="sourceLink">
                <a href="https://web.archive.org/web/20090902203215/http://geocities.com/voortcow/Victims.html"
                    target="_blank" rel="noreferrer">
                    <img class="gifAsset" src={cowGif} alt="black and white cow turning its head" />
                </a>
                <a href="https://web.archive.org/web/20091027035606/http://es.geocities.com/melgarbeatles6/prolpg.html"
                    target="_blank" rel="noreferrer">
                    <img class="gifAsset" src={construction}
                    alt="a construction worker hitting a small object with a hammer. He wears a yellow hard hat. Behind him is a black & yellow caution barrier." />
                </a>
                <a href="https://web.archive.org/web/20091022224324/http://geocities.com/yatesacupuncture/contact_us.html"
                    target="_blank" rel="noreferrer">
                    <img class="gifAsset" src={flyingEnvelope} alt="white envelope with yellow wings" />
                </a>
                <a href="https://web.archive.org/web/20090831195128/http://geocities.com/catsareus_2000/?200410"
                    target="_blank" rel="noreferrer">
                    <img class="gifAsset" src={catOnPiano} alt="orange cat walking on piano keys" />
                </a>
                <a href="https://web.archive.org/web/20091021164347/http://geocities.com/absoluteserenity123/therapies2.html"
                    target="_blank" rel="noreferrer">
                    <img class="gifAsset" src={butterfly}
                    alt="an iridescent color-changing butterfly flapping its wings" />
                </a>
                <a href="https://gifcities.org/?q=thumbsup" target="_blank" rel="noreferrer">
                    <img src={thumbsUp} alt="a yellow smiley face emoji wearing sunglasses, next to a thumbs up icon bouncing up and down." />
                </a>
                <p href="/" target="_blank" rel="noreferrer">
                    <img id="pinkPanther" src={pinkPanther}
                    alt="the Pink Panther moving his hands to his chin and then pointing up with his left hand." />
                </p>
                <br/>
                <br/>
                <a href="https://web.archive.org/web/20091027081800/http://hk.geocities.com/meelin292002/miriam.htm"
                    target="_blank" rel="noreferrer">
                    <img src={rainbowStars} alt="line of rainbow stars" />
                </a>
            </p>
        </div>
      
        <div class="contentBoxCenter">
            <a href="https://cyber.dabamos.de/88x31/" target="_blank" rel="noreferrer" class="sourceLink">
                <img src={css} alt="88x31 made with cascading style sheets" />
            </a>
            <a href="https://cyber.dabamos.de/88x31/" target="_blank" rel="noreferrer" class="sourceLink">
                <img src={adobe} alt="88x31 get Adobe Flash Player" />
            </a>
            <a href="https://cyber.dabamos.de/88x31/index2.html" target="_blank" rel="noreferrer" class="sourceLink">
                <img src={enchantedForest} alt="88x31 GeoCities Enchanted Forest" />
            </a>
            <a href="https://cyber.dabamos.de/88x31/index2.html" target="_blank" rel="noreferrer" class="sourceLink">
                <img src={gotHTML} alt="88x31 got HTML?" />
            </a>
            <a href="https://cyber.dabamos.de/88x31/index2.html" target="_blank" rel="noreferrer" class="sourceLink">
                <img src={homer} alt="88x31 Homer Now!" />
            </a>
            <a href="https://cyber.dabamos.de/88x31/index2.html" target="_blank" rel="noreferrer" class="sourceLink">
                <img src={imaginaryLand} alt="88x31 imaginary land rainbow text" />
            </a>
            <a href="https://web.archive.org/web/20090829094741/http://geocities.com/spongebobsquarepants_is_cool/linkme.html"
            target="_blank" rel="noreferrer" class="sourceLink">
                <img src={spongebobWebsite} alt="88x31 The Spongebob Website" />
            </a>
        </div>
        <div class=" contentBoxCenter">
            <h3>Other Assets</h3>
            <a href="https://schumacher.com/catalog/products/177381" target="_blank" rel="noreferrer" class="sourceLink">
                <img id="rollingHills" src={rollingHills} alt="green rolling hills landscape in Japanese art style" />
            </a>
        </div>
    </div>
    );
}
