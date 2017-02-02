'use strict'

const path = require('path');
const express = require('express');
const routes = require('./routes');
const app = express();

app.use('/', routes, express.static(path.join(__dirname, 'views'), {
	index: 'html/index.html'
}));

module.exports = exports = app;
