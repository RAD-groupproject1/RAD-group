const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Instructor = require('../models/InstructorAuth'); 
const Student = require('../models/StudentAuth'); 
const router = express.Router();
const JWT_SECRET = 'happy'; 

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

        const student = await Student.findOne({ username });
        if (student) {
            const isMatch = await bcrypt.compare(password, student.password);
            if (isMatch) {
                return res.status(400).send('Invalid credentials for instructor login');
            }
        }

        const instructor = await Instructor.findOne({ username });
        if (!instructor) {
            return res.status(404).send('Instructor not found');
        }

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
