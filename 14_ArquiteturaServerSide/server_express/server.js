const express = require("express");

const app = express();

const port = 5002;

app.get('/', (req, res) =>{
    res.send('Olá mundo | Express');
});

app.get('/Subaru', (req, res) =>{
    let anosubaru = req.params.anosubaru; // Deveria ser para receber por parâmetro, exemplo http://localhost:5002/subaru?anosubaru=2007
    res.send(`Motor boxer Ano ${anosubaru} | Express`); // traria Motor Boxer Ano 2007
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
})

 
