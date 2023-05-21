const database = require('../models')
const sequelize = require('sequelize');

class MentorController {


    static async searchMentorById(req, res){
        const {id} = req.params
        try {
            const resultMentor = await database.Mentor.findByPk(id)
            if(resultMentor !== null){
                return res.status(200).json(resultMentor)
            } else{
                return res.status(400).send({message:'Mentor id not found'})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async searchMentors(req, res){
        try {
            const resultMentors = await database.Mentor.findAll()
            if(resultMentors !== null){
                return res.status(200).json(resultMentors)
            } else{
                return res.status(400).send({message:'Mentors not found'})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async searchMentorRandom(req, res){
        try {
            const resultMentors = await database.Mentor.findAll({
                order: sequelize.literal('RAND()'),
                limit: 9
            })
            if(resultMentors !== null){
                return res.status(200).json(resultMentors)
            } else{
                return res.status(400).send({message:'Mentors not found'})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateMentor(req, res) {
        const {
            name, 
            phone, 
            birth, 
            gender, 
            address, 
            about, 
            img, 
            career, 
        } = req.body
    
        const {id} = req.params
        try {
            const resultMentor = await database.Mentor.findByPk(id)
            if(resultMentor !== null){
            await database.Mentor.update(
                { name, phone, birth, gender, address, about, img, career } ,
                {where: {id:Number(id)}})
            const mentorUpdated = await database.Mentor.findOne({where: {id:Number(id)}})
            return res.status(200).json(mentorUpdated)
            } else {
                return res.status(400).send({message:`Mentor ${id} not found`})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteMentor(req, res) {
        const {id}= req.params
        try {
            const resultMentor = await database.Mentor.findByPk(id)
            if(resultMentor !== null){
                await database.Mentor.destroy({where: {id : Number(id)}})
                return res.status(200).send({message: `successfully deleted Mentor ${id} `})
            } else {
                return res.status(400).send({message:'Mentor id not found'})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    
   
}

module.exports = MentorController
