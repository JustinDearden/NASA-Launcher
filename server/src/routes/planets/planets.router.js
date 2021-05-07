const express = require('express');

// Controller Imports
const { getAllPlanets } = require('./planets.controller');

const planetsRouter = express.Router();

// Routes
planetsRouter.get('/planets', getAllPlanets);

module.exports = planetsRouter;
