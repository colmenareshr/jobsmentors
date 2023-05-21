const database = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authConfig = require("../../config/authConfig");

class authController {
  static async createToken(user) {
    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };
    const token = jwt.sign(payload, authConfig.secret, {
      expiresIn: authConfig.expires,
    });
    return token;
  }

  static async SingUp(req, res) {
    try {
      const password = await bcrypt.hash(req.body.password, 10);
      const { email, role } = req.body;
      await database.sequelize.transaction(async (signIn) => {
        const newUser = await database.User.create(
          { email, password, role },
          { transaction: signIn }
        );
        const token = jwt.sign({ id: newUser.id }, authConfig.secret, {
          expiresIn: authConfig.expires,
        });
        if (role === "company") {
          const newCompany = await database.Company.create(
            {
              email,
              user_id: newUser.id,
            },
            { transaction: signIn }
          );
          res.status(200).json(newCompany);
        }
        if (role === "freelancer") {
          const newFrelancer = await database.Freelancer.create(
            {
              email,
              user_id: newUser.id,
            },
            { transaction: signIn }
          );
          res.status(200).json(newFrelancer);
        }
        if (role === "mentor") {
          const newMentor = await database.Mentor.create(
            {
              email,
              user_id: newUser.id,
            },
            { transaction: signIn }
          );
          res.status(200).json(newMentor);
        }
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async LogIn(req, res) {
    const { email, password } = req.body;
    try {
      const user = await database.User.findOne({ where: { email } });
      if (!user) {
        return res.status(404).json({ message: "Invalid email or password" });
      }

      if (bcrypt.compareSync(password, user.password)) {
        const token = await authController.createToken(user);
        res.status(200).json({ token });
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async UserAll(req, res) {
    try {
      const User = await database.User.findAll();
      return res.status(200).json(User);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = authController;
