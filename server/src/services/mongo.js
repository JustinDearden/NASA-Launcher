const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const MONGO_URL = `mongodb+srv://nasa-api:${process.env.MONGO_PASSWORD}@nasacluster.7rm5n.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`;

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
