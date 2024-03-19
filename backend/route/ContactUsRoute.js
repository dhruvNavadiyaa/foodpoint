import{createContactUs} from '../controller/ContactUsCtrl.js'
import { Router } from 'express';

const router = Router();
router.route('/create').post(createContactUs)

export default router