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
import Button from '@material-ui/core/Button';
import LinkIcon from '@material-ui/icons/Link';
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


const BlindResultTable = ({ blinds, deleteBlind }) => {
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
      <Paper>
        <Table className={classes.table} aria-label='blinds results table'>
          <TableHead>
            <TableRow>
              <TableCell align="right">Product</TableCell>
              <TableCell>Window Description</TableCell>
              <TableCell align="right">Measured Width&nbsp;(in)</TableCell>
              <TableCell align="right">Common Width&nbsp;(in)</TableCell>
              <TableCell align="right">Actual Width&nbsp;(in)</TableCell>
              <TableCell align="right">Measured Length&nbsp;(in)</TableCell>
              <TableCell align="right">Length&nbsp;(in)</TableCell>
              <TableCell align="right">Price&nbsp;($)</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {blinds.map(blind => (
              <TableRow key={blind.id}>
                <TableCell align="right">
                  <IconButton aria-label="url" href={blind.url} target="_blank">
                    <LinkIcon />
                  </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">{blind.description}</TableCell>
                <TableCell align="right">{blind.measuredWidth}</TableCell>
                <TableCell align="right">{blind.width}</TableCell>
                <TableCell align="right">{blind.actualWidth}</TableCell>
                <TableCell align="right">{blind.measuredLength}</TableCell>
                <TableCell align="right">{blind.length}</TableCell>
                <TableCell align="right">{blind.price.toFixed(2)}</TableCell>
                <TableCell align="right">
                  <IconButton aria-label="delete" onClick={() => handleClickOpen(blind)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

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

export default BlindResultTable