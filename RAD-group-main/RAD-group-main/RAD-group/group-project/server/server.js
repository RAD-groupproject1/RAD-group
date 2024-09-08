const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();

// Configuration
const JWT_SECRET = '2d30400202062b2fc7d07e9242f68407b7e582ba3cf70d6b7c69969514305a21dc977d20fe1cd4e795825c12e9af6a893aa813e0de597fbd5f4b88d05a22a294'; // Replace with your actual JWT secret
const PORT = 5001;
const DB_URL = 'mongodb://localhost:27017/RadProject'; // Update the database name as needed

// Routers
const studentRouter = require('./routes/studentRoutes');
const instructorRouter = require('./routes/instructorRoutes');
const announcementRouter = require("./routes/announcementRoutes");
const paymentRouter = require('./routes/PaymentRoutes');
const courseRouter = require('./routes/CourseRoutes');
const StudentAuthRouter = require('./routes/StudentAuthRoutes');
const InstructorAuthRouter = require('./routes/InstructorAuthRoutes');
const AdminAuthRouter = require('./routes/adminAuthRoutes')

// App middleware
app.use(bodyParser.json());
app.use(express.json()); 
app.use(cors());



// Route middlewares
app.use("/addstudent", studentRouter);
app.use("/addinstructor", instructorRouter);
app.use("/announcement", announcementRouter);
app.use('/payment', paymentRouter);
app.use('/course', courseRouter);
app.use("/stuAuth", StudentAuthRouter);
app.use('/insAuth',InstructorAuthRouter);
app.use('/adminAuth',AdminAuthRouter)

// Connect to MongoDB
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("DB connected");
})
.catch((err) => console.log("DB connection error", err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
