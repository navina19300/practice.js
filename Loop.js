//while

// let i = 0;

// while(i<=20){
    // console.log(i);
    // i++;
// }

//Do-while

// do{
    //code

// }while(condition);

// let i = 1;
// do{
//     console.log(i);
//     i++;
// }while(i<=10);

// for(let i=1;i<=10;i++){
//     console.log(i);
// }


// let i=1;
// while(i<=20){
//     if(i%2===0){
//         console.log(i);
//     }
//     i++;
// }

// let i=5;
// do{
//     console.log(i)
//     i--;
// }while(i>=1)

//print even numbers (1-20)

// for(let i=1;i<=20;i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }

//Find sum of Numbers (1-10)

// let sum =0;

// for(let i = 1; i<=10; i++){
//     sum = sum + i;
//     console.log(sum);
// }
// console.log(sum);

//reverse a string

// let name = 'Javascript';
// let result = "";
// for(let i = name.length-1;i>=0;i--){
//     result += name[i];
// }
// console.log(result);

// let str = 'Helloo';
// let result = "";
// for(let i = str.length-1;i>=0;i--){
//     result += str[i];
// }
// console.log(result);

// let num = [10,25,5,40,15];
// let max = num[0];
// for(let i = 0; i< num.length; i++){
//     if(num[i]>max){
//         max = num[i];
//     }
// }
// console.log(max);

// let arr = [10,25,5,40,15];
// let min = arr[0];
// for(let i = 0; i<arr.length;i++){
//     if(arr[i]<min){
//         min = arr[i];
//     }
// }
// console.log(min);

//count Even numbers

// let arr = [1,2,3,4,5,6];
// let result = 0;
// for(let i=0;i<=arr.length;i++){
//     if(arr[i]%2===0){
//         result++;
//     }
// }

// console.log(result);

//sum of Array

// let num = [10,20,30];
// let sum = 0;
// for(let i=0;i<num.length;i++){
//     sum += num[i];
// }
// console.log(sum);

//reverse array

let arr = [1,2,3,4];
let rev = [];
for(let i=arr.length-1;i>=0;i--){
    rev.push(arr[i]);
}
console.log(rev);