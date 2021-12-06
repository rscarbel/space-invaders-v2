const express = require('express');
require('dotenv').config();
const app = express();
const expressSession = require('express-session');

const SECRET_KEY = process.env.SECRET_KEY

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

