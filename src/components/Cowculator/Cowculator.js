import './Cowculator.css';
import { blueMain, blueSettings, blueHistory, pinkMain, pinkSettings, pinkHistory } from '../../assets';
import { useState, useCallback } from 'react';
import ReactSimpleImageViewer from 'react-simple-image-viewer';

const previews = [blueMain, blueSettings, blueHistory, pinkMain, pinkSettings, pinkHistory];

let googlePlayBadge = "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png";
let cowculatorGooglePlay = "https://play.google.com/store/apps/details?id=com.gracemanning.cowculator&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1";

export default function Cowculator() {
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
          <h1>Cowculator</h1>
          <div className="cowculatorBody">
            <div className="previewImages">
              {previews.map((image, index) => (
                  <img 
                    key={index}
                    className="previewImage"
                    src={image}
                    alt="calculator with cow spot shaped buttons"
                    onClick={() => openImageViewer(index)}
                  />
              ))}
              {isViewerOpen && (
                <ReactSimpleImageViewer
                  src={ previews }
                  currentIndex={ currentImage }
                  disableScroll={ false }
                  closeOnClickOutside={ true }
                  onClose={ closeImageViewer }
                />
              )}
            </div>
            <div className="cowculatorText">
              <div className="appStoreText">
                <p>
                  A cow-themed calculator, currently available on Android!
                  <a href={cowculatorGooglePlay} target="_blank" rel="noreferrer">
                    <img className="googlePlayBadge" alt='Get it on Google Play' src={googlePlayBadge} />
                  </a>
                </p>
                <p>
                  iOS publishing is in progress.
                </p>
              </div>
              <div className="tileContainer">
                <a className="tileLink" href="cowculator/support">
                  <div className="buttonTile">Support</div>
                </a>
                <a className="tileLink" href="cowculator/privacy">
                  <div className="buttonTile">Privacy Policy</div>
                </a>
              </div>
            </div>
          </div>
          <br/><br/>
          <p>Google Play and the Google Play logo are trademarks of Google LLC.</p>
      </div>
    </div>
  );
}