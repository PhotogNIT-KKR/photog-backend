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

module.exports = router;