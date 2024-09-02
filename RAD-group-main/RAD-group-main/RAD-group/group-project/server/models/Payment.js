const mongoose=require ('mongoose');

const paymentSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true
    },

    NIC:{
        type:String,
        required:true
    },

    index:{
        type:String,
        required:true
    },

    status:{
        type: String,
        required:true
    }
});

module.exports=mongoose.model("Payment",paymentSchema);