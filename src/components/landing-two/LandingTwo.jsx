import appstoreBlack from '../../assets/appstore-black.png';
import phone1 from '../../assets/phone5.png';
import phone2 from '../../assets/phone6.png';
import phone3 from '../../assets/phone7.png';
import phone4 from '../../assets/phone8.png';
import payment from '../../assets/payment.png';
import logo from '../../assets/xsissors-1.png';
import gradient1 from '../../assets/gradient-1.png';
import money from '../../assets/money.png';
import wallet from '../../assets/wallet.png';
import chart from '../../assets/chart.png';
import gradient2 from '../../assets/gradient2.png';
import nbc from '../../assets/nbc.png';
import fox from '../../assets/fox.png';
import cbs from '../../assets/cbs.png';
import usatoday from '../../assets/usatoday.png';
import logo1 from '../../assets/xsissors-2.png';
import crown from '../../assets/crwnBlack.png';
import { ReactComponent as TwitterSVG } from '../../assets/twitter.svg';
import { ReactComponent as FacebookSVG } from '../../assets/facebook.svg';
import { ReactComponent as InstagramSVG } from '../../assets/instagram.svg';
import ReviewSection from '../landing-one/review-section/ReviewSection';
import './LandingTwo.scss';
import { Link } from 'react-router-dom';

const LandingTwo = () => {
  return (
    <div className="landing">
      <img className="gradient-1" src={gradient1} alt="" />
      <div className="head">
        <div className="top">
          <img src={logo} alt="" />
          <div>hello@xsissors.co</div>
        </div>
        <h1 className="heading">
          Get 40% <br />
          commission <br />
          for your sales
          <span>
            <img src={crown} alt="" />
          </span>
        </h1>
        <p className="note">
          We help stylists own their narrative, build <br />
          an empire and be their own boss
        </p>
        <img src={appstoreBlack} alt="" />
        <img className="phone1" src={phone1} alt="phone showing some info" />
        <img className="phone2" src={phone2} alt="phone showing some info" />
      </div>

      <div className="howitworks">
        <img className="gradImg" src={gradient2} alt="" />
        <div className="howitwork">
          <h2 className="heading">How it works</h2>
          <p className="note">
            We help stylists own their narrative, build an empire and be their
            own boss
          </p>
          <div className="cards">
            <div className="card">
              <img src={money} alt="" className="cardImg" />
              <p className="heading">Earn</p>
              <p className="note">
                Earn a 40% commission on products you sell to your customers
              </p>
            </div>
            <div className="card">
              <img src={wallet} alt="" className="cardImg" />
              <p className="heading">Collect</p>
              <p className="note">
                No dongle or hardware needed. All you need to collect payments
                is your iphone
              </p>
            </div>
            <div className="card">
              <img src={chart} alt="" className="cardImg cardImg--chart" />
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

      <ReviewSection />

      <div className="download-section">
        <h2>Download Xissors Mobile App</h2>
        <p>Download Xissors App on any iPhone from the App Store</p>
        <img src={appstoreBlack} alt="download from apple store" />
        <div className="phone3">
          <img src={phone3} alt="phone" />
        </div>
        <div className="phone4">
          <img src={phone4} alt="phone" />
        </div>
        <div className="payment">
          <img src={payment} alt="phone" />
        </div>
      </div>

      <footer className="footer">
        <div className="footerWrapper">
          <div>
            <img src={logo1} alt="" />
          </div>
          <div className="bottom">
            <div className="left">
              <p className="questions">Got Questions?</p>
              <p className="email">hello@xissors.com</p>
            </div>
            <div className="right">
              <div className="socials">
                <FacebookSVG />
                <InstagramSVG />
                <TwitterSVG />
              </div>
              <p className="copyright">© Xissors 2022</p>
            </div>
          </div>
          <div className="footlinks">
            <Link to="/dashboard">Next Page</Link>
            <Link to="/">Back</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingTwo;
