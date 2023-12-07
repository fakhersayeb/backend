var express = require("express");
var router = express.Router();
const Avis = require('../models/avis');
const joi = require('@hapi/joi');
const schema =joi.object({
Nom: joi.string().min(4).max(25).required(),
Email: joi.string().min(15).max(35).required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
Avis: joi.string().min(20).max(100).required(),
});

router.post('/create',async (req, res, next)=>{
let body=req.body;
const result = await schema.validateAsync(body);
res.json({result});
Avis.create(body)
.then(resu=>{
    res.json({message:"done",added:resu})
})
.catch(err=>{
    console.log(err)
})


});
router.get('/read',(req, res, next)=>{
    Avis.find({})
    .then(avis => {
  
      res.status(200).json({msg: avis});
    })
    .catch(err => {
      res.status(500).json({errmsg: err});
    });
    });
    

            module.exports= router;