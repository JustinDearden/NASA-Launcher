const express = require('express');

// Controller Imports
const { httpGetAllLaunches } = require('./launches.controller');

const launchesRouter = express.Router();

// Routes
launchesRouter.get('/launches', httpGetAllLaunches);

module.exports = launchesRouter;
