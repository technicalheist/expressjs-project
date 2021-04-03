const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
        post_title : {
            type : String, 
            required:true
        }, 
        post_content : {
            type : String
        },
        user_id : {
            type : mongoose.Schema.Types.ObjectId, 
            ref : 'users'
        },
        category_id : {
            type : mongoose.Schema.Types.ObjectId, 
            ref : 'subcategories'
        },
        created_at: {
            type : Date, 
            default:Date.now()
        }
});
var postModel = mongoose.model('posts', postSchema); 

const categorySchema = mongoose.Schema({
    name : String,
});
var categoryModel = mongoose.model('categories', categorySchema);


const subcategorySchema = mongoose.Schema({
    name : String,
    category_id : {
        type : mongoose.Schema.Types.ObjectId, 
        ref: 'categories'
    }
});

var subCategoryModel = mongoose.model('subcategories', subcategorySchema); 

module.exports = {
    post : postModel, 
    category : categoryModel,
    subcategory : subCategoryModel
}

