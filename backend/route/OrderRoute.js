import { Router } from 'express';
import {CreateOrder ,paymentWay,orderInfo,paymentVerify} from '../controller/OrderCtrl.js'
const router = Router();
router.route('/create').post(CreateOrder)
router.route('/checkout').post(paymentWay)
router.route('/paymentverify').post(paymentVerify)
router.route('/orderinfo').post(orderInfo)

export default router