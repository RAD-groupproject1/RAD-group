
const express = require("express");
const PaymentModel=require('../models/Payment')
const bodyParser = require("body-parser");
const router = express.Router();

router.use(bodyParser.json());
router.post("/", async(req,res) => {

    const pay = new PaymentModel({
        name:req.body.name,
        NIC: req.body.NIC,
        index:req.body.index,
        status:req.body.status,
       
        
    });
    
    try {
        const response = await pay.save();
        res.json(response);
    } catch (err) {
        res.json(err);
    }
  
  });

router.get("/", async(req,res) => {
  try {
      const response = await PaymentModel.find({});
      res.json(response);
      //console.log(response.data);
  } catch (err) {
      res.json(err);
  }
});

router.get('/getPayment/:id',function(req,res){
    const id = req.params.id;
    PaymentModel.findById({_id:id}).then(function(foundDoc){
        res.send(foundDoc);
    })
})

router.put('/:id', function(req,res){
  const id = req.params.id; 
  PaymentModel.updateOne(
      {_id:id},
      { name: req.body.name,NIC:req.body.NIC, index: req.body.index, status: req.body.status},
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
  PaymentModel.deleteOne(
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
