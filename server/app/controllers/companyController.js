const database = require('../models')
const Sequelize = require('sequelize');


class CompanyController {

    static async searchCompanyById(req, res){
        const {id} = req.params
        try {
            const resultCompany = await database.Company.findOne({
                where: {
                    id: Number(id)
                }
            })
            if(resultCompany !== null){
                return res.status(200).json(resultCompany)
            } else{
                return res.status(400).send({message:'Company id not found'})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateCompany(req, res) {
        const uptadedCompany = req.body
        const {id} = req.params
        try {
            const resultCompany = await database.Company.findOne({
                where: {id: Number(id)}
            })
            if(resultCompany !== null){
            await database.Company.update(uptadedCompany, {where: {id:Number(id)}})
            const companyUpdated = await database.Company.findOne({where: {id:Number(id)}})
            return res.status(200).json(companyUpdated)
            } else {
                return res.status(400).send({message:`Company ${id} not found`})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteCompany(req, res) {
        const {id}= req.params
        try {
            const resultCompany = await database.Company.findOne({
                where: {id: Number(id)}
            })
            if(resultCompany !== null){
                await database.Company.destroy({where: {id : Number(id)}})
                return res.status(200).send({message: `successfully deleted Company ${id} `})
            } else {
                return res.status(400).send({message:'Company id not found'})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async CreateJob(req, res) {
        const job = req.body 
        try {
            const newJob = await database.Jobs.create(job)
            return res.status(200).json(newJob)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async findFreelancerSkills(req, res){
        try {
            const where = {}
            const { hard_skills } = req.query;
            if(hard_skills) where.hard_skills = { [Sequelize.Op.like]: `%${hard_skills}%` }
            const information = await database.Freelancer.findAll( {
                where: { 
                    ...where
                } 
            });
            if(information.length  === 0 ){
                return res.status(400).send({message:'Information not found'})
            } else{
                return res.status(200).json(information)
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = CompanyController