const database = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/authConfig');

class authController {
  static async SingUp(req, res) {
    try {
      const password = await bcrypt.hash(req.body.password, 10);
      const { email, role } = req.body;
      await database.sequelize.transaction(async (cadastro) => {
        const newUser = await database.User.create(
          { email, password, role },
          { transaction: cadastro }
        );
        const token = jwt.sign({ id: newUser.id }, authConfig.secret, {
          expiresIn: authConfig.expires,
        });

        if (role === 'company') {
          await database.Company.create(
            {
              email,
              user_id: newUser.id,
            },
            { transaction: cadastro }
          );
        }
        if (role === 'freelancer') {
          await database.Freelancer.create(
            {
              email,
              user_id: newUser.id,
            },
            { transaction: cadastro }
          );
        }
        if (role === 'mentor') {
          await database.Mentor.create(
            {
              email,
              user_id: newUser.id,
            },
            { transaction: cadastro }
          );
        }
        res.status(200).json(newUser);
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
        return res.status(404).json({ message: 'Invalid email or password' });
      }

      if (bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ id: user.id }, authConfig.secret, {
          expiresIn: authConfig.expires,
        });
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
