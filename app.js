const {json} =require("express")
const express = require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const Countriesmodel=require("./model/Countriesmodel");
const Citiesmodel=require("./model/Citiesmodel");
const categoriesModel=require("./model/categoriesModel")
const earningsModel=require("./model/earningsModel")
const expensesModel=require("./model/expensesModel")

const app=express();
app.use(json());
app.use(cors());

mongoose
 .connect("mongodb://127.0.0.1:27017/findb")
 .then(()=>console.log("Data base is Connected!"))
 .catch((err)=>console.log(err))


app.get("/",(req,res)=>{
    res.json("Welcome to Financial Tracking app for your Business")
})
app.get("/categories",async(req,res)=>{
    const result=await categoriesModel.find({});
    res.json(result);
});

app.get("/catdd",async(req,res)=>{
    const result =await categoriesModel.find({});
    const newData= result.map((item)=>(
        {
            value:item.id,
            label:item.name
        }
    ))
    res.json(newData);

})


app.post("/addearning",(req,res)=>{
    const payload=req.body;
    const newEarning= new earningsModel(payload);
    newEarning.save();
    res.send("Successfully added the earning");
});

app.get("/earnings",async (req,res)=>{
    const result=await earningsModel.find({});
    res.json(result);
});
app.get("/expenses",async(req,res)=>{
    const result=await expensesModel.find({});
    res.json(result);
})
app.post("/deletearning",(req,res)=>{
    const payload={_id: req.body._id}
    earningsModel.findOneAndDelete(payload,(err,docs)=>{
     if (err) {res.json(err);
     } else {
         res.json(docs)
     }}  
        
    );
})

app.post("/addexpenses",(req,res)=>{
    try{
    const payload=req.body;
    const newExpenses=new expensesModel(payload);
    newExpenses.save();
    res.send("Successfully added the earning")
    }catch(err) {
        res.send(err)

    }
})



app.get("/countries",async(req,res)=>{
    const result =await Countriesmodel.find({})
    res.json({result});

})

app.get("/cities",async(req,res)=>{
    const result=await Citiesmodel.find({})
    res.json({result});
})


app.post("/citiesbyfilt",async(req,res)=>{
    const result=await Citiesmodel.find(req.body);
    res.json({result});
})





app.listen(3030,(req,res)=>{
    console.log("service/server is running at PORT-3030")

})