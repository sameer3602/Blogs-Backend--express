
const Post = require("../models/postModel");
const Comment =require("../models/commentModel");

exports.createComment=async(req,res)=>{
    try{
        const {post, user, body}=req.body;
        const mycomment=new Comment({
            post,user,body
        });
        
        const savedComment=await mycomment.save();
        
        const updatedPost=await Post.findByIdAndUpdate(post,{$push:{comments: savedComment._id} }, {new:true}).populate("comments").exec();
        res.json({
            message:true,
            post:updatedPost,
        });
    }

    catch(err){
        return res.status(500).json({
            message:false,
            error:err
        })
    }
}
