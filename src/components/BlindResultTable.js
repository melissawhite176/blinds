import React from 'react';
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

// function createData(description, mWidth, mLength, cWidth, aWidth, length, price, del) {
//   return { description, mWidth, mLength, cWidth, aWidth, length, price, del };
// }

// const blinds = [
//   createData('example: add a window description', 32.21, 61.57, 31, 30.5, 64, 44.98,
//     <IconButton aria-label="delete">
//       <DeleteIcon />
//     </IconButton>),
// ];

const BlindResultTable = ({ blinds, deleteBlind }) => {
  const classes = useStyles()

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Window Description</TableCell>
            <TableCell align="right">Measured Width&nbsp;(in)</TableCell>
            <TableCell align="right">Measured Length&nbsp;(in)</TableCell>
            <TableCell align="right">Common Width&nbsp;(in)</TableCell>
            <TableCell align="right">Actual Width&nbsp;(in)</TableCell>
            <TableCell align="right">Length&nbsp;(in)</TableCell>
            <TableCell align="right">Price&nbsp;($)</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {blinds.map(blind => (
            <TableRow key={blind.id}>
              <TableCell component="th" scope="row">
                {blind.description}
              </TableCell>
              <TableCell align="right">{blind.measuredWidth}</TableCell>
              <TableCell align="right">{blind.measuredLength}</TableCell>
              <TableCell align="right">{blind.width}</TableCell>
              <TableCell align="right">{blind.actualWidth}</TableCell>
              <TableCell align="right">{blind.length}</TableCell>
              <TableCell align="right">{blind.price.toFixed(2)}</TableCell>
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

export default BlindResultTable