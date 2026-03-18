//Function
//Function is a reusable block of code

//syntax

// function function_name(){
//     //code
// }

// function function_name(){
//     console.log("Hello Myyy Frienddd");
// }
// function_name();

//Local variable
// let myData = "file";
// function function_name(){
//     let myData = "Navina";
//     console.log(myData);
// }
// function_name();
// console.log(myData);

//Example

// function function_name(){
//     console.log("The Function Output");
// }
// let b = 30;
// console.log(b);
// function_name();

//Return Function

// function myFunction(p1,p2){
//     return p1 + p2;
// }
// //let b = myFunction(20,40);
// console.log(myFunction(20,40));

// function myFunction(a1,a2){
//     return a1 + a2;
// }
// let b = myFunction(30,30);
// let c = myFunction(10,20);
// let d = myFunction(24,54);
// console.log(b);
// console.log(c);
// console.log(d);


// function add(p1,p2,p3){
//     return p1*p2*p3;
// }
// let a = add(2,2,2)
//     console.log(a);

//Arguments and parameters

// function detail(name,age){
//     console.log(`Hello I'm ${name} my age is ${age}`);
// }
// detail("Navi",24);

// function myFunction(x=12,y=10){
//     return x+y;
// }
// console.log(myFunction());

// x = sumAll(1,123,500,115,44);
// function sumAll(){
//     let sum = 0;
//     for(let i = 0; i< arguments.length;i++){
//         sum += arguments[i];
//     }
//     return sum;
// }
// console.log(x);

// const add = function(a,b){
//     return a + b;
// }
// let sum = add(2,4);
// console.log(sum);

//Arrow Function

// let myFunction = function(a,b){
//     return a*b;
// }.

// let hello = function(){
//     return "Hello World!";
// }
// console.log(hello);

//with arrow func
// let myFunction = (a,b) => a*b;
// let hello = () =>{
//     return "Hello world";
// }
// console.log(hello);
// let greet = () => "Hello world";
// console.log(greet());

// function calculate(a,b){
//     return [a+b,a-b,a*b,a/b];
// }
// let result = calculate(10,2);
// console.log(result);
// console.log(result[0]);
// console.log(result[1]);
// console.log(result[2]);

//Example: Using Object 
// function add(a,b){
//     return {
//         sum: a+b,
//         diff: a-b,
//         multi: a*b,
//         div: a/b
//     };
// }
// let result = add(24,32);
// console.log(result);
// console.log(result.multi);

// function student(){
//     return{
//         name: "Navina",
//         age: 24,
//         native: "Erode",
//         isfemale: true
//     };
// }
// let result = student();
// console.log(result.name);
// console.log(result.native);

//Returning Array

// function numbers(){
//     return [1,2,3,4,5,6];
// }
// let x = numbers();
// console.log(x.length);
// console.log(x[1]);

//Multiple return statements (conditions)

// function checkAge(age){
//     if(age>=18){
//         return "Allowed";
//     }
//     else{
//         return "Not Allowed";
//     }
// }
// console.log(checkAge(24));

//Check even or odd

// function checkEvenodd(num){
//     if(num%2==0){
//         return "Num is Even";
//     }
//     else{
//         return "Num is odd";
//     }
// }
// let result = checkEvenodd(27);
// console.log(result);

//Find largest of 3 numbers


//Practice Program

//Print "Welcome to JavaScript"

// function greet(){
//     console.log("Welcome to Javascript");
// }
// greet();

// function loggedIn(password){
//     return password.length>=6;
// }
// console.log(loggedIn("1234"));
// console.log(loggedIn("12345678"));

// function withdrawal(amount,balance){
//     return amount - balance;
// }
// let amount = 8000;
// let balance = 5000;

// let taken = withdrawal(amount,balance);
// // console.log(withdrawal(5000,3000));

// console.log("taken: " +taken);
// console.log("amount: " +amount);
// console.log("balance: " +balance);

// function withdrawal(balance,amount){
//     if(amount>balance){
//         return "Insufficient balance";
//     }else{
//     return balance - amount;
//     }
// }
// let balance = 10000;
// let amount = 7000;
// let result = withdrawal(balance,amount);
// console.log("The result is: " +result);

function function_name(x = 10, y = 5){
    return x + y;
}
console.log(function_name())