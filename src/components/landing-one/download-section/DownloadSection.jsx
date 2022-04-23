import appstoreblack from '../../../assets/appstore-black.png';
import phone3 from '../../../assets/phone3.png';
import phone4 from '../../../assets/phone4.png';
import arrow from '../../../assets/squiggly.png';
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
      <img
        className="appstoreBlack"
        src={appstoreblack}
        alt="download from apple store"
      />
      <div className="phone3">
        <img src={phone3} alt="phone" />
      </div>
      <div className="phone4">
        <img src={phone4} alt="phone" />
      </div>
      <img className="arrow" src={arrow} alt="" />
    </div>
  );
};

export default DownloadSection;
