const http = require('http');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = require('./app');
dotenv.config();

const { loadPlanetsData } = require('./models/planets.model');

const PORT = process.env.PORT || 8000;

const MONGO_URL = `mongodb+srv://nasa-api:${process.env.MONGO_PASSWORD}@nasacluster.7rm5n.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`;

const server = http.createServer(app);

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function startServer() {
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

// Just gonna send it
startServer();
