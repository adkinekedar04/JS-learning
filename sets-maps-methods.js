// iterables 
// string, array are iterable

// const firstName = "Kedar";
// for(let char of firstName){
//     console.log(char);
// }

// const items = ["item1","item2","item3"];
// for(let item of items){
//     console.log(item);
// }

// array like object
// who has length property
// can be accessed through index
// eg. string

// const firstName = "Kedar";
// console.log(firstName.length);
// console.log(firstName[3]);

// -------------------------------------------

// SETS (it is iterable)
// store data
// sets also have its own methods
// no index based access
// order is not guaranteed
// no duplicate items

// const numbers = new Set([1,2,3,4,2]);
// console.log(numbers);  // Set(4) {1, 2, 3, 4}
// console.log(typeof numbers);
// console.log(numbers[2]); // undefined

const mySet = new Set();  // empty set
const myArray = ["item1","item2"];
mySet.add(1); // {1}
mySet.add(4);  // {1,4}
mySet.add(myArray);  // {1, 4, Array(2)}
mySet.add(myArray);  // {1, 4, Array(2)}
mySet.add(["item1","item2"]);  // Set(4) {1, 4, Array(2), Array(2)}
// as both arrays have seperate address in memory, so they are considered different   

// console.log(mySet.has(4)); //true

// set is iterable
// for(let i of mySet){
//     console.log(i);
// }
// console.log(mySet);

// length of set
// let length = 0;
// for(let element of mySet){
//     length++;
// }
// console.log(length);  //4

// ---------------------------------------------------

// MAPS
// map is iterable 
// store data in ordered manner
// duplicate keys are not allowed like objects

// difference betn maps and objects

// objects can only have string or symbol as key

// in maps you can use anything as key such as array, number, string

// const person = {
//     firstName : "Kedar",
//     age : 20,
//     1 : "one"
// }
// console.log(person["1"]); // one

// for(let key in person){
    // console.log(key);
    // console.log(typeof key);
// }


// map -> key value pair
// where key can be anything
const personMap = new Map();
personMap.set("firstName","Kedar");
personMap.set("age",20);
personMap.set(1,"one");
personMap.set([1,2,3,4,5],"array");
personMap.set({1:"one"},"object");
// console.log(personMap);

// access key value pair using get method

// console.log(personMap.get("firstName"));  //Kedar
// console.log(personMap.get(1));  //one

// print all keys using keys method
// console.log(personMap.keys());

// print all keys using for of method
// for(let key of personMap.keys()){
//     console.log(key, typeof key);
// }
// for(let key of personMap){
    // console.log(key);     // array of [key, value]
// }

// IMP !!!! - print key value pair 
// for(let [key,value] of personMap){
//     console.log(key,value);
// }

// const anotherMap = new Map([["name","Kedar"],["age",20],[[1,2],{"myName":"Rohit"}]]);

// console.log(anotherMap);

// const person1 = {
//     name : "A",
//     age : 20
// }


// const map1 = new Map();
// map1.set(person1, {
//     gender : "male",
//     mob : 12345
// });
// console.log(map1);
// console.log(map1.get(person1));
// console.log(map1.get(person1).gender);

// ----------------------------------------------

// clone object using Object.assign
 
// const obj1 = {
//     name : "Kedar",
//     age : 20
// }

// const cloneOfobj1 = Object.assign({},obj1);
// obj1.gender = "male";
// console.log(obj1); //{name: 'Kedar', age: 20, gender: 'male'}
// console.log(cloneOfobj1); //{name: 'Kedar', age: 20}

// ----------------------------------------------

// optional chaining

// const user = {
//     firstName : "Kedar",
//     address : {aptName : "Sankalp Complex", wing : "C"}
// }
// console.log(user);
// console.log(user?.firstName);
// console.log(user?.address?.aptName);
// console.log(user?.address?.flatNo);  // wont throw error now 
// watch vdo for more

// ---------------------------------------------

// methods 
// methods are function inside object

// this keyword IMP !!!!!!!!!!!
// this is an object who calls its function (method) 

// const aFunction = function() {
//     console.log(this);  
// }

// const user = {
//     userId : 4,
//     userName : "Kedar",
//     aboutUser : function() {
//         console.log(`user name is ${this.userName} and user ID is ${this.userId}`);
//     },
//     userKey : aFunction
// }
// console.log(user.aboutUser);
// user.aboutUser();
// user.userKey();   // user is this 

// console.log(this);

