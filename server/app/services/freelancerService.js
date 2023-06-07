const database = require("../models");

class FreelancerService {
  static async create(payload) {
    const { email, id: user_id } = payload;
    const freelancer = database.Freelancer.create({ email, user_id })
      .then((data) => data.dataValues)
      .catch((error) => console.log({ error }));
    return freelancer;
  }
}

module.exports = FreelancerService;
