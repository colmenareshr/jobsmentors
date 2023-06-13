const express = require("express");
const { sequelize } = require("./models");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const cors = require("cors");
const passport = require('passport');
require('./passport/passport')
const session = require('express-session')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(session({
  secret: 'mysecret',
  resave: false,
  saveUninitialized: true,
  unset: 'destroy'
}))


app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);



routes(app);

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log("DB connection successfull");
  });

  sequelize.sync({ force: false }).then(() => {
    console.log(`Connecting port ${PORT}`);
  });
});
