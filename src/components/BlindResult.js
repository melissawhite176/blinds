import React from 'react'

const BlindResult = ({ blind }) => {
    return (
        blind.error
            ? <p>
                <em>Error:</em> {blind.error}
            </p>
            : <p>
                <em>Measured width:</em> {blind.measuredWidth} in <br />
                <em>Measured length:</em> {blind.measuredLength} in <br />
                <em>Common width:</em> {blind.width} in <br />
                <em>Actual width:</em> {blind.actualWidth} in <br />
                <em>Length:</em> {blind.length} in <br />
                <em>Price:</em> ${blind.price.toFixed(2)} <br />
            </p>
    )
}

export default BlindResult