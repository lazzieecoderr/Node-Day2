import express from 'express';
import { createEmployee, deleteEmployee, editEmployee, getEmployeeDetail, getEmployeeDetailId } from '../Controllers/employeeController.js';



const router = express.Router();

router.get('/empDetails', getEmployeeDetail)
router.get('/empDetails/:id', getEmployeeDetailId)
router.post('/createEmp',createEmployee)
router.put('/edit/:id',editEmployee)
router.delete('/delete/:id',deleteEmployee)

export default router;