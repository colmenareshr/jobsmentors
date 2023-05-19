const bodyParser = require ('body-parser')
const auth = require('./authRoute')
const freelancer = require('./freelancerRoute')
const company = require('./companyRoute')

module.exports = app => {
    app.use(
        bodyParser.json(),
        freelancer,
        company,
        auth
    )
}