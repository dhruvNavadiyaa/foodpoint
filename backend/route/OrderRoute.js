import { Router } from 'express';
import {CreateOrder,orderOnTheWayForDelivery,orderHistoryForDelivery,orderPendingForDelivery,updateDeliveryBoy,updateOrderStatus ,OrderWithId,orderInfoWithRestaurant,paymentWay,orderInfo,paymentVerify, allOrder} from '../controller/OrderCtrl.js'
const router = Router();
router.route('/create').post(CreateOrder)
router.route('/checkout').post(paymentWay)
router.route('/paymentverify').post(paymentVerify)
router.route('/orderinfo').post(orderInfo)
router.route('/allorder').get(allOrder)
router.route('/orderwithid').post(OrderWithId)
router.route('/orderRestaurant').post(orderInfoWithRestaurant)
router.route('/updateOrderStatus').post(updateOrderStatus)
router.route('/acceptOrder').post(updateDeliveryBoy)
router.route('/orderpending').get(orderPendingForDelivery)
router.route('/deliveryboyHistory').post(orderHistoryForDelivery)
router.route('/acceptedForOrder').post(orderOnTheWayForDelivery)

export default router