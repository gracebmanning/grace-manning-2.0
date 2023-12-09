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
        <p id="musicTagline">Click the CDs to view playlists. Check back for more later!</p>
        <div id="cdSection">
          {cdList}
        </div>
      </div>
    </div>
  );
}