const express = require('express');
const router = express.Router();
const path = require('path')
const ProjetoController = require('../controllers/projetoController');
const ApoiadorController = require('../controllers/apoiadorController');

router.get('/', (req, res) => {
    res.status(200).send("Rota Inicial");
})

router.get('/projeto', ProjetoController.showAll);
router.get('/projeto/:id', ProjetoController.show);
router.post('/projeto', ProjetoController.create);
router.put('/projeto/:id', ProjetoController.update);
router.delete('/projeto/:id', ProjetoController.delete);

router.get('/apoiador', ApoiadorController.showAll);
router.get('/apoiador/:id', ApoiadorController.show);
router.post('/apoiador', ApoiadorController.create);
router.put('/apoiador/:id', ApoiadorController.update);
router.delete('/apoiador/:id', ApoiadorController.delete);

router.use(function (req, res, next){
    res.status(404).sendFile(path.resolve('./public/404.html'))
})

module.exports = router