import {addReview} from '../controller/ReviewCtrl.js';
import { Router } from 'express';

const router = Router();
router.route('/add').post(addReview)



export default router