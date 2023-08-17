import './Navbar.css';
import { cowGif, rainbowStars } from '../../assets';
import { CgMenuBoxed } from 'react-icons/cg';
import { IconContext } from "react-icons";
import { useState } from 'react';

function MenuIcon(){
  return(
    <IconContext.Provider value={{className: "iconStyle"}}>
        <CgMenuBoxed/>
    </IconContext.Provider>
  );
}

function NavSeparator(){
    return(<p className="navSeparator">-------------------------------</p>);
}


export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
    <nav className={isNavExpanded ? "nav expanded" : "nav"}>
        <button className="menuIcon" onClick={() => {setIsNavExpanded(!isNavExpanded);}} >
            <MenuIcon/>
        </button>
        <div className={isNavExpanded ? "navHeader expanded" : "navHeader"}>
            <img src={cowGif} alt="black and white cow turning its head"/>
            <div className="navHeaderText">
                <h1 id="navTitle">grace-manning.com</h1>
                <h2 id="navSubtitle">...where dreams come true!</h2>
            </div>
        </div>
        <div className={isNavExpanded ? "navStars expanded" : "navStars"}><img src={rainbowStars} alt="line of rainbow stars"/></div>
        <ul className={isNavExpanded ? "navLinks expanded" : "navLinks"}>
            <p><b>personal</b></p>
            <li className="navLink">★
                <a href="/">home</a>
            </li>
            <li className="navLink">★
                <a href="/about">about</a>
            </li>
            <li className="navLink">★
                <a href="/blog">blog</a>
            </li>
            <li className="navLink">★
                <a href="/videos">videos</a>
            </li>
            <li className="navLink">★
                <a href="/favorites">my favorites</a>
            </li>
            <NavSeparator/>
            <p><b>software projects</b></p>
            <li className="navLink">★
                <a href="/cowculator">cowculator</a>
            </li>
            <li className="navLink">★
                <a href="/undergrad-research">research</a>
            </li>
            <NavSeparator/>
            <p><b>fun stuff</b></p>
            <li className="navLink">★
                <a href="/fortune-teller">fortune teller</a>
            </li>
            <NavSeparator/>
            <p><b>miscellaneous</b></p>
            <li className="navLink">★
                <a href="/asset-sources">asset sources</a>
            </li>
        </ul>
        <div className={isNavExpanded ? "navStars expanded" : "navStars"}><img src={rainbowStars} alt="line of rainbow stars"/></div>
    </nav>
  );
}