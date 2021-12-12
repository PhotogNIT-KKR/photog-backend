const express = require('express');
const router = express.Router();
const Designs = require('../models/graphicDesign');

router.get('/', async (req, res)=>{
    let  designs = await Designs.find({});
    if(designs.length>0){
        res.status(200).json(designs);
    }
    else{
        res.status(400).json("no design found");
    }
})


// Image insertion ---- work to be done

router.post('/admin/addDesigns', async (req, res)=>{
    let body = {...req.body};
    await Designs.insertMany(body, (err, insertDesign) => {
        if(!err){
            res.status(200).json("Design insertion successful");
        }
        else{
            res.status(400).json("insertDesign failed");
        }
    });
});

module.exports = router;