const { User, Company, Freelancer, Mentor } = require('../models');
const database = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/authConfig');

class AuthController {
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

  static async signUp(req, res) {
    try {
      const password = await bcrypt.hash(req.body.password, 10);
      const { email, role } = req.body;

      await database.sequelize.transaction(async (transaction) => {
        const newUser = await User.create(
          { email, password, role },
          { transaction }
        );
        let createdUser;

        switch (role) {
          case 'company':
            createdUser = await Company.create(
              { email, user_id: newUser.id },
              { transaction }
            );
            break;
          case 'freelancer':
            createdUser = await Freelancer.create(
              { email, user_id: newUser.id },
              { transaction }
            );
            break;
          case 'mentor':
            createdUser = await Mentor.create(
              { email, user_id: newUser.id },
              { transaction }
            );
            break;
          default:
            throw new Error('Invalid role');
        }

        const token = AuthController.createToken(newUser);
        res.status(200).json({ user: createdUser, token });
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  static async LogIn(req, res) {
    const { email, password } = req.body;
    try {
      const user = await database.User.findOne({ where: { email } });
      if (!user) {
        return res.status(404).json({ message: 'Invalid email or password' });
      }

      if (bcrypt.compareSync(password, user.password)) {
        const token = AuthController.createToken(user);
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

module.exports = AuthController;
