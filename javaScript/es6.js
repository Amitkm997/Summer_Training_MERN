

// let name="Amit";
// let age=23;

// console.log("My name is: "+name+" and age is: "+age);



// console.log(`My name is: ${name} and age is ${age}`);



// console.log(arr[0])
// console.log(arr[1])

// const[a,b,c,d]=arr;
// console.log(a)

// swapping

// let a=3;
// let b=7;

// [a,b]=[b,a] //swap

// console.log(a+","+b);


// let obj={
//     name:"amit",
//     age:23
// }

// obj.age //23


// let{name,age}=obj
// console.log(name)

// let arr=["amit","dilshad","saurabh","akash"];

// let[a,b,...c]=arr

// let newArray=[...arr,78,89,56];

// let a=[1,2]
// let b=[4,5]

// console.log([...a,...b])

// console.log(newArray);


// Synchronous/blocking block
// console.log("First Line");
// console.log("Second line"); //heavy task , time take process, error
// console.log("Third line");
// console.log("Fourth line");

//Asynchronous/non-blocking
// console.log("First Line");

// setTimeout(() => {
//     console.log("Second line")
// }, 2000);

// console.log("Third line");


// function greet(name){
//     console.log("Hi There!"+name)
// }

// function GetDetails(callback){
//      callback("amit");
// }

// GetDetails(greet)


// let promise=new Promise((resolve,reject)=>{
//     let flag=false;

//     if(flag){
//         resolve("Promise resolved")
//     }else{
//         reject("Promise rejected")
//     }
    
// })

// promise.then((resolve)=>{
//     console.log(resolve)
// })
// promise.catch((reject)=>{
//     console.log(reject)
// })


function fetchData(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("Student Data fetched Successfully");
        }, 2000);
    })
}


async function getData(){
    try{
        let data=await fetchData();
        console.log(data)
    }catch(error){
        console.log(error)
    }
}

getData()