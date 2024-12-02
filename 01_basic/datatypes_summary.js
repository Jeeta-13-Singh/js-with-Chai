// JavaScript is dynamically typed language
// In dynamically typed languages, type checks are performed at runtime, only when your program is executing. This means you can assign anything you want to the variable and it will work. However, this can lead to errors at runtime

// Primitive 

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt


const gameScore = 105
const gamePoints = 109.7

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol("123")

console.log(id==anotherId);
const bigNumber = 3456782198706734232n


//Reference (Non Primitive)

//Type: Array, Objects, Functions

const heors = ["shaktiman", "naagraj", "doga"]
let myobj = {
    name: "Jeeta",
    age: 22,
}

const myFunction = function(){
console.log("Hello world");
}

//https://262.emca-international.orgs/5.1/#sec-11.4.3