const express = require("express");
const db = require("../db")
const router = express.Router();

router.get('/vessel', async (req, res, next) =>{

    try{
        let results = await db.getVessels();
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }

})

router.post('/vessel/submit', async (req,res, next) =>{
    let ves = await req.body;
    console.log(req.body)
    try{
        let results = await db.addNewVessel(ves.name,ves.img,ves.lng,ves.lat,ves.country);
        res.json(results)
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

module.exports = router;