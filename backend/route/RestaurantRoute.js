import { approvedRestaurant,CreateRestaurant,topRestaurant,allDetailAboutRestaurants , LoginRestaurant  ,FetchAll,UpdateRestaurant,FeatchRestaurant , DeleteRestaurant,RefreshTokenEndPoint } from '../controller/RestaurantCtrl.js';
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
router.route('/toprestaurant').get(topRestaurant)
router.route('/delete').post(DeleteRestaurant)
router.route('/refresh').post(RefreshTokenEndPoint)
router.route('/alldetail').post(allDetailAboutRestaurants)
router.route('/approve').post(approvedRestaurant)



export default router