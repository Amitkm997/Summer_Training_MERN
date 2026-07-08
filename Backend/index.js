import express from 'express';
import studentRoute from './routes/studentRoutes.js'
import companyRoute from './routes/companyRoute.js'
import {connectDB} from './config/db.js'
import dotenv from 'dotenv'
<<<<<<< HEAD
import cors from "cors";

=======
import cors from 'cors'
>>>>>>> a3552ac (role based access completed)
dotenv.config();
const app=express(); 
app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
<<<<<<< HEAD
);

=======
  );
>>>>>>> a3552ac (role based access completed)
app.use(express.json()); // this parses the data coming from frontend

connectDB();

app.use('/student',studentRoute)
app.use('/company',companyRoute)

app.listen(process.env.PORT,()=>{
    console.log(`Server Running on port ${process.env.PORT}`)
});

