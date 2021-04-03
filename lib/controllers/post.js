var express = require('express'); 
const { post } = require('../models/posts');
var app = express(); 
var model = require('../models/posts');

var Post = model.post; 
/*
* Adding Category
*/ 
app.post('/add-category', (req,res)=>{
    model.category.create({
        name : req.body.name
    }, 
    function(err,result){
        if(err){
            res.json({
                status : 'error', 
                message:'DB Insert Failed', 
                error:err
            });
        }
        //success
        res.json({
            status : 'ok', 
            message:'DB Insert Success', 
            data:result
        });
    });
});


/*
* Adding SubCategory
*/ 
app.post('/add-subcategory', (req,res)=>{
    model.subcategory.create({
        name : req.body.name, 
        category_id : req.body.category_id
    }, 
    function(err,result){
        if(err){
            res.json({
                status : 'error', 
                message:'DB Insert Failed', 
                error:err
            });
        }
        //success
        res.json({
            status : 'ok', 
            message:'DB Insert Success', 
            data:result
        });
    });
});

/*
* Adding Post
*/ 
app.post('/add-post', (req,res)=>{

    Post.create({
        post_title : req.body.post_title,
        post_content: req.body.post_content, 
        user_id : req.body.user_id, 
        category_id : req.body.category_id
    }, 
    function(err,result){
        if(err){
            res.json({
                status : 'error', 
                message:'DB Insert Failed', 
                error:err
            });
        }
        //success
        res.json({
            status : 'ok', 
            message:'DB Insert Success', 
            data:result
        });
    });
});


/*
* Getting Posts
* Populating First level data from users collections
* Populating First Level data from subcategory collections
* Populating Second level data from category collections which are used in subcategory
*/
app.get('/', (req,res)=>{
    model.post.find()
    .populate('user_id')
    .populate({
        path : 'category_id', 
        populate: {
            path : 'category_id', 
            model : 'categories'
        }
    })
    .exec((err,data)=>{
        if(err)
        {
         res.json({
             status : 'error', 
             data : err
         })
        }

        res.json({
            status : 'ok', 
            data : data 
        });
    });
});

module.exports = {
    app : app
}