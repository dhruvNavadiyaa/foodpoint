import {AllUser} from '../controller/AdminCtrl.js';
import { Router } from 'express';
import { CreateAdmin , LoginAdmin } from '../controller/AdminlogCtrl.js'

const router = Router();
router.route('/dashboard').get(AllUser)
router.route('/signup').get(CreateAdmin)
router.route('/signin').get(LoginAdmin)


export default router