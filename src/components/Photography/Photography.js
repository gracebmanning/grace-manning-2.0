import './Photography.css';
import { galleryInfo, gallery } from './Gallery';
import { useState, useCallback } from 'react';
import ReactSimpleImageViewer from 'react-simple-image-viewer';

export function PhotoTile({image, onClick, info}){
  return(
    <div className="photoTile">
      <img className="photo" src={image} alt={info.alt} onClick={onClick} />
      <p><i>{info.title}</i></p>
      <p style={{fontSize: '16px'}}>{info.location}. {info.date}.</p>
    </div>
  )
}

export default function Photography() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  
  return (
    <div className="mainContent">
        <div className="contentBoxCenter">
          <p>
            thanks for checking out my photos! view my <a href="https://society6.com/gracemanning" target="_blank" rel="noreferrer">shop</a> to purchase a print!
          </p>
          <br/>
          <div className="photoGallery">
            {gallery.map((image, index) => (
                <PhotoTile 
                  key={index}
                  image={image} 
                  onClick={() => openImageViewer(index)}
                  info={galleryInfo.at(index)}
                />
            ))}
            {isViewerOpen && (
              <ReactSimpleImageViewer
                src={ gallery }
                currentIndex={ currentImage }
                disableScroll={ false }
                closeOnClickOutside={ true }
                onClose={ closeImageViewer }
              />
            )}
          </div>
        </div>
    </div>
  );
}