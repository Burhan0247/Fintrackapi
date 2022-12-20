const mongoose=require("mongoose")

const Countriesmodel=mongoose.model("countries",{
    id:{type:Number},
    name:{type:String}
})

module.exports=Countriesmodel;