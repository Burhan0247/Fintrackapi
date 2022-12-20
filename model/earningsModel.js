const mongoose=require("mongoose")

const earningsModel=mongoose.model("earnings",{
    item:{type:String},
    amt:{type:Number},
    cat:{type:Number},
});
module.exports=earningsModel;