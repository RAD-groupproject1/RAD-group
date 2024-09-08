const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Instructor = require('../models/InstructorAuth'); // Adjust the path as needed
const Student = require('../models/StudentAuth'); // Adjust the path as needed
const Admin = require('../models/adminAuth'); // Adjust the path as needed
const router = express.Router();
const JWT_SECRET = '2d30400202062b2fc7d07e9242f68407b7e582ba3cf70d6b7c69969514305a21dc977d20fe1cd4e795825c12e9af6a893aa813e0de597fbd5f4b88d05a22a294'; // Replace with your actual secret key

// Admin Registration Route
router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).send('Username and password are required');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new Admin({ username, password: hashedPassword });
        await newUser.save();
        res.status(201).send('Admin registered');
    } catch (error) {
        console.error('Error registering admin:', error);
        res.status(500).send('Error registering admin');
    }
});

// Admin Login Route
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).send('Username and password are required');
        }

        // Check if the user is a student
        const student = await Student.findOne({ username });
        if (student) {
            return res.status(400).send('Invalid credentials for admin login');
        }

        // Check if the user is an instructor
        const instructor = await Instructor.findOne({ username });
        if (instructor) {
            return res.status(400).send('Invalid credentials for admin login');
        }

        // Proceed with admin login
        const admin = await Admin.findOne({ username });
        if (!admin) {
            return res.status(404).send('Admin not found');
        }

        // Compare provided password with stored hashed admin password
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).send('Invalid credentials');
        }

        // Generate JWT token for admin
        const token = jwt.sign({ userId: admin._id }, JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        console.error('Error logging in admin:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
