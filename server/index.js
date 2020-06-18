const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const cors = require('cors');

var countries = require('./countries.json');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(pino);

// middleware
app.use(cors());
app.post('/submit', (req, res) => {
  var formContact = req.body;
  let response={status:'400'};
  if(formContact.lastName!=null && formContact.firstName!=null && formContact.country!=null && formContact.email!=null){
	  res.setHeader('Content-Type', 'application/json');
	  response.status='200';
	  response.message='ok';
	  return res.json(response);
  }
	response.status='400';
	response.message="All the required fields weren't filled";
	return res.json(response);
 
});
app.get('/countries/', (req, res) => {
	console.log('dans le server');
  let response={};
  
  res.setHeader('Content-Type', 'application/json');
 
  response.countries=countries;
  console.log(response);
  return res.json(response);
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);