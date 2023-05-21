const {Router} = require ('express')
const MentorController = require('../controllers/mentorController')
const { authJwt } = require('../middlewares')
const router = Router()

router
    
    .get('/mentor/:id',authJwt.verifyToken, MentorController.searchMentorById)
    .get('/mentors', MentorController.searchMentors)
    .get('/mentors/rand', authJwt.verifyToken, authJwt.isMentor, MentorController.searchMentorRandom)
    .put('/mentor/update/:id', authJwt.verifyToken, authJwt.isMentor,   MentorController.updateMentor)
    .delete('/mentor/:id',authJwt.verifyToken, authJwt.isMentor,  MentorController.deleteMentor)

module.exports = router