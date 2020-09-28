import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#2f5c96',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const TrimResultTable = ({ blinds, deleteBlind }) => {
  const classes = useStyles()

  const [confirmDeleteBlind, setConfirmDeleteBlind] = React.useState(null)

  const handleClickOpen = (blind) => {
    setConfirmDeleteBlind(blind)
  }

  const handleClose = () => {
    setConfirmDeleteBlind(null)
  }

  const handleDeleteAndClose = (blind) => {
    setConfirmDeleteBlind(null)
    deleteBlind(blind.id)
  }

  return (
    <>
      
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='trim results table'>
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Window Description</StyledTableCell>
              <StyledTableCell align="right">Actual Width&nbsp;(in)</StyledTableCell>
              <StyledTableCell align="right">Ideal Width&nbsp;(in)</StyledTableCell>
              <StyledTableCell align="right">Recommended Trim (per side)&nbsp;(in)</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {blinds.map(blind => (
              <StyledTableRow key={blind.id}>
                <StyledTableCell component="th" scope="row">
                  {blind.description}
                </StyledTableCell>
                <StyledTableCell align="right">{blind.actualWidth}</StyledTableCell>
                <StyledTableCell align="right">{blind.idealWidth}</StyledTableCell>
                <StyledTableCell align="right"><b>{blind.trimSide}</b></StyledTableCell>
                <StyledTableCell align="right">
                  <IconButton aria-label="delete" onClick={() => handleClickOpen(blind)}>
                    <DeleteIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog
        open={confirmDeleteBlind !== null}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Confirm if you would like to delete this window entry: {confirmDeleteBlind && confirmDeleteBlind.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
  </Button>
          <Button onClick={() => handleDeleteAndClose(confirmDeleteBlind)} color="primary" autoFocus>
            Yes
  </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default TrimResultTable