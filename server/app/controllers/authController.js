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


  static async logIn(req, res) {
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

}

module.exports = authController;