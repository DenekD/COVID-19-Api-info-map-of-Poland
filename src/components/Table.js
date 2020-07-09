import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import red from '@material-ui/core/colors/red';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 13,
    padding: 10,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:nth-of-type(1)': {
      backgroundColor: theme.palette.error.dark,
    },
    '&:nth-of-type(2)': {
      backgroundColor: red[300],
    },
    '&:nth-of-type(3)': {
      backgroundColor: red[100],
    },
    '&.activeRow': {
      backgroundColor: theme.palette.warning.light,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});


export default function CustomizedTables(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Województwo</StyledTableCell>
            <StyledTableCell align="right">zarażeni</StyledTableCell>
            <StyledTableCell align="right">ofiary śmiertelne</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.regions.sort((a, b) => b.infected - a.infected).map((row) => (
            <StyledTableRow
              key={row.regionName}
              className={row.isHovered ? "activeRow" : null}
            >
              <StyledTableCell component="th" scope="row" >
                {row.regionName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.infected}</StyledTableCell>
              <StyledTableCell align="right">{row.deceased}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
