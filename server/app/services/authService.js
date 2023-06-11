const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authConfig = require("../../config/authConfig");
const UserService = require("./userService");

class AuthService {
  static async authenticate(payload) {
    const user = await UserService.findByEmail(payload.email);
    if (!user) {
      return null;
    }

    if (bcrypt.compareSync(payload.password, user.password)) {
      const token = AuthService.createToken(user);
      return { token };
    }

    return null;
  }

  static createToken(user) {
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
}

module.exports = AuthService;
