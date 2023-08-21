// store input numbers
const prompt = require("prompt-sync") ({sigint: true});
const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));
const num3 = parseInt(prompt('Enter the third number '));


//add two numbers
const sum = num1 + num2 +num3;

// display the sum
console.log(`The sum of ${num1} ${num2} and ${num3} is ${sum}`);