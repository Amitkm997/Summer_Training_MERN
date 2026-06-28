
import express from 'express';
import {addCompany,getCompany,getCompanyById, updateCompany,deleteCompany} from '../controllers/companyController.js'
const router = express.Router();

router.post('/',addCompany)
router.get('/',getCompany)
router.get('/:id',getCompanyById)
router.put('/:id',updateCompany)
router.delete('/:id',deleteCompany)

export default router;