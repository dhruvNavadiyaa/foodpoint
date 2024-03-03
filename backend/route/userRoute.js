import { CreateUser,LoginUser,AllUser ,DeleteUser } from '../controller/userCtrl.js';
import { Router } from 'express';

const router = Router();
router.route('/signup').post(CreateUser)
router.route('/signin').post(LoginUser)
router.route('/all').get(AllUser)
router.route('/delete').post(DeleteUser)


export default router