// // console.log(a);
// // let a = 100;
// // console.log(b);
// // var b = 1000;


// //Closures in JS
// //Ex -1:
// function x(){
//     var a = 10;
//     function y(){
//         console.log(a);  
//         // Here the value of 'a' from Function y can be accessed from its Parent Lexical Environment Function x.
//     }
//     return y;
// }
// x();

// //Ex -2:
// function x(){
//     var a = 10;
//     function y(){
//         console.log(a);  
//         // Here the value of 'a' from Function y can be accessed from its Parent Lexical Environment Function x.
//     }
//     return y;
// }
// var z = x();
// console.log(z);  
// // Here if we write 1000 of lines of code and then we invoked the function z later, the value of a still binds with its lexical environment and prints the value of 10.
// z();

// //Ex-3:

// function x(){
//  var i = 5;
//  setTimeout(function(){
//     console.log(i);
//  }, 3000);
//  console.log("Namaste JS");
// }
// x();
// //Here in this case Namaste JS will be printed first and then the setTimeout value of '5' will be printed next.
// //Because JS waits for none, it won't wait until setTimeout finishes execution, simply it print "Namaste JS" and prints setTimeout value.

// //Ex-4:

// function x(){
//     for(var i=1; i <= 5; i++){
//         setTimeout(function(){
//             console.log(i);
//          }, i*1000);
//     }
//     console.log("Namaste JS");
// }
// x();
// //Here after Printing "Namaste JS" the o/p value of 6 will be printed 5 times.
// //Because here the "i" is referencing to the allocated Memory Values which will be "6" after execution of for loop.

// //Ex-5:

// function x(){
//     for(let i=1; i <= 5; i++){
//         setTimeout(function(){
//             console.log(i);
//          }, i*1000);
//     }
//     console.log("Namaste JS");
// }
// x();
// //Here the O/P is after printing "Namaste JS" it prints 1 2 3 4 5.
// //This is because let is limited to Block Scope and let can access the value of 1-5 with in that block scope and gives the o/p 1-5.


// //Ex-6:

// function x(){
//     for(var i=1; i <= 5; i++){
//         function close (i){ 
//             setTimeout(function(){
//                 console.log(i);
//              }, i*1000);
//         }
//         close(i);
//     }
//     console.log("Namaste JS");
// }
// x();
// //Here after Printing "Namaste JS" the o/p value of 1-5 will be printed.
// //Because here the "i" is referencing to the scope of function close () -  and it can access the value of 1-5 with in fucntion close block scope and gives the o/p 1-5

// document.getElementById("clickMe")
// .addEventListener("click", 
// function x(){
//     alert("Button Clicked");
// });

//Using event listeners - we can show how many times the button clicked
// function count() {
//     let count = 0;
//     document.getElementById("clickMe")
//         .addEventListener("click",
//             function x() {
//                 ++count;
//                 console.log(`Button Clicked ${count} times`);
//             });
// }
// count();

// About 'this' keyword

//Each and every function in JS will have access to 'this' keyword

// let name1 = {
//     firstName : "Parvez",
//     lastName : "Mohammad",
//     fullName : function () {
//         console.log(this.firstName +  " " + this.lastName);
//     },
// }
// name1.fullName();  //O/P: Parvez Mohammad

// // OR

// //ex -1

// let name2 = {
//     firstName : "Parvez",
//     lastName : "Mohammad",
// }

// let fullName = function (hometown, state) {
//     console.log(this.firstName +  " " + this.lastName + " from " + hometown + ", " + state);
// }

// // fullName.call(name2, "Hyderabad", "Telangana");  //O/P: Parvez Mohammad from Hyderabad, Telangana
// fullName.apply(name2, ["Hyderabad", "Telangana"]); //O/P: Parvez Mohammad from Hyderabad, Telangana

// //ex -2

// let name3 = {
//     firstName : "Sachin",
//     lastName : "Tendulkar",
// }
// // fullName.call(name3, "Mumbai", "Maharashtra"); //O/P: Sachin Tendulkar from Mumbai, Maharashtra
// fullName.apply(name3, ["Mumbai", "Maharashtra"]); //O/P: Sachin Tendulkar from Mumbai, Maharashtra

// let myName = fullName.bind(name2, "Hyderabad", "Telangana");
// myName();
// console.log(myName); // //O/P: Parvez Mohammad from Hyderabad, Telangana


// "use strict"
// var a = 10;

// // console.log(this);  // Here 'this' refers to Global Object - In this case it is Window (this = window)

// function x () {
//     // The value of this behaves diffently here in 'strict mode - this = undefined' and in 'non srtict mode - this = window'
//     console.log(this); 
// }
// x();

// const student = {
//     name : "Parvez",
//     printName : function () {
//         console.log(this);
//     }
// }
// student.printName();  

// // O/P : {name: 'Parvez', printName: ƒ}

// const student2 = {
//     name : "Ahamed",
//     printName : function () {
//         console.log(this.name);
//     }
// }
// student2.printName();  

// // O/P : Ahamed

// OR

// const student2 = {
//     name : "Ahamed",
// }
// let printName = function () {
//     console.log(this.name);
// }
// printName.call(student2);  

// // O/P : Ahamed

// const student3 = {
//     name : "Parvez Ahamed",
// }
// student2.printName.call(student3);  

// // O/P : Parvez Ahamed, Here we are over riding the current name 'Ahamed' from student 2 with new name 'Parvez Ahamed' from p[student 3 with the help of call method

//Arrow Functions - this keyword

// let obj = {
//     a : 10,
//     x : function () {
//         console.log(this);
//     }
// };
// obj.x(); // O/P: {a:10, x: ƒ} , Here this will refer to obj (this = obj)

// let obj2 = {
//     a : 10,
//     x : () => {
//         console.log(this);
//     }
// }
// obj2.x(); // O/P: Window {....}, Here 'this' refers to Global Object i.e., Window (this = window), because arrow functions doesnot have their own this or own binding, it retains its value from enclosing lexical contect i.e., Global Spcae i.e., window

// let obj3 = {
//     a : 10,
//     x : function () {
//         const y = () => {
//             console.log(this);
//         }
//     }
// }
// obj3.x(); // O/P: {a:10, x: ƒ}, Here this will refer to obj (this = obj3), because arrow functions doesnot have their own this or own binding, it retains its value from enclosing lexical contect i.e., obj3 and print the values from obj3

// OOPS IN JS

// // Creating Classes

// class Animal {
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
// getInfo () {
//     return (
//         `The name of the animal is ${this.name} and the age is ${this.age}`
//     )
// }
// }

// const Snoopy = new Animal ("Snoopy", 5);
// console.log(Snoopy);
// console.log(Snoopy.getInfo());

// // Inheritance

// class Dog extends Animal {
//     constructor(name,age,breed){
//         super(name,age)
//         this.breed = breed;
//     }
//     bark () {
//         return "Woof"
//     }
// }

// const myDog = new Dog("Rex", 2, "German Shepherd");
// console.log(myDog.getInfo());
// console.log(myDog.breed);
// console.log(myDog.bark());

// class Cat extends Animal {
//     constructor(name,age,weight){
//         super(name,age)
//         this.weight = weight;
//     }
//     voice () {
//         return "Meow!!"
//     }
// }

// const myCat = new Cat("Nexa", 5, "5 Kg");
// console.log(myCat.getInfo());
// console.log(myCat.weight);
// console.log(myCat.voice());

// // Encapsulation

// class Cat extends Animal {
//     #weight;                           // We are marking weight as private
//     constructor(name,age,weight){
//         super(name,age)
//         this.#weight = weight;
//     }
//     getWeight () {
//         return this.#weight;
//     }
//     setWeight (weight) {
//         this.#weight = weight;
//     }
// }

// const myCat = new Cat("Nexa", 5, "5 Kg");
// console.log(myCat.getWeight());
// myCat.setWeight("6 Kg");
// console.log(myCat.getWeight());


// // Polymorphism

// class Animal {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     makeSound () {
//         return "Some nice sound from Animal"
//     }
// }
// class Dog extends Animal{
//     constructor(name,age,breed){
//         super(name,age);
//         this.breed = breed;
//     }
//     makeSound(){
//         return "Woof!!"
//     }
// }
// class Cat extends Animal{
//     constructor(name,age,weight){
//         super(name,age);
//         this.weight = weight;
//     }
//     makeSound(){
//         return "Meow!!"
//     }
// }
// const myDog = new Dog ("Rex", 2, "German Shepherd");
// const myCat = new Cat ("Nexa", 3, "5 Kg");
// console.log(myDog.makeSound());
// console.log(myCat.makeSound());