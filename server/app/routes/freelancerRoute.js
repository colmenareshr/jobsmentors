const {Router} = require ('express')
const FreelancerController = require('../controllers/freelancerController')
const { authJwt } = require('../middlewares');
const router = Router()


router
    
    .get('/freelancer/:user_id',authJwt.verifyToken, FreelancerController.searchFreelancerById)
    // .get('/freelancer',FreelancerController.searchFreelancer)
    .get('/freelancer', authJwt.verifyToken, FreelancerController.searchFreelancerRandom)
    .post('/freelancer/:user_id/information',authJwt.verifyToken, authJwt.isFreelancer, FreelancerController.CreateInformation )
    .post('/freelancer/:user_id/network',authJwt.verifyToken, authJwt.isFreelancer, FreelancerController.CreateNetwork )
    .put('/freelancer/:user_id', authJwt.verifyToken, authJwt.isFreelancer, FreelancerController.updateFreelancer)
    .put('/freelancer/information/:user_id', authJwt.verifyToken, authJwt.isFreelancer, FreelancerController.updateInformation)
    .put('/freelancer/network/:user_id',authJwt.verifyToken, authJwt.isFreelancer, FreelancerController.updateNetwork)
    .delete('/freelancer/:user_id',authJwt.verifyToken, authJwt.isFreelancer, FreelancerController.deleteFreelancer)

module.exports = router