const express = require("express");
const db = require("../db")
const router = express.Router();


//list all vessels 
router.get('/vessel', async (req, res, next) =>{

    try{
        let results = await db.getVessels();
        console.log("Request to get all vessels successful")
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }

});


//list all vessels with join on countries table

router.get('/vesselfilter', async (req, res, next) =>{

    try{
        let results = await db.getVesselsJoin();
        console.log("Request to get all vessels with join successful")
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }

});

//list all countries  

router.get('/country', async (req, res, next) =>{

    try{
        let results = await db.getCountries();
        console.log("Request to get all countries successful")
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }

});



router.post('/vessel/submit', async (req,res, next) =>{
    let ves = req.body;
    console.log(req.body);

    try{
        let results = await db.addNewVessel(ves.name,ves.img,ves.lng,ves.lat,ves.country);
        console.log(results)
        res.send("New vessel added successfully")
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
 });

 
 router.post('/country/submit', async (req,res, next) =>{
    let coun = req.body;
    console.log(req.body);

    try{
        let results = await db.addNewCountry(coun.name);
        console.log(results)
        res.send("New country added successfully")
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
 });


router.put('/vessel/:id', async (req,res,next) => {
    let ves = req.body; 
    console.log(req.body);

    try{
        let results = await db.updateVessel(req.params.id,ves.name,ves.img,ves.lng,ves.lat,ves.country);
        console.log(results)
        res.send("Vessel updated")
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.delete('/vessel/:id', async (req,res,next) => {
    try{
        let results = await db.deleteVessel(req.params.id);
        console.log(results);
        res.send("Vessel Deleted")
    } catch(e) {
        console.log(e); 
        res.sendStatus(500);
    }
})



module.exports = router;