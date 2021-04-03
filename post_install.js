'use strict'

var gentlyCopy = require('gently-copy')

var filesToCopy = ['lib', '.env', 'app.js', 'config.js', 'database.js'];

// User's local directory
var userPath = process.env.INIT_CWD

// Moving files to user's local directory
gentlyCopy(filesToCopy, userPath)