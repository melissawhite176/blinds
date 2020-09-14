import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const BlindResult = ({ blind, deleteBlind }) => {
    return (
        blind.error
            ? <p>
                <em>Error:</em> {blind.error}
            </p>
            : <p>
                <em>Description:</em> {blind.description}<br />
                <em>Measured width:</em> {blind.measuredWidth} in <br />
                <em>Measured length:</em> {blind.measuredLength} in <br />
                <em>Common width:</em> {blind.width} in <br />
                <em>Actual width:</em> {blind.actualWidth} in <br />
                <em>Length:</em> {blind.length} in <br />
                <em>Price:</em> ${blind.price.toFixed(2)} <br />
                <IconButton aria-label="delete" onClick={() => deleteBlind(blind.id)}>
                    <DeleteIcon />
                </IconButton>
            </p>
    )
}

export default BlindResult