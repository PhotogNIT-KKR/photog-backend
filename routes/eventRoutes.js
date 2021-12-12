const express = require('express');
const router = express.Router();
const Events = require('../models/events');

router.get('/', async (req, res)=>{
    const eventNames = await Events.find({}).select({ "name": 1});
    res.status(200).json(eventNames)
})

router.get('/description', async (req, res)=>{
    let {eventName} = req.query;
    const eventDescription = await Events.find({
        name: eventName
    })

    if(eventDescription)
        res.status(200).json(eventDescription);
    else
    res.status(400).json("eventDescription not found");
})

// take event data from form and create new document

router.post('/admin/create', async (req, res)=>{
    let body = {...req.body};
    await Events.insertMany(body, (err, insertEvent)=>{
        if(!err){
            res.status(200).json("Event insert successful");
        }
        else{
            res.status(400).json("insertEvent failed");
        }
    });
});

module.exports = router;