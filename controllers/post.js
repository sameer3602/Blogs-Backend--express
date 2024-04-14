const Post =require("../models/postModel");

exports.createPost=async(req,res)=>{
    try{
        const {title,body}=req.body;
        const post=new Post({
            title,body,
        })
        const savedPost=await post.save();
        res.status(200).json({
            post:savedPost,
        })
    }
    catch(err){
        res.status(404).json({
            message:false,
            error:err,
        })
    }
}
exports.getAllPosts=async(req,res)=>{
    try{
        const posts= await Post.find().populate("comments").populate("likes").exec();
        res.status(200).json({
            message:true,
            posts,
        })
    }
    catch(err){
        return res.status(500).json({
            error:"ERROR while fetching",
            error:err,
        })
    }
}