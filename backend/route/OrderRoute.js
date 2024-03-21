import { Router } from 'express';
import {CreateOrder ,OrderWithId,paymentWay,orderInfo,paymentVerify, allOrder} from '../controller/OrderCtrl.js'
const router = Router();
router.route('/create').post(CreateOrder)
router.route('/checkout').post(paymentWay)
router.route('/paymentverify').post(paymentVerify)
router.route('/orderinfo').post(orderInfo)
router.route('/allorder').get(allOrder)
router.route('/orderwithid').post(OrderWithId)

export default router