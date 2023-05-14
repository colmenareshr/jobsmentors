const bodyParser = require ('body-parser')
const user = require('./usersRoute')


module.exports = app => {
    app.use(
        bodyParser.json(),
        user
    )
}