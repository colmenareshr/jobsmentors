const {Router} = require ('express')
const CompanyController = require('../controllers/companyController')
const { authJwt } = require('../middlewares')

const router = Router()

router
    
    .get('/company/:id', authJwt.verifyToken, CompanyController.searchCompanyById)
    .get('/companies', CompanyController.searchCompanies)
    .get('/companies/rand', authJwt.verifyToken, CompanyController.searchCompaniesRandom)
    .get('/company/:id/jobs',  CompanyController.searchJobsCompany)
    .put('/company/update/:id', authJwt.verifyToken, authJwt.isCompany,  CompanyController.updateCompany)
    .delete('/company/:id', authJwt.verifyToken, authJwt.isCompany, CompanyController.deleteCompany)

    .post('/company/:id/job', authJwt.verifyToken, authJwt.isCompany, CompanyController.CreateJob)
    .get('/companies/jobs', authJwt.verifyToken, CompanyController.searchJobsCompanies)
    .get('/company/:id/freelancers', authJwt.verifyToken, CompanyController.FreelancerAtJobs)
    .put('/company/job/:id',authJwt.verifyToken, authJwt.isCompany, CompanyController.updateJob)
    .delete('/company/job/:id',authJwt.verifyToken, authJwt.isCompany, CompanyController.deleteJob)
    .get('/company/:id/matching',authJwt.verifyToken, authJwt.isCompany,  CompanyController.MatchWithSkills)
    .get('/company/:id/freelancerSkills',authJwt.verifyToken, authJwt.isCompany, CompanyController.findFreelancerSkills)
    
    


module.exports = router