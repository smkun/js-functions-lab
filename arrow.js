// Exercise 9: numArgs
const numArgs = (...args) => args.length;
console.log("Exercise 9 Result:", numArgs(1, 2, 3, "bob", "hello there"));

// Exercise 8: stringsLongerThan
const stringsLongerThan = (strings, minLength) => strings.filter(str => str.length > minLength);
console.log("Exercise 8 Result:", stringsLongerThan(["say", "hello", "in", "the", "morning"], 3));

// Exercise 7: longestStringInArray
const longestStringInArray = strings => strings.reduce((max, str) => Math.max(max, str.length), 0);
console.log("Exercise 7 Result:", longestStringInArray(["cat", "apple", "elephant", "alphabet"]));

// Exercise 6: reverseString
const reverseString = str => str.split('').reverse().join('');
console.log("Exercise 6 Result:", reverseString("rockstar"));

// Exercise 5: multiplyArray
// Note: The original function name was `multipleArray`, but the correct action seems to be `multiplyArray`.
const multiplyArray = numbers => numbers.reduce((total, num) => total * num, 1);
console.log("Exercise 5 Result:", multiplyArray([2, 4, 5]));

// Exercise 4: sumArray
const sumArray = numbers => numbers.reduce((total, num) => total + num, 0);
console.log("Exercise 4 Result:", sumArray([2, 4, 5]));

// Exercise 3: isCharAVowel
const isCharAVowel = char => "aeiou".includes(char.toLowerCase());
console.log("Exercise 3 Result:", isCharAVowel("A"));

// Exercise 2: maxOfThree
const maxOfThree = (x, y, z) => Math.max(x, Math.max(y, z));
console.log("Exercise 2 Result:");
console.log(maxOfThree(1, 2, 3));
console.log(maxOfThree(10, 5, 2));
console.log(maxOfThree(-5, -2, -10));

// Exercise 1: maxOfTwoNumbers
const maxOfTwoNumbers = (x, y) => x >= y ? x : y;
console.log("Exercise 1 Result:", maxOfTwoNumbers(3, 9));
