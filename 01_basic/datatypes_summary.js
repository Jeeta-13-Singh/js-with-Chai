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

// console.log(id==anotherId);
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


// +++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(used in Primitive), Heap(used in Non_Primitive)

let myYoutubename = "jeetaSingh"
let anothername = myYoutubename
anothername = "javaScriptwithchai"

// console.log(myYoutubename);
// console.log(anothername);

// In Stack used in Primitive datatypes gives the copy of the value i.e. changes made are done on the copy of the variable so the value only changes in the copy of the variable

let user ={
    email: "user@google.com",
    upi: "user@ybl"
}

let usernew = user

usernew.email = "jeeta@google.com"

console.log(user.email);
console.log(usernew.email);


// whereas the Heap uses Non-primitive datatypes it gives the reference of the value i.e. changes made are done in the original variable so the value gets changed 