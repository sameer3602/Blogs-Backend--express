const express=require("express");
const app= express();

require("dotenv").config();
const PORT=process.env.PORT || 8000;
app.use(express.json());

const blog =require("./routes/Blog")

app.use("/api/v1",blog);
const dbConnect=require("./config/database");
dbConnect();
app.listen(PORT,()=>{
  console.log(`App is Running Fine on Port ${PORT}`)
})
 app.get("/",(req,res)=>{
   res.send("<h1>AAAGYAAAA SWAAD!!!</h1>");
 })