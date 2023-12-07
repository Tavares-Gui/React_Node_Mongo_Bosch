const express = require('express');
const person = require('../person');

module.exports = function (app) {
    app.use(express.json());
    app.use('/api/person', person);
}