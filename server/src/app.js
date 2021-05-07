const express = require('express');
const cors = require('cors');

// Imports
const planetsRouter = require('./routes/planets/planets.router');

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

// Routers
app.use(planetsRouter);

module.exports = app;
