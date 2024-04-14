const mongoose=require("mongoose");

const Postschema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    likes:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"LIKE",
    },
    comments:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment",
    }

});
module.exports=mongoose.model("Post",Postschema);