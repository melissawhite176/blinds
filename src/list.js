
const blinds = [
  {
    common: 35,
    actual: 34.5,
    lengths: [
      {
        length: 48,
        price: 43.98,
        url: 'https://www.lowes.com/pd/LEVOLOR-Trim-Go-2-in-Cordless-White-Faux-Wood-Room-Darkening-Blinds-Common-35-in-Actual-34-5-in-x-48-in/1000576237'
      },
      {
        length: 64,
        price: 48.98,
        url: 'https://www.lowes.com/pd/LEVOLOR-Trim-Go-2-in-Cordless-White-Faux-Wood-Room-Darkening-Blinds-Common-35-in-Actual-34-5-in-x-64-in/1000576741'
      },
      {
        length: 72,
        price: 54.98,
        url: 'https://www.lowes.com/pd/LEVOLOR-Trim-Go-2-in-Cordless-White-Faux-Wood-Room-Darkening-Blinds-Common-35-in-Actual-34-5-in-x-72-in/1000576765'
      }
    ]
  },
  {
    common: 34,
    actual: 33.5,
    lengths:
      [
        {
          length: 64,
          price: 47.98,
          url: 'https://www.lowes.com/pd/LEVOLOR-Trim-Go-2-in-Cordless-White-Faux-Wood-Room-Darkening-Blinds-Common-34-in-Actual-33-5-in-x-64-in/1000576739'
        }
      ]
  },
  {
    common: 72,
    actual: 71.5,
    lengths:
      [
        {
          length: 64,
          price: 109.00,
          url: 'https://www.lowes.com/pd/LEVOLOR-Trim-Go-2-in-Cordless-White-Faux-Wood-Room-Darkening-Blinds-Common-72-in-Actual-71-5-in-x-64-in/1000576761'
        },
        {
          length: 72,
          price: 117.00,
          url: 'https://www.lowes.com/pd/LEVOLOR-Trim-Go-2-in-Cordless-White-Faux-Wood-Room-Darkening-Blinds-Common-72-in-Actual-71-5-in-x-72-in/1000576769'
        }
      ]
  },
  {
    common: 31,
    actual: 30.5,
    lengths:
      [
        {
          length: 64,
          price: 44.98,
          url: 'https://www.lowes.com/pd/LEVOLOR-Trim-Go-2-in-Cordless-White-Faux-Wood-Room-Darkening-Blinds-Common-31-in-Actual-30-5-in-x-64-in/1000576737'
        },
        {
          length: 72,
          price: 52.98,
          url: 'https://www.lowes.com/pd/LEVOLOR-Trim-Go-2-in-Cordless-White-Faux-Wood-Room-Darkening-Blinds-Common-31-in-Actual-30-5-in-x-72-in/1001461642'
        }
      ]
  },
  {
    common: 36,
    actual: 35.5,
    lengths:
      [
        {
          length: 64,
          price: 49.98,
          url: 'https://www.lowes.com/pd/LEVOLOR-Trim-Go-2-in-Cordless-White-Faux-Wood-Room-Darkening-Blinds-Common-36-in-Actual-35-5-in-x-64-in/1000576743'
        },
        {
          length: 72,
          price: 56.98,
          url: 'https://www.lowes.com/pd/LEVOLOR-Trim-Go-2-in-Cordless-White-Faux-Wood-Room-Darkening-Blinds-Common-36-in-Actual-35-5-in-x-72-in/1000576767'
        }
      ]
  },
  {
    common: 39,
    actual: 38.5,
    lengths:
      [
        {
          length: 64,
          price: 57.98,
          url: 'https://www.lowes.com/pd/LEVOLOR-Trim-Go-2-in-Cordless-White-Faux-Wood-Room-Darkening-Blinds-Common-39-in-Actual-38-5-in-x-64-in/1000576745'
        }
      ]
  },
  {
    common: 47,
    actual: 46.5,
    lengths:
      [
        {
          length: 48,
          price: 55.98,
          url: 'https://www.lowes.com/pd/LEVOLOR-Trim-Go-2-in-Cordless-White-Faux-Wood-Room-Darkening-Blinds-Common-47-in-Actual-46-5-in-x-48-in/1000576239'
        },
        {
          length: 64,
          price: 69.98,
          url: 'https://www.lowes.com/pd/LEVOLOR-Trim-Go-2-in-Cordless-White-Faux-Wood-Room-Darkening-Blinds-Common-47-in-Actual-46-5-in-x-64-in/1000576749'
        }
      ]
  },
  {
    common: 52,
    actual: 51.5,
    lengths:
      [
        {
          length: 64,
          price: 79.98,
          url: 'https://www.lowes.com/pd/LEVOLOR-Trim-Go-2-in-Cordless-White-Faux-Wood-Room-Darkening-Blinds-Common-52-in-Actual-51-5-in-x-64-in/1000576751'
        }
      ]
  },
  {
    common: 27,
    actual: 26.5,
    lengths:
      [
        {
          length: 64,
          price: 39.98,
          url: 'https://www.lowes.com/pd/LEVOLOR-Trim-Go-2-in-Cordless-White-Faux-Wood-Room-Darkening-Blinds-Common-27-in-Actual-26-5-in-x-64-in/1000576735'
        }
      ]
  },
  {
    common: 43,
    actual: 42.5,
    lengths:
      [
        {
          length: 64,
          price: 67.98,
          url: 'https://www.lowes.com/pd/LEVOLOR-Trim-Go-2-in-Cordless-White-Faux-Wood-Room-Darkening-Blinds-Common-43-in-Actual-42-5-in-x-64-in/1000576747'
        }
      ]
  },
  {
    common: 57,
    actual: 56.5,
    lengths:
      [
        {
          length: 64,
          price: 87.98,
          url: 'https://www.lowes.com/pd/LEVOLOR-Trim-Go-2-in-Cordless-White-Faux-Wood-Room-Darkening-Blinds-Common-57-in-Actual-56-5-in-x-64-in/1000576753'
        }
      ]
  },
  {
    common: 59,
    actual: 58.5,
    lengths:
      [
        {
          length: 48,
          price: 68.98,
          url: 'https://www.lowes.com/pd/LEVOLOR-Trim-Go-2-in-Cordless-White-Faux-Wood-Room-Darkening-Blinds-Common-59-in-Actual-58-5-in-x-48-in/1000576241'
        },
        {
          length: 64,
          price: 96.98,
          url: 'https://www.lowes.com/pd/LEVOLOR-Trim-Go-2-in-Cordless-White-Faux-Wood-Room-Darkening-Blinds-Common-59-in-Actual-58-5-in-x-64-in/1000576755'
        }
      ]
  },
  {
    common: 62,
    actual: 61.5,
    lengths:
      [
        {
          length: 64,
          price: 97.98,
          url: 'https://www.lowes.com/pd/LEVOLOR-Trim-Go-2-in-Cordless-White-Faux-Wood-Room-Darkening-Blinds-Common-62-in-Actual-61-5-in-x-64-in/1000576757'
        }
      ]
  },
  {
    common: 23,
    actual: 22.5,
    lengths:
      [
        {
          length: 64,
          price: 32.98,
          url: 'https://www.lowes.com/pd/LEVOLOR-Trim-Go-2-in-Cordless-White-Faux-Wood-Room-Darkening-Blinds-Common-23-in-Actual-22-5-in-x-64-in/1000575993'
        },
        {
          length: 72,
          price: 38.98,
          url: 'https://www.lowes.com/pd/LEVOLOR-Trim-Go-2-in-Cordless-White-Faux-Wood-Room-Darkening-Blinds-Common-23-in-Actual-22-5-in-x-72-in/1000576763'
        },
        {
          length: 48,
          price: 29.98,
          url: 'https://www.lowes.com/pd/LEVOLOR-Trim-Go-2-in-Cordless-White-Faux-Wood-Room-Darkening-Blinds-Common-23-in-Actual-22-5-in-x-48-in/1000576235'
        }
      ]
  }
]

