const Empreendedores = require("../model/Empreendedores");
const bcrypt = require("bcrypt");

module.exports = class empreendedoresControllers {
  static async createEmpreendedores(request, response) {
    const {
      nome,
      sobrenome,
      data_nascimento,
      username,
      pais,
      estado,
      senha_hash,
      nome_estabelecimento,
      cep,
      rua,
      numero_estabelecimento,
      bairro,
      municipio,
      cnpj,
      telefone,
    } = request.body;

    try {
      const salt = await bcrypt.genSalt(12); // Gera o sal
      const encryptPass = await bcrypt.hash(senha_hash, salt); // Usa o sal para criar o hash da senha

      const empreendedores = await Empreendedores.create({
        nome,
        sobrenome,
        data_nascimento,
        username,
        pais,
        estado,
        senha_hash: encryptPass,
        nome_estabelecimento,
        cep,
        rua,
        numero_estabelecimento,
        bairro,
        municipio,
        cnpj,
        telefone,
      });

      response
        .status(201)
        .json({
          message: "Empreendedor cadastrado com SUCESSO!",
          empreendedores: empreendedores,
        });
    } catch (error) {
      response
        .status(422)
        .json({ message: "ERROR AO CADASTRAR EMPREENDEDOR", error });
    }
  }

  static async getOneEmpreendedor(request, response) {
    const { id } = request.params;

    const empreendedor = await Empreendedores.findByPk(id);

    if (!empreendedor) {
      response.status(422).json({ message: "Empreendedor não encontrado" });
      return;
    }

    response.status(200).json({ empreendedor: empreendedor });
  }
};