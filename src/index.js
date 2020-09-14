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

const App = () => {
  const [newWidth, setWidth] = useState(32.22)
  const [newLength, setLength] = useState(64.23)
  const [newDescription, setDescription] = useState('tall window next to entrance door')
  const [blinds, setBlinds] = useState([])
  const [errorMessage, setErrorMessage] = useState('')


  const addMeasurements = (event) => {
    event.preventDefault()
    setErrorMessage(null)
    if (isNaN(newWidth) || isNaN(newLength)) {
      setErrorMessage('Need a valid number')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    } else {
      const match = findMatch(newWidth, newLength, newDescription)
      if (match.error) {
        setErrorMessage(match.error)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      } else {
        setBlinds([match, ...blinds])
      }
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
  const handleDescriptionChange = (event) => {
    console.log(event.target.value)
    setDescription(event.target.value)
  }

  return (
    <>
      <Header />
      <h3>Your blinds measurements:</h3>
      <BlindsForm addMeasurements={addMeasurements} handleDescriptionChange={handleDescriptionChange}
        handleLengthChange={handleLengthChange} handleWidthChange={handleWidthChange} />
      <h3>Results</h3>
      {errorMessage &&
        <p>{errorMessage}</p>
      }
      {blinds.length > 0
        ? blinds.map(blind => <BlindResult key={blind.id} blind={blind} />)
        : <p>Enter width and length, then click on save.</p>
      }
      <h3>Total</h3>
      <p>${blinds.reduce((total, blind) => blind.price + total, 0).toFixed(2)}</p>
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)