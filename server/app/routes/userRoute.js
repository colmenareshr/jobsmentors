const { Router } = require("express");
const UserController = require("../controllers/userController");
const { verifySignUp } = require("../middlewares");
const { authJwt } = require("../middlewares");

const router = Router();

router
  .get("/users", UserController.getAll)
  .post("/users", verifySignUp.checkDuplicateUserEmail, UserController.create);

module.exports = router;
