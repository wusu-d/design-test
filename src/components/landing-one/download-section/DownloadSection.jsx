import appstoreblack from '../../../assets/appstore-black.png';
import phone3 from '../../../assets/phone3.png';
import phone4 from '../../../assets/phone4.png';
import arrow from '../../../assets/squiggly.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './DownloadSection.scss';

const DownloadSection = () => {
  return (
    <div className="download-section">
      <h2>
        Download Xissors <br /> Mobile App
      </h2>
      <p>
        Download Xissors App on any iPhone from <br />
        the App Store
      </p>
      <LazyLoadImage
        className="appstoreBlack"
        src={appstoreblack}
        alt="download from apple store"
        effect="blur"
      />
      <div className="phone3">
        <LazyLoadImage src={phone3} alt="phone" effect="blur" />
      </div>
      <div className="phone4">
        <LazyLoadImage src={phone4} alt="phone" effect="blur" />
      </div>
      <img className="arrow" src={arrow} alt="" effect="blur" />
    </div>
  );
};

export default DownloadSection;
