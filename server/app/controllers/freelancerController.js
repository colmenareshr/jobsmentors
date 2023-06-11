const database = require('../models')
const sequelize = require('sequelize');

class FreelancerController {


    static async searchFreelancerById(req, res){
        const id = req.params.user_id
        try {
            const resultFreelancer = await database.Freelancer.findOne({
                where: {
                    user_id: id
                }
            })
            if(resultFreelancer !== null){
                return res.status(200).json(resultFreelancer)
            } else{
                return res.status(400).send({message:'Freelancer id not found'})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async searchFreelancer(req, res){
        try {
            const resultFreelancers = await database.Freelancer.findAll()
            if(resultFreelancers !== null){
                return res.status(200).json(resultFreelancers)
            } else{
                return res.status(400).send({message:'Freelancers not found'})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async searchFreelancerRandom(req, res){
        try {
            const resultFreelancers = await database.Freelancer.findAll({
                order: sequelize.literal('RAND()'),
                limit: 9
            })
            if(resultFreelancers !== null){
                return res.status(200).json(resultFreelancers)
            } else{
                return res.status(400).send({message:'Freelancers not found'})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateFreelancer(req, res) {
        const {
            name, 
            phone, 
            birth, 
            gender, 
            address, 
            bio,
            about, 
            img, 
            career, 
            hard_skills, 
            contract, 
            open_to_work
        } = req.body
    
        const id = req.params.user_id
        try {
            const resultFreelancer = await database.Freelancer.findOne({
                where: {
                    user_id: id
                }
            })
            if(resultFreelancer !== null){
            await database.Freelancer.update(
                { name, phone, birth, gender, address, bio, about, img, career,hard_skills: hard_skills ? hard_skills.toLowerCase() : undefined, contract, open_to_work } ,
                {where: {user_id:Number(id)}})
            const freelancerUpdated = await database.Freelancer.findOne({where: {user_id:Number(id)}})
            return res.status(200).json(freelancerUpdated)
            } else {
                return res.status(400).send({message:`Freelancer ${id} not found`})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    
    static async CreateInformation(req, res) {
        const id = req.params.user_id
        try {
            const freelancer = await database.Freelancer.findOne({ 
            where: {
                user_id: Number(id)
            }
        })
        if (freelancer !== null) {
            const {
                freelancer_id,
                education, 
                languages,
                experience,
                course, 
                soft_skills,
                disability
            } = req.body
            const newInformation = await database.Information.create({freelancer_id: id, education, languages, experience, course, soft_skills, disability})
            return res.status(200).json(newInformation)
           
        } else{
            return res.status(400).send({message:`Freelancer ${id} not found`})
        }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async CreateNetwork(req, res) {
        const id = req.params.user_id
        try {
            const freelancer = await database.Freelancer.findOne({ 
            where: {
                user_id: Number(id)
            }
        })
        if (freelancer !== null) {
            const {
                freelancer_id,
                github, 
                linkedin, 
                portfolio
            } = req.body
            const newNetwork = await database.Network.create({freelancer_id: id, github, linkedin, portfolio})
            return res.status(200).json(newNetwork)
        } else{
            return res.status(400).send({message:`Freelancer ${id} not found`})
        }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateInformation(req, res) {
        const uptadedInformation = req.body
        const id = req.params.user_id
        try {
            const resultInformation = await database.Freelancer.findOne({
                where: {
                    user_id: Number(id)
                }
            })
            console.info(resultInformation)
            if(resultInformation !== null){
            await database.Information.update(uptadedInformation, {where: {freelancer_id: id}})
            const informationUpdated = await database.Information.findOne({where: {freelancer_id: id}})
            return res.status(200).json(informationUpdated)
            } else {
                return res.status(400).send({message:`Information not found`})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    
    }
    
    static async updateNetwork(req, res) {
        const uptadedNetwork = req.body
        const id = req.params.user_id
        try {
            const resultNetwork = await database.Freelancer.findOne({
                where: {user_id: Number(id)}
            })
            if(resultNetwork !== null){
            await database.Network.update(uptadedNetwork, {where: {freelancer_id: id}})
            const networkUpdated = await database.Network.findOne({where: {freelancer_id: id}})
            return res.status(200).json(networkUpdated)
            } else {
                return res.status(400).send({message:`Network not found`})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    
    static async deleteFreelancer(req, res) {
        const id = req.params.user_id
        try {
            const resultFreelancer = await database.Freelancer.findOne({
                where: {
                    user_id: Number(id)
                }
            })
            if(resultFreelancer !== null){
                await database.Freelancer.destroy({where: {user_id : Number(id)}})
                return res.status(200).send({message: `successfully deleted Freelancer ${resultFreelancer.name} `})
            } else {
                return res.status(400).send({message:'Freelancer id not found'})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = FreelancerController
