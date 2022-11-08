import express from 'express';
import { customerLogin, customerSignup, getCustomerbyid, updateUser } from '../controller/customer';
import { verifytoken } from '../middleware/verifyToken';
const router = express.Router();



router.post("/customerSignup",customerSignup)
router.post("/customerLogin",customerLogin)
router.post("/getCustomerbyid",getCustomerbyid)
router.put("/updateCustomer",updateUser)
router.put("/updateCustomerang",verifytoken,updateUser)



export default router;
