import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { findMatch } from './list.js'
import Header from './components/Header'
import BlindsForm from './components/BlindsForm'
import BlindResultTable from './components/BlindResultTable.js'
import TrimResultTable from './components/TrimResultTable'
import Typography from '@material-ui/core/Typography';
import './index.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2f5c96',
    },
    secondary: {
      main: '#966a2f',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});


const Footer = () => {
  return (
    <Typography variant="overline" display="block" gutterBottom>
      <span>App created by <a href="https://github.com/melissawhite176">Melissa</a> <span role="img" aria-label="Love">❤️</span></span><br />
      <span>Photo by <a href="https://unsplash.com/@runejohs?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Rune Enstad</a> on <a href="https://unsplash.com/s/photos/window-kitchen?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
    </Typography>
  )
}

const App = () => {
  const [newWidth, setWidth] = useState(32.22)
  const [newLength, setLength] = useState(64.23)
  const [newDescription, setDescription] = useState('tall window next to entrance door')
  const [blinds, setBlinds] = useState(
    JSON.parse(window.localStorage.getItem('blinds')) || []
  )
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
        setAndStoreBlinds([match, ...blinds])
      }
    }
  }

  const setAndStoreBlinds = (blinds) => {
    setBlinds(blinds)
    window.localStorage.setItem('blinds', JSON.stringify(blinds))
  }

  const deleteBlind = (id) => {
    const newList = blinds.filter(blind => blind.id !== id)
    setAndStoreBlinds(newList)
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
      <appbar>
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      </appbar>
      <main>
        <section>
          <Typography variant="h5" gutterBottom>
            Your window measurements:
          </Typography>


          <ThemeProvider theme={theme}>
            <BlindsForm addMeasurements={addMeasurements} handleDescriptionChange={handleDescriptionChange}
              handleLengthChange={handleLengthChange} handleWidthChange={handleWidthChange} />
          </ThemeProvider>
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
          <Typography variant="body1">
            ${blinds.reduce((total, blind) => blind.price + total, 0).toFixed(2)}
          </Typography>
        </section>


        <section>
          <Typography variant="h5" gutterBottom>
            Trim:
        </Typography>
          <TrimResultTable blinds={blinds} deleteBlind={deleteBlind} />

        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

