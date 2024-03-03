import { CreateCategory ,FeatchAll } from '../controller/CategoryCtrl.js';
import { Router } from 'express';

const router = Router();
router.route('/create').post(CreateCategory)
router.route('/featch').get(FeatchAll)


export default router