
// let age = 20;
// console.log(typeof age);

// // convert number to string 
// age = age + "";
// console.log(typeof age);  // "22 "

// // convert string to number
// age = Number(age);
// console.log(typeof age);

// // convert number to string 
// age = String(age);
// console.log(typeof age);

// // convert string to number
// age = +age;
// console.log(typeof age);

// ------------------------------

// template string 

// let firstName = "Kedar";
// let age = 20;

// let aboutMe = `my name is ${firstName} and my age is ${age}`;

// console.log(aboutMe);

// ---------------------------------

// Interesting !!! bug in Javascript 

// console.log(typeof null); // --> prints object but this is wrong, it should be null. It's a bug !!

// ---------------------------------

// BigInt
// console.log(Number.MAX_SAFE_INTEGER);  // 9007199254740991

// let myNumber = BigInt(133);
// let myNumber1 = 12n;

// ----------------------------------

// comparison operator

// let num1 = 7;
// let num2 = "7";

// console.log(num1 == num2); //true
// console.log(num1 === num2); //false

// -----------------------------------

// Intro to arrays
// array is object

// let fruits = ["apple","mango","grapes"];
// console.log(fruits);
// console.log(typeof fruits); //object

//javascript consists of many other objects
// then how to check if its given object is array

// console.log(Array.isArray(fruits));  // true

// push
// fruits.push("banana");
// console.log(fruits);

// pop
// fruits.pop();
// console.log(fruits);

// let poppedFruit = fruits.pop();
// console.log(poppedFruit);

// add/ remove from front !!!

// unshift
// fruits.unshift("banana");
// fruits.unshift("pineapple");
// console.log(fruits);

// shift
// fruits.shift();
// console.log(fruits);

// let removedFruit = fruits.shift();
// console.log("removed fruit is",removedFruit);

// ---------------------------------------------

// IMP !!!!!!!!
// primitive and reference data types

// primitive data type
// let num1 = 6;
// let num2 = num1;
// console.log(num1,num2);

// num1++;

// console.log("after increamenting num1:",num1,num2);
// num2 != num1

// reference data type --> array

// let array1 = ["item1","item2","item3"];
// let array2 = array1;
// console.log(array1,array2);

// array1.push("item4");

// console.log("after pushing element in array1");

// console.log(array1,array2);
//array2 = array1

// --------------------------------------------------

// let array1 = ["item1","item2"];
// let array2 = array1;
// console.log(array1===array2);  //true means same array in heap

// let array3 = ["num1","num2"];
// let array4 = ["num1","num2"];
// console.log(array3===array4);  //false means seperate arrays in heap

// how to clone array
// why clone array? similar items in cloned array, operation on any one array is independent on other array

// let array1 = ["item1","item2"];
// cloning of array1
// let array2 = array1.slice(0);  //first method - (fastest)
// let array2 = [].concat(array1);   //second method
// seperate operator
// let array2 = [...array1];     // new method (popular)
// array2.push("item3");

// console.log(array1===array2);
// console.log(array1);
// console.log(array2);

// adding items to array

// let array2 = array1.slice(0).concat(["item3","item4"]);
// let array2 = [].concat(array1,["item3","item4"]);
// let array2 = [...array1,"item3","item4"];

// console.log(array2);

// concatenate arrays
// let newArray = ["item3","item4"];

// let array2 = [...array1, ...newArray];

// console.log(array2);

// ----------------------------------------------------

// use const for creating array
// IMP !!!! - const should be used for arrays

// heap memory:at 0x11 adrress ["item1","item2"]
// const array1 = ["item1","item2"];  //0x11
//   array1 = ["item1","item2","item3"]; // this is wrong , "TypeError"
// array1.push("item3");
// console.log(array1);

// --------------------------------------------------

// array destructuring

const myArray = ["val1","val2","val3"];

let [myVar1,myVar2,myVar3] = myArray;

