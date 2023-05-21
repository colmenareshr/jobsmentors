const {Router} = require ('express')
const FreelancerController = require('../controllers/freelancerController')
const { authJwt } = require('../middlewares');
const router = Router()


router
    
    .get('/freelancer/:id',authJwt.verifyToken, FreelancerController.searchFreelancerById)
    .get('/freelancers',FreelancerController.searchFreelancer)
    .get('/freelancers/rand', authJwt.verifyToken, FreelancerController.searchFreelancerRandom)
    .post('/freelancer/:id/information',authJwt.verifyToken, authJwt.isFreelancer, FreelancerController.CreateInformation )
    .post('/freelancer/:id/network',authJwt.verifyToken, authJwt.isFreelancer, FreelancerController.CreateNetwork )
    .put('/freelancer/update/:id', authJwt.verifyToken, authJwt.isFreelancer, FreelancerController.updateFreelancer)
    .put('/freelancer/updateInformation/:id', authJwt.verifyToken, authJwt.isFreelancer, FreelancerController.updateInformation)
    .put('/freelancer/updateNetwork/:id',authJwt.verifyToken, authJwt.isFreelancer, FreelancerController.updateNetwork)
    .delete('/freelancer/:id',authJwt.verifyToken, authJwt.isFreelancer, FreelancerController.deleteFreelancer)

module.exports = router