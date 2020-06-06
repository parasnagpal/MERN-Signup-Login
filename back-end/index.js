const express=require('express');
const app=express();
const MongoClient=require('mongodb').MongoClient;
const cors=require('cors');

const url='mongodb://localhost:27017';
const dbName='mern';

MongoClient.connect(url,(err,client)=>{
    console.log("Connected successfully to server");
    const db=client.db(dbName);
    client.close();
})

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}))

app.use(cors());

app.get('/',function(req,res){
    res.send('Hello world');
})

app.post('/login',function(req,res){
    console.log(req.body);
    res.json('received login details');
})

app.post('/signup',function(req,res){
    console.log(req.body);
    res.json('received signup details');
})

app.listen(8000,()=>{
    console.log('Server at 8000');
})