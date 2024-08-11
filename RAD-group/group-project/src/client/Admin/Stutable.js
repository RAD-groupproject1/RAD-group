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

function createData(Name, NIC, Address, TelePhone, Birthday, Email, status) {
  return { Name, NIC, Address, TelePhone, Birthday, Email, status };
}

const rows = [
  createData("Shani", 200269804455, 'Matugama', '078999999', '2002-09-09', 'shani@gmail.com'),
  // Add more rows as needed
];

export default function Stutable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">NIC</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">TelePhone</StyledTableCell>
            <StyledTableCell align="right">Birthday</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Name}>
              <StyledTableCell component="th" scope="row">
                {row.Name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.NIC}</StyledTableCell>
              <StyledTableCell align="right">{row.Address}</StyledTableCell>
              <StyledTableCell align="right">{row.TelePhone}</StyledTableCell>
              <StyledTableCell align="right">{row.Birthday}</StyledTableCell>
              <StyledTableCell align="right">{row.Email}</StyledTableCell>
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
