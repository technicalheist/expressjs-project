var express = require('express');
var app = express();
const UserModel = require('../models/users');

var User = UserModel.userModel; 
var UserMeta = UserModel.userMeta; 

/*
* Get All Data 
*/
app.get('/', (req,res)=>{
    User.find(function(err,data){
        if(err){
            return res.json({
                status:'error', 
                error : err
            }); 
        }

        return res.json({
            status : 'ok', 
            data : data
        }); 
    });
});

/*
* Get Data by Username
*/
app.get('/find/:username', (req,res)=>{
        User.find( {username : req.params.username}, function(err,data){
            if(err){
                return res.json({
                    status:'error', 
                    error : err
                }); 
            }

            return res.json({
                status : 'ok', 
                data : data
            }); 
        });
});

/*
* Add Data on MongoDB
*/
app.post('/create', (req,res)=>{
        User.create({
            username : req.body.username, 
            name :  req.body.name, 
            password : req.body.password
        }, 
        function(err,result){
            if(err){
                res.json({
                    status : false, 
                    message:'DB Insert Failed', 
                    error:err
                });
            }
            //success
            res.json({
                status : false, 
                message:'DB Insert Success', 
                data:result
            });
        });
});

/*
* update data 
*/
app.put('/update', (req,res)=>{
        User.update(
            { username : req.body.username},  //where condition
            { name : req.body.name},  //data to be updated
        function(err,result){
            if(err){
                res.json({
                    status : false, 
                    message:'DB Update Failed', 
                    error:err
                });
            }
            //success
            res.json({
                status : false, 
                message:'DB Update Success', 
                data:result
            });
        });
});


/*
* Delete Data 
*/ 
app.delete('/delete', (req,res)=>{
    User.deleteOne(
        { username : req.body.username},  //where condition
    function(err,result){
        if(err){
            res.json({
                status : false, 
                message:'Delete operation Failed', 
                error:err
            });
        }
        //success
        res.json({
            status : false, 
            message:'Delete Success', 
            data:result
        });
    });
});


/*
* Adding Usermeta
*/ 
app.post('/add-usermeta', (req,res)=>{
    UserMeta.create({
        user_id : req.body.user_id, 
        meta_key :  req.body.meta_key, 
        meta_value : req.body.meta_value
    }, 
    function(err,result){
        if(err){
            res.json({
                status : false, 
                message:'DB Insert Failed', 
                error:err
            });
        }
        //success
        res.json({
            status : false, 
            message:'DB Insert Success', 
            data:result
        });
    });
});

/*
* Get Usermeta 
*/
app.get('/get-usermeta', (req,res)=>{
    UserMeta.find()
    .populate('user_id') //jonining users table
    .exec(function(err,data){
        if(err){
            res.json({
                status : 'error', 
                data : err
            }); 
        }
        //no error 

        res.json({
            status : 'ok', 
            data : data
        });
    });
});


module.exports = {
    app : app
} 
