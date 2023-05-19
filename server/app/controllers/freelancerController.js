const database = require('../models')
const sequelize = require('sequelize');

class FreelancerController {


    static async searchFreelancerById(req, res){
        const {id} = req.params
        try {
            const resultFreelancer = await database.Freelancer.findByPk(id)
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
            about, 
            img, 
            career, 
            hard_skills, 
            contract, 
            open_to_work 
        } = req.body
    
        const {id} = req.params
        try {
            const resultFreelancer = await database.Freelancer.findByPk(id)
            if(resultFreelancer !== null){
            await database.Freelancer.update(
                { name, phone, birth, gender, address, about, img, career, hard_skills, contract, open_to_work } ,
                {where: {id:Number(id)}})
            const freelancerUpdated = await database.Freelancer.findOne({where: {id:Number(id)}})
            return res.status(200).json(freelancerUpdated)
            } else {
                return res.status(400).send({message:`Freelancer ${id} not found`})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    
    static async CreateInformation(req, res) {
        const {freelancer_id} = req.body
        try {
            const freelancer = await database.Freelancer.findOne({ 
            where: {
                id: Number(freelancer_id)
            }
        })
        if (!freelancer) {
            return res.status(400).send({message:`Freelancer ${id} not found`})
        } else{
            const information = req.body
            const newInformation = await database.Information.create(information)
            return res.status(200).json(newInformation)
        }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateInformation(req, res) {
        const uptadedInformation = req.body
        const {id} = req.params
        try {
            const resultInformation = await database.Freelancer.findOne({
                where: {id: Number(id)}
            })
            if(resultInformation !== null){
            await database.Information.update(uptadedInformation, {where: {freelancer_id:Number(id)}})
            const informationUpdated = await database.Information.findOne({where: {freelancer_id:Number(id)}})
            return res.status(200).json(informationUpdated)
            } else {
                return res.status(400).send({message:`Information ${id} not found`})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    
    }
    
    static async updateNetwork(req, res) {
        const uptadedNetwork = req.body
        const {id} = req.params
        try {
            const resultNetwork = await database.Freelancer.findOne({
                where: {id: Number(id)}
            })
            if(resultNetwork !== null){
            await database.Network.update(uptadedNetwork, {where: {freelancer_id:Number(id)}})
            const networkUpdated = await database.Network.findOne({where: {freelancer_id:Number(id)}})
            return res.status(200).json(networkUpdated)
            } else {
                return res.status(400).send({message:`Network ${id} not found`})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async CreateNetwork(req, res) {
        const {freelancer_id} = req.body
        try {
            const freelancer = await database.Freelancer.findOne({ 
            where: {
                id: Number(freelancer_id)
            }
        })
        if (!freelancer) {
            return res.status(400).send({message:`Freelancer ${id} not found`})
        } else{
            const network = req.body
            const newNetwork = await database.Network.create(network)
            return res.status(200).json(newNetwork)
        }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteFreelancer(req, res) {
        const {id}= req.params
        try {
            const resultFreelancer = await database.Freelancer.findByPk(id)
            if(resultFreelancer !== null){
                await database.Freelancer.destroy({where: {id : Number(id)}})
                return res.status(200).send({message: `successfully deleted Freelancer ${id} `})
            } else {
                return res.status(400).send({message:'Freelancer id not found'})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = FreelancerController
