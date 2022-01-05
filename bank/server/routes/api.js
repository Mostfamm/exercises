const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Transactions  = require("../../model/transactions")

router.get('/transactions', function (req, res) {
    Transactions.find({}, function (err, result) {
      res.send(result)
    })
  })
  router.post('/transactions', function (req, res) {
    const transaction = req.body
    const tran = new Transactions({amount:transaction.amount,vendor:transaction.vendor,category:transaction.category})
    tran.save()
    res.send(tran)
    
  })
  router.delete('/transactions', function (req, res) {
    Transactions.findOneAndRemove({_id: req.body._id}, req.body, function(err,data)
    {
        if(!err){
            console.log("Deleted");
        }
    });
    res.send();
    
  })

  module.exports = router;