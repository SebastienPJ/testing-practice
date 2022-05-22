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




const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


function getCurrentLetterIndex(character) {
  return alphabet.indexOf(character)
}

function getNewLetterIndex(currentLetterIndex, shiftNumber) {

  let maxIndex = alphabet.length - 1

  if (currentLetterIndex + shiftNumber > maxIndex) {
    /*** Take the amount of space left to reach 'z' and substract it from the shift number to get
          the number of space needed to be moved starting at 'a' again. Subtract that number by 1
          to get the index of the new character ***/
    let spacesUntilEndIndex = maxIndex - currentLetterIndex
    let spaceToMoveFromBegining = shiftNumber - spacesUntilEndIndex
    let newIndex = spaceToMoveFromBegining - 1
    return newIndex
  } else {
    return currentLetterIndex + shiftNumber
  }
};

function isLetter(character) {
  return character.toUpperCase() !== character.toLowerCase()
};

function caesarCipher(string, offsetNumber) {
  let endString = '';

  [...string].forEach(char => {
    if (isLetter(char)) {
      let currentIndex = getCurrentLetterIndex(char);
      let indexAferShift = getNewLetterIndex(currentIndex,offsetNumber);
      let newChar = alphabet[indexAferShift];
      endString += newChar;
    } else {
      endString += char
    }
  });

  return endString
};















export { capitalize, reverseString, calculator, caesarCipher };



