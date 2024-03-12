import { CreateDeliveryBoy,allDeliveryBoy , LoginDeliveryBoy,DeleteDeliveryBoy , UpdateDeliveryBoy,RefreshTokenEndPoint} from '../controller/DeliveryBoyCtrl.js';
import { Router } from 'express';

const router = Router();
router.route('/signup').post(CreateDeliveryBoy)
router.route('/signin').post(LoginDeliveryBoy)
router.route('/delete').post(DeleteDeliveryBoy)
router.route('/approvel').post(UpdateDeliveryBoy)
router.route('/allfetch').get(allDeliveryBoy)
router.route('/refresh').post(RefreshTokenEndPoint)

export default router