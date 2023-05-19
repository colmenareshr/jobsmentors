const {Router} = require ('express')
const authController = require('../controllers/authController')
const { verifySignUp } = require('../middlewares');

const router = Router()

router
    .post('/register',verifySignUp.checkDuplicateUserEmail ,authController.SingUp)
    .post('/login', authController.LogIn)
    .get('/users', authController.UserAll)


module.exports = router