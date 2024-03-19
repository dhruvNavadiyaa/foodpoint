import { Router } from 'express';
import {CreateOrder ,paymentWay,paymentVerify} from '../controller/OrderCtrl.js'
const router = Router();
router.route('/create').post(CreateOrder)
router.route('/checkout').post(paymentWay)
router.route('/paymentverify').post(paymentVerify)

export default router