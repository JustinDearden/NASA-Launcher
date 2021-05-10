const express = require('express');

// Controller Imports
const { httpGetAllPlanets } = require('./planets.controller');

const planetsRouter = express.Router();

// Routes
planetsRouter.get('/planets', httpGetAllPlanets);

module.exports = planetsRouter;
