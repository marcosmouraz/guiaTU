const Turista = require("../model/Turista")
const bcrypt = require("bcrypt")

// exportando a classe turistacontroller que realiza a movimentação de dados com base no front
module.exports =  class turistaControllers {  
    static async createTurista(request, response){
        const {  nome, sobrenome, data_nascimento, cpf, pais, estado, username, senha_hash } = request.body
        
        try {
            const salt = await bcrypt.genSalt(12);
            const encryptPass = await bcrypt.hash(senha_hash, parseInt(salt));

            const turista = await Turista.create({
                nome, sobrenome, data_nascimento, cpf, pais, estado, username, senha_hash: encryptPass
            })

            response.status(201).json({ message: 'Turista cadastrado com SUCESSO!', turista: turista })
        } catch (error) {
            response.status(422).json({ message:'ERROR AO CADASTRAR TURISTA', error })
        
        }
    }
}