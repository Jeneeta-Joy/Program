
// 1. Write a loop to print numbers from 1 to 10.
console.log("Q1: Numbers from 1 to 10");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("\n");

// 2. Write a function that takes an array of numbers and returns the sum.
console.log("Q2: Sum of array");
function sumArray(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5]));
console.log("\n");

// 3. Write a function to find the largest number in an array.
console.log("Q3: Largest number in array");
function findLargest(arr) {
  return Math.max(...arr);
}
console.log(findLargest([10, 5, 20, 8]));
console.log("\n");

// 4. Write a function that checks if a number is even or odd.
console.log("Q4: Even or Odd check");
function checkEvenOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log(checkEvenOdd(7));
console.log(checkEvenOdd(10));
console.log("\n");

// 5. Write a function that reverses a given string.
console.log("Q5: Reverse a string");
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));
console.log("\n");

// 6. Merge two arrays using the spread operator
console.log("Q6: Merge arrays using spread operator");
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log(merged);
console.log("\n");

// 7. Use ES6 filter to return even numbers from an array
console.log("Q7: Filter even numbers from array");
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);
console.log("\n");

// 8. Rewrite using template literals
console.log("Q8: Template literals example");
const name = "Alice";
const msg = `Hello ${name}, welcome!`;
console.log(msg);
console.log("\n");

// 9. Rewrite this function using an arrow function
console.log("Q9: Arrow function greet");
const greet = (name) => `Hello, ${name}`;
console.log(greet("Alice"));
console.log(greet("Bob"));
