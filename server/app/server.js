const express = require('express');
const { sequelize } = require('./models');
const port = process.env.port  || 3000;
const app = express();

app.listen(port, () => {
    sequelize.authenticate().then(() => {
        console.log('DB connection successfull')
    })

    sequelize.sync({force:false}).then (() => {
        console.log(`Connecting port ${port}`)
    }) 
})
