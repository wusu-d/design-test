import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Widget from '../widget/Widget';
import axios from 'axios';
import './WidgetContainer.scss';

const WidgetContainer = () => {
  const [summary, setSummary] = useState(null);
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
        .then
        //   response => {
        //   if (response.status < 200 || response.status >= 400) {
        //     throw response.message
        //   }
        // }
        ()
        .catch((err) => {
          if (err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
          } else if (err.request) {
            console.log(err.request);
          } else {
            // Something happened in setting up the request that triggered an Err
            console.log('Err', err.message);
          }
          throw err.message;
        });

      console.log(response.summary);

      setSummary(response.summary);
    };

    fetchSummary();
  }, []);

  if (!summary) {
    return (
      <div className="loading-spinner">
        <CircularProgress />
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
