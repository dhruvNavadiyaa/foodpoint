import {CreateProduct,CatagoryProuct} from '../controller/ProductCtrl.js';
import { Router } from 'express';

const router = Router();
router.route('/create').post(CreateProduct)
router.route('/catagory').get(CatagoryProuct)


export default router