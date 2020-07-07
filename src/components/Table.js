import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

const letersFormat = (word) => {
  word = word.replace("ę", "e");
  word = word.replace("ó", "o");
  word = word.replace("ą", "a");
  word = word.replace("ś", "s");
  word = word.replace("ł", "l");
  word = word.replace("ż", "z");
  word = word.replace("ź", "z");
  word = word.replace("ć", "c");
  word = word.replace("ń", "n");
  return word;
}

export default function CustomizedTables(props) {
  const classes = useStyles();
  const active = props.activeRegion;

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
          {props.data.map((row) => (
            <StyledTableRow
              key={row.region}
              className={letersFormat(active.toLowerCase()) === row.region ? "activeRow" : ""}
            >
              <StyledTableCell component="th" scope="row" >
                {row.region}
              </StyledTableCell>
              <StyledTableCell align="right">{row.infectedCount}</StyledTableCell>
              <StyledTableCell align="right">{row.deceasedCount}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
