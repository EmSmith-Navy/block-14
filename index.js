// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
const arrNumbers = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(number);
}

// Perform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);

// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  let num = 12345;
  let length = num.toString().length;
  console.log(length); // Output: 5
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  const numbers = [1, 2, 3, 4, 5];
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
}
console.log(sum);

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  function getMean() {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum / numbers.length;
  }
}
const number = [1, 2, 3, 4, 5];
const mean = getMean(numbers);
console.log(mean); // Output: 3

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
  function getMin() {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
      sum += numbers[i];
    }
    return sum / numbers.length;
  }
}
const numbers = [1, 2, 3, 4, 5];
const minValue = math.min(...arrNumbers);

console.log(minValue); // Output: 5

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  const numbers = [1, 2, 3, 4, 5];
  const max = Math.max(...numbers);
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  function range(start, end) {
    const result = [];
    for (let i = 1; i <= 5; i++) {
      result.push(i);
    }
    return result;
  }
  const numbers = range(1, 5);
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  function getEven(arrNumbers) {
    const evenNumbers = [i];

    for (let i = 0; i < Array.length; i++) {
      if (array[i] % 2 === 0) {
        evenNumbers.push(array[i]);
      }
    }
    return evenNumbers;
  }

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evens = getEvens(numbers);

  console.log(evens);
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  function getOdds(arrNumbers) {
    const oddNumbers = [i];

    for (let i = 0; i < Array.length; i++) {
      if (array[i] % 2 === 0) {
        oddsNumbers.push(array[i]);
      }
    }
    return oddsNumbers;
  }

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const evens = getOdds(numbers);

  console.log(getOdds)(numbers);
}

console.log("New line");
