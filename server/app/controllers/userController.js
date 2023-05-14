const database = require('../models')

class UserController {

    static async CadastroModificadoTransaction(req, res) {
        try {
            const  {email, password, role} = req.body 
            await database.sequelize.transaction( async cadastro => {
                const newUser = await 
                database.User.create({email, password, role}, { transaction: cadastro })
        
                if (role === 'company') {
                   await database.Company.create({
                        email,
                        user_id: newUser.id
                    }, {  transaction: cadastro } );
                  }
                if (role === 'candidate') {
                   await database.Candidate.create({
                        email,
                        user_id: newUser.id
                    }, {  transaction: cadastro } );
                  }
                if (role === 'mentor') {
                   await database.Mentor.create({
                        email,
                        user_id: newUser.id
                    }, {  transaction: cadastro } );
                  }

                
                  res.status(200).json(newUser) 
            })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async Login(req, res) {
        const {email, password} = req.body;
        try { 
            const user = await database.User.findOne({ where: { email } })
            if(!user) {
                return res.status(404).json({message: 'Invalid email or password'})
            } 
            
            if (user.password !== password) {
                return res.status(401).json({ message: 'Invalid email or password' });
              }
            
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    
    static async UserAll(req, res) {
        try {
            const User = await database.User.findAll()
            return res.status(200).json(User)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    
    
}

module.exports = UserController
