const {Router} = require ('express')
const UserController = require('../controllers/userController')
const router = Router()

router
    .post('/register',  UserController.SingUp)
    .post('/login', UserController.LogIn)
  


module.exports = router