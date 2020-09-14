import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { findMatch } from './list.js'
import BlindsForm from './components/BlindsForm'
// import BlindMeasurements from './components/BlindMeasurements'
import BlindResult from './components/BlindResult'

const Header = () => {
  return (
    <div>
      <h1>Trim-N-Take Blinds</h1>
    </div>
  )
}

// const Measurement = (props) => {
//   return (
//     <div>
//       <p>{props.width} x {props.length}</p>
//     </div>
//   )
// }

const App = () => {
  const [newWidth, setWidth] = useState(32.22)
  const [newLength, setLength] = useState(64.23)
  const [blinds, setBlinds] = useState([])
  const [errorMessage, setErrorMessage] = useState('')


  const addMeasurements = (event) => {
    event.preventDefault()
    if (isNaN(newWidth) || isNaN(newLength)) {
      setErrorMessage('Need a valid number')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    } else {
      setBlinds(blinds.concat(findMatch(newWidth, newLength)))
    }
  }

  const handleWidthChange = (event) => {
    console.log(event.target.value)
    setWidth(parseFloat(event.target.value))
  }
  const handleLengthChange = (event) => {
    console.log(event.target.value)
    setLength(parseFloat(event.target.value))
  }




  return (
    <>
      <Header />
      <h3>Your blinds measurements:</h3>
      <BlindsForm addMeasurements={addMeasurements}
        handleLengthChange={handleLengthChange} handleWidthChange={handleWidthChange} />
      {/* <BlindMeasurements newWidth={newWidth} newLength={newLength} /> */}
      <h3>Results</h3>
      {errorMessage
        ? <p>{errorMessage}</p>
        : (blinds.length > 0
          ? blinds.map(blind => <BlindResult blind={blind} />)
          : <p>Enter width and length, then click on save.</p>
        )
      }
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)