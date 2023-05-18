const {Router} = require ('express')
const FreelancerController = require('../controllers/freelancerController')
const router = Router()

router
    
    .get('/user/freelancer/:id', FreelancerController.searchFreelancerById)
    .post('/my_profile/information', FreelancerController.CreateInformation )
    .post('/my_profile/network', FreelancerController.CreateNetwork )
    .put('/my_profile/:id',  FreelancerController.updateFreelancer)
    .put('/my_profile/information/:id',  FreelancerController.updateInformation)
    .put('/my_profile/network/:id',  FreelancerController.updateNetwork)
    .delete('/freelancer/:id', FreelancerController.deleteFreelancer)

module.exports = router