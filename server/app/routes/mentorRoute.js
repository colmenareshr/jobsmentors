const {Router} = require ('express')
const MentorController = require('../controllers/mentorController')
const { authJwt } = require('../middlewares')
const router = Router()

router
    
    .get('/mentor/:user_id',authJwt.verifyToken, MentorController.searchMentorById)
    .get('/mentors', MentorController.searchMentor)
    .get('/mentors/rand', authJwt.verifyToken, authJwt.isMentor, MentorController.searchMentorRandom)
    .put('/mentor/:user_id', authJwt.verifyToken, authJwt.isMentor,   MentorController.updateMentor)
    .delete('/mentor/:user_id',authJwt.verifyToken, authJwt.isMentor,  MentorController.deleteMentor)

module.exports = router