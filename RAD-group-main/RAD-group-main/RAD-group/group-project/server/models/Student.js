
const mongoose=require ('mongoose');

const studentSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true
    },

    NIC:{
        type:String,
        unique: true,
        required:true
    },

    address:{
       type:String,
       required:true,
    },

    email:{
        type:String,
        required:true
    },

    phone:{
        type: String,
        required:true
    },

    birthday:{
        type: String,
        required:true
    }
});

module.exports=mongoose.model("Student",studentSchema);