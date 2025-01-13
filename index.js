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
  arrNumbers.push(number);
}

// Convert the array of strings into an array of numbers.
const numbers = [];
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
/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} an array of even numbers
 */
function getEvens(numbers) {
  let evens = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evens.push(numbers[i]);
    }
  }
  return evens;
}

console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);

// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  return numbers.length;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  const sum = getSum(numbers);
  return sum / numbers.length;
}
// Function to prompt the user for numbers
function getUserNumbers() {
  const input = prompt("Enter a list of numbers separated by commas:");
  return input.split(",").map(Number);
}

// Function to calculate the mean
function calculateMean(numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

// Function to calculate the median
function calculateMedian(numbers) {
  numbers.sort((a, b) => a - b);
  const mid = Math.floor(numbers.length / 2);
  if (numbers.length % 2 === 0) {
    return (numbers[mid - 1] + numbers[mid]) / 2;
  } else {
    return numbers[mid];
  }
}

// Function to calculate the mode
function calculateMode(numbers) {
  const frequency = {};
  numbers.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
  });
  let maxFreq = 0;
  let mode = [];
  for (const num in frequency) {
    if (frequency[num] > maxFreq) {
      maxFreq = frequency[num];
      mode = [Number(num)];
    } else if (frequency[num] === maxFreq) {
      mode.push(Number(num));
    }
  }
  return mode;
}

// Main function to execute the calculations
function main() {
  const numbers = getUserNumbers();
  console.log("Numbers:", numbers);
  console.log("Mean:", calculateMean(numbers));
  console.log("Median:", calculateMedian(numbers));
  console.log("Mode:", calculateMode(numbers));
}

// Run the main function
main();
