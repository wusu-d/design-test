import appstore from '../../../assets/appstore.png';
import crown from '../../../assets/crown.png';
import phone1 from '../../../assets/phone1.png';
import phone2 from '../../../assets/phone2.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import './Header.scss';
const Header = () => {
  return (
    <div
      className="header"
      style={{ backgroundImage: `url(./assets/headerImg.svg)` }}
    >
      <div className="logo">
        <img src="./assets/logo-1.svg" alt="logo" />
      </div>
      <h1 className="heading">
        Get 40% commission for your sales
        <span>
          <img src={crown} alt="" />
        </span>
      </h1>

      <p className="note">
        We help stylists own their narrative, build an empire and be their own
        boss
      </p>
      <LazyLoadImage className="appstore" src={appstore} effect="blur" />
      <div className="phone1">
        <LazyLoadImage src={phone1} effect="blur" />
      </div>
      <div className="phone2">
        <LazyLoadImage src={phone2} effect="blur" />
      </div>
    </div>
  );
};

export default Header;
