const database = require("../models");
const Sequelize = require("sequelize");

class CompanyController {
  static async searchCompanyById(req, res) {
    const id = req.params.user_id;
    try {
      const resultCompany = await database.Company.findOne({
        where: {
          user_id: Number(id),
        },
      });
      if (resultCompany !== null) {
        return res.status(200).json(resultCompany);
      } else {
        return res.status(400).send({ message: "Company id not found" });
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async searchCompanies(req, res) {
    try {
      const resultCompanies = await database.Company.findAll();
      if (resultCompanies !== null) {
        return res.status(200).json(resultCompanies);
      } else {
        return res.status(400).send({ message: "Companies not found" });
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async searchJobsCompany(req, res) {
    const id = req.params.user_id;
    try {
      const resultJobs = await database.Jobs.findAll({
        where: { company_id: Number(id) },
      });
      if (resultJobs !== null) {
        return res.status(200).json(resultJobs);
      } else {
        return res.status(400).send({ message: "Companies not found" });
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async searchCompaniesRandom(req, res) {
    try {
      const resultCompanies = await database.Company.findAll({
        order: Sequelize.literal("RAND()"),
        limit: 9,
      });
      if (resultCompanies !== null) {
        return res.status(200).json(resultCompanies);
      } else {
        return res.status(400).send({ message: "Companies not found" });
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateCompany(req, res) {
    const { name, bio, site, img } = req.body;
    const id = req.params.user_id;
    try {
      const resultCompany = await database.Company.findOne({
        where: { user_id: id },
      });
      if (resultCompany !== null) {
        await database.Company.update( { name, bio , site, img},
          { where: { user_id: Number(id) } }
        );
        const companyUpdated = await database.Company.findOne({
          where: { user_id: Number(id) },
        });
        return res.status(200).json(companyUpdated);
      } else {
        return res.status(400).send({ message: `Company ${id} not found` });
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteCompany(req, res) {
    const id = req.params.user_id;
    try {
      const resultCompany = await database.Company.findOne({
        where: { user_id: Number(id) },
      });
      if (resultCompany !== null) {
        await database.Company.destroy({ where: { user_id: Number(id) } });
        return res.status(200).send({
          message: `successfully deleted Company ${resultCompany.name} `,
        });
      } else {
        return res.status(400).send({ message: "Company id not found" });
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async CreateJob(req, res) {
    const id = req.params.user_id;
    try {
      const resultCompany = await database.Company.findOne({
        where: { user_id: Number(id) },
      });
      if (resultCompany !== null) {
        const { company_id, title, description, hard_skills } = req.body;
        const amount = parseInt(req.body.amount);
        const newJob = await database.Jobs.create({
          company_id: id,
          title,
          description,
          hard_skills: hard_skills.toLowerCase(),
          amount,
        });

        return res.status(200).json(newJob);
      } else {
        return res.status(400).send({ message: `Company ${id} not found` });
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async searchJobsCompanies(req, res) {
    try {
      const resultJobs = await database.Jobs.findAll();
      if (resultJobs !== null) {
        return res.status(200).json(resultJobs);
      } else {
        return res.status(400).send({ message: "Jobs not found" });
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async searchFreelancer(req, res) {
    try {
      const resultFreelancers = await database.Freelancer.findAll();
      if (resultFreelancers !== null) {
        return res.status(200).json(resultFreelancers);
      } else {
        return res.status(400).send({ message: "Freelancers not found" });
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateJob(req, res) {
    const { title, description, hard_skills } = req.body;
    const amount = parseInt(req.body.amount);
    const id = req.params.user_id;
    const JobId = req.params.id;
    try {
      const resultCompany = await database.Company.findOne({
        where: { user_id: Number(id) },
      });
      if (resultCompany !== null) {
        const resultJob = await database.Jobs.findOne({
          where: { id: Number(JobId) },
        });
        if (resultJob !== null) {
          await database.Jobs.update(
            {
              title,
              description,
              hard_skills: hard_skills ? hard_skills.toLowerCase() : undefined,
              amount: amount !== null ? amount : resultJob.amount,
            },
            { where: { id: Number(resultJob.id) } }
          );
          const jobUpdated = await database.Jobs.findOne({
            where: { id: Number(JobId) },
          });
          return res.status(200).json(jobUpdated);
        }
      } else {
        return res.status(400).send({ message: `Job ${JobId} not found` });
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteJob(req, res) {
    const id = req.params.user_id;
    const JobId = req.params.id;
    try {
      const resultCompany = await database.Company.findOne({
        where: { user_id: Number(id) },
      });
      if (resultCompany !== null) {
        const resultJob = await database.Jobs.findOne({
          where: { id: Number(JobId) },
        });
        if (resultJob !== null) {
          await database.Jobs.destroy({ where: { id: Number(resultJob.id) } });
          return res
            .status(200)
            .send({ message: `successfully deleted job ${resultJob.id} ` });
        }
      } else {
        return res.status(400).send({ message: `Job ${JobId} not found` });
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async findFreelancerSkills(req, res) {
    const id = req.params.user_id;
    const JobId = req.params.id;
    const page = req.query.page || 1; // Página actual (valor : 1)

    try {
      const resultCompany = await database.Company.findOne({
        where: { user_id: Number(id) },
      });
      if (resultCompany !== null) {
        const resultJob = await database.Jobs.findOne({
          where: { id: Number(JobId) },
        });
        if (resultJob !== null) {
          const hardSkillsArrayJob = resultJob.hard_skills
            .split(",")
            .map((skill) => skill.trim().toLowerCase());

          const whereFreelancer = {
            [Sequelize.Op.and]: [
              {
                [Sequelize.Op.or]: hardSkillsArrayJob.map((skill) => ({
                  hard_skills: { [Sequelize.Op.like]: `%${skill}%` },
                })),
              },
              { open_to_work: true },
            ],
          };
          const limit = resultJob.amount; // Quantidade de freelancers por página
          const offset = (page - 1) * limit; // Cálculo de pasar pagina

          const countFreelancers = await database.JobsFreelancer.count({
            where: { job_id: Number(JobId) },
          });

          const remainingLimit = limit - countFreelancers;
          if (remainingLimit <= 0) {
            return res
              .status(200)
              .json({ message: "Limit of freelancers reached" });
          }
          const findFreelancers = await database.Freelancer.findAll({
            where: whereFreelancer,
            order: Sequelize.literal("RAND()"),
            limit: remainingLimit,
            offset,
          });
          console.info(remainingLimit);

          const allMatch = findFreelancers.map((freelancer) => ({
            freelancer_id: freelancer.id,
            name: freelancer.name,
            img: freelancer.img,
            hard_skills: freelancer.hard_skills,
            job_id: JobId,
          }));
          return res.status(200).json(allMatch);
        }
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async MatchWithSkills(req, res) {
    const id = req.params.user_id;
    const JobId = req.params.id;
    const freelancers = req.body;
    try {
      const resultCompany = await database.Company.findOne({
        where: { user_id: Number(id) },
      });
      if (resultCompany !== null) {
        const resultJob = await database.Jobs.findOne({
          where: { id: Number(JobId) },
        });
        if (resultJob !== null) {
          const allInvited = freelancers.map((freelancer) => ({
            name: freelancer.name,
            img: freelancer.img,
            freelancer_id: freelancer.freelancer_id,
            hard_skills: freelancer.hard_skills,
            job_id: freelancer.job_id,
          }));
          await database.sequelize.transaction(async (t) => {
            const match = await database.JobsFreelancer.bulkCreate(allInvited, {
              transaction: t,
            });
            const freelancerIds = freelancers.map(
              (freelancer) => freelancer.freelancer_id
            );
            await Promise.all(
              freelancerIds.map((freelancerId) => {
                database.Freelancer.update(
                  { open_to_work: false },
                  { where: { user_id: freelancerId } },
                  { transaction: t }
                );
              })
            );
            return res.status(200).json(match);
          });
        }
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async FreelancerAtJobs(req, res) {
    const JobId = req.params.job_id;
    try {
      const freelancers = await database.JobsFreelancer.findAll({
        where: { job_id: Number(JobId) },
        include: [
          {
            model: database.Freelancer,
            attributtes: ["name", "hard_skills", "img"],
          },
        ],
      });
      if (freelancers.length > 0) {
        const result = freelancers.map((freelancer) => ({
          name: freelancer.Freelancer.name,
          hard_skills: freelancer.Freelancer.hard_skills,
          img: freelancer.Freelancer.img,
        }));
        return res.status(200).json(result);
      } else {
        return res
          .status(400)
          .json({ message: "Freelancers not found for the specified job" });
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = CompanyController;
