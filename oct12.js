//6.Write a program to print three messages one after another using synchronous . Expected output Start Middle End
console.log("Start");
console.log("Middle");
console.log("End");



//7.Write a function greet() that accepts a name and a callback. Call the callback to display the greeting. 
//Sample Input Enter name: Ravi Expected Output Hello, Ravi!
function greet(name, callback) {
    callback(name);
}

function displayGreeting(name) {
    console.log("Hello, " + name + "!");
}

let name = prompt("Enter name: ");

greet(name, displayGreeting);



//8.Write a function that accepts two numbers and a callback. Pass their sum to the callback.
 //Sample Input Enter first number: 10 Enter second number: 20 Expected Output Sum: 30
function calculateSum(a, b, callback) {
    let sum = a + b;
    callback(sum);
}

function displaySum(result) {
    console.log("Sum:", result);
}

let a = Number(prompt("Enter first number: "));
let b = Number(prompt("Enter second number: "));

calculateSum(a, b, displaySum);



//9.Create a new array containing only unique elements using js. 
//Sample Input [1, 2, 2, 3, 4, 4, 5] Expected Output [1, 2, 3, 4, 5]
let arr = [1, 2, 2, 3, 4, 4, 5];

let unique = [];

for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
        unique.push(arr[i]);
    }
}

console.log(unique);



//10.Check whether a string reads the same forward and backward, ignoring letter case. 
//Sample Input Madam Expected Output Palindrome
let str = prompt("Enter a string: ");

str = str.toLowerCase();

let rev = "";

for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];
}

if (str === rev) {
    console.log("Palindrome");
} else {
    console.log("Not a Palindrome");
}



//11.Check whether two strings contain the same letters in a different order, ignoring case in js.
// Sample Input String 1: listen String 2: silent Expected Output Anagrams
let str1 = prompt("Enter String 1: ");
let str2 = prompt("Enter String 2: ");

str1 = str1.toLowerCase();
str2 = str2.toLowerCase();

let arr1 = str1.split("");
let arr2 = str2.split("");

arr1.sort();
arr2.sort();

if (arr1.join("") === arr2.join("")) {
    console.log("Anagrams");
} else {
    console.log("Not Anagrams");
}



//12.Predict the output without running the code: console.log(10 == "10"); console.log(10 === "10"); console.log(0 == false);
//console.log(0 === false); console.log(null == undefined); console.log(null === undefined);
console.log(10 == "10");
console.log(10 === "10");
console.log(0 == false);
console.log(0 === false);
console.log(null == undefined);
console.log(null === undefined);
