const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');

// Initialize app
let app = express();

// Set body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Create route
app.get('/', (request, response) => {
	// Send to client
	response.send('Hello world!');
});

// Listen on port 3000
app.listen(3000);
console.log('Server is running at http://localhost:3000');