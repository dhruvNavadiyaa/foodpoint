import {CreateProduct,updateProduct,CatagoryProuct,ResturentProuct} from '../controller/ProductCtrl.js';
import { upload} from '../middleware/multerMiddleware.js'
import { Router } from 'express';

const router = Router();
router.route('/create').post(upload.fields([
    {
        name : 'product',
        maxCount : 2
    }
]),CreateProduct)
router.route('/catagory').post(CatagoryProuct)
router.route('/resturent').get(ResturentProuct)
router.route('/update').get(upload.fields([
    {
        name : 'product',
        maxCount : 2
    }
]),updateProduct)


export default router