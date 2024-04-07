import { Router } from 'express';


const router = Router();
const logout = async (req, res) => {
    const cookie = req.cookies
    return res
    .cookie("accessToken", "")
    .cookie("refreshToken", "")
    .send({
        success : true,
        logout: true
    })
}
router.route('/logout').post(logout)


export default router
