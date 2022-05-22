function capitalize(string) {
  let endString = '';

  for (let i=0; i<string.length; i++) {
    let letter = i === 0 ? string[i].toUpperCase() : string[i].toLowerCase() 
    endString += letter

  }

  return endString
}




function reverseString(string) {

  let endString = '';

  for (let i=string.length-1; i>=0; i--) {
    endString += string[i]
  }


  return endString
}


let calculator = {

  'add': (a,b) => {
    return a + b
  },

  'substact': (a,b) => {
    return a - b
  }, 

  'divide': (a,b) => {
    return a / b
  },

  'multiply': (a,b) => {
    return a * b
  }
}


export { capitalize, reverseString, calculator };



