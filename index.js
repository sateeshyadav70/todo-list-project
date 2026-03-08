import express from 'express';

const app=express();

app.get("/",(req,res)=>{
  res.send("to do list app");
})
app.get("/add",(req,res)=>{
  res.send("add to do list");
})
app.get("/update",(req,res)=>{
  res.send("update to do list");
})
app.listen(3000)