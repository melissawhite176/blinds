-----SORT PRODUCTS IN ASCENDING ORDER-----
 const sorted = [...blinds].sort((a, b) => a.common - b.common)
 console.log('products arranged in ascending order (by common width):', sorted)
-----USEFUL INFO-----
 const length = blinds.reduce((sum, blind) => sum + blind.lengths.length, 0)
 console.log('total number of products:', length)
 const min = Math.min(...blinds.map(blind => blind.common))
 console.log('smallest common width:', min)
 const max = Math.max(...blinds.map(blind => blind.common))
 console.log('largest common width:', max)
-----MIN/MAX ACCEPTED WIDTH------
 const widthCushion = 5
 const minWidth = min - widthCushion
 console.log('minWidth:', minWidth)
 const maxWidth = max + widthCushion
 console.log('maxWidth:', maxWidth)
-----WITHIN RANGE?-----
 widthInput >= minWidth && widthInput < min || widthInput <= maxWidth ?
   console.log('width within range') : console.log('width not within recommended range')
-----FIND CORRECT BLIND (BASED ON WIDTH)-----
 const widthCushion = 0.25
 const commonResult = sorted.find(blind => blind.common + 0.25 >= widthInput)
 console.log('widthInput:', widthInput)
 console.log('commonResult:', commonResult)
-----FIND CORRECT BLIND LENGTH (GIVEN COMMON RESULT)-----
 const sortedLengths = [...commonResult.lengths].sort((a, b) => a.length - b.length)
 console.log('sortedLengths:', sortedLengths)
 const lengthCushion = 1
 const lengthResult = sortedLengths.find(l => l.length + lengthCushion >= lengthInput)
 lengthResult === undefined ? 
   console.log('sorry we could not find a matching blind length') : 
   console.log('lengthInput:', lengthInput, 'lengthResult:', lengthResult)
-----TRIM INFO-----
 let idealWidth = widthInput - 0.5
 let trim = (commonResult.actual - idealWidth).toFixed(2)
 console.log('idealWidth:', idealWidth)
 console.log('trim:', trim)
