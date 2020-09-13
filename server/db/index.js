const mysql = require("mysql");

const pool = mysql.createPool({
    connectionLimit: 10,
    password: "whydoesntthislibarysupportsql8",
    user: "testusertwo",
    database: "archer_knight",
    host: 'localhost',
    port: "3306"
});

let archerknightdb = {};



//get vessels 
archerknightdb.getVessels = () => {

    var sql = 'SELECT * FROM vessels';

    return new Promise((resolve, reject) => {

        pool.query(sql, (err, results) => {
            if (err) {
                return reject(err);
            }

            return resolve(results);
        });

    });

};

//get vessels with country join 

archerknightdb.getVesselsJoin = () => {

    var sql = 'SELECT IMO, vessels.Name, Image, Longitude, Latitude, (countries.Name) as CountryName FROM vessels Inner Join countries On vessels.CountryID=countries.CountryID ORDER BY IMO' ;

    return new Promise((resolve, reject) => {

        pool.query(sql, (err, results) => {
            if (err) {
                return reject(err);
            }

            return resolve(results);
        });

    });

};

//get countries 

archerknightdb.getCountries = () => {

    var sql = 'SELECT * FROM countries';

    return new Promise((resolve, reject) => {

        pool.query(sql, (err, results) => {
            if (err) {
                return reject(err);
            }

            return resolve(results);
        });

    });

};

//add new vessel to db

archerknightdb.addNewVessel = (vesselName,imgString,lng,lat,countryID) => {

    var sql = 'INSERT INTO vessels(`Name`, `Image`, `Longitude`, `Latitude`, `CountryID`) VALUES (?,?,?,?,?)' ;

    return new Promise((resolve,reject) =>{
        pool.query(sql,[vesselName,imgString,lng,lat,countryID], (err, results) => {
            if(err) {
                return reject(err);
            }

            return resolve(results);
        });
    })
}

archerknightdb.addNewCountry = (countryName) => {
    var sql = 'INSERT INTO countries(`Name`) VALUES (?)'; 

    return new Promise((resolve, reject) =>{
        pool.query(sql,[countryName], (err, results) => {
            if(err) {
                return reject(err);
            }

            return resolve(results); 
        })
    })
}

//update existing vessel 
archerknightdb.updateVessel = (vesselID, vesselName, imgString, lng, lat, countryID) => {
    var sql = 'UPDATE vessels SET `Name` = ?, `Image` = ?, `Longitude` = ?, `Latitude` = ?, `CountryID` = ? WHERE (`IMO` = ?)';

    return new Promise((resolve, reject)=> {
        pool.query(sql,[vesselName,imgString,lng,lat,countryID,vesselID], (err,results) => {
            if(err) {
                return reject(err);
            }

            return resolve(results);
        })
    })
}

archerknightdb.deleteVessel = (vesselID) => {
    var sql = 'DELETE FROM vessels WHERE (`IMO` = ?)';

    return new Promise((resolve, reject)=> {
        pool.query(sql,[vesselID], (err,results) => {
            if(err) {
                return reject(err); 
            }

            return resolve(results);
        })
    })
}

module.exports = archerknightdb;