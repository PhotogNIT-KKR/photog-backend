const express = require('express');
const router = express.Router();
const Gallery = require('../models/gallery');

router.get('/genre', async (req, res) => {
    let genreNames = await Gallery.find({}).select({'genre': 1});

    if(genreNames.length){
        res.status(200).json(genreNames);
    }
    else{
        res.status(400).json("genreNames not found");
    }
});

router.get('/genrePictures', async (req, res) => {
    let {genreName} = req.query;

    let genrePictures = await Gallery.find({
        genre : genreName
    });

    if(genrePictures.length)
        res.status(200).json(genrePictures);
    else
        res.status(400).json("genrePictures not found");
})

// Image insertion ---- work to be done

router.post('/admin/addPictures', async (req, res)=>{
    let body = {...req.body};
    await Gallery.insertMany(body, (err, insertPicture) => {
        if(!err){
            res.status(200).json("Picture insert successful");
        }
        else{
            res.status(400).json("insertPicture failed");
        }
    });
});

module.exports = router;