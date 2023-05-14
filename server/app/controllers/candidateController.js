const database = require('../models')

class CandidateController {


    static async searchCandidateById(req, res){
        const {id} = req.params
        try {
            const resultCandidate = await database.Candidate.findOne({
                where: {
                    id: Number(id)
                }
            })
            if(resultCandidate !== null){
                return res.status(200).json(resultCandidate)
            } else{
                return res.status(400).send({message:'Candidate id not found'})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateCandidate(req, res) {
        const uptadedCandidate = req.body
        const {id} = req.params
        try {
            const resultCandidate = await database.Candidate.findOne({
                where: {id: Number(id)}
            })
            if(resultCandidate !== null){
            await database.Candidate.update(uptadedCandidate, {where: {id:Number(id)}})
            const candidateUpdated = await database.Candidate.findOne({where: {id:Number(id)}})
            return res.status(200).json(candidateUpdated)
            } else {
                return res.status(400).send({message:`Candidate ${id} not found`})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteCandidate(req, res) {
        const {id}= req.params
        try {
            const resultCandidate = await database.Candidate.findOne({
                where: {id: Number(id)}
            })
            if(resultCandidate !== null){
                await database.Candidate.destroy({where: {id : Number(id)}})
                return res.status(200).send({message: `successfully deleted Candidate ${id} `})
            } else {
                return res.status(400).send({message:'Candidate id not found'})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    
    static async CreateInformation(req, res) {
        const {candidate_id} = req.body
        try {
            const candidate = await database.Candidate.findOne({ 
            where: {
                id: Number(candidate_id)
            }
        })
        if (!candidate) {
            return res.status(400).send({message:`Candidate ${id} not found`})
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
            const resultInformation = await database.Candidate.findOne({
                where: {id: Number(id)}
            })
            if(resultInformation !== null){
            await database.Information.update(uptadedInformation, {where: {candidate_id:Number(id)}})
            const informationUpdated = await database.Information.findOne({where: {candidate_id:Number(id)}})
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
            const resultNetwork = await database.Candidate.findOne({
                where: {id: Number(id)}
            })
            if(resultNetwork !== null){
            await database.Network.update(uptadedNetwork, {where: {candidate_id:Number(id)}})
            const networkUpdated = await database.Network.findOne({where: {candidate_id:Number(id)}})
            return res.status(200).json(networkUpdated)
            } else {
                return res.status(400).send({message:`Network ${id} not found`})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async CreateNetwork(req, res) {
        const {candidate_id} = req.body
        try {
            const candidate = await database.Candidate.findOne({ 
            where: {
                id: Number(candidate_id)
            }
        })
        if (!candidate) {
            return res.status(400).send({message:`Candidate ${id} not found`})
        } else{
            const network = req.body
            const newNetwork = await database.Network.create(network)
            return res.status(200).json(newNetwork)
        }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = CandidateController
