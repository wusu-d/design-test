import logo from '../../../assets/konfamlogo.png';
import { ReactComponent as DashboardSVG } from '../../../assets/dashboard.svg';
import { ReactComponent as ClusterSVG } from '../../../assets/cluster.svg';
import { ReactComponent as TransactionSVG } from '../../../assets/transactions.svg';
import { ReactComponent as SettingSVG } from '../../../assets/setting.svg';
import { ReactComponent as CollapseSVG } from '../../../assets/collapse.svg';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <img className="konfamlogo" src={logo} alt="konfam logo" />
        <div className="dot"></div>
      </div>
      <div className="main">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardSVG />
            <span>Dashboard</span>
          </li>
          <li>
            <ClusterSVG />
            <span>Cluster</span>
          </li>
          <li>
            <ClusterSVG />
            <span>Loans</span>
          </li>
          <li>
            <ClusterSVG />
            <span>Customers</span>
          </li>
          <li>
            <TransactionSVG />
            <span>Transactions</span>
          </li>
          <li>
            <TransactionSVG />
            <span>Invitations</span>
          </li>
          <p className="title">ACCOUNTS</p>
          <li>
            <SettingSVG />
            <span>Settings</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="collapse">
          <CollapseSVG />
          Collapse
        </div>
        <div>Logout</div>
      </div>
    </div>
  );
};

export default Sidebar;
