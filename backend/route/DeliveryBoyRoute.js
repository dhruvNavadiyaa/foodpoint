import { CreateDeliveryBoy,allDeliveryBoy , LoginDeliveryBoy,DeleteDeliveryBoy , UpdateDeliveryBoy} from '../controller/DeliveryBoyCtrl.js';
import { Router } from 'express';

const router = Router();
router.route('/signup').post(CreateDeliveryBoy)
router.route('/signin').post(LoginDeliveryBoy)
router.route('/delete').post(DeleteDeliveryBoy)
router.route('/approvel').post(UpdateDeliveryBoy)
router.route('/allfetch').get(allDeliveryBoy)

export default router