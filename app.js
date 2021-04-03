const express = require('express');
const app = express(); 
const routes = require('./lib/routes/routes');
// var bodyParser = require('body-parser') // for below 4.16 express

require('dotenv').config();
const database = require('./database');

//handlling post request (use bodyParser for below version 4.16, for above use express  )
app.use(express.urlencoded({ extended : true })); 
app.use(express.json());
app.use(express.raw());

//welcome page
app.get('/', (req,res)=>{
    res.json({
       name : 'Welcome to Simple, Express JS Directory Structure'
    });
});

app.use('/api', routes);
app.listen(5000, ()=>console.log('Server Started on 5000'));