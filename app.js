const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');

// Initialize app
let app = express();

// Configure Jade
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Set body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// Create route
app.get('/', (request, response) => {
	response.render('index');
});

// Listen on port 3000
app.listen(3000);
console.log('Server is running at http://localhost:3000');