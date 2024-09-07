const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseId:{
        type: String,
        required: true,
    },
    course:{
        type: String,
        required: true,
    },
    day:{
        type: String,
        required: true,
    },
    duration:{
        type: String,
        required: true,
    },
    fee:{
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("course", courseSchema);