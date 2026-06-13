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


// for (let i = 0; i < 5; i++) {
//     let str = ""
//     for (let j = 0; j < 5; j++) {
//         str = str + "*";
//     }
//     console.log(str)
// }

// let i=0;
// while(i<6){
//     //statment
//     // updation
//     console.log(i);
//     i++
// }
// let i=0;
// do{
//     console.log(i)
//     i++;
// }while(i<6);


//Arrays CRUD -> create , read,  update, delete
// let arr=[1,2,3,4,5]; //create

// console.log(arr[2]);// 3

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// arr[2]=10;// update 

// console.log(arr[2]);
// console.log(arr);

// arr.push(14); // insert the element in the last
// arr.pop(); // removes the element from the last
// arr.shift(); //removes the element from the start
// arr.unshift(78); //insert the element in the start

// console.log(arr);



// let arr=[67,343,64,34,75,12,75]; //7-1=7

// // reverse an array
// let newArray=[];

// for(let i=0;i<arr.length;i++){
//     newArray[i]=arr[arr.length-i-1];
// }

// console.log(newArray);




// [75,343,64,34,75,12,67] // swap(i,j)
// i++;
// j--;

// [75,12,64,34,75,343,67] // swap(i,j)

// let arr=[67,343,64,34,75,12,75]; //7-1=7

// let i=0;// start i=1
// let j=arr.length-1;// end j=5
// while(i<j){
//     let temp=arr[i];
//     arr[i]=arr[j];
//     arr[j]=temp;
//     i++;
//     j--;
// }

// console.log(arr)

// let twoDarray=[[1,2,3],[4,5,6],[7,8,9]];

// console.log(twoDarray[1][2]);

// objects 
let obj={
    name:"Amit",
    age:28,
    occupation:"MERN Trainer"
}

obj.occupation="Developer";
obj['age']=67;
console.log(obj)

console.log(Object.keys(obj))// [ 'name', 'age', 'occupation' ]
console.log(Object.values(obj)); // 
console.log(Object.entries(obj)[1][1]);


let students = [

    {
        name:"Amit",
        age:22
    },
    
    {
        name:"Rahul",
        age:[67,78,"Help"]
    },
    
    {
        name:"Priya",
        age:21
    }
    
    ];
console.log(students[1].age[2][2])