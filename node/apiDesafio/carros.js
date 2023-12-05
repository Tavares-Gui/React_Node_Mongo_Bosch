const express = require('express');
const router = express.Router();

const cars = [];

router 
    .get('/api/cars', (req, res) => {
        return res.status(200).send({ data: cars });
    })

    .get('/api/cars/:id', (req, res) => {
        const id = parseInt(req.params.id);

        return res.status(200).send({ data: cars[id] });
    })

    .post('/api/cars', (req, res) => {
        const { model, color, price, brand } = req.body;

        if(!model || !color || !price || !brand)
            return res.status(400).send({ message: "Dados inválidos" }) 

        const newCar = {
            id: cars.length + 1,
            model: model,
            color: color,
            price: price,
            brand: brand
        }

        cars.push(newCar);
        return res.status(201).send({ message: "Carro inserido com sucesso" });
    })
    
    .put('/api/cars/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const index = cars.findIndex((car) => car.id === id)

        const attCar = {
            id: cars[index].id,
            model: req.body.model || cars[index].model,
            color: req.body.color || cars[index].color,
            price: req.body.price || cars[index].price,
            brand: req.body.brand || cars[index].brand
        }

        cars[index] = attCar;
        
        return res.status(201).send({ message: "Carro atualizado com sucesso" });
    })

    .delete('api/cars', (req, res) => {
        const id = parseInt(req.params.id);

        cars = cars.filter(car => car.id === id)

        return res.status(200).send({ message: "Carro deletado com sucesso" });
    })

module.exports = router