import './Music.css';
import { walkman } from '../../assets/images';
import { cdList } from './playlists';
import { wrapIndividualLetters } from '../utilityFunctions';
import Navbar from '../Navbar/Navbar';

export default function Music() {
  return (
    <div className="container music">
      <Navbar/>
      <div className="mainContent">
        <div id="musicHeader">
          <div id="musicHeaderText">
            {wrapIndividualLetters("Grace's Music Catalog", "musicHeaderLetter")}
          </div>
          <img id="walkman" src={walkman} alt="blue Sony Walkman with headphones attached" />
        </div>
        <div id="cdSection">
          {cdList}
        </div>
      </div>
    </div>
  );
}
/*
<span className="musicHeaderLetter">G</span>
            <span className="musicHeaderLetter">r</span>
            <span className="musicHeaderLetter">a</span>
            <span className="musicHeaderLetter">c</span>
            <span className="musicHeaderLetter">e</span>
            <span className="musicHeaderLetter">'</span>
            <span className="musicHeaderLetter">s</span>
            <span className="musicHeaderLetter"> </span>
            <span className="musicHeaderLetter">M</span>
            <span className="musicHeaderLetter">u</span>
            <span className="musicHeaderLetter">s</span>
            <span className="musicHeaderLetter">i</span>
            <span className="musicHeaderLetter">c</span>
            <span className="musicHeaderLetter"> </span>
            <span className="musicHeaderLetter">C</span>
            <span className="musicHeaderLetter">a</span>
            <span className="musicHeaderLetter">t</span>
            <span className="musicHeaderLetter">a</span>
            <span className="musicHeaderLetter">l</span>
            <span className="musicHeaderLetter">o</span>
            <span className="musicHeaderLetter">g</span>
            */