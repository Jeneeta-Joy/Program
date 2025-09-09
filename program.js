// Q1. Write a loop to print numbers from 1 to 10
console.log("Q1: Numbers from 1 to 10");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("\n");

// Q2. Write a function that takes an array of numbers and returns the sum
console.log("Q2: Sum of array");
function sumArray(arr) {
  if (!Array.isArray(arr)) return 0;
  return arr.reduce((acc, num) => acc + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([])); // edge case check
console.log("\n");

// Q3. Write a function to find the largest number in an array
console.log("Q3: Largest number in array");
function findLargest(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  return Math.max(...arr);
}
console.log(findLargest([10, 5, 20, 8]));
console.log(findLargest([])); // edge case check
console.log("\n");

// Q4. Write a function that checks if a number is even or odd
console.log("Q4: Even or Odd check");
function checkEvenOdd(num) {
  if (typeof num !== "number") return "Invalid input";
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log(checkEvenOdd(7));
console.log(checkEvenOdd(10));
console.log(checkEvenOdd("abc")); // edge case
console.log("\n");

// Q5. Write a function that reverses a given string
console.log("Q5: Reverse a string");
function reverseString(str) {
  if (typeof str !== "string") return "";
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));
console.log(reverseString("")); // edge case
console.log("\n");

// Q6. Merge two arrays using the spread operator
console.log("Q6: Merge arrays using spread operator");
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log(merged);
console.log("\n");

// Q7. Use ES6 filter to return even numbers from an array
console.log("Q7: Filter even numbers from array");
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);
console.log("\n");

// Q8. Rewrite using template literals
console.log("Q8: Template literals example");
const userName = "Alice";
const msg = `Hello ${userName}, welcome!`;
console.log(msg);
console.log("\n");

// Q9. Rewrite this function using an arrow function
console.log("Q9: Arrow function greet");
const greet = (person) => `Hello, ${person}`;
console.log(greet("Alice"));
console.log(greet("Bob"));


