//Object
//syntax - variable_Type object_name{ 
// key1:value1....key4:value4};

// let a = {};
// console.log(typeof a);

// const person = {
//     firstName: "Navina",
//     lastName: "Dhanasekaran",
//     age: 24,
//     department: "Electronics and Instrumentation Engineering"
// };
// console.log(person.department);
// person.college = "Kongu Engineering College";
// console.log(person.college);
// delete person.age;
// console.log(person);

//Nested Object
// myObject = {
//     Name : "Navina",
//     age : 24,
//     myCarCollections: {
//         car1: "Kia",
//         car2: "XUV",
//         car3: "Benz"
//     }
// }
// console.log(myObject.myCarCollections.car1);


// const person = new Object({
//     firstName: "Navina",
//     lastName: "Dhanasekaran",
//     favColor: "Yellow"
// });
// console.log(person.lastName);

//object with function
// const person = {
//     firstName : "Gowdham",
//     lastName : "subramaniyam",
//     age: 28,
//     fullName: function(){
//         return this.firstName + " " + this.lastName
//     } 
// };
// console.log(person.fullName());

//constructor Function for person objects

function person(first, last, age,eye){
    this.firtName = first;
    this.lastName = last;
    this.age = age;
    this.eyecolor = eye;
};
const myFather = new person("Dhanasekaran","S","50","Black");
const myMother = new person("Menaka","Dhanasekaran","47","Black");
const myBrother = new person("Lalikth","Dhanasekaran",17,"Grey");
const myHusband = new person("Gowdham","Subramaniyam","28","Brown");
const mySelf = new person("Navina","Dhanasekaran",24,"yellow");

console.log(myMother.firtName);
console.log(myFather.age);
console.log(myBrother.lastName);
console.log(myHusband.age);
console.log(mySelf.firtName);