// console.log("value of myVar1:",myVar1);
// console.log("value of myVar2:",myVar2);
// console.log("value of myVar3:",myVar3);

let [myVar4,myVar5,myVar6,myVar7] = myArray;

// console.log("value of myVar4:",myVar4);
// console.log("value of myVar5:",myVar5);
// console.log("value of myVar6:",myVar6);
// console.log("value of myVar7:",myVar7);

let [myVar8, ,myVar9] = myArray;

// console.log("value of myVar8:",myVar8);
// console.log("value of myVar9:",myVar9);

// const myNewArray = myArray.slice(1);
// console.log(myNewArray);

// let [myVar10, ...myNewArray] = myArray;
// console.log(myVar10,myNewArray);

// -------------------------------------------------

// OBJECTS (REFERENCE TYPE)

// arrays are good but not sufficient for real life data
// objects store key value pairs
// objects dont have index

// create object

// const person = {
//     name : "Kedar",
//     age : 20,
//     hobbies : ["playing","coding"]
// };
// console.log(person);
// console.log(typeof person);

// access data from object

// dot notation
// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies);

// bracket notation
// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person["hobbies"]);

// add key value pair

// person.gender = "male";
// console.log(person);

// person["gender"] = "male";
// console.log(person);

// difference between dot and bracket notation

const person = {
    name : "Kedar",
    age : 20,
    hobbies : ["playing","coding"],
    "mob no" : 8855893211 
}

// console.log(person.mob no);       // wrong method to access "mob no" which has space in it 
// hence bracket notation is used in such cases

// console.log(person["mob no"]);

// const key = "email id";

// person.key = "adkinekedar04@gmail.com";
// {name: 'Kedar', age: 20, hobbies: Array(2), key: 'adkinekedar04@gmail.com'}

// this is right way
// person[key] = "adkinekedar04@gmail.com";
// console.log(person);
// {name: 'Kedar', age: 20, hobbies: Array(2), email id: 'adkinekedar04@gmail.com'}

// iterate object

// for in loop 
// OR 
// Object.keys
//OR
// for of loop

// for(let key in person){
//     // console.log(key,person[key]);
//     console.log(`${key} : ${person[key]}`);
// }

// console.log(Object.keys(person)); // return an array
// var isArray = Array.isArray(Object.keys(person));
// console.log(isArray); //true


// for(let key of Object.keys(person)){
//     console.log(key,person[key]);
// }

// computed properties

// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "myvalue1";
// const value2 = "myvalue2";

// const obj = {

// };

// obj[key1] = value1;
// obj[key2] = value2;

// console.log(obj);

// spread operator

// const obj1 = {
//     key1 : 5,
//     key2 : "A"
// }

// const obj2 = {
//     key3 : 1,
//     key4 : "C",
//     key1 : 10
// }

// const newObj = {...obj1, ...obj2};
// const newObj = {...obj2, ...obj1}; 

// console.log(newObj);

// OBJECT destructuring

// const band = {
//     bandName : "led zeppelin",
//     famousSong : "stairway to heaven",
//     year : 1968,
//     famousSong2 : "Whole Lotta Love"
// }

// let {bandName, famousSong} = band;
// by default variable names are set to key name
// this is how we can change name of variables
// let {bandName:val1, famousSong:val2, ...restProps} = band;
// console.log(bandName);
// console.log(val1);
// console.log(restProps);

// OBJECTS in array

const users = [
    {userId: 1,firstName: "Kedar", gender: "M"},
    {userId: 2,firstName: "Ajay", gender: "M"},
    {userId: 3,firstName: "Swati", gender: "F"}
]

// for(let user of users){
//     console.log(user);
// }

// const [user1,user2,user3] = users;
// console.log(user3);

// const [{firstName:user1Name},{userId} ,{gender:user3Gender}] = users;
// console.log(user1Name,userId,user3Gender);

