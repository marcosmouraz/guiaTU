const Guia = require("../model/Guia");
const bcrypt = require("bcrypt");

module.exports = class guiaControllers {
  static async createGuia(request, response) {
    try {
      const {
        nome,
        sobrenome,
        data_nascimento,
        cpf,
        pais,
        estado,
        credencial,
        username,
        senha_hash,
      } = request.body;

      // Verificar se o username já existe
      const existingGuia = await Guia.findOne({ where: { username } });
      if (existingGuia) {
        return response.status(409).json({ message: "Usuário já existe" });
      }

      const salt = await bcrypt.genSalt(12); // Gera o sal
      const encryptPass = await bcrypt.hash(senha_hash, salt); // Usa o sal para criar o hash da senha

      const guia = await Guia.create({
        nome,
        sobrenome,
        data_nascimento,
        cpf,
        pais,
        estado,
        credencial,
        username,
        senha_hash: encryptPass,
      });

      response
        .status(201)
        .json({ message: "Guia cadastrado com SUCESSO!", guia: guia });
    } catch (error) {
      console.log(error);
      return response
        .status(500)
        .json({ message: "Erro ao conectar ao servidor", error });
    }
  }

  static async getOneGuia(request, response) {
    try {
      const { id } = request.params;

      const guia = await Guia.findByPk(id);

      if (!guia) {
        response.status(404).json({ message: "Guia não encontrado" });
        return;
      }

      response.status(200).json({ guia: guia });
    } catch (error) {
      console.log(error);
      return response
        .status(500)
        .json({ message: "Erro ao conectar ao servidor", error });
    }
  }
};
