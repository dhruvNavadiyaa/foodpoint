import {AllUser} from '../controller/AdminCtrl.js';
import { Router } from 'express';
import { CreateAdmin , LoginAdmin } from '../controller/AdminlogCtrl.js'

const router = Router();
router.route('/dashboard').get(AllUser)
router.route('/signup').post(CreateAdmin)
router.route('/signin').post(LoginAdmin)


export default router