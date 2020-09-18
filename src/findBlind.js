import { blinds } from './blindsData.js'

function findMatch(width, length, description) {

  const sorted = [...blinds].sort((a, b) => a.common - b.common)

  const min = Math.min(...blinds.map(blind => blind.common))
  const max = Math.max(...blinds.map(blind => blind.common))


  const minmaxCushion = 5
  const minWidth = min - minmaxCushion
  const maxWidth = max + minmaxCushion

  if (width < minWidth || width > maxWidth) {
    return {
      error: 'Sorry, we don\'t currently have a product that matches your blind width!'
    }
  }

  const widthCushion = 0.25

  const commonResult = sorted.find(blind => blind.common + widthCushion >= width)

  let idealWidth = width - 0.5
  let trim = (commonResult.actual - idealWidth).toFixed(2)

  const sortedLengths = [...commonResult.lengths].sort((a, b) => a.length - b.length)

  const lengthCushion = 0.2
  const lengthResult = sortedLengths.find(l => l.length + lengthCushion >= length)

  // let total = commonResult.lengths.find(l => l.price).price

  if (commonResult && lengthResult) {
    return {
      id: Date.now(),
      width: commonResult.common,
      actualWidth: commonResult.actual,
      length: lengthResult.length,
      measuredWidth: width,
      measuredLength: length,
      description: description,
      price: lengthResult.price,
      idealWidth: idealWidth,
      trim: trim,
      url: lengthResult.url
    }
  } else {
    return {
      error: 'could not find matching blind'
    }
  }
}

export { findMatch }