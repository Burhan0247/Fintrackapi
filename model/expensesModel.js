const mongoose=require("mongoose")

const expensesModel=mongoose.model("expenses",{
    item:{type:String},
    cat:{type:Number},
    amt:{type:Number}
})
module.exports = expensesModel;