const Turista = require("../model/Turista");
const bcrypt = require("bcrypt");

// exportando a classe turistacontroller que realiza a movimentação de dados com base no front
module.exports = class turistaControllers {
  static async createTurista(request, response) {
    try {
      const {
        nome,
        sobrenome,
        genero,
        data_nascimento,
        cpf,
        pais,
        estado,
        username,
        senha_hash,
      } = request.body;

      const salt = await bcrypt.genSalt(12);
      const encryptPass = await bcrypt.hash(senha_hash, parseInt(salt));

      const turista = await Turista.create({
        nome,
        sobrenome,
        genero,
        data_nascimento,
        cpf,
        pais,
        estado,
        username,
        senha_hash: encryptPass,
      });

      return response.status(201).json({
        message: "Turista cadastrado com SUCESSO!",
        turista: turista,
      });
    } catch (error) {
      console.log(error);
      return response
        .status(500)
        .json({ message: "Erro ao conectar ao servidor", error });
    }
  }

  static async getOneTurista(request, response) {
    try {
      const { id } = request.params;

      const turista = await Turista.findByPk(id);

      if (!turista) {
        response.status(422).json({ message: "Turista não encontrado" });
        return;
      }

      return response.status(200).json({ turista: turista });
    } catch (error) {
      console.log(error);
      return response
        .status(500)
        .json({ message: "Erro ao conectar ao servidor", error });
    }
  }
};
