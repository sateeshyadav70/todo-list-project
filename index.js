import express from 'express';
import path from 'path';
import { MongoClient } from 'mongodb';

const app=express();

const dbname="node-project";
const collectionName="todo-list";
const url="mongodb://localhost:27017";
const client=new MongoClient(url);

const connection = async()=>{
  const connect= await client.connect();
  return await connect.db(dbname)
  
}

const publicPath=path.resolve("public");
app.use(express.static(publicPath))

app.set("view engine","ejs")
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
  res.render("list");
})
app.get("/add",(req,res)=>{
  res.render("add");
})
app.get("/update",(req,res)=>{
  res.render("update");
})
app.post("/add",async (req,res)=>{
  const db= await connection();
  const collection=db.collection(collectionName)
  const result=collection.insertOne(req.body);
  if(result){
     res.redirect("/");
  }else{
    
  res.redirect("/");
  }

})
app.post("/update",(req,res)=>{
  res.redirect("/")
})
app.listen(3300)