//! 1.DA PROCHITATE OD DOKUMENTACIJA
//? 2.Da istrazite uste nekolku methodi na fs modulot
//? 3.Kako da izbrishite fajl, 
//? 4.Kako da preimenuvate fajl,
//? 5.Kako da kreirate fajl,
//? 6.Kako da procitate fajl

//1 и 2.
//fs.readFile(path[, options], callback): Оваа метода го чита содржината од датотеката на зададената патека. 
// Кога читањето завршува, се повикува проследениот callback со аргументите (err, data), каде err е грешката ако настанала, 
// а data е содржината на датотеката.
// fs.writeFile(file, data[, options], callback): Оваа метода ја запишува дадената содржина во датотека на зададената патека. 
//Кога запишувањето завршува, се повикува проследениот callback со аргументот err ако настанала грешка.
// fs.readdir(path[, options], callback): Оваа метода ги листа содржините на дадениот директориум. 
//Кога листањето завршува, се повикува проследениот callback со аргументите (err, files), каде err е грешката ако настанала, 
// а files е низа со имињата на содржините.
// fs.mkdir(path[, options], callback): Оваа метода креира нов директориум на зададената патека. 
// Кога креирањето завршува, се повикува проследениот callback со аргументот err ако настанала грешка.
// fs.unlink(path, callback): Оваа метода брише дадената датотека на зададената патека. Кога бришењето завршува, 
// се повикува проследениот callback со аргументот err ако настанала грешка.


//3.Kako da izbrishite fajl, 

const fs = require ("fs");

const filePath = ("Pateka do datoteka");

fs.unlink(filePath, (err) => {
    if (err) {
    console.error ("Greshka", err);
    return;
    }
    console.log ("Uspeshno");
});




//4.Kako da preimenuvate fajl

const fs = require ("fs");

const starFajl = ("Stara datoteka");
const novFajl = ("Nova datoteka");

fs.rename (starFajl, novFajl, (err) => {
    if (err) {
        console.error ("Greska pri imenuvanje", err);
        return;    
    }
    console.log ("Uspesno preimenuvanje");
});


//5.Kako da kreirate fajl

const fs = require ("fs");

const fajl1 = ("Star fajl");
const fajl2 = ("Nov fajl");

fs.writeFile (fajl1, fajl2, (err) => {
    if (err) {
        console.error ("Greska pri kreiranje", err);
        return;
    }
    console.log ("Datotekata e uspenso kreirana");
});




//6.Kako da procitate fajl,

const fs = require ("fs");
const fajl = ("Pateka do fajl");

fs.readFile (fajl, "utf-8", (err, data) => {
    if (err) {
        console.error("Greska pri citanje:", err);
        return;
    }
    console.log ("Sodrzina na fajlot:");
    console.log (data);
});


