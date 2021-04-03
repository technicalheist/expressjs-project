const user = require('../controllers/user');
const post = require('../controllers/post');
const express = require('express');
var app = express(); 

app.use('/user', user.app);
app.use('/post', post.app);
module.exports = app; 