import { ReactComponent as GraphSVG } from '../../../assets/graph.svg';
import './Widget.scss';

const Widget = ({ title, amount }) => {
  return (
    <div className="widget">
      <div className="top">
        <div>{title}</div>
        <GraphSVG />
      </div>
      <div className="amount">{amount}</div>
    </div>
  );
};

export default Widget;
