const database = require('../models')

checkDuplicateUserEmail = (req, res, next) => {
    
   
    database.User.findOne({
        where: {
          email: req.body.email
        }
      }).then(user => {
        if (user) {
          res.status(400).send({
            message: "Failed! Email is already in use!"
          });
          return;
        }
        next();
      });

  };




const verifySignUp = {
  checkDuplicateUserEmail
};

module.exports = verifySignUp;