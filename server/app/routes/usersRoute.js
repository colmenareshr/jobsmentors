const {Router} = require ('express')
const UserController = require('../controllers/userController')
const router = Router()

router
    .post('/register',  UserController.CadastroModificadoTransaction)
    .post('/login', UserController.Login)
    .get('/users', UserController.UserAll)


module.exports = router