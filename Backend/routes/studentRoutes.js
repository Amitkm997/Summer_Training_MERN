import {applyJob} from '../controllers/companyController.js'
import { addStudent,getStudent,registerStudent,loginStudent ,getStudentById,getLoggedInStudent } from '../controllers/studentController.js';
import { verifyToken } from '../middleware/auth.js';
import express from 'express'

const router=express.Router();

router.post('/',addStudent);

router.get('/',getStudent);
router.get('/:id',getStudentById )


//Register API
router.post('/register',registerStudent);
router.post('/login',loginStudent)


router.post(
    "/apply/:companyId",
    verifyToken,
    applyJob
);

router.get(
    "/me",
    verifyToken,
    getLoggedInStudent
);

export default router;