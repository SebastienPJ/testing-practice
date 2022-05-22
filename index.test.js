import { capitalize, reverseString, calculator } from './index'


/***** Capitalize Tests *****/
test('Capitalze 1st Character', () => {
  expect(capitalize('bowl')).toBe('Bowl')
});

test('Capitalize different string', () => { 
  expect(capitalize('soup')).toBe('Soup')
});

test('Un-capitalize other characters', () => {
  expect(capitalize('sOUP')).toBe('Soup')
});

test('Works with spaces', () => {
  expect(capitalize('i loVe pIzza')).toBe('I love pizza')
});




/***** Reverse String Tests *****/
test('Reverses String', () => {
  expect(reverseString('Panel')).toBe('lenaP')
});

test('Reverse Sentences', () => {
  expect(reverseString('This is Sparta')).toBe('atrapS si sihT')
});




/***** Calculator Tests *****/
test('Add', () => {
  expect(calculator.add(2,3)).toBe(5)
});

test('Substract', () => {
  expect(calculator.substact(9,3)).toBe(6)
});

test('Multiply', () => {
  expect(calculator.multiply(3,4)).toBe(12)
});

test('Divide', () => {
  expect(calculator.divide(12,4)).toBe(3)
});

