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

module.exports = router;