import './Landing.css';
import { open24 } from '../../assets/gifs/gifsindex';

export default function Landing() {
  return (
    <div className="landing-container">
      <h1>click here to enter...</h1>
      <br/>
      <a className="entry-link" href="/home">
        <img className="open24hours" src={open24} alt="an iridescent color-changing butterfly flapping its wings" />
      </a>
    </div>
  );
}