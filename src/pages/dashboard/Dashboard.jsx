import Cluster from '../../components/dashboard/cluster/Cluster';
import Navbar from '../../components/dashboard/navbar/Navbar';
import Sidebar from '../../components/dashboard/sidebar/Sidebar';

import { ReactComponent as DownSVG } from '../../assets/downarrow.svg';
import './Dashboard.scss';
import WidgetContainer from '../../components/dashboard/widget-container/WidgetContainer';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard__container">
        <Navbar />
        <div className="range">
          Date Range: All Time <DownSVG className="range__arrow" />
        </div>
        <WidgetContainer />
        <div className="listContainer">
          <div className="listTitle">
            All Clusters <span>View All</span>
          </div>
          <Cluster />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
