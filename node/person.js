const express = require('express');
const router = express.Router();

const people = [];

router
    //BODY
    // .get('/api/person/first', (req, res) => {
    //     console.log("Oi kk");
    //     const val1 = 4;
    //     const val2 = 4;
    //     const sum = val1 + val2;
    //     console.log(sum);
    //     return
    // })

    //PARAMS
    // .get('/:numero?', (req, res) => { // "?" serve para o dado ser opcional
    //     const { numero } = req.params
    //     res.send(`Número recebido: ${numero * 8}`);
    // })

    //QUERY
    // .get('/:numero?', (req, res) => {
    //     const { numero } = req.query
    //     res.send(`Número recebido: ${numero}`);
    // })
    
    //CONFIGURACAO DE ROTAS
    // .post('/api/person', (req, res) => {
    //     const { name, lastname, salary } = req.body;

    //     if(!name || !lastname || !salary)
    //         return res.status(400).send({ message: "Dados inválidos" }) 

    //     const person = {
    //         id: people.length,
    //         name: name,
    //         lastname: lastname,
    //         salary: salary
    //     }

    //     people.push(person);
    //     return res.status(201).send({ message: "Pessoa inserida com sucesso" });
    // })
    
    // .get('/api/person', (req, res) => {
    //     return res.status(200).send({ data: people });
    // })

module.exports = router