//-----SORT PRODUCTS IN ASCENDING ORDER-----
// const sorted = [...blinds].sort((a, b) => a.common - b.common)
// console.log('products arranged in ascending order (by common width):', sorted)


//-----USEFUL INFO-----
// const length = blinds.reduce((sum, blind) => sum + blind.lengths.length, 0)
// console.log('total number of products:', length)

// const min = Math.min(...blinds.map(blind => blind.common))
// console.log('smallest common width:', min)

// const max = Math.max(...blinds.map(blind => blind.common))
// console.log('largest common width:', max)


//-----MIN/MAX ACCEPTED WIDTH------
// const widthCushion = 5
// const minWidth = min - widthCushion

// console.log('minWidth:', minWidth)

// const maxWidth = max + widthCushion
// console.log('maxWidth:', maxWidth)



//-----WITHIN RANGE?-----

// widthInput >= minWidth && widthInput < min || widthInput <= maxWidth ?
//   console.log('width within range') : console.log('width not within recommended range')



//-----FIND CORRECT BLIND (BASED ON WIDTH)-----

// const widthCushion = 0.25
// const commonResult = sorted.find(blind => blind.common + 0.25 >= widthInput)

// console.log('widthInput:', widthInput)
// console.log('commonResult:', commonResult)




//-----FIND CORRECT BLIND LENGTH (GIVEN COMMON RESULT)-----

// const sortedLengths = [...commonResult.lengths].sort((a, b) => a.length - b.length)

// console.log('sortedLengths:', sortedLengths)

// const lengthCushion = 1
// const lengthResult = sortedLengths.find(l => l.length + lengthCushion >= lengthInput)
// lengthResult === undefined ? 
//   console.log('sorry we could not find a matching blind length') : 
//   console.log('lengthInput:', lengthInput, 'lengthResult:', lengthResult)



//-----TRIM INFO-----
// let idealWidth = widthInput - 0.5
// let trim = (commonResult.actual - idealWidth).toFixed(2)

// console.log('idealWidth:', idealWidth)
// console.log('trim:', trim)


function findMatch(width, length, description) {
  console.log('Your blind is:', width, 'x', length, 'inches')
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
  console.log('commonResult:', commonResult)
  console.log('commonResult.actual:', commonResult.actual)

  let idealWidth = width - 0.5
  let trim = (commonResult.actual - idealWidth).toFixed(2)

  console.log('idealWidth:', idealWidth)
  trim > 0 ? console.log('suggested blind trim:', trim, 'inches') : console.log('trim not needed :)')

  const sortedLengths = [...commonResult.lengths].sort((a, b) => a.length - b.length)
  console.log('sortedLengths:', sortedLengths)

  const lengthCushion = 0.2
  const lengthResult = sortedLengths.find(l => l.length + lengthCushion >= length)
  lengthResult === undefined ?
    console.log('sorry we could not find a matching blind length') :
    console.log('length:', length, 'lengthResult:', lengthResult)

  let total = commonResult.lengths.find(l => l.price).price
  console.log('your total is: $', total)

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