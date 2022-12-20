const mongoose=require ("mongoose")

const Citiesmodel = mongoose.model("cities",{
    id:{type:Number},
    name:{type:String},
    ctrId:{type:Number}
})
      module.exports=Citiesmodel;