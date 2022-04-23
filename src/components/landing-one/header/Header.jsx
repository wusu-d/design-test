import headerImg from '../../../assets/header.png';
import logo from '../../../assets/xissors.png';
import appstore from '../../../assets/appstore.png';
import crown from '../../../assets/crown.png';
import phone1 from '../../../assets/phone1.png';
import phone2 from '../../../assets/phone2.png';
import './Header.scss';
const Header = () => {
  return (
    <div className="header" style={{ backgroundImage: `url(${headerImg})` }}>
      <div className="logo">
        <img src={logo} alt="logo" />
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
      <img className="appstore" src={appstore} alt="download from app store" />
      <div className="phone1">
        <img src={phone1} alt="phone" />
      </div>
      <div className="phone2">
        <img src={phone2} alt="phone" />
      </div>
    </div>
  );
};

export default Header;
