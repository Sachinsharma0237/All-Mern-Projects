const postModel = require("../model/postModel");

async function createPost(req, res){
    try{
        let postObject = req.body;
        if(req.file){
            let postPicPath = req.file.destination.substring(6) + "/" + req.file.filename;
            postObject.photo = postPicPath;
        } 
        let postCreated = await postModel.create(postObject);
        res.json({
            message:"Successfully created Post",
            postCreated
        })
    }
    catch(error){
        res.json({
            message:"Failed to create post",
            error
        })
    }
}

async function getAllPost(req, res){
    try{
        let allPosts = await postModel.find();
        res.json({
            message:"Successfully Got All Posts",
            allPosts
        })
    }
    catch(error){
        res.json({
            message:"Failed to get All Posts",
            error
        })
    }
}

module.exports.createPost = createPost;
module.exports.getAllPost = getAllPost;