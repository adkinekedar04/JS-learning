// function declaration 

// function sayMyName(){
//     console.log("Kedar");
// }

// function call OR function invokation

// sayMyName();

// function add(num1,num2){
//     return num1+num2;
// }

// const sum = add(18,9);
// console.log(sum);

// function expression 

// const sayMyName = function(){
//     console.log("Kedar");
// }
// sayMyName();

// const add = function(num1,num2){
//     return num1+num2;
// }
// console.log(add(1,0));

// ARROW functions

// const sayMyName = () => {
//     console.log("Kedar");
// }
// sayMyName();

// const add = (num1,num2) => {
//     return num1+num2;
// }
// console.log(add(7,3));

// function inside function 

// function app(){
//     const myFunc = () => {
//         console.log("hello from myFunc");
//     }

//     const addTwo = function(num1,num2){
//         return num1+num2;
//     }

//     const mul = (num1,num2) => num1*num2;

//     console.log("inside app");

//     myFunc();
//     console.log(addTwo(2,3));
//     console.log(mul(4,5));
// }
// app();

// lexical scope

// const myVar = "value1";

// function myApp(){
//     const myVar = "value2";
//     const myFunc = function(){
//         const myVar = "valueNew";
//         console.log(myVar);  
//     }
//     const myFunc1 = () => console.log("inside myFunc1");

//     myFunc1();
//     myFunc();
// }
// myApp();

// block scope vs function scope 

// let and const are block scoped.
// var is function scoped.

// {
    // let myName = "Kedar";
    // const myName = "Kedar";
    // var myName = "Kedar";
    // console.log(myName); // Kedar
// }
// console.log(myName);    // ReferenceError in case of let and const   // Kedar in case of var

// function myApp(){
//     if(true){
//         let myVar = "val";
//         var myVariable = "value";
//         console.log(myVar);
//         console.log(myVariable);
//     }
    //console.log(myVar); // as let is block scoped, this line cause error
    // console.log(myVariable); // No error var is fun scoped
// }
// myApp();
// console.log(myVariable);   // error var is fun scoped

// Defualt parameters

// function addTwo(a,b=1){
//     console.log(a+b);
// }
// two arguments a and b 
// if b is not passed as parameter then its default value is 1.

// addTwo(3,8); //11
// addTwo(7); //8

// REST parameters

// function addAll(...numberArray){
    // console.log(numberArray);
    // console.log(Array.isArray(numberArray));
//     let sum = 0;
//     for(let number of numberArray){
//         sum = sum + number;
//     }
//     console.log(sum);
// }
// addAll(1,2,3);
// addAll(1,6,9,3,8,2);
// addAll(0);

// PARAMeters destructuring

// object
// used widely in react

// const person = {
//     firstName : "Kedar",
//     age : 20
// }

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.age);
// }

// function printDetails({firstName,age}){ //destructuring
//     console.log(firstName);
//     console.log(age);
// }

// printDetails(person);

// callback functions

//  function myFun2(name){
//     console.log(`inside myFun2 and I'm ${name}`);
//  }

//  function myFun1(callback){
//     console.log("hello from myFun1 and I'm alright");
//     callback("Kedar");
//  }
//  myFun1(myFun2);

// function returning function

// function myFun(){
//     function hello(){
//         return "hello world";
//     }
//     return hello;
// }
// const myHello = myFun();
// console.log(myHello());

// ----------------------------------------------



