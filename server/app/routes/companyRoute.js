const {Router} = require ('express')
const CompanyController = require('../controllers/companyController')
const { authJwt } = require('../middlewares')

const router = Router()

router
    
    .get('/company/:id', authJwt.verifyToken, CompanyController.searchCompanyById)
    .get('/companies', CompanyController.searchCompanies)
    .get('/companies/rand', authJwt.verifyToken, CompanyController.searchCompaniesRandom)
    .put('/company/update/:id', authJwt.verifyToken, authJwt.isCompany,  CompanyController.updateCompany)
    .delete('/company/:id', authJwt.verifyToken, authJwt.isCompany, CompanyController.deleteCompany)
    .post('/company/job', authJwt.verifyToken, authJwt.isCompany, CompanyController.CreateJob)

    .get('/jobs',authJwt.verifyToken, CompanyController.searchJobs)
    .put('/company/job/:id',authJwt.verifyToken, authJwt.isCompany, CompanyController.updateJob)
    .delete('/company/job/:id',authJwt.verifyToken, authJwt.isCompany, CompanyController.deleteJob)
    .get('/company/matching/:id',authJwt.verifyToken, authJwt.isCompany,  CompanyController.MatchWithSkills)
    .get('/company/freelancerSkills/:id',authJwt.verifyToken, authJwt.isCompany, CompanyController.findFreelancerSkills)
    
    


module.exports = router