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

archerknightdb.all = () => {

    return new Promise((resolve, reject) => {

        pool.query('SELECT * FROM vessels', (err, results) => {
            if (err) {
                return reject(err);
            }

            return resolve(results);
        });

    });

};

module.exports = archerknightdb;