const AuthService = require("../services/authService")

class authController {

  static async logIn(req, res) {
    const { email, password } = req.body;

    if(!email || !password) {
       return res.status(400).send('bad request')
    }

    try {
      const user = { email, password };
      const authResult = await AuthService.authenticate(user);

      if (!authResult || !authResult.token) {
        return res.status(401).send('Invalid email or password');
      }

      return res.status(200).json({ token: authResult.token });
      
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = authController;
