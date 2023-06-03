const {Router} = require ('express')
const CompanyController = require('../controllers/companyController')
const { authJwt } = require('../middlewares')

const router = Router()

router
    
    .get('/company/:user_id', authJwt.verifyToken, CompanyController.searchCompanyById)
    .get('/company/all', CompanyController.searchCompanies)
    .get('/company/rand', authJwt.verifyToken, CompanyController.searchCompaniesRandom)
    .get('/company/:user_id/jobs',  CompanyController.searchJobsCompany)
    .put('/company/:user_id', authJwt.verifyToken, authJwt.isCompany,  CompanyController.updateCompany)
    .delete('/company/:user_id', authJwt.verifyToken, authJwt.isCompany, CompanyController.deleteCompany)

    .post('/company/:user_id/job', authJwt.verifyToken, authJwt.isCompany, CompanyController.CreateJob)
    .get('/company/AllJobs', authJwt.verifyToken, CompanyController.searchJobsCompanies)
    .get('/company/:job_id/freelancers', authJwt.verifyToken, CompanyController.FreelancerAtJobs)
    .put('/company/:user_id/:id',authJwt.verifyToken, authJwt.isCompany, CompanyController.updateJob)
    .delete('/company/:user_id/:id',authJwt.verifyToken, authJwt.isCompany, CompanyController.deleteJob)
    .post('/company/:user_id/match/:id',authJwt.verifyToken, authJwt.isCompany,  CompanyController.MatchWithSkills)
    .get('/company/:user_id/findSkills/:id',authJwt.verifyToken, authJwt.isCompany, CompanyController.findFreelancerSkills)
    .get('/company/:user_id/job/:id',authJwt.verifyToken, authJwt.isCompany, CompanyController.getJobById)
    
    


module.exports = router