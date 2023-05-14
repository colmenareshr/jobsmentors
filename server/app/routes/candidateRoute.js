const {Router} = require ('express')
const CandidateController = require('../controllers/candidateController')
const router = Router()

router
    
    .get('/user/candidate/:id', CandidateController.searchCandidateById)
    .post('/my_profile/information', CandidateController.CreateInformation )
    .post('/my_profile/network', CandidateController.CreateNetwork )
    .put('/my_profile/:id',  CandidateController.updateCandidate)
    .put('/my_profile/information/:id',  CandidateController.updateInformation)
    .put('/my_profile/network/:id',  CandidateController.updateNetwork)
    .delete('/candidate/:id', CandidateController.deleteCandidate)

module.exports = router