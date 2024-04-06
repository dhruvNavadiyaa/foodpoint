import { CreateUser,LoginUser,otpGenerate,AllUser,verifyOtp ,DeleteUser ,RefreshTokenEndPoint} from '../controller/userCtrl.js';
import { Router } from 'express';

const router = Router();
router.route('/signup').post(CreateUser)
router.route('/signin').post(LoginUser)
router.route('/all').get(AllUser)
router.route('/delete').post(DeleteUser)
router.route('/refresh').post(RefreshTokenEndPoint)
router.route('/otpGenerate').post(otpGenerate)
router.route('/otpverify').post(verifyOtp)


export default router