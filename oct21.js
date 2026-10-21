/*1.Write a js programme to Create an Animal class with a sound() method. Override it in Dog and Cat.
 Expected output Dog: Bark Cat: Meow2.*/
class Animal {
    sound() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    sound() {
        console.log("Dog: Bark");
    }
}

class Cat extends Animal {
    sound() {
        console.log("Cat: Meow");
    }
}

let dog = new Dog();
let cat = new Cat();

dog.sound();
cat.sound();


/*2.Write a js programme to Create a Student class with a private #marks field. 
Use a getter and setter to validate marks between 0 and 1003.. Sample input Marks: 85
 Expected output Marks: 85*/
class Student {
    #marks;

    constructor(marks) {
        this.marks = marks;
    }

    get marks() {
        return this.#marks;
    }

    set marks(value) {
        if (value >= 0 && value <= 100) {
            this.#marks = value;
        } else {
            throw new Error("Marks must be between 0 and 100");
        }
    }
}

let student = new Student(85);

console.log("Marks:", student.marks);


/*3.Write a js programme to Create Person, Employee, and Developer classes. 
Each class should add one new property. Sample input Name: Kiran Salary: 40000 Language: JavaScript
 Expected output Name: Kiran Salary: 40000 Language: JavaScript*/
class Person {
    constructor(name) {
        this.name = name;
    }
}

class Employee extends Person {
    constructor(name, salary) {
        super(name);
        this.salary = salary;
    }
}

class Developer extends Employee {
    constructor(name, salary, language) {
        super(name, salary);
        this.language = language;
    }

    display() {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Language:", this.language);
    }
}

let developer = new Developer("Kiran", 40000, "JavaScript");

developer.display();


/*4.Write a js programme to Create a Shape class whose area() method throws an error. 
Implement area() in a Rectangle child class. Sample input Length: 8 Width: 4 Expected output Area: 32*/
class Shape {
    area() {
        throw new Error("Area method must be implemented");
    }
}

class Rectangle extends Shape {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }

    area() {
        return this.length * this.width;
    }
}

let rectangle = new Rectangle(8, 4);

console.log("Area:", rectangle.area());


/*5.Write a js programme to Create a function expression that reverses a string without using reverse(). 
Sample input hello Expected output olleh*/
let reverseString = function(str) {
    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        result = result + str[i];
    }

    return result;
};

console.log(reverseString("hello"));


/*6.Write a js programme to Write an arrow function that converts Celsius to Fahrenheit
 using the formula \(F = (C \times 9/5) + 32\). Sample input Celsius: 25 Expected output Fahrenheit: 77*/
let convert = (celsius) => {
    return (celsius * 9 / 5) + 32;
};

console.log("Fahrenheit:", convert(25));


/*7.Write a js programme to Write an arrow function that checks whether a string is a palindrome, 
ignoring letter case. Sample input Madam Expected output Palindrome*/
let isPalindrome = (str) => {
    str = str.toLowerCase();

    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }

    return str === reversed;
};

if (isPalindrome("Madam")) {
    console.log("Palindrome");
} else {
    console.log("Not a Palindrome");
}


