//conditional statements
//if, if-else, if else if else, ternary(?), switch

//if statement

//if(condition){
    //code
//}

// let age = 18;
// if(age==18){ 
//     console.log("Eligible to vote")
// }

//if-else statement
//if(condition){
    //code
//}
//else{
    //code
//}

// let votingAge = 24;
// if(votingAge>=18){
//     console.log("Eligible to Vote");
// }
// else{
//     console.log("Not Eligible to Vote")
// }

//else-if statement
//if(condition){
    //code
//}
//else if(condition){
    //code
//}
//else{
    //code
//}

// let price = 199;
// if(price==299){
//     console.log("Offer price")
// }
// else if(price>=500){
//     console.log("The price is expensive");
// }
// else{
//     console.log("The price is Average");
// }

//Nested condition
// if(condition){
//     if(condition){
//         //code
//     }
//     else{
//         //code
//     }
// }
// else{
//     //code
// }

let age = 16;
let card = "Voter";
if(age>=18){
    if(card == "VoterId"){
        console.log("Eligible to vote");
    }
    else{
        console.log("you don't have card you are not eligible");
    }
}
else{
    console.log("Not eligible");
}