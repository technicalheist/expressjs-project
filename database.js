const mongoose = require('mongoose');
const assert = require('assert');

const db_url = process.env.DB_URL; 

mongoose.connect(db_url, {
    useNewUrlParser : true, 
    useUnifiedTopology : true, 
    useCreateIndex : true
}, 
function(err,link){
    //check for error
    assert.strictEqual(err,null, 'DB Connect Failed');

    //success
    console.log('Connected to MongoDB'); 
    //console.log(link);
});