import React from 'react'

const BlindsForm = ({addMeasurements, handleDescriptionChange, handleWidthChange, handleLengthChange }) => {
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
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default BlindsForm