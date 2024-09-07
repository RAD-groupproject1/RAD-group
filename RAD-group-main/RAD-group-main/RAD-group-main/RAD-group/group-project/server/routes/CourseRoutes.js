
const express = require("express");
const CourseModel = require ('../models/Course')
const bodyParser = require("body-parser");
const router = express.Router();

router.use(bodyParser.json());
router.post("/", async(req,res) => {

    const course = new CourseModel({
        courseId:req.body.courseId,
        course: req.body.course,
        day:req.body.day,
        duration:req.body.duration,
        fee:req.body.fee,
        
    });
    
    try {
        const response = await course.save();
        res.json(response);
    } catch (err) {
        res.json(err);
    }
  
  });

router.get("/", async(req,res) => {
  try {
      const response = await CourseModel.find({});
      res.json(response);
      //console.log(response.data);
  } catch (err) {
      res.json(err);
  }
});

router.get('/getCourse/:id',function(req,res){
    const id = req.params.id;
    CourseModel.findById({_id:id}).then(function(foundDoc){
        res.send(foundDoc);
    })
})

router.put('/:id', function(req,res){
  const id = req.params.id; 
  CourseModel.updateOne(
      {_id:id},
      { courseId: req.body.courseId,course:req.body.course, day: req.body.day, duration: req.body.duration, fee: req.body.fee},
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
  CourseModel.deleteOne(
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
