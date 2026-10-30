/*1.Create a Student class with a private field marks.
Use a getter to read marks and a setter to accept only values from 0 to 100.
Input const s = new Student(); s.marks = 85; console.log(s.marks); s.marks = 120;
console.log(s.marks); Expected behavior 85 I*/

class Student {
    #marks=0;
    get marks() {
        return this.#marks;
    }
    set marks(value) {
        if (value>=0 && value<=100) {
            this.#marks=value;
        }
    }
}
const s = new Student();

s.marks = 85;
console.log(s.marks);

s.marks = 120;
console.log(s.marks);


/*2.Create an abstract class Vehicle with abstract methods start() and stop().
 Implement both methods in Car and Bike. 
 Expected Output Car started Car stopped Bike started Bike stopped*/

class Vehicle {
    constructor() {
        if (new.target === Vehicle) {
            throw new Error("Cannot create an object of Vehicle");
        }
    }
    start() {
        throw new Error("start() must be implemented");
    }
    stop() {
        throw new Error("stop() must be implemented");
    }
}
class Car extends Vehicle {
    start() {
        console.log("Car started");
    }
    stop() {
        console.log("Car stopped");
    }
}

class Bike extends Vehicle {
    start() {
        console.log("Bike started");
    }
    stop() {
        console.log("Bike stopped");
    }
}
const car = new Car();
car.start();
car.stop();

const bike=new Bike();
bike.start();
bike.stop();


/*3.write a javascript programme a Calculator class with static methods add(a, b),
 subtract(a, b), and multiply(a, b). Input console.log(Calculator.add(10, 5));
 console.log(Calculator.multiply(4, 3)); Output 15 12*/
class Calculator {
    static add (a,b){
        return a+b;
    }
    static subtract(a,b){
        return a-b;
    }
    static multiply(a,b){
        return a*b;
    }

} 
console.log(Calculator.add(10,5));
console.log(Calculator.subtract(10,5));
console.console.log(Calculator.multiply(4,3));




/*4.Create three Promise-returning functions: step1(), step2(), and step3(). 
Make step2() reject. Chain the three functions and handle the error in javascript. 
Expected output Step 1 completed Step 2 failed Error: Something went wrong*/
function step1() {
    return Promise.resolve("Step 1 completed");
}

function step2() {
    return Promise.reject("Something went wrong");
}

function step3() {
    return Promise.resolve("Step 3 completed");
}
step1()
     .then((result)=>{
        console.log(result);
        return step2();
     })
     .then((result)=>{
        console.log(result);
        return step3();
     })
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log("Step 2 failed");
        console.log("Error: " + error);
    });

