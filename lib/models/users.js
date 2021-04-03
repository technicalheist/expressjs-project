const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    first_name : {
        type:String, 
        required:true
    }, 
    last_name : {
        type:String, 
        required:true
    }, 
    username :{
        type : String, 
        required:true
    }, 
    password:{
        type:String, 
        required:true
    },
    isActive:{
        type :Boolean, 
        default : true
    }, 
    createdAt:{
        type:Date, 
        default : Date.now()
    }
});

//user model 
var userModel = mongoose.model('users', userSchema);


//Usermeta Schema
const userMetaSchema = mongoose.Schema({
    user_id : {
        type : mongoose.Schema.Types.ObjectId, 
        ref : 'users'
    }, 
    meta_key : {
        type : String, 
        required : true
    }, 
    meta_value: {
        type : String, 
        required: true
    }
});

var userMeta = mongoose.model('user_meta', userMetaSchema);

module.exports = {
    userModel : userModel, 
    userMeta : userMeta
}; 

