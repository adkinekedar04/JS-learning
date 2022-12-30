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

// IMP - callback function passed as parametr should have return statement 
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

// filter method

// callback function should return a Boolean value
// this method filters given array according to callback function

// const numbers = [1,2,4,5,6,7];

// const isOdd = function(number) {
//     return number%2===1;
// }

// const oddNumbers = numbers.filter(isOdd);

// console.log(oddNumbers);

// reduce method

// const numbers = [2,1,4,7,3,9];


// const totalSum = numbers.reduce((currentSum, currentN) => {
//     return currentSum + currentN;
// })

// console.log(totalSum);

// real life example 

// const products = [
//     {productId : 1, productName : "Mobile", price : 15000},
//     {productId : 2, productName : "earphone", price : 500},
//     {productId : 3, productName : "TV", price : 45000},
//     {productId : 4, productName : "smartwatch", price : 1500}
// ]

// const totalPrice = products.reduce((currentTotal, currentProduct) => {
//     return currentTotal + currentProduct.price;
// }, 0)

// console.log("Total amount:",totalPrice);

// sort method

// this method changes original array in sorted order

// this method converts numbers/ strings to ascii and compares

// const names = ["Kedar","Anant","Rohit","Prathamesh"];
// names.sort();
// console.log(names);

// Capital letters (65 onwards) have lower ascii code than small letters (97 onwards)

// const userNames = ["Abc","abc","Bcd","dce"];
// userNames.sort();
// console.log(userNames);

// In case of numbers JS treat as strings (converts to ascii code eg. 5 --> "5")

// const numbers = [34,2,98,55,100,451];

// numbers.sort((a, b) => {
//     return a-b;
// })
// returns sorted array in ascending order
// a-b > 0 ? swap a, b : no operation

// numbers.sort((a,b) => a-b);

// console.log(numbers);

// PRICE - sort by : low to high

// const products = [
//     {productId : 1, productName : "p1", price : 15000},
//     {productId : 2, productName : "p2", price : 500},
//     {productId : 3, productName : "p3", price : 45000},
//     {productId : 4, productName : "p4", price : 1500},
//     {productId : 5, productName : "p5", price : 50}
// ]

// clone products array

// const clonedProducts = products.slice(0);
// console.log(clonedProducts); 

// clonedProducts.sort((a, b) => a.price-b.price);

// console.log(clonedProducts);


// find method 

// const users = [
//     {userId : 12, userName : "Kedar"},
//     {userId : 23, userName : "Anant"},
//     {userId : 5, userName : "Rohan"},
//     {userId : 49, userName : "Anupras"}
// ]

// const myUser = users.find(user => user.userId===23);
// console.log(myUser);

// const myUser1 = users.find(user => user.userName==="Kedar");
// console.log(myUser1);


// every method

// const numbers = [12,40,26,38,14];
// const numbers1 = [4,6,3,10,8];

// const isEveryNumberEven = numbers.every(number => number%2 === 0);
// console.log(isEveryNumberEven);  // true

// const isEveryNumberEven = numbers1.every(number => number%2 === 0);
// console.log(isEveryNumberEven);  // false

const products = [
    {productId : 1, productName : "p1", price : 15000},
    {productId : 2, productName : "p2", price : 500},
    {productId : 3, productName : "p3", price : 45000},
    {productId : 4, productName : "p4", price : 1500},
    {productId : 5, productName : "p5", price : 50}
]

// check whether all products have price less than 50000

// console.log(products.every(product => product.price < 50000)); // true

// some method 

// check whether any product has price greater than 40000

// console.log(products.some(product => product.price > 40000)); // true


// fill method 
// value, start, end 

// create new array
// const myArray = new Array(5).fill(2);
// console.log(myArray);    // [2, 2, 2, 2, 2]

// const myArray = [1,2,3,4,5,6,7,8];

// replace 
// myArray.fill(1,2,5); // [1, 2, 1, 1, 1, 6, 7, 8]
// myArray.fill(-1,3,); // [1, 2, 3, -1, -1, -1, -1, -1]
// console.log(myArray);

// splice method 
// start, delete, insert

const myArray = ["item1","item2","item3","item4"];

// delete 
// myArray.splice(1,2); // ['item1', 'item4']
// myArray.splice(0,2); // ['item3', 'item4']
// console.log(myArray);  

// insert 
// myArray.splice(2,0,"itemInserted"); //['item1', 'item2', 'itemInserted', 'item3', 'item4']
// console.log(myArray);

// insert and delete simultaneously
// const deletedItems = myArray.splice(0,2,"itemInserted1","itemInserted2","itemInserted3"); //['item1', 'itemInserted1', 'itemInserted2', 'itemInserted3', 'item4']
// console.log(myArray);
// console.log(deletedItems);