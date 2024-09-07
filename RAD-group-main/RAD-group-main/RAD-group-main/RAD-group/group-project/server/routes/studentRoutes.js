const express = require('express');
const StudentModel = require('../models/Student');
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.json());

// Apply authenticateToken middleware to all routes that need protection
router.post("/",async (req, res) => {
    const stu = new StudentModel({
        name: req.body.name,
        NIC: req.body.NIC,
        address: req.body.address,
        email: req.body.email,
        phone: req.body.phone,
        birthday: req.body.birthday,
    });
    
    try {
        const response = await stu.save();
        res.json(response);
    } catch (err) {
        res.json(err);
    }
});

router.get("/",async (req, res) => {
  try {
      const response = await StudentModel.find({});
      res.json(response);
  } catch (err) {
      res.json(err);
  }
});

router.get('/getStudent/:id',(req, res) => {
    const id = req.params.id;
    StudentModel.findById({_id: id}).then(function(foundDoc) {
        res.send(foundDoc);
    });
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    StudentModel.updateOne(
        {_id: id},
        { name: req.body.name, NIC: req.body.NIC, address: req.body.address, phone: req.body.phone, email: req.body.email, birthday: req.body.birthday },
        { new: true } // Option to return the updated document
    )
    .then(function(updatedArticle) {
        if (updatedArticle) {
            res.send("Successfully updated student");
        } else {
            res.send("Error updating student");
        }
    });
});

router.delete('/:id',  (req, res) => {
    const id = req.params.id;
    StudentModel.deleteOne({_id: id})
    .then(function(deleteArticle) {
        if (deleteArticle) {
            res.send("Successfully deleted student");
        } else {
            res.send("Error deleting student");
        }
    });
});

module.exports = router;
