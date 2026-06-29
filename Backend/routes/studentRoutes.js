
import { addStudent,getStudent } from '../controllers/studentController.js';
import express from 'express'

const router=express.Router();

router.post('/',addStudent);

router.get('/',getStudent);

export default router;