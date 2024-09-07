const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Instructor = require('../models/InstructorAuth'); // Adjust the path as needed
const Student = require('../models/StudentAuth'); // Adjust the path as needed
const router = express.Router();
const JWT_SECRET = 'happy'; // Replace with your actual secret key

// Instructor Registration Route
router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).send('Username and password are required');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new Instructor({ username, password: hashedPassword });
        await newUser.save();
        res.status(201).send('Instructor registered');
    } catch (error) {
        console.error('Error registering instructor:', error);
        res.status(500).send('Error registering instructor');
    }
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).send('Username and password are required');
        }

        // Check if the credentials belong to a student
        const student = await Student.findOne({ username });
        if (student) {
            // Compare provided password with stored hashed student password
            const isMatch = await bcrypt.compare(password, student.password);
            if (isMatch) {
                return res.status(400).send('Invalid credentials for instructor login');
            }
        }

        // Proceed with instructor login if not a student
        const instructor = await Instructor.findOne({ username });
        if (!instructor) {
            return res.status(404).send('Instructor not found');
        }

        // Compare provided password with stored hashed instructor password
        const isMatch = await bcrypt.compare(password, instructor.password);
        if (!isMatch) {
            return res.status(400).send('Invalid credentials');
        }

        // Generate JWT token for instructor
        const token = jwt.sign({ userId: instructor._id }, JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        console.error('Error logging in instructor:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
