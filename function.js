//function
//A function is a reusable block of code that performs a specific task.
//Instead of writing the same code again and again,
// you write it once inside a function and call it whenever needed.


// function greet(){
//     console.log("Welcome");
// }
// greet()

//Function with Parameters (Inputs)
//Parameters allow you to send data to a function.

// function greet(name){ 
//     //console.log("Hello " +name);
//     console.log(`Hello ${name}`)
// }
// let x = "Navina";
// let y = "Lalikth"
// greet(x);
// greet("Lalikth");

//Function with Return Value
//return sends a value back to where the function was called.

// function add(a,b){
//    return a+b
// }
// let sum = add(10,2);
// console.log(sum);

//Difference

// console.log(a + b);  // only prints
// return a + b;        // sends value back

//Types of Functions

//A) Normal Function (Function Declaration)

// function multiply(a,b){
//     return a * b;
// }
// console.log(multiply(5,4));

//B) Function Expression

// const multiply = function(a , b){
//     return a * b;
// };
// console.log(multiply(2,5));
 
//Functions with Input(parameters)

// function greet(name){
//     console.log("Hello " + name);
// }
// greet("Navina");

function test(){
    console.log("start");
   
    return;
    
}
test();
console.log("End");