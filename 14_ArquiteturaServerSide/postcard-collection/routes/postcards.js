var express = require('express');
var router = express.Router();

const { randomUUID } = require('crypto');
const { listAll, listOne, addPost, delPost} = require('../controller/postcards');

// app.use(express.json());

// const postcardsPath = './postcards.json';
// exports.postcardsPath = postcardsPath;

// Rota GET para obter todos os Postcards
router.get('/', (req, res) => {
    listAll(res);
});

router.get('/:id', (req, res) => {
    const postId = req.params.id;
    listOne(postId, res)
});

router.post('/', (req, res) => {
    addPost(req, res)
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    delPost(res, id)
});

module.exports = router;


