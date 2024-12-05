
 function SayMyName(){
    console.log("J");
    console.log("e");
    console.log("e");
    console.log("t");
    console.log("a");
}

// SayMyName() //Execution
// SayMyName //Reference

// function addTwoNumbers(number1, number2){
//     console.log(number1+ number2);
// }
// addTwoNumbers(2,3)

function addtwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addtwoNumbers(3, 5)
// console.log("Result: ", result);

function loginUserMessage(username = "Sam"){
    if (!username) { //(username === undefined)
        console.log("Please Enter the username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Jeeta"));

function calculateCartPrice(...numb1){
    return numb1
}
// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "Jeeta",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "Sam",
    price: 399
})



const arr = [200, 400, 100, 600]

function returnsecondvalue(getarry){
    return getarry[2]
}

console.log(returnsecondvalue([200, 300, 1000, 700]));
