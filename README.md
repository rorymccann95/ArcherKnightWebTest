# ArcherKnightWebTest
 Technical Test 

How to Setup:

    1)After cloning/downloading the repository ensure you have the following installed:

        1) Node.js v12.18.1

        2) MySQL 8.0 (with workbench)


    2)Site Setup:

        Using command prompt go change directory into ArcherKnightWebTest

        Run the command npm i

        Once this command has completed installing all the required dependencies change directory to ArcherKnightWebTest\client

        run npm i again in this folder. 

        All components to run the website should now be installed


    3)Database Setup: 

        In MYSQL workbench run the following queries: 

        1) CREATE DATABASE `archer_knight` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

        2) CREATE TABLE `countries` (
        `CountryID` int NOT NULL AUTO_INCREMENT,
        `Name` varchar(45) NOT NULL,
        PRIMARY KEY (`CountryID`)
        ) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

        3) INSERT INTO `archer_knight`.`countries` (`CountryID`, `Name`) VALUES ('1', 'United Kingdom');
        INSERT INTO `archer_knight`.`countries` (`Name`) VALUES ('France');
        INSERT INTO `archer_knight`.`countries` (`Name`) VALUES ('Italy');
        INSERT INTO `archer_knight`.`countries` (`Name`) VALUES ('Germany');
        INSERT INTO `archer_knight`.`countries` (`Name`) VALUES ('Australia');
        INSERT INTO `archer_knight`.`countries` (`Name`) VALUES ('South Africa');

        4) CREATE TABLE `vessels` (
        `IMO` int NOT NULL AUTO_INCREMENT,
        `Name` varchar(45) NOT NULL,
        `Image` varchar(45) DEFAULT NULL,
        `Longitude` int NOT NULL,
        `Latitude` int NOT NULL,
        `CountryID` int DEFAULT NULL,
        PRIMARY KEY (`IMO`),
        KEY `CountryID_idx` (`CountryID`),
        CONSTRAINT `fk_CustomerID` FOREIGN KEY (`CountryID`) REFERENCES `countries` (`CountryID`) ON DELETE RESTRICT ON UPDATE CASCADE
        ) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

        5) INSERT INTO `archer_knight`.`vessels` (`IMO`, `Name`, `Image`, `Longitude`, `Latitude`, `CountryID`) VALUES ('1', 'Borealis', 'borealis.png', '1', '2', '1');
        INSERT INTO `archer_knight`.`vessels` (`Name`, `Image`, `Longitude`, `Latitude`, `CountryID`) VALUES ('Scotia', 'scotia.png', '2', '5', '2');
        INSERT INTO `archer_knight`.`vessels` (`Name`, `Image`, `Longitude`, `Latitude`, `CountryID`) VALUES ('Boaty McBoatFace', 'boatymcboatface.png', '46', '52', '3');
        INSERT INTO `archer_knight`.`vessels` (`Name`, `Image`, `Longitude`, `Latitude`, `CountryID`) VALUES ('Alba', 'alba.png', '80', '106', '4');
        INSERT INTO `archer_knight`.`vessels` (`Name`, `Image`, `Longitude`, `Latitude`, `CountryID`) VALUES ('Clupia', 'clupia.png', '522', '800', '5');
        INSERT INTO `archer_knight`.`vessels` (`Name`, `Image`, `Longitude`, `Latitude`, `CountryID`) VALUES ('Steel Seal', 'steelseal.png', '781', '1872', '6');




    4)Connect Database to Server: 

        in the ArcherKnightWebTest folder go into the server/db/index.js (line 3 - 10)

        edit the pool constants properties so it can connect to your database

        Make sure the user you have setup uses my_sql_native_password and not caching_sha2_password or the application won't work see: https://stackoverflow.com/questions/50373427/node-js-cant-authenticate-to-mysql-8-0



    5)Finally to run the application:

        In command prompt navigate to ArcherKnightWebTest and run the following command:
            npm run dev


Technology Choices: 

    Database:
    For the database I went with MySQL as it is the same database used within ArcherKnight. It made sense to use this as I already have some familiarity with MySQL.

    Server: 
    For the server I'm using express, this is a requirement on the technical test document. 

    Frontend:
    For the frontend I'm using react, as it is a requirement on the technical test document. 
    Along with the Material UI framework for the form components in the application. 
    I choose Material UI as it is used within the Flowline product. So I figured acquiring some knowledge of the framework would be beneficial


How I found The Test:

    I found this test quite challenging particularly with the frontend. I've never used React, Material UI or Express before. I've also never built a full stack app from scratch. 

    I feel like I've done quite well with the Database and Server parts of the test.

    I'm not as happy with the frontend, I believe I could have made a better looking frontend if I had more time and experience with React and Material UI. 

    If I were to be given task again I would firstly take a course in react to fully understand how to structure the folders, allow components to share data, figure out single page navigation. I would also look into more learning materials for Material-UI to learn some typical design patterns potentially download a template first as a basis to work off of.   


Things to Improve: 

    On the edit form once a vessel has been selected auto-populate the remaining fields. 
    I think you do this with the state object however I couldn't work this out within the given time frame. 

    Dynamically refresh the Vessel and Country list components after an api call occurs. As above couldn't work this out within the given time frame. 

    Acquire a better understanding of Material UI to utilize custom themes instead of using the default theme. 

    In the Vessel Filter I'd like to remove the case sensitivity of the filter. I attempted this previously but then if someone searched for France with a capital F it wouldn't work

    

    




