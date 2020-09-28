import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
            flexGrow: 1
        }
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
}));


const BlindsForm = ({ addMeasurements, handleDescriptionChange, handleWidthChange, handleLengthChange }) => {
    const classes = useStyles()
    return (
        <Paper className={classes.paper}>
            <form classes={classes.root} noValidate autoComplete="off" onSubmit={addMeasurements}>
                <Grid container spacing={3}>
                    <Grid item>
                        <TextField id="standard-basic" label="Description"
                            placeholder='kitchen sink window' onChange={handleDescriptionChange} />
                    </Grid>
                    <Grid item>
                        <TextField id="standard-basic" label="Width&nbsp;(in)"
                            placeholder='32.21' onChange={handleWidthChange} />
                    </Grid>
                    <Grid item>
                        <TextField id="standard-basic" label="Length&nbsp;(in)"
                            placeholder='61.57' onChange={handleLengthChange} />
                    </Grid>
                    <Grid item>
                        <IconButton aria-label="Submit" onClick={addMeasurements}>
                            <Icon color="secondary" fontSize="large">add_circle</Icon>
                        </IconButton>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    )
}

export default BlindsForm