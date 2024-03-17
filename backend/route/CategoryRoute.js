import { CreateCategory ,FetchWithId , FetchAll , DeleteCategory } from '../controller/CategoryCtrl.js';
import { Router } from 'express';

const router = Router();
router.route('/create').post(CreateCategory)
router.route('/fetch').get(FetchAll)
router.route('/fetchid').post(FetchWithId)
router.route('/delete').post(DeleteCategory)


export default router