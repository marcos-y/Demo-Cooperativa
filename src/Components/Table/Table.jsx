import React from 'react';
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

const CustomizedTable = (props) => {

  {/*const Search = (prop) =>{
    prop.filter((row)=>row.values[1].toLowerCase().includes(search)).map((filteredRow) => (
      console.log(filteredRow)
    ))
  }
  */}
  const search = props.search.toLowerCase();
  var rows = props.rows;

  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
        <TableRow>
          {props.columns.map((column) => (<StyledTableCell align="center" 
          key={column.index} >{column.col}</StyledTableCell>) )} 
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.filter((row)=>row.values[1].toLowerCase().includes(search)).map((filteredRow) => (
            <StyledTableRow key={filteredRow.values} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <StyledTableCell align="center" >
                {filteredRow.name}
              </StyledTableCell>
              {filteredRow.values.map((value,index) => (
              <StyledTableCell key={index} align="center" >
                {value}
              </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export default CustomizedTable;