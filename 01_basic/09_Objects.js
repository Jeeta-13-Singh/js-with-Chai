// singleton
// Object.create

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
Object.freeze(JsUser)
JsUser.email = "Jeeta@microsoft.com"

// console.log(JsUser);

JsUser.greeting = Function()
    {console.log("Hello Js user");}


console.log(JsUser.greeting());
