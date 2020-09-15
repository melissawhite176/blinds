import React from 'react'

const BlindMeasurements = ({ newWidth, newLength }) => {
  return (
    <p>
      W: {newWidth > 0 ? newWidth : 'need valid number'} 
      <br />
      L: {newLength > 0 ? newLength : 'need valid number'}
    </p>
  )
}


export default BlindMeasurements