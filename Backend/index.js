import express from 'express';

const app=express(); 

const port=3000;

app.get('/',(req,res)=>{
    res.send("Placement Mangemagent Route...")
});
app.get('/student',(req,res)=>{
    res.send("Student Route..")
})

app.listen(port,()=>{
    console.log(`Server Running on port ${port}`)
});