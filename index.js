const express = require('express');
const bodyParser = require('body-parser');


const avisroute = require('./routes/avisroute');
const videoroute = require('./routes/videoroute');
const http=require('http');
const port = process.env.PORT || 3000;
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use('/',avisroute);
app.use('/',videoroute);
app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin:*');
  res.header('Access-Control-Allow-Methods:GET,POST,PUT,DELETE');
  res.header('Access-Control-Allow-Headers:Content-Type,X-Auth-Token, Origin, Authorization');
  next();
  });
  const server = http.createServer(app).listen(port);
  console.log('Bienvenue , tu est connecté sur le port'+" "+port);



