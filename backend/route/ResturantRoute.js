import { CreateResturant , LoginResturant  ,FetchAll,UpdateResturant,FeatchResturant , DeleteResturant,RefreshTokenEndPoint } from '../controller/ResturantCtrl.js';
import { Router } from 'express';

const router = Router();
router.route('/signup').post(CreateResturant)
router.route('/signin').post(LoginResturant)
router.route('/fetchall').get(FetchAll)
router.route('/update').post(UpdateResturant)
router.route('/allapproved').get(FeatchResturant)
router.route('/delete').post(DeleteResturant)
router.route('/refresh').post(RefreshTokenEndPoint)


export default router