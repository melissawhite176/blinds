import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const TrimResultTable = ({ blinds, deleteBlind }) => {
  const classes = useStyles()

  return (
    <Paper>
      <Table className={classes.table} aria-label='trim results table'>
        <TableHead>
          <TableRow>
            <TableCell>Window Description</TableCell>
            <TableCell align="right">Actual Width&nbsp;(in)</TableCell>
            <TableCell align="right">Ideal Width&nbsp;(in)</TableCell>
            <TableCell align="right">Recommended Trim (Actual - Ideal)&nbsp;(in)</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {blinds.map(blind => (
            <TableRow key={blind.id}>
              <TableCell component="th" scope="row">
                {blind.description}
              </TableCell>
              <TableCell align="right">{blind.actualWidth}</TableCell>
              <TableCell align="right">{blind.idealWidth}</TableCell>
              <TableCell align="right">{blind.trim}</TableCell>

              <TableCell align="right">
                <IconButton aria-label="delete" onClick={() => deleteBlind(blind.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default TrimResultTable