import { CreateRestaurant , LoginRestaurant  ,FetchAll,UpdateRestaurant,FeatchRestaurant , DeleteRestaurant,RefreshTokenEndPoint } from '../controller/ResturantCtrl.js';
import { upload} from '../middleware/multerMiddleware.js'
import { Router } from 'express';

const router = Router();
router.route('/signup').post(upload.fields([
    {
        name : 'restaurant',
        maxCount : 4
    }
]),CreateRestaurant)
router.route('/signin').post(LoginRestaurant)
router.route('/fetchall').get(FetchAll)
router.route('/update').post(upload.fields([
    {
        name : 'restaurant',
        maxCount : 4
    }
]),UpdateRestaurant)
router.route('/allapproved').get(FeatchRestaurant)
router.route('/delete').post(DeleteRestaurant)
router.route('/refresh').post(RefreshTokenEndPoint)



export default router