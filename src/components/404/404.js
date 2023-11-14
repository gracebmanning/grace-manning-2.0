import './404.css'
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { butterfly } from '../../assets/gifs/gifsindex';

export default function PageDoesNotExist(){
    return(
        <div className="container">
            <Navbar/>
            <div className="mainContent">
                <div className="contentBoxCenter">
                    <p id="warningText">oops! This page doesn't exist.</p>
                    <img id="butterflyGif" src={butterfly} alt="an iridescent color-changing butterfly flapping its wings" />
                </div>
            </div>
            <Sidebar/>
        </div>
    );
}