import { Link } from 'react-router-dom';
import logo from '../../../assets/xissors.png';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="" />
      <p className="questions">Got Questions?</p>
      <p className="email">hello@xissors.com</p>
      <p className="copyright">© Xissors 2022</p>
      <Link className="next" to="/landing-page2">
        Next Page
      </Link>
    </footer>
  );
};

export default Footer;
