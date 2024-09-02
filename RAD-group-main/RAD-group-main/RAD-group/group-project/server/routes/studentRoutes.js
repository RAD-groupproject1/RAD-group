
const express = require("express");
const StudentModel = require("../models/Student");
const bodyParser = require("body-parser");
const router = express.Router();

router.use(bodyParser.json());
router.post("/", async(req,res) => {

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

router.get("/", async(req,res) => {
  try {
      const response = await StudentModel.find({});
      res.json(response);
      //console.log(response.data);
  } catch (err) {
      res.json(err);
  }
});

router.get('/getStudent/:id',function(req,res){
    const id = req.params.id;
    StudentModel.findById({_id:id}).then(function(foundDoc){
        res.send(foundDoc);
    })
})

router.put('/:id', function(req,res){
  const id = req.params.id; 
  StudentModel.updateOne(
      {_id:id},
      { name: req.body.name,NIC:req.body.NIC, address: req.body.address, phone: req.body.phone,  email: req.body.email,birthday: req.body.birthday},
      {new: true} // Option to return the updated document
  )
  .then(function(updatedArticle){
      if (updatedArticle) {
          res.send("Sussessfully update articles")
      } 
      else {
          res.send("Sussessfully update articles")        }
  });
});

router.delete('/:id',function(req,res){
  const id = req.params.id;
  StudentModel.deleteOne(
      {_id:id}
  )
  .then(function(deleteArticle){
      if (deleteArticle) {
          res.send("Sussessfully delete articles")
      } 
      else {
          res.send("Sussessfully delete articles")        }
  });
});

module.exports = router;
