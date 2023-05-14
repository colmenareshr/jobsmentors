const bodyParser = require ('body-parser')
const user = require('./usersRoute')
const candidate = require('./candidateRoute')


module.exports = app => {
    app.use(
        bodyParser.json(),
        user,
        candidate
    )
}