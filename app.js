const express = require('express');
const cors = require('cors'); // 👈 Add this
const reservationRoutes = require('./routes/reservationRoutes');
const app = express();

app.use(cors()); // 👈 Enable CORS
app.use(express.json());
app.use('/api', reservationRoutes);

module.exports = app;
