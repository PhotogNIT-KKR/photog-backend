const express = require('express');
const router = express.Router();
const Video = require('../models/video');

router.get('/', async (req, res) => {
    let videos = await Video.find({});

    if(videos.length){
        res.status(200).json(videos);
    }
    else{
        res.status(400).json("no videos found");
    }
})

// adding new video

router.post('/admin/addVideo', async (req, res)=>{
    let body = {...req.body};
    await Video.insertMany(body, (err, insertVideo) => {
        if(!err){
            res.status(200).json("Video insert successful");
        }
        else{
            res.status(400).json("insertVideo failed");
        }
    });
});



module.exports = router;