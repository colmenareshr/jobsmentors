const UserService = require("../services/userService");

class UserController {
  static async getAll(req, res) {
    try {
      const user = await UserService.getAll();
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async create(req, res) {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).message("bad request");
    }
    try {
      UserService.create(req.body).then((user) => {
        return res.status(200).json({ ...user, role });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = UserController;
