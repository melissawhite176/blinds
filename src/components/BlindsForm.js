import React from 'react'

const BlindsForm = ({addMeasurements, handleWidthChange, handleLengthChange }) => {
    return (
        <form onSubmit={addMeasurements}>
            <div>
                Width:
                <input placeholder='32.21' onChange={handleWidthChange} />
            </div>
            <div>
                Length:
                <input placeholder='61.57' onChange={handleLengthChange} />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default BlindsForm