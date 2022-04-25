import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { styled } from '@mui/material/styles';
import TableHead from '@mui/material/TableHead';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import rightarrow from '../../../assets/rightarrow.png';
import './Cluster.scss';
import axios from 'axios';

const Cluster = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#F0F2F4',
    },
  }));

  const StyledTableRow = styled(TableRow)(() => ({
    '&:nth-of-type(odd)': {
      backgroundColor: '#F9FAFB',
    },

    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  const [rows, setRows] = React.useState(null);
  let moneyLocale = Intl.NumberFormat('en-US');

  React.useEffect(() => {
    const fetchCluster = async () => {
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
        .then(
        //   response => {
        //   if (response.status < 200 || response.status >= 400) {
        //     throw response.message
        //   }
        // }
        )
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

      console.log(response.cluster.items);

      setRows(response.cluster.items);
    };

    fetchCluster();
  }, []);

  if (!rows) {
    return (
      <div className="loading-spinner">
        <CircularProgress />
      </div>
    );
  } else {
    return (
      <div>
        <TableContainer component={Paper} className="table">
          <Table sx={{ width: '100%' }} aria-label="simple table">
            <TableHead>
              <TableRow className="tableHead">
                <StyledTableCell className="tableHead">
                  Cluster ID
                </StyledTableCell>
                <StyledTableCell className="tableHead">
                  Cluster name
                </StyledTableCell>
                <StyledTableCell className="tableHead">
                  Cluster Lead
                </StyledTableCell>
                <StyledTableCell className="tableHead">
                  Cluster Score
                </StyledTableCell>
                <StyledTableCell className="tableHead">Members</StyledTableCell>
                <StyledTableCell className="tableHead">
                  Cummulative loan limit
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <TableCell className="tableCell">{row.id}</TableCell>
                  <TableCell className="tableCell">{row.name}</TableCell>
                  <TableCell className="tableCell">{row.lead}</TableCell>
                  <TableCell className="tableCell">{row.score}</TableCell>
                  <TableCell className="tableCell">{row.members}</TableCell>
                  <TableCell className="tableCell bold">
                    <div className="cellWrapper">
                      N{moneyLocale.format(row.cummilative_loan_limit)}
                      <img src={rightarrow} alt="" className="image" />
                    </div>
                  </TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </div>
    );
  }
};

export default Cluster;
