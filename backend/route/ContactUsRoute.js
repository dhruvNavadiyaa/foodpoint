import{createContactUs,emailSendMsg,deleteMsg,alldata} from '../controller/ContactUsCtrl.js'
import { Router } from 'express';

const router = Router();
router.route('/create').post(createContactUs)
router.route('/all').get(alldata)
router.route('/delete').post(deleteMsg)
router.route('/email').post(emailSendMsg)

export default router