const express=require('express');
const app=express();
const MongoClient=require('mongodb').MongoClient;
const cors=require('cors');

const url='mongodb://localhost:27017';
const dbName='mern';
let db

MongoClient.connect(url,(err,client)=>{
    console.log("Connected successfully to server");
    db=client.db(dbName);
    //client.close();
})

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}))

app.use(cors());

app.get('/',function(req,res){
    res.send('Hello world');
})

app.post('/login',async function(req,res){

    if(req.body.individual)
    await db.collection('individual').find({
        email:req.body.email,
        password:req.body.password
    })
    .toArray((err,data)=>{
        //console.log(data.length)
        if(data.length===0)
            res.status(400).json("Invalid login credentials");
        else    
            res.status(200).json("Individual Login Success");
    })
    
    else
    await db.collection('organisation').find({
        email:req.body.email,
        password:req.body.password
    })
    .toArray((err,data)=>{
        //console.log(data.length)
        if(data.length===0)
            res.status(400).json("Invalid login credentials");
        else    
            res.status(200).json("Organisation Login Success");
    })

})

app.post('/signup',async function(req,res){
    console.log(req.body);
    let collection_name=req.body.individual?'individual':'organisation'    
    await db.collection(collection_name).insertOne({
        email:req.body.email,
        password:req.body.password
    })
    .then(data=>{
        console.log('insert successful');
    })
    .catch(err=>{
        console.log(err);
    })
    res.json('received signup details');
})

app.listen(8000,()=>{
    console.log('Server at 8000');
})