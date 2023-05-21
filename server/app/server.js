const express = require('express');
const { sequelize } = require('./models');
const port = process.env.port  || 3000;
const app = express();
const routes = require('./routes')
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
routes(app)

app.listen(port, () => {
    sequelize.authenticate().then(() => {
        console.log('DB connection successfull')
    })

    sequelize.sync({force:false}).then (() => {
        console.log(`Connecting port ${port}`)
    }) 
})
