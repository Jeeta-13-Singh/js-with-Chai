const score = 400
// console.log(score);
// console.log(typeof(score));


const balance = new Number(100)
// console.log(balance);



// console.log(balance.toString());
// console.log(balance.toFixed(2));
// console.log(balance.toString().length);



const otherNumber = 123.8966

// console.log(typeof(otherNumber.toPrecision(3)));
// console.log(otherNumber.toPrecision(3));

   
const hundreds = 1000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));




// +++++++++++++++++++++++Maths++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,2,3,8,9,0));
// console.log(Math.max(4,2,3,8,9,0));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log((Math.random()*2) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// In the above code firstly the Math.random() generates the random number and the (max-min) defines the range of the output and to avoid the value 0 we add (+1) within the range defining formula i.e.(max-min) and we add +min to define that the value must be greater then the min value or atleast the min value and we wrap the whole formulae within the Math.floor function to get the floor value i.e. the value must be without any decimal value