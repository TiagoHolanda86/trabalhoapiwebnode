const { Apoiador } = require('../models');

module.exports = class ApoiadorController {
    static async showAll(req, res) {
        try {
            const apoiadores = await Apoiador.findAll();
            res.status(200).json({apoiadores});
        } catch(e) {
            res.status(500).json({error: e.message});
        }
    }

    static async show(req, res) {
        try {
            const apoiador = await Apoiador.findOne({where: {id: req.params.id}});
            res.status(200).json({apoiador});
        } catch(e) {
            res.status(500).json({error: e.message});
        }
    }

    static async create(req, res) {
        try {
            const apoiador = await Apoiador.create({
                nome: req.body.nome,
                data_nascimento: new Date(req.body.data_nascimento),
                telefone: req.body.telefone,
                email: req.body.email,
            });
            res.status(201).json({response: 'Apoiador criado com sucesso!'});
        } catch(e) {
            res.status(500).json({error: e.message})
        }
    }

    static async update(req, res) {
        try {
            const apoiador = await Apoiador.findOne({where: {id: req.params.id}});
            await apoiador.update({
                nome: req.body.nome,
                data_nascimento: new Date(req.body.data_nascimento),
                telefone: req.body.telefone,
                email: req.body.email,
            })
            res.status(200).json({response: 'Apoiador atualizado com sucesso!'})
        } catch(e) {
            res.status(500).json({error: e.message})
        }
    }

    static async delete(req, res) {
        try {
            const apoiador = await Apoiador.findOne({where: {id: req.params.id}});
            await apoiador.destroy();
            res.status(200).json({response: 'Apoiador deletado com sucesso!'})
        } catch(e) {
            res.status(500).json({error: e.message})
        }
    }
}