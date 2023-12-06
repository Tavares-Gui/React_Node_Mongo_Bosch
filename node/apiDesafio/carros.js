const express = require('express');
const router = express.Router();
const Carros = require('./model/Carros');
const cars = [];

router
    .get('/api/cars', async (req, res) => {
        try 
        {
            const cars = await Carros.find();
            return res.status(200).send({ data: cars });
        } 
        catch (error) 
        {
            return res.status(500).send({ error: error });
        }
    })

    .get('/api/cars/:id', async (req, res) => {
        const { id } = req.params;

        try 
        {
            const cars = await Carros.findById(id);
            return res.status(200).json(cars);
        } 
        catch (error) 
        {
            res.status(500).json({ error: error })
        }
    })

    .post('/api/cars', async (req, res) => {
        const { model, brand, color, price } = req.body;
        
        if(!model || !brand || !color || !price)
            return res.status(400).send({ message: "Dados inválidos" })
        
            const cars = {
            model: model,
            brand: brand,
            color: color,
            price: price
        }

        try {
            const c = await Carros.create(cars);
            return res.status(201).send({ message: "Carro inserido com sucesso", body: c });
        } 
        catch (error) 
        {
            return res.status(500).send({ error: error });
        }

        const c = await Carros.create(cars);
        return res.status(201).send({ message: "Carro inserido com sucesso", body: c })
    })

    .patch('/api/cars/:id', async (req, res) => {
        const { id } = req.params;

        if(!id)
            return res.status(400).send({ message: "No id provider" })
        
        const cars = req.body;
        
        if(!cars.price)
            return res.status(400).send({ message: "No price provider" })
        
        try 
        {
            const newCar = await Carros.findByIdAndUpdate(
                id,
                { price: cars.price }
            );
            return res.status(201).send(newCar);
        } 
        catch (error)       
        {
            return res.status(500).send({ error: error });
        }
    })

    .delete('/api/cars/:id', async (req, res) => {
        const { id } = req.params;

        if(!id)
            return res.status(400).send({ message: "No id provider" });

        try 
        {
            await Carros.findByIdAndDelete(id);
            return res.status(200).send({ message: "Car deleted successfully" })
        } 
        catch (error) 
        {
            console.log(error);
            return res.status(500).send({ message: "Something failled"})
        }
    })

module.exports = router;