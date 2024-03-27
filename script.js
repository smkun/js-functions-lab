/*
Exercise 9: numArgs

Challenge yourself with numArgs. This function should return the count of arguments passed to it when called.

Complete Exercise 9 in the space below:
*/
function numArgs() {
    return arguments.length;
}

console.log("Exercise 9 Result:", numArgs(1, 2, 3, "bob", "hello there"));

/*
Exercise 8: stringsLongerThan

Write a function called stringsLongerThan. It takes an array of strings and a number, returning all strings longer than the given number. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3) would return ['hello', 'morning'].

Complete Exercise 8 in the space below:
*/
function stringsLongerThan(strings, minLength) {
    let longest = [];
    for (let a = 0; a < strings.length; a++) {
        if (strings[a].length > minLength) {
            longest.push(strings[a]);
        }
    }
    return longest;
}
console.log(
    "Exercise 8 Result:",
    stringsLongerThan(["say", "hello", "in", "the", "morning"], 3)
);

/*
Exercise 7: longestStringInArray

Define a function called longestStringInArray. It should accept an array of strings and return the length of the longest string in the array.

Complete Exercise 7 in the space below:
*/
function longestStringInArray(strings) {
    let maxLength = 0;
    for (let a = 0; a < strings.length; a++)
        if (strings[a].length > maxLength) {
            maxLength = strings[a].length;
        }
    return maxLength;
}

console.log(
    "Exercise 7 Result:",
    longestStringInArray(["cat", "apple", "elephant", "alphabet"])
);

/*
Exercise 6: reverseString

Define a function called reverseString. It should take a string and return it with its characters in reverse order. For example, reverseString('rockstar'); would return the string "ratskcor".

Complete Exercise 6 in the space below:
*/
function reverseString(str) {
    let reversed = " ";
    for (let a = str.length - 1; a >= 0; a--) {
        reversed += str[a];
    }
    return reversed;
}

console.log("Exercise 6 Result:", reverseString("rockstar"));

/*
Exercise 5: multiplyArray

Define a function called multiplyArray. It should take an array of numbers and return the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

Complete Exercise 5 in the space below:
*/
function multipleArray(numbers) {
    let total = 1;
    for (let a = 0; a < numbers.length; a++) {
        total *= numbers[a];
    }
    return total;
}

console.log("Exercise 5 Result:", multipleArray([2, 4, 5]));

/*
Exercise 4: sumArray

Create a function called sumArray. It should take an array of numbers and return the total sum. For example, sumArray([2, 4, 5]) should return 11.

Complete Exercise 4 in the space below:
*/
function sumArray(numbers) {
    let total = 0;
    for (let a = 0; a < numbers.length; a++) {
        total += numbers[a];
    }
    return total;
}

console.log("Exercise 4 Result:", sumArray([2, 4, 5]));

/*
Exercise 3: Insert at the Beginning

Write a function named isCharAVowel that takes a single character as an argument. It should return true if the character is a vowel, and false otherwise.

Complete Exercise 3 in the space below:
*/
function isCharAVowel(char) {
    const vowels = "aeiou";
    return vowels.includes(char.toLowerCase());
}

console.log("Exercise 3 Result:", isCharAVowel("A"));

/*
Exercise 2: maxOfThree

Define a function, maxOfThree, it should accept three numbers and return the largest among them.

Complete Exercise 2 in the space below:
*/
const maxOfThree = (x, y, z) => {
    let max = x;
    if (y > max) {
        max = y;
        {
        }
        if (z > max) {
            max = z;
        }
    }
    return max;
};

console.log("Exercise 2 Result:");
console.log(maxOfThree(1, 2, 3));
console.log(maxOfThree(10, 5, 2));
console.log(maxOfThree(-5, -2, -10));

/*
Exercise 1: maxOfTwoNumbers

In this exercise, create a function named maxOfTwoNumbers. It should take two numbers as inputs and return the larger number. If they're equal, return either one.

Exercise 1 has been completed for you:
*/
const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
        return x;
    } else {
        return y;
    }
};

console.log("Exercise 1 Result:", maxOfTwoNumbers(3, 9));
