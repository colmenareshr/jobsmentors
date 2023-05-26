const {Router} = require ('express')
const AuthController = require('../controllers/authController');
const { verifySignUp } = require('../middlewares');
const { authJwt } = require('../middlewares')

const router = Router()

router
  .post('/register',verifySignUp.checkDuplicateUserEmail,AuthController.singUp)
  .post('/login', AuthController.logIn)
  .get('/users', authJwt.verifyToken, AuthController.UserAll);


module.exports = router