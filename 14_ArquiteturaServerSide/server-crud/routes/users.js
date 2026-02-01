var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('Lista Usuário');
});

router.get('/:id', function(req, res, next) {
    const id = req.params.id
    res.send(`Lista Usuário de id = ${id}`);
});

router.get('/:nome', function(req, res, next) {
    const nome = req.params.nome
    res.send(`Lista Usuário de Nome = ${nome}`);
});

router.post('/', function(req, res) {
    res.send('Cria usuário');
});

router.delete('/', function(req, res) {
    res.send('Deleta usuário');
});

router.put('/', function(req, res) {
    res.send('Altera usuário');
});

module.exports = router;
