import Cluster from '../../components/dashboard/cluster/Cluster';
import Navbar from '../../components/dashboard/navbar/Navbar';
import Sidebar from '../../components/dashboard/sidebar/Sidebar';
import Widget from '../../components/dashboard/widget/Widget';
import { ReactComponent as DownSVG } from '../../assets/downarrow.svg';
import './Dashboard.scss';
const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard__container">
        <Navbar />
        <div className="range">
          Date Range: All Time <DownSVG className="range__arrow" />
        </div>
        <div className="widgets">
          <Widget title="Total loan collected" amount="N100,000,000" />
          <Widget title="Total loan repayed" amount="N90,000,000" />
          <Widget title="Repayment Due" amount="N10,000,000" />
          <Widget title="Pending loans" amount="200" />
          <Widget title="Approved loans" amount="1,200" />
          <Widget title="Total No of clusters" amount="6,000" />
          <Widget title="Total no of customers" amount="20,000" />
        </div>
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
