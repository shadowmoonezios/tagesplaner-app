const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const mongoURI = 'mongodb://localhost:27017/tagesplaner';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Datenbank verbunden!'))
.catch(err => console.error('Datenbankverbindungsfehler:', err));

app.listen(5000, () => {
  console.log('Server läuft auf Port 5000');
});