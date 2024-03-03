import {AllUser} from '../controller/AdminCtrl.js';
import { Router } from 'express';

const router = Router();
router.route('/dashboard').get(AllUser)


export default router