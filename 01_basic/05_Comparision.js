// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

console.log("2"> 1);//true not a good practice
console.log("02">1);//-----do------

console.log(null > 0);//false not a good practice
console.log(null == 0);//-----do--------
console.log(null >= 0);//true

console.log(undefined == 0);//false not a good practice
console.log(undefined >0);//----do-----
console.log(undefined <0);//-----do-----
//we must avoid the above listed comparision

 //===Strict check
console.log("2" === 2);//false as triple equal to checks/compares the same datatype 
