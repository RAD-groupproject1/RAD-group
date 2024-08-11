import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(StudentNIC, StudentName, PaymentStatus, Action) {
  return {StudentNIC, StudentName, PaymentStatus, Action };
}

const rows = [
  createData(200269804455, 'Wameesha', 'done'),
  // Add more rows as needed
];

export default function Paytable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Student NIC</StyledTableCell>
            <StyledTableCell align="right">Student Name</StyledTableCell>
            <StyledTableCell align="right">Payment Status</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.StudentNIC}>
              <StyledTableCell component="th" scope="row">
                {row.StudentNIC}
              </StyledTableCell>
              <StyledTableCell align="right">{row.StudentName}</StyledTableCell>
              <StyledTableCell align="right">{row.PaymentStatus}</StyledTableCell>
              <StyledTableCell align="right">
                <button style={{ marginRight: '8px',backgroundColor:'#515052',color:'white',borderRadius:'5px' }}>Update</button>
                <button style={{backgroundColor:'#515052',color:'white',borderRadius:'5px'}}> Delete</button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
