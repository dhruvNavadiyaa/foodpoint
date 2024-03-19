import { Router } from 'express';
import { paymentWay,paymentVerify} from '../controller/OrderCtrl.js'
const router = Router();
router.route('/checkout').post(paymentWay)
router.route('/paymentverify').post(paymentVerify)

export default router