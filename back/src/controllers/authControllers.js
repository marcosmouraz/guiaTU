const Turista = require('../model/Turista')
const Empreendedores = require('../model/Empreendedores')

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = class authControllers {
  static async turistaLogin(request, response) {
    const { username, senha_hash } = request.body;

    const turista = await Turista.findOne({ where: { username: username } });

    const validatePassword = await bcrypt.compare(
      senha_hash,
      turista.senha_hash
    );

    if (!validatePassword) {
      response.status(422).json({ message: "E-mail ou senha invalido !" });
      return;
    }

    const token = jwt.sign(
      {
        id: turista.id,
      },
      "secret"
    );

    response.status(200).json({ token: token });
  }

  static async empreendedoresLogin(request, response) {
    const { username, senha_hash } = request.body;

    const empreendedores = await Empreendedores.findOne({ where: { username: username } });

    const validatePassword = await bcrypt.compare(
      senha_hash,
      empreendedores.senha_hash
    );

    if (!validatePassword) {
      response.status(422).json({ message: "E-mail ou senha invalido !" });
      return;
    }

    const token = jwt.sign(
      {
        id: empreendedores.id,
      },
      "secret"
    );

    response.status(200).json({ token: token });
  }
};