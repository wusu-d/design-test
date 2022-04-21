import Cluster from '../../components/dashboard/cluster/Cluster';
import Navbar from '../../components/dashboard/navbar/Navbar';
import Sidebar from '../../components/dashboard/sidebar/Sidebar';
import Widget from '../../components/dashboard/widget/Widget';
import './Dashboard.scss';
const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard__container">
        <Navbar />
        <div className="widgets">
          <Widget title="Total loan collected" amount="₦100,000,000" />
          <Widget title="Total loan repayed" amount="₦90,000,000" />
          <Widget title="Repayment Due" amount="₦10,000,000" />
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
