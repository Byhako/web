'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Get the directory of the client UI
const clientDir = path.resolve(__dirname,'../client');

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use('/',express.static(clientDir));

const api = require('./api');
app.get('/api/files',api.getFiles);

app.listen(8080,function() {
	console.log("Server running at port 8080");
});
