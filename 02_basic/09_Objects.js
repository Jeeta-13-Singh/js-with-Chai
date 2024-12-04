
// Object Literals

const mysym = Symbol("Key1");

const JsUser = {
    name: "Jeeta",
    "FullName": "Jeeta Singh",
    [mysym]: "myKey1",
    age: 23,
    location: "Jaipur",
    email: "jeeta@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["FullName"]);
// console.log(typeof JsUser[mysym]);

JsUser.email = "Jeeta@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "Jeeta@microsoft.com"


// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}


// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


// singleton
// Object.create

// const tinderuser = new Object()
const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "Amit"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

const regularUser = {
    email: "one@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Jeeta",
            lastname: "Singh"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);



