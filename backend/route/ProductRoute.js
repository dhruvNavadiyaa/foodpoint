import {CreateProduct,CatagoryProuct,ResturentProuct} from '../controller/ProductCtrl.js';
import { Router } from 'express';

const router = Router();
router.route('/create').post(CreateProduct)
router.route('/catagory').get(CatagoryProuct)
router.route('/resturent').get(ResturentProuct)


export default router