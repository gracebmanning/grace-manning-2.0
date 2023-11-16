import '../Blog.css';
import { linefontCover } from '../../../assets/blog-images/blogCoverImages';
import linefont from '../../../assets/blog-images/linefont/linefont.png';
import { blogPost } from './posts.js';

const content = 
    <div>
        <img src={linefont} style={{width: '90%'}} alt="straight lines going up, down, across, and diagonally, but all connected" />
        <p>
            New font alert!!!! This one is called Linefont, available on <a href="https://fonts.google.com/specimen/Linefont" target="_blank" rel="noreferrer">Google Fonts</a>.
            It was created by Dmitry Ivanov, who created a similary cool font called <a href="https://fonts.google.com/specimen/Wavefont" target="_blank" rel="noreferrer">Wavefont</a>.
            <br/><br/>
            Linefont creates a point at a different height depending on the letter or symbol you type. When characters are next to each other, they are connected by a line. The space character will separate them with one unit of space. You can create some fun designs with this, and I'd recommend going into Google Fonts and testing it out with different preview texts.
            <br/><br/>
            You can also explore this font at the artist's <a href="https://dy.github.io/linefont/scripts/" target="_blank" rel="noreferrer">test page</a>, which allows you to select anywhere on the page and start typing to see how the lines change.
            <br/><br/>
            What's cool about Google Fonts is that you can implement this in any project for free, and you don't have to install anything for this to work. Time to test it out:
        </p>
        <p style={{fontFamily: "'Linefont'", fontSize: '36px'}}>
            iamtypingasentenceinlinefontrightnow. This is what it looks like when I include spaces! AAAAAAaaaaaaaaaa!
        </p>
        
        <p>
            " iamtypingasentenceinlinefontrightnow. This is what it looks like when I include spaces! AAAAAAaaaaaaaaaa! "
        </p>
    </div>;

export const linefontInfo = {
    title: "Cool Font Alert: Linefont",
    date: "November 7, 2023",
    preview: linefontCover,
    alt: "",
    content: content,
    path: "/blog/linefont",
    prev: "/blog/graduated",
    next: "/blog"
}

export default function Linefont() {
  return blogPost(linefontInfo);
}