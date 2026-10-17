//7.Write a program to divide two numbers. Handle division by zero. Sample Input Enter first number: 10 Enter second number: 0 Expected Output Cannot divide by zero
function greet(name, callback) {
    callback(name);
}
function displayGreeting(name) {
    console.log("Hello, " + name + "!");
}
let name = prompt("Enter name: ");
greet(name, displayGreeting);





//8.Convert the given string into an integer. Handle invalid input. Sample Input Enter a number: hello Expected Output Invalid input! Please enter a number.
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





//9.Create an ATM program that handles invalid input, insufficient balance, and negative withdrawal amounts. Sample Input Balance: 5000 Withdrawal: 6000 Expected Output Transaction failed: Insufficient balance
let arr = [1, 2, 2, 3, 4, 4, 5];
let unique = [];
for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
        unique.push(arr[i]);
    }
}
console.log(unique);






//10.Write a program that raises a ValueError if the number is zero or negative. Sample input Enter number: -5 Expected output ValueError: Number must be positive
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