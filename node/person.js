const express = require('express');
const router = express.Router();

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
    
module.exports = router