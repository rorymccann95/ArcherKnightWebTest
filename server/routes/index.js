const express = require("express");
const db = require("../db")
const router = express.Router();


//list all vessels 
router.get('/vessel', async (req, res, next) =>{

    try{
        let results = await db.getVessels();
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }

});


//list all countries  

router.get('/countries', async (req, res, next) =>{

    try{
        let results = await db.getCountries();
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