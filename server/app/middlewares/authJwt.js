const database = require('../models')
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/authConfig');


    verifyToken = (req, res, next) => {
    
    console.log(req.headers);

    // Comprobar que existe el token
    if(!req.headers.authorization) {
        res.status(401).json({msg: "Unauthorized access"});

    } else {
        // Comprobar la validez de este token
        let token = req.headers.authorization.split(" ")[1];

        // Comprobar la validez de este token
        jwt.verify(token, authConfig.secret, (err, decoded) => {

            if(err) {
                res.status(500).json({ msg: "There was a problem decoding the token", err });
            } else {
                req.user = decoded; //TODO
                next();
            }

        })
    }

}; 

        isFreelancer = (req, res, next) => {
        database.User.findOne({ where: { id: req.user.id} })
        .then((user) => {
            if (user.role === "freelancer") {
            next();
            return;
            }
            res.status(403).send({ message: "Require freelancer Role!" });
        })
        .catch((err) => {
            res.status(500).send({ message: err.message });
        });
    };

        isMentor = (req, res, next) => {
        database.User.findOne({ where: { id: req.user.id} })
        .then((user) => {
            if (user.role === "mentor") {
            next();
            return;
            }
            res.status(403).send({ message: "Require Mentor Role!" });
        })
        .catch((err) => {
            res.status(500).send({ message: err.message });
        });
    };

        isCompany = (req, res, next) => {
        database.User.findOne({ where: { id: req.user.id} })
        .then((user) => {
            if (user.role === "company") {
            next();
            return;
            }
            res.status(403).send({ message: "Require Company Role!" });
        })
        .catch((err) => {
            res.status(500).send({ message: err.message });
        });
    };

        
    const authJwt = {
        verifyToken: verifyToken,
        isFreelancer: isFreelancer,
        isCompany: isCompany,
        isMentor: isMentor
    };
    

module.exports = authJwt;