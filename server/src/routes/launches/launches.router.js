const express = require('express');

// Controller Imports
const {
  httpGetAllLaunches,
  httpAddNewLaunch,
} = require('./launches.controller');

const launchesRouter = express.Router();

// Routes
launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpAddNewLaunch);

module.exports = launchesRouter;
