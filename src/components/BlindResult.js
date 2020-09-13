import React from 'react'

const BlindResult = ({ blind }) => {
    return (
        blind.error
            ? <div>
                <em>Error:</em> {blind.error}
            </div>
            : <div>
                <em>Common width:</em> {blind.width} in <br />
                <em>Actual width:</em> {blind.actualWidth} in <br />
                <em>Length:</em> {blind.length} in <br />
                <em>Price:</em> ${blind.price.toFixed(2)} <br />
            </div>
    )
}

export default BlindResult