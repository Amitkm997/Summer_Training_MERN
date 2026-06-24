
import { student } from '../controllers/studentController.js';
import express from 'express'

const router=express.Router();

router.get('/getStudent',student)

export default router;