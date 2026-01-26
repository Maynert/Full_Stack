require('dotenv').config() // carreguei a porta do dotenv

// Segurança
const rateLimit = require('express-rate-limit')
// const xss = require('xss-clean')
const helmet = require('helmet')

// Demais bibliotecas
const mysql = require('mysql2') // SQL
const cool = require('cool-ascii-faces') // atribui a biblioteca a Cool
const express = require('express') // declarei a biblioteca express para a função express
const port = process.env.PORT || 3001 // se  não for declarada porta, usará a 3001.
const app = express() // atribui essa função para app

const mysqlConfig = {
        user: process.env.DB_USER, // setando as váriaveis de acesso ao banco, todas declaradas no .env.
        database: process.env.DB_NAME,
        password: process.env.DB_PASS,
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || 3306),
};

const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, // tempo que a pessoa  pode acessar a api
    max: 100, // quantidade de acessos dentro desse tempo
    message: "You are tongo",
})

app.use(limiter) // quando quero limitar para todos endpoints.
// app.use(xss()) // aplico para todas fazerem a limpeza de input de códigos em POST, GET e url.
app.use(helmet()) // aplico para limpar os cabeçalhos HTTP para evitar ataques

const connection = mysql.createConnection(mysqlConfig); // criando a conexão e passando o mysqlconfig definido e do dotenv para buscar as config.

connection.on('error', (err) => {
  console.error('MySQL connection error:', err.code, err.message)
})

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar no MySQL:', err.code, err.message)
    // Aqui você escolhe o comportamento:
    // a) NÃO derrubar a API (deixa no ar, mas /data vai falhar)
    return

    // b) OU derrubar e deixar o Docker reiniciar:
    // process.exit(1)
  }
  console.log('MySQL conectado!')
})

//  app.get == endpoint
app.get('/data', (req, res) => { // quando acessado /data, fará uma query no banco
    connection.query(
        "SELECT * FROM `user`",
        (error, results, fields) => { // se o retorno for erro, esse trecho trará o chamado "callback".
            if(error) {
                console.error(error);
                return res.status(500).json({ code: error.code, message: error.sqlMessage || error.message });
                }
             // pode haver erro de conexão, tabela não existir, etc.
            res.json(results); // se der erro, vai ser usado throw para tratar, se não der, traz em Json o resultado.
        }
    )
});

app.get('/', (req, res) => {
    res.send("<h1 id='title'>Hello World hehe</h1>");
})
// quando quer em apenas um endpoint o bloqueio: app.get('/welcome', limiter, (req, res) => {
app.get('/welcome', (req, res) => {
    res.send("Welcome")
})

app.get('/cool', (req, res) => {
    res.send(cool());
})

app.listen(port, () => {
    console.log(`Start listening ${port}`)
})

