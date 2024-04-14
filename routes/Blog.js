const express=require("express");
const router=express.Router();

const {likePost,unlikePost}=require("../controllers/Like");
const {createComment}=require("../controllers/Comment");
const {createPost,getAllPosts}=require("../controllers/Post");


router.post("/comment/create",createComment);
router.post("/post/create",createPost);
router.get("/Allposts",getAllPosts);
router.post("/like",likePost);
router.post("/unlike",unlikePost);
module.exports=router;