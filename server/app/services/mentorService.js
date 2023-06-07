const database = require("../models");

class MentorService {
  static async create(payload) {
    const { email, id: user_id } = payload;
    const mentor = database.Mentor.create({ email, user_id })
      .then((data) => data.dataValues)
      .catch((error) => console.log({ error }));
    return mentor;
  }
}

module.exports = MentorService;
