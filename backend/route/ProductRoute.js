import {CreateProduct,updateProduct,CatagoryProuct,top10Product,searchProduct,
    searchProductWithId,allProduct,ResturentProuct,deleteProduct} from '../controller/ProductCtrl.js';
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
router.route('/resturent').post(ResturentProuct)
router.route('/update').post(updateProduct)
router.route('/delete').post(deleteProduct)
router.route('/search').post(searchProduct)
router.route('/top').get(top10Product)
router.route('/detail').post(searchProductWithId)
router.route('/all').get(allProduct)


export default router