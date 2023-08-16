import './404.css'
import { butterfly } from '../../assets';

export default function PageDoesNotExist(){
    return(
        <div className="mainContent">
            <div className="contentBoxCenter">
                <p id="warningText">oops! This page doesn't exist.</p>
                <img id="butterflyGif" src={butterfly} alt="an iridescent color-changing butterfly flapping its wings" />
            </div>
        </div>
    );
}