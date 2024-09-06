const express = require('express');
const StudentModel = require('../models/Student');
const router = express.Router();

router.use(bodyParser.json());

router.post("/", async(req, res) => {
    // Only logged-in users can add students
    const stu = new StudentModel({
        name:req.body.name,
        NIC: req.body.NIC,
        address:req.body.address,
        email:req.body.email,
        phone:req.body.phone,
        birthday:req.body.birthday,
    });
    
    try {
        const response = await stu.save();
        res.json(response);
    } catch (err) {
        res.json(err);
    }
});

// Apply authenticateToken middleware to all routes if needed
router.get("/", async(req, res) => {
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

router.put('/:id',  (req, res) => {
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

router.delete('/:id', (req, res) => {
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
