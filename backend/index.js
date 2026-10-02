
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(['/api/auth', '/auth'], require('./routes/authRoutes'));

app.get(['/', '/api'], (req, res) => {
  res.send('Tech Habba 2.0 API is running...');
});

const PORT = process.env.PORT || 5000;

if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
