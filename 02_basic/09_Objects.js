
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
// console.log(typeof JsUser["age"]);
// console.log(typeof JsUser["lastLoginDays"]);

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
// When ever we declare an object using a constructor it is of Singleton form
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

// const obj3 = {obj1, obj2 } //Returns Object within Object
const obj3 = Object.assign({}, obj1, obj2, obj4)
 

// const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "j@gmail.com"
    },
    {
        id: 2,
        email: "e@gmail.com"
    },
    {
        id: 3,
        email: "t@gmail.com"
    },
]

// console.log(users[1].email);
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('isLoggedIn'));




const course = {
    coursename: "Chai aur Padahi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: Instructor} = course
const {price: coursePrice} = course

console.log(Instructor);
console.log(coursePrice);

// {
//    " name": "jeeta",
//     "coursename": "js ki Padhaee",
//     "price": "free"
// }

