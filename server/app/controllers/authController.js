const AuthService = require("../services/authService")
class authController {

  static async logIn(req, res) {
    const { email, password } = req.body;

    if(!email || !password) {
       return res.status(400).message('bad request')
    }

    try {
      const { token } = await AuthService.authenticate(user);
      if (!token) {
        return res.status(401).message('Invalid email or password')
      }
      return res.status(200).message({ token })

    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = authController;
