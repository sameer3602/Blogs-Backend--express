const LIKE=require("../models/likeModel");
const Post=require("../models/postModel");

exports.likePost= async(req,res)=>{
    try{
        const {post,user}=req.body;
        const newlike=new LIKE({
            post,user,
        });
        const savedLike=await newlike.save();
        const updatedPost=await Post.findByIdAndUpdate(post, {$push :{likes:savedLike._id}},{new:true}).populate("likes").exec();
        res.status(200).json({
            post,updatedPost
        })
    }
    catch(err){
        return res.status(500).json({
            message:false,
            error:err,
        })
    }
}
exports.unlikePost=async(req,res)=>{
    try{
        const {post,like}=req.body;
        const deletedlike= await LIKE.findOneAndDelete({post:post,_id:like});
        const updatedPost=await Post.findByIdAndUpdate(post,{$pull:{likes:deletedlike._id}},{new:true}).populate("likes").exec();
        res.status(200).json({
            post:updatedPost,
        })
    }
    catch(err){
        return res.status(500).json({
            message:false,
            error:err,
        })
    }
}