const database = require("../models");

class CompanyService {
  static async create(payload) {
    const { email, id: user_id } = payload;
    const company = database.Company.create({ email, user_id })
      .then((data) => data.dataValues)
      .catch((error) => console.log({ error }));
    return company;
  }
}

module.exports = CompanyService;
