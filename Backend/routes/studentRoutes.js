
import { addStudent,getStudent,registerStudent } from '../controllers/studentController.js';
import express from 'express'

const router=express.Router();

router.post('/',addStudent);

router.get('/',getStudent);


//Register API
router.post('/register',registerStudent);

export default router;