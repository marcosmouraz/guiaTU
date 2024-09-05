const RotaTur = require("../model/RotaTur"); // Importa o modelo de RotaTur
const Turista = require("../model/Turista"); // Importa o modelo de Turista para relacionamentos

// Exportando a classe rotaTurController que realiza a movimentação de dados
module.exports = class rotaTurController {
  // Método para criar uma nova rota
  static async createRotaTurista(request, response) {
    try {
      const { partida, paradaUm, paradaDois, destino, valor, turista_id } =
        request.body;

      const rota = await RotaTur.create({
        partida,
        paradaUm,
        paradaDois,
        destino,
        valor,
        turista_id,
      });

      return response.status(201).json({
        message: "Rota criada com SUCESSO!",
        rota: rota,
      });
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        message: "Erro ao conectar ao servidor",
        error,
      });
    }
  }

  // Método para buscar uma rota específica por ID
  static async getOneRotaTurista(request, response) {
    try {
      const { id } = request.params;

      const rota = await RotaTur.findByPk(id, {
        include: [{ model: Turista, as: "turista" }], // Inclui os dados do turista relacionado
      });

      if (!rota) {
        return response.status(422).json({ message: "Rota não encontrada" });
      }

      return response.status(200).json({ rota: rota });
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        message: "Erro ao conectar ao servidor",
        error,
      });
    }
  }

  // Método para listar todas as rotas
  static async getAllRotas(request, response) {
    try {
      const rotas = await RotaTur.findAll({
        include: [{ model: Turista, as: "turista" }], // Inclui os dados dos turistas relacionados
      });

      return response.status(200).json({ rotas: rotas });
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        message: "Erro ao conectar ao servidor",
        error,
      });
    }
  }

  // Método para atualizar uma rota específica por ID (IMPLEMENTAÇÃO FUTURA)
  // static async updateRota(request, response) {
  //   try {
  //     const { id } = request.params;
  //     const { partida, paradaUm, paradaDois, destino, valor, turista_id } =
  //       request.body;

  //     const rota = await RotaTur.findByPk(id);

  //     if (!rota) {
  //       return response.status(422).json({ message: "Rota não encontrada" });
  //     }

  //     await rota.update({
  //       partida,
  //       paradaUm,
  //       paradaDois,
  //       destino,
  //       valor,
  //       turista_id,
  //     });

  //     return response.status(200).json({
  //       message: "Rota atualizada com SUCESSO!",
  //       rota: rota,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     return response.status(500).json({
  //       message: "Erro ao conectar ao servidor",
  //       error,
  //     });
  //   }
  // }

  // Método para deletar uma rota específica por ID
  static async deleteRota(request, response) {
    try {
      const { id } = request.params;

      const rota = await RotaTur.findByPk(id);

      if (!rota) {
        return response.status(422).json({ message: "Rota não encontrada" });
      }

      await rota.destroy();

      return response.status(200).json({
        message: "Rota deletada com SUCESSO!",
      });
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        message: "Erro ao conectar ao servidor",
        error,
      });
    }
  }
};
