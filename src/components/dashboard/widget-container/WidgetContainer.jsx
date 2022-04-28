import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Widget from '../widget/Widget';
import axios from 'axios';
import './WidgetContainer.scss';

const WidgetContainer = () => {
  const [summary, setSummary] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  let moneyLocale = Intl.NumberFormat('en-US');

  useEffect(() => {
    const fetchSummary = async () => {
      const {
        data: { response },
      } = await axios
        .get('https://admin.welkom-u.ca/api/data:get', {
          params: {
            page: 1,
            pageSize: 10,
          },
          headers: {
            Authorization: `Bearer a56d34d777288aa5e18adfb06d2806e88283ec6e`,
          },
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });

      console.log(response);
      setSummary(response.summary);
      setLoading(false);
    };

    fetchSummary();
  }, []);

  if (loading) {
    return (
      <div className="loading-spinner">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-ms">
        ⚠️{error}⚠️<p>Oops something went wrong</p>
      </div>
    );
  }

  return (
    <div className="widgets">
      <Widget
        title="Total loan collected"
        amount={`N${moneyLocale.format(summary.total_loan_collected)}`}
      />
      <Widget
        title="Total loan repayed"
        amount={`N${moneyLocale.format(summary.total_loan_repayed)}`}
      />
      <Widget
        title="Repayment Due"
        amount={`N${moneyLocale.format(summary.repayment_due)}`}
      />
      <Widget
        title="Pending loans"
        amount={`${moneyLocale.format(summary.pending_loans)}`}
      />
      <Widget
        title="Approved loans"
        amount={`${moneyLocale.format(summary.approved_loans)}`}
      />
      <Widget
        title="Total No of clusters"
        amount={`${moneyLocale.format(summary.total_clusters)}`}
      />
      <Widget
        title="Total no of customers"
        amount={`${moneyLocale.format(summary.total_customers)}`}
      />
    </div>
  );
};

export default WidgetContainer;
