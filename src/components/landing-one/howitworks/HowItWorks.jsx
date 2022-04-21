import howBackground from '../../../assets/howitwork-section.png';
import howitwork from '../../../assets/howitwork.png';
import nbc from '../../../assets/nbc.png';
import fox from '../../../assets/fox.png';
import cbs from '../../../assets/cbs.png';
import usatoday from '../../../assets/usatoday.png';
import './HowItWorks.scss';
const HowItWorks = () => {
  return (
    <div
      className="howitwork-section"
      style={{ backgroundImage: `url(${howBackground})` }}
    >
      <div
        className="howitwork"
        style={{ backgroundImage: `url(${howitwork})` }}
      >
        <h2 className="heading">How it works</h2>
        <p className="note">
          We help stylists own their narrative, build an empire and be their own
          boss
        </p>
        <div className="cards">
          <div className="card">
            <p className="heading">Earn</p>
            <p className="note">
              Earn a 40% commission on products you sell to your customers
            </p>
          </div>
          <div className="card card--white">
            <p className="heading">Collect</p>
            <p className="note">
              No dongle or hardware needed. All you need to collect payments is
              your iphone
            </p>
          </div>
          <div className="card">
            <p className="heading">Thrive</p>
            <p className="note">
              Withdraw cash out of your account whenever you want
            </p>
          </div>
        </div>
      </div>
      <div className="sponsors">
        <img src={nbc} alt="sponsor" />
        <img src={fox} alt="sponsor" />
        <img src={cbs} alt="sponsor" />
        <img src={usatoday} alt="sponsor" />
        <img src={nbc} alt="sponsor" />
        <img src={fox} alt="sponsor" />
      </div>
    </div>
  );
};

export default HowItWorks;
