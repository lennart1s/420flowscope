require('dotenv').config({ path: '../.env.local' });

const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/auth', require('./auth'));

const port = process.env.API_PORT || 7071;
console.log('Listening on port', port);
app.listen(port);