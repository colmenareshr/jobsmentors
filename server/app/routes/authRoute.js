const {Router} = require ('express')
const AuthController = require('../controllers/authController');
const { verifySignUp } = require('../middlewares');
const { authJwt } = require('../middlewares')

const router = Router()

router

  .post('/login', AuthController.logIn)

module.exports = router
