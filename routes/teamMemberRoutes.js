const express = require('express');
const router = express.Router();
const TeamMember = require('../models/teamMember');

router.get('/info', async (req, res) => {
    let teamMemberInfo = await TeamMember.find({});

    if(teamMemberInfo.length){
        res.status(200).json(teamMemberInfo);
    }
    else{
        res.status(400).json("No team members yet")
    }
})

router.post('/admin/add', async (req, res) => {
    let body = {...req.body};
    await TeamMember.insertMany(body, (err, addMember) => {
        if(!err){
            res.status(200).json("Member added successfully");
        }
        else{
            res.status(400).json("addMember failed");
        }
    });
})

module.exports = router;