const { Projeto } = require('../models');

module.exports = class ProjetoController {
    static async showAll(req, res) {
        try {
            const projetos = await Projeto.findAll();
            res.status(200).json({projetos});
        } catch(e) {
            res.status(500).json({error: e.message});
        }
    }

    static async show(req, res) {
        try {
            const projeto = await Projeto.findOne({where: {id: req.params.id}});
            res.status(200).json({projeto});
        } catch(e) {
            res.status(500).json({error: e.message});
        }
    }

    static async create(req, res) {
        try {
            const newProjeto = await Projeto.create({
                nome: req.body.nome,
                descricao: req.body.descricao,
                meta: req.body.meta,
                data_limite: new Date(req.body.data_limite)
            });
            res.status(201).json({response: 'projeto criado com sucesso!'});
        } catch(e) {
            res.status(500).json({error: e.message})
        }
    }

    static async update(req, res) {
        try {
            const projeto = await Projeto.findOne({where: {id: req.params.id}});
            await projeto.update({
                nome: req.body.nome,
                descricao: req.body.descricao,
                meta: req.body.meta,
                data_limite: new Date(req.body.data_limite)
            })
            res.status(200).json({response: 'projeto atualizado com sucesso!'})
        } catch(e) {
            res.status(500).json({error: e.message})
        }
    }

    static async delete(req, res) {
        try {
            const projeto = await Projeto.findOne({where: {id: req.params.id}});
            await projeto.destroy();
            res.status(200).json({response: 'projeto deletado com sucesso!'})
        } catch(e) {
            res.status(500).json({error: e.message})
        }
    }
}