// variables: - box

// let,var,const 
// let a=4;
// console.log(a)

// initilization 
// In case of var 
// var a=1;
// var a=56;
// console.log(a);

// var c=45;
// c=90;
// console.log(c);

// In case of let
// let a=89;
// a=789;
// console.log(a);

// const a=23;
// a=90;
// console.log(a)

// const a;
// a=90;
// console.log(a)


// scope 
// {
//   let a=90;  
//   console.log(a);
// }

// Hoisting :- 
// console.log(a); //a is not defined

// console.log(a); //Cannot access 'a' before initialization
// let a=78;

// camelCase -> first name 
// firstNameLastName

// function declaration  /function defination  
// function greet(name){ //parameters
//     console.log("Hello There! "+name);
// }

// //calling / invoke 
// greet("Amit"); // arguments

// function exression 
// greet();

// let greet=function (){
//      console.log("Hello world")
// }


// Immidiatly invoke function expression (IIFE);
// (
//     function(name){
//         console.log("IIFE"+name);
//     }
// )("amit");

// let greet =name=>console.log("hello world "+name);
// greet("Amit");

// loops 
// for loop 

// for(intitilization,condition,updation){
//     // body // statement
// }

// for(let i=1;i<11;i++){
//     console.log(i*2);//0
// }

// two once are two 

// *****
// *****
// *****
// *****
// *****


for (let i = 0; i < 5; i++) {
    let str = ""
    for (let j = 0; j < 5; j++) {
        str = str + "*";
    }
    console.log(str)
}

// let i=0;
// while(i<6){
//     //statment
//     // updation
//     console.log(i);
//     i++
// }
let i=0;
do{
    console.log(i)
    i++;
}while(i<6);

