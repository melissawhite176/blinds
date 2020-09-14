import React from 'react'
import { green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';

const BlindsForm = ({ addMeasurements, handleDescriptionChange, handleWidthChange, handleLengthChange }) => {
    return (
        <form onSubmit={addMeasurements}>
            <div>
                Description:
                <input placeholder='tall window next to entrance door' onChange={handleDescriptionChange} />
            </div>
            <div>
                Width:
                <input placeholder='32.21' onChange={handleWidthChange} />
            </div>
            <div>
                Length:
                <input placeholder='61.57' onChange={handleLengthChange} />
            </div>
            <div>
                <Icon style={{ color: green[500] }} onClick={addMeasurements}>add_circle</Icon>
            </div>
        </form>
    )
}

export default BlindsForm