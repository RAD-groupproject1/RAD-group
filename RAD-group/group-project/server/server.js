const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();


//Routers
const studentRouter=require('./routes/studentRoutes')
const instructorRouter=require('./routes/instructorRoutes')
const announcementRouter = require("./routes/announcementRoutes");

// app middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

//route middlewares
app.use("/addstudent" ,studentRouter)
app.use("/addinstructor",instructorRouter)
app.use("/announcement",announcementRouter);



const PORT = 5000;

//Connect to MongoDB
const DB_URL =`mongodb://localhost:27017`;


mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => console.log("DB error", err));

app.listen(PORT, () => {
  console.log(`port is running on ${PORT}`);
});


