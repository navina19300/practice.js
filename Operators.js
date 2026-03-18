//Operators
//Arithmetic Operator

// let x = 6;
// let y = 2;
// console.log(x + y, x - y, x * y, x / y, x % y, x ** y);

//Comparison Operator

// console.log(6 > 2); //greater than
// console.log(6 < 2); //Lesser than
// console.log(6 == "6"); //Double Equal(==) checks only values
// console.log(6 === "6"); //Triple Equal(===) checks both values and types
// console.log(6 >= 2); //(>=) greater than or Equal to
// console.log(6 <= 2); //(<=) lesse than or Equal to

//Logical Operator

// //AND operator
// console.log(true && true); //both conditions must be true
// //OR operator
// console.log(true || false); //Either one condition must be true
// //NOT operator
// console.log(!true); //reverse the result (true -> false) (false -> true)


//If a number is greater than 10 AND even.

// for(let i = 0; i<=20; i++){
//     if(i > 10 && i%2 === 0){
//         console.log(i);
//     }
// }

//Check if a number is positive and even.

let num = 20;
if(num%2 === 0 && num>0){
    console.log("The number is Positive and Even");
}
else{
    console.log("The number is Not Positive and Even");
    
}