const bcrypt = require("bcrypt");
const database = require("../models");
const CompanyService = require("./companyService");
const FreelancerService = require("./freelancerService");
const MentorService = require("./mentorService");

class UserService {
  static async getAll() {
    return await database.User.findAll();
  }

  static async findByEmail(email) {
    return await database.User.findOne({ where: { email } });
  }

  static async create(payload) {
    const { email, role, password: pass } = payload;
    const password = await bcrypt.hash(pass, 10);
    try {
      const newUser = await database.User.create({ email, password, role });
      switch (role) {
        case "company":
          return CompanyService.create(newUser);
        case "freelancer":
          return FreelancerService.create(newUser);
        case "mentor":
          return MentorService.create(newUser);
      }
    } catch (error) {
      console.log(error);
    }
    return { error: "no user created"};
  }
}

module.exports = UserService;
