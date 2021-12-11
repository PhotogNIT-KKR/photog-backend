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

module.exports = router;