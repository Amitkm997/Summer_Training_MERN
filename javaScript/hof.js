
//map()
// let ar=[23,54,65,76,23,45];
// // [0,54,...]
// // for(let i=0;i<ar.length;i++){
// //     ar[i]=ar[i]*i;
// // }

// let modifiedArray=ar.map((cur,index)=>cur*index)
// console.log(modifiedArray);


//filterv -
// let ar=[23,54,65,76,23,45];

// let even=ar.filter((cur)=>cur%2==0).map(e=>e*2);

// // let even=ar.filter(num=>num%2==0);

// // let even=newArray.map((cur)=>cur*2);

// console.log(even);


// let ar=[23,54,65,76,23,45];

// let sumOfevenNo=ar.filter((cur)=>cur%2==0).map((e)=>e*e).reduce((acc,c)=>acc+c,0);
// // let sum=ar.reduce((acc,cur)=>acc+cur,0);

// console.log(sumOfevenNo);

// let Arr = [[1, 2], [3, 4], [5, 6]];
// const sumArr = Arr.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue.reduce((acc, curr) => acc + curr, 0);
// }, 0);
// console.log(sumArr);




// 23+43+54+89+34+77.... sum?


// let twoDarray=[
//     [23,43,54],
//     [89,34,77],
//     [23,12,56]
// ]

// let sum=twoDarray.reduce((acc,cur)=>acc+cur.reduce((a,c)=>a+c,0),0);
// console.log(sum);

let cart=[
    {
        productName:"phone",
        price:456
    },
    {
        productName:"headphone",
        price:200
    },
    {
        productName:"laptop",
        price:406
    },
    {
        productName:"smartboard",
        price:456
    }
]

let doublePrice=cart.map(cur=>cur.price*2);

let double=cart.filter(c=>c.price>300).map(cur=>{
    return{
        ...cart,
        price:c.price*2
    }
}).reduce((a,c)=>a+c.price,0);

console.log(double);