import './Photography.css';
import { galleryInfo } from './Gallery';

export function PhotoTile({image, title, location, date, link, alt}){
  return(
    <div className="photoTile">
      <a href={link} target="_blank" rel="noreferrer">
        <img className="photo" src={image} alt={alt} />
      </a>
      <p><i>{title}</i></p>
      <p style={{fontSize: '16px'}}>{location}. {date}.</p>
    </div>
  )
}

export default function Photography() {
  return (
    <div className="mainContent">
        <div className="contentBoxCenter">
          <div className="photoGallery">
            {galleryInfo.map(function(item){
              return(
                <PhotoTile image={item.image} title={item.title} location={item.location} date={item.date} link={item.link} alt={item.alt} />
              )
            })}
          </div>
        </div>
    </div>
  );
}