const {Router} = require ('express')
const CompanyController = require('../controllers/companyController')
const { authJwt } = require('../middlewares')

const router = Router()

router
    
    .get('/company/:id', authJwt.verifyToken, CompanyController.searchCompanyById)
    .get('/company/freelancerSkills', authJwt.verifyToken, authJwt.isCompany, CompanyController.findFreelancerSkills)
    .post('/company/job', authJwt.verifyToken, authJwt.isCompany, CompanyController.CreateJob)
    .put('/company/update/:id', authJwt.verifyToken, authJwt.isCompany,  CompanyController.updateCompany)
    .delete('/company/:id', authJwt.verifyToken, authJwt.isCompany, CompanyController.deleteCompany)
    


module.exports = router