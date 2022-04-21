import { ReactComponent as MessageSVG } from '../../../assets/message.svg';
import { ReactComponent as NotificationSVG } from '../../../assets/notification.svg';
import { ReactComponent as ArrowDownSVG } from '../../../assets/arrowdown.svg';
import { ReactComponent as SearchSVG } from '../../../assets/search.svg';
import avatar from '../../../assets/avatar.png';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="heading">DASHBOARD</div>
        <div className="search">
          <input type="text" placeholder="Search" />
          <SearchSVG />
        </div>
        <div className="items">
          <div className="item">
            <MessageSVG />
          </div>
          <div className="item">
            <NotificationSVG />
          </div>
          <div className="user">
            <div className="name">Lanre Olugbade</div>
            <div className="avatar">
              <img src={avatar} alt="user avatar" />
            </div>
            <ArrowDownSVG />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
