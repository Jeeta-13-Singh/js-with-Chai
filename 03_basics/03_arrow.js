const user = {
    username: "Jeeta",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// In browser the global object is window(Important)

// function one (){
//     let username = "Jeeta"
//     console.log(this.username);
    
// }
// one()


// const chai = function() {
//     let username = "Jeeta"
//     console.log(this.username);
    
// }

// chai()
const chai = () => {
    let username = "Jeeta"
    console.log(this);
    
}

// chai()



// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log (addTwo(3,4));
// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) =>  (num1 + num2)
const addTwo = (num1, num2) =>  ({username: "Jeeta"})


console.log (addTwo(3,4));

// Difference between regular and Arrow function
// In JavaScript, regular functions bind their own `this` context, determined by how they're called, while arrow functions inherit `this` from their surrounding scope. Arrow functions cannot be used as constructors and don't have their own `arguments` object, unlike regular functions. They're suited for concise, lexical `this` bindings.