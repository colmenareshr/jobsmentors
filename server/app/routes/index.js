const bodyParser = require ('body-parser')
const user = require('./usersRoute')
const freelancer = require('./freelancerRoute')
const company = require('./companyRoute')

module.exports = app => {
    app.use(
        bodyParser.json(),
        user,
        freelancer,
        company
    )
}