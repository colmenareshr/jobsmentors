const bodyParser = require ('body-parser')
const user = require('./usersRoute')
const candidate = require('./candidateRoute')
const company = require('./companyRoute')


module.exports = app => {
    app.use(
        bodyParser.json(),
        user,
        candidate,
        company
    )
}