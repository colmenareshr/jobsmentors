const bodyParser = require ('body-parser')
const auth = require('./authRoute')
const freelancer = require('./freelancerRoute')
const company = require('./companyRoute')
const mentor = require('./mentorRoute')
const user = require('./userRoute')
const oauth20 = require('./authGoogle')


module.exports = app => {
    app.use(
        bodyParser.json(),
        freelancer,
        company,
        mentor,
        auth,
        user,
        oauth20
    )
}