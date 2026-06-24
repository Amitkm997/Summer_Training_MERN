import express from 'express';
import studentRoute from './routes/studentRoutes.js'

const app=express(); 

const port=3000;
app.use(express.json());


app.use('/student',studentRoute)

app.get('/',(req,res)=>{
    res.send("Placement Mangemagent Route...")
});


app.get('/college',(req,res)=>{
    res.send("College Route....")
})

app.listen(port,()=>{
    console.log(`Server Running on port ${port}`)
});