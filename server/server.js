const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
require('dotenv').config();

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
async function connect() {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(error);
  }
}

connect();
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/', require('./routes/projectRouter'));

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
