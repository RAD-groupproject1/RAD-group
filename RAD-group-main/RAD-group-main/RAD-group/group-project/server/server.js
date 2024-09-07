const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();

// Configuration
const JWT_SECRET = 'happy'; // Replace with your actual JWT secret
const PORT = 5001;
const DB_URL = 'mongodb://localhost:27017/RAD'; // Update the database name as needed

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
