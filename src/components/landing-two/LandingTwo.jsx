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
import arrow from '../../assets/squiggly.png';
import { ReactComponent as TwitterSVG } from '../../assets/twitter.svg';
import { ReactComponent as FacebookSVG } from '../../assets/facebook.svg';
import { ReactComponent as InstagramSVG } from '../../assets/instagram.svg';
import ReviewSection from '../landing-one/review-section/ReviewSection';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
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
        <LazyLoadImage
          effect="black-and-white"
          className="appstoreBlack"
          src={appstoreBlack}
          alt=""
        />
        <LazyLoadImage
          effect="black-and-white"
          className="phone1"
          src={phone1}
          alt="phone showing some info"
        />
        <LazyLoadImage
          effect="black-and-white"
          className="phone2"
          src={phone2}
          alt="phone showing some info"
        />
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
              <LazyLoadImage
                effect="opacity"
                src={money}
                alt=""
                className="cardImg"
              />
              <p className="heading">Earn</p>
              <p className="note">
                Earn a 40% commission on products you sell to your customers
              </p>
            </div>
            <div className="card">
              <LazyLoadImage
                effect="opacity"
                src={wallet}
                alt=""
                className="cardImg"
              />
              <p className="heading">Collect</p>
              <p className="note">
                Collect payments with only a tap from your phone. No hardware
                needed
              </p>
            </div>
            <div className="card">
              <LazyLoadImage
                effect="opacity"
                src={chart}
                alt=""
                className="cardImg cardImg--chart"
              />
              <p className="heading">Thrive</p>
              <p className="note">
                Manage your earnings, customers and transactions, all from one
                app
              </p>
            </div>
          </div>
        </div>
        <div className="sponsors">
          <LazyLoadImage
            effect="opacity"
            className="nbc"
            src={nbc}
            alt="sponsor"
          />
          <LazyLoadImage
            effect="opacity"
            className="fox"
            src={fox}
            alt="sponsor"
          />
          <LazyLoadImage
            effect="opacity"
            className="cbs"
            src={cbs}
            alt="sponsor"
          />
          <LazyLoadImage
            effect="opacity"
            className="usatoday"
            src={usatoday}
            alt="sponsor"
          />
          <LazyLoadImage
            effect="opacity"
            className="nbc"
            src={nbc}
            alt="sponsor"
          />
          <LazyLoadImage
            effect="opacity"
            className="fox"
            src={fox}
            alt="sponsor"
          />
        </div>
      </div>

      <ReviewSection />

      <div className="download-section">
        <h2>
          Download Xissors <br /> Mobile App
        </h2>
        <p>
          Download Xissors App on any iPhone <br />
          from the App Store
        </p>
        <LazyLoadImage
          effect="blur"
          className="storeBlack"
          src={appstoreBlack}
          alt="download from apple store"
        />
        <div className="phone3">
          <LazyLoadImage effect="blur" src={phone3} alt="phone" />
        </div>
        <div className="phone4">
          <LazyLoadImage effect="blur" src={phone4} alt="phone" />
        </div>
        <div className="payment">
          <LazyLoadImage effect="blur" src={payment} alt="phone" />
        </div>
        <img className="arrow" src={arrow} alt="" />
      </div>

      <footer className="footer">
        <div className="footerWrapper">
          <div>
            <LazyLoadImage
              effect="black-and-white"
              className="logo1"
              src={logo1}
              alt=""
            />
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
              <p className="copyright">?? Xissors 2022</p>
            </div>
          </div>
          <div className="footlinks">
            <Link to="/">Back</Link>
            <Link to="/dashboard">Next Page</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingTwo;
