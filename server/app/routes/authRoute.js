const {Router} = require ('express')
const authController = require('../controllers/authController')
const { verifySignUp } = require('../middlewares');
const { authJwt } = require('../middlewares')

const router = Router()

router
    .post('/register',verifySignUp.checkDuplicateUserEmail ,authController.SingUp)
    .post('/login', authController.LogIn)
    .get('/users', authJwt.verifyToken, authController.UserAll)


module.exports = router