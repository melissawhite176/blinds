import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { findMatch } from './list.js'
import BlindsForm from './components/BlindsForm'
import BlindResultTable from './components/BlindResultTable.js'
import Typography from '@material-ui/core/Typography';
import './index.css'


const Header = () => {
  return (
    <Typography variant="h2" gutterBottom>
      Trim-N-Take Blinds
    </Typography>
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

  const deleteBlind = (id) => {
    const newList = blinds.filter(blind => blind.id !== id)
    setBlinds(newList)
  }

  const handleWidthChange = (event) => {
    setWidth(parseFloat(event.target.value))
  }
  const handleLengthChange = (event) => {
    setLength(parseFloat(event.target.value))
  }
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }

  return (
    <>
      <Header />

      <section>
        <Typography variant="h5" gutterBottom>
          Your blinds measurements:
        </Typography>

        <BlindsForm addMeasurements={addMeasurements} handleDescriptionChange={handleDescriptionChange}
          handleLengthChange={handleLengthChange} handleWidthChange={handleWidthChange} />
      </section>

      <section>
        <Typography variant="h5" gutterBottom>
          Results
        </Typography>

        {errorMessage &&
          <p>{errorMessage}</p>
        }

        <BlindResultTable blinds={blinds} deleteBlind={deleteBlind} />
      </section>

      <section>
        <Typography variant="h5" gutterBottom>
          Total
        </Typography>
        <p>
          <Typography variant="body1">
            ${blinds.reduce((total, blind) => blind.price + total, 0).toFixed(2)}
          </Typography>
        </p>
      </section>
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)