const {Router} = require ('express')
const CompanyController = require('../controllers/companyController')

const router = Router()

router
    .put('/company/profile/:id',  CompanyController.updateCompany)
    .get('/user/company/:id', CompanyController.searchCompanyById)
    .delete('/company/:id', CompanyController.deleteCompany)
    
module.exports = router