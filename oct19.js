/*1.write a js programme to Print "Start", display "Hello" after 2 seconds, then print "End" immediately.
 Expected output Start End Hello*/
 console.log("Start");

setTimeout(function() {
    console.log("Hello");
}, 2000);

console.log("End");



/*2.write a js programme to Print "A" immediately, "B" after 2 seconds, and "C" after 1 second.
 Expected output A C B*/
console.log("A");

setTimeout(function() {
    console.log("B");
}, 2000);

setTimeout(function() {
    console.log("C");
}, 1000);



/*3.write a js programme to Create a function greet() that accepts a name and a callback. 
Display the greeting after 2 seconds. Sample input Name: Ravi Expected output Hello, Ravi!*/
function greet(name, callback) {
    setTimeout(function() {
        callback(name);
    }, 2000);
}

function displayGreeting(name) {
    console.log("Hello, " + name + "!");
}

greet("Ravi", displayGreeting);



/*4.write a js programme to Create a Student class with name and age properties. Create an object and display its details.
 Sample input Name: Ravi Age: 20 Expected output Name: Ravi Age: 20*/
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let s1 = new Student("Ravi", 20);

console.log("Name: " + s1.name);
console.log("Age: " + s1.age);



/*5.write a js programme to Create a Car class with brand and color properties and a display() method.
 Sample input Brand: Toyota Color: Red Expected output Brand: Toyota Color: Red*/
class Car {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }

    display() {
        console.log("Brand: " + this.brand);
        console.log("Color: " + this.color);
    }
}

let c1 = new Car("Toyota", "Red");

c1.display();



/*6.write a js programme to Create a Person class that initializes name and city through its constructor.
 Sample input Name: Rahul City: Hyderabad Expected output Name: Rahul City: Hyderabad*/
class Person {
    constructor(name, city) {
        this.name = name;
        this.city = city;
    }
}

let p1 = new Person("Rahul", "Hyderabad");

console.log("Name: " + p1.name);
console.log("City: " + p1.city);



/*7.write a js programme to Create a BankAccount class with a private #balance field. 
Allow deposits and withdrawals only through methods. Sample input Initial balance: 1000 Deposit: 500 Withdraw: 200 
Expected output Balance: 1300*/
class BankAccount {
    #balance;

    constructor(balance) {
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance = this.#balance + amount;
    }

    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance = this.#balance - amount;
        } else {
            console.log("Insufficient balance");
        }
    }

    displayBalance() {
        console.log("Balance: " + this.#balance);
    }
}

let account = new BankAccount(1000);

account.deposit(500);
account.withdraw(200);

account.displayBalance();



/*8.write a js programme toCreate a Person parent class and a Student child class. Use extends to inherit the person's details.
Sample input Name: Anu Age: 21 Roll number: 101 Expected output Name: Anu Age: 21 Roll number: 101*/
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    constructor(name, age, rollNumber) {
        super(name, age);
        this.rollNumber = rollNumber;
    }

    display() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Roll number: " + this.rollNumber);
    }
}

let s1 = new Student("Anu", 21, 101);

s1.display();