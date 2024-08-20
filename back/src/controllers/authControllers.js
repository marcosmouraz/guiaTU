const Turista = require('../model/Turista')

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = class authControllers {
    static async turistaLogin(request,response) {
        const { username, senha_hash } = request.body

        const turista = await Turista.findOne({ where: { username: username } })

        const validatePassword = await bcrypt.compare(senha_hash, turista.senha_hash)

        if (!validatePassword) {
            response.status(422).json({ message: 'E-mail ou senha invalido !' })
            return
        }

        const token = jwt.sign({
            id: turista.id
        }, 'secret')

        response.status(200).json({ token: token })
    }
}