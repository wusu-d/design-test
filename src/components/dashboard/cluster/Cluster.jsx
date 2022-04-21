import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { styled } from '@mui/material/styles';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
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
        .catch((err) => console.log(err));

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
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 1150 }} aria-label="simple table">
          <TableHead>
            <TableRow className="tableHead">
              <TableCell className="tableHead">Cluster ID</TableCell>
              <TableCell className="tableHead">Cluster name</TableCell>
              <TableCell className="tableHead">Cluster Lead</TableCell>
              <TableCell className="tableHead">Cluster Score</TableCell>
              <TableCell className="tableHead">Members</TableCell>
              <TableCell className="tableHead">
                Cummulative loan limit
              </TableCell>
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
                    ₦{moneyLocale.format(row.cummilative_loan_limit)}
                    <img src={rightarrow} alt="" className="image" />
                  </div>
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </Table>
      </TableContainer>
    );
  }
};

export default Cluster;
