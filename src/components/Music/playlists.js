import { soundtrack1, soundtrack2, soundtrack3 } from "../../assets/images"
const playlists = [
    {
        title: "soundtrack for an indie film (#1)",
        tracks: ['"I Saw The End" - Ardency', '"Vitamin C" - CAN', '"Surrender" - Suicide', '"Hospital" - The Modern Lovers', "and more..."],
        link: "https://open.spotify.com/playlist/3Yj4KkY01ypfqY28idxBEf?si=30248601fd144276",
        image: soundtrack1,
        stickerSources: [
            {
                name: "CD blank",
                link: "https://pngimg.com/image/102166"
            },
            {
                name: "lady on moon",
                link: "https://lu.tiny-universes.net/stickers.html"
            },
            {
                name: "heart lollipop",
                link: "https://www.seekpng.com/ipng/u2q8y3q8y3r5y3y3_heart-lollipop-png-png-stock-heart-lollipop-png/"
            },
            {
                name: "casette",
                link: "https://commons.wikimedia.org/wiki/File:Audio_cassette.png"
            },
            {
                name: "pink bow",
                link: "https://www.seekpng.com/ipng/u2q8a9a9o0a9u2q8_pink-bow-ribbon-transparent-image-pink-bow-png/"
            },
            {
                name: "ege bamyasi can",
                link: "https://americanhitnetwork.com/shows/the-alternative-top-40/ege-bamyasi-can/2021-12-15"
            },
            {
                name: "manatees",
                link: "https://keysklubhouse.com/goodies/stickers.html"
            },
            {
                name: "orange-a-proud",
                link: "https://keysklubhouse.com/goodies/stickers.html"
            },
            {
                name: "great!",
                link: "https://keysklubhouse.com/goodies/stickers.html"
            },
            {
                name: "luna moth",
                link: "https://www.etsy.com/listing/648397449/luna-moth-vinyl-sticker"
            },
            {
                name: "green fruit sticker",
                link: "https://www.instagram.com/p/CQZefw7nbmV"
            },
            {
                name: "hannah peel fruit sticker",
                link: "https://www.instagram.com/p/CM5S45_HK-z"
            },
            {
                name: "sudtirol/ladybug fruit sticker",
                link: "https://www.instagram.com/p/CH9x4i2HPAz"
            },
            {
                name: "yellow stars",
                link: "https://www.redbubble.com/i/sticker/Yellow-stars-by-FeulleDor/51320180.O9UDB"
            }
        ]
    },
    {
        title: "soundtrack II",
        tracks: ['"Twin Tales" - LUCHS', '"Her Eyes the Stars" - LUCHS', '"Fallss" - Bayonne', '"Consonance" - Golden Retriever', "and more..."],
        link: "https://open.spotify.com/playlist/62ecsvRzGoziOsi38RtxjJ?si=0f1a8b69dda64f59",
        image: soundtrack2,
        stickerSources: [
            {
                name: "CD blank",
                link: "https://pngimg.com/image/102166"
            },
            {
                name: "moon",
                link: "https://www.flickr.com/photos/still_loony/21855331040"
            }
        ]
    },
    {
        title: "soundtrack 3!",
        tracks: ['"Rebel Girl" - Bikini Kill', '"Labour Of Love" - Hue and Cry', '"Restless Year" - Ezra Furman', '"This Is the Day" - The The', 'and more...'],
        link: "https://open.spotify.com/playlist/7t9N2Jm4R1pNqkuJS8iBbr?si=219b841fa5004c2f",
        image: soundtrack3,
        stickerSources: [
            {
                name: "CD blank",
                link: "https://pngimg.com/image/102166"
            },
            {
                name: "desert road",
                link: "https://www.dangerous-business.com/california-desert-road-trip-itinerary"
            },
            {
                name: "Gibson Les Paul guitar",
                link: "https://www.stars-music.com/gibson-modern-les-paul-classic-2019-trans-cherry_158249.html"
            },
            {
                name: "neon bar sign",
                link: "https://www.etsy.com/listing/1048351933/custom-neon-sign-for-coffee-shop"
            },
            {
                name: "cutout letters",
                link: "https://www.vecteezy.com/vector-art/16181968-vector-ransom-font-letters-cut-outs-from-newspaper-or-magazine-character-set-criminal-alphabet-ransom-colorful-text"
            }
        ]
    },
];

function changeDisplay(id){
    const elem = document.getElementById(id);
    let vis = elem.style.visibility;
    if(vis === "visible"){
        elem.style.visibility = "hidden";
    } else{
        elem.style.visibility = "visible";
    }
}

export const cdList = playlists.map((cd, index) => 
    {
        const modal = (
            <div className="cdTileModal" id={`modal${index}`}>
                <div className="cdTileTopRow">
                    <p className="cdTileTitle">{cd.title}</p>
                    <button className="cdTileCloseButton" onClick={() => changeDisplay(`modal${index}`)}>close</button>
                </div>
                <a href={cd.link} target="_blank" rel="noreferrer">open on Spotify</a>
                <br/><br/>
                <p>tracklist:</p>
                <ul className="cdTileTracklist">
                    {cd.tracks.map((track, index) => <li key={index}>{track}</li>)}
                </ul>
                <br/>
                <div className="cdTileStickerSources">
                    <p className="cdTileStickerSourceHeader">image sources:</p>
                    {cd.stickerSources.map((source, index) => 
                        <a className="cdTileStickerSource" href={source.link} key={index} target="_blank" rel="noreferrer">{source.name}</a>
                    )}
                </div>
            </div>
        );
        if(index%2 === 0 || window.screen.width < 768){
            return (
                <div className="cdTile" key={index}>
                    <img className="cdTileImage" src={cd.image} onClick={() => changeDisplay(`modal${index}`)} alt="a silver-colored CD covered with a collage of stickers" />
                    {modal}
                </div>
            );
        }
        else{
            return(
                <div className="cdTile" key={index}>
                    {modal}
                    <img className="cdTileImage" src={cd.image} onClick={() => changeDisplay(`modal${index}`)} alt="a silver-colored CD covered with a collage of stickers" />
                </div>
            );
        }
    }
);

/*
TEMPLATE PLAYLIST ITEM
{
    title: "",
    tracks: [],
    link: "",
    image: "",
    stickerSources: [
        {
            name: "CD blank",
            link: "https://pngimg.com/image/102166"
        }
    ]
},
*/