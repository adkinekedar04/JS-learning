// IMP Array methods 

// forEach
// map
// filter
// reduce


// forEach

// const numbers = [1,2,3,4];

// function twice(number, index){
//     console.log(`index is ${index} and ${number}*2 = ${number*2}`);
// }

// for(let i=0; i<numbers.length; i++){
//     twice(numbers[i],i);
// }

// numbers.forEach(twice); // forEach takes function as argument (callback function)
// forEach iterate over every index of array (same as for loop)

// numbers.forEach(function(number) {
//     console.log(`${number}*2 = ${number*2}`);
// }) // another way of passing function as parameter

// const users = [
//     {firstName : "Kedar", age : 20},
//     {firstName : "Rohit", age : 21},
//     {firstName : "Sharmaji ka beta", age : 18},
//     {firstName : "Sharmaji ke bete ka beta", age : 3}
// ]

// users.forEach(function(user){
//     console.log(user.firstName, user.age);
// })

// using arrow function 

// users.forEach(user => {
//     console.log(user.age);
// })

// users.forEach((user,i) => {
//     console.log(user.age,i);
// })

// ----------------------------------------------

// map method

// IMP - function passed as parametr should have return statement 
// array.map(callback function) returns an array so it needs to be stored in varaible

// const numbersArray = [2,6,9,5,7];

// const squaredNumberArray = numbersArray.map(number => {
//     return number * number;
// })

// console.log(squaredNumberArray);

// const users = [
//     {firstName : "Kedar", age : 20},
//     {firstName : "Rohit", age : 21},
//     {firstName : "Sharmaji ka beta", age : 18},
//     {firstName : "Sharmaji ke bete ka beta", age : 3}
// ]

// const userDetails = users.map(user => {
//     return `${user.firstName} - ${user.age}`;
// })

// console.log(userDetails);













