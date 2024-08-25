'use strict';

const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());

// Imports the route here
const apiRoutes = require('./src/routes/index');
app.use('/api', apiRoutes);

// Testing API
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Database Import and Sync
const db = require('./src/database/models/index');

// Sync database and start server
db.sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
