//DOMASNA
//? Student ime prezime prosek grad
//? Dodavanja student vo fajlot
//? Brishenje na student od fajlot
//? Menuvanje na podatoci na student od fajlot
//? Chitanje na site studenti od fajlot

//? - Treba da dodademe student vo fajlot
//? 1. Da ja vcitate celata sodrzina of gajlot | fs.readFile
//? 2. Da ja konvertirate sodrzinata od obichen tekst vo js niza/ JSON.parse
//? 3. Treba da gi dodadete podatocite na studentot vo nizata | Array.push
//? 4. Nizata od js niza / objekt treba da e konvertirana vo tekst | JSTON.stringify
//? 5. Tekstot treba da bide zacuvan vo fajlot | fs.writeFile

//? - Imeto na studentot treba da bide smeneto od AAA vo AAB
//? 1. Da ja vchitate celata sodrzina od fajlot | fs.readFile
//? 2. Da ja konvertira sodrzinata od obichniot tekst vo js niza ili objekt | JSON.parse
//? 3. Da gi izminite site elementi vo nizata i da napravite promena samo na soodvetniot clen | Array.map
//? 4. Nizata od js niza/objekt treba da bide konvertirana vo tekst | JSON.stringify
//? 5. tekstot treba da bide zachuvan vo fajlot | fs.writeFile

//? - Treba da she izbrtishe studen od fajlot
//? 1. Da ja vchitate celata sodrzina od fajlot
//? 2. Da ja konvertirate sodrzinata od obicen tekst vo js niza
//? 3. Da gi izminite site elementi vo nizata i da go izbrishite soodvetniot clen | Array,filter
//? 4. Nizata od js treba da bidde konvertirana vo tekst
//? 5. Tekstot treba da bide zachuvan vo fajlot




//DOMASNA4:

//1 DODAVANJE STUDENT VO FAJLOT

const fs = require("fs");

const dodadiStudent = async () => {
    try{
        const dataString = fs.readFileSync("studenti.json", "utf8");
        let studentsData = JSON.parse(dataString);

        const novStudent = {ime: "Mirko", grad: "Skopje", prosek: 7.8};
        studentsData.push (novStudent);

        fs.writeFileSync("studenti.json", JSON.stringify(studentsData));

        console.log ("Uspesno dodadovte nov student");
    }
    catch(err) {
        
        console.log("Neuspesno dodavanje na nov student:", err);
    };
};
    dodadiStudent();




///2.IMETO NA STUDENTOT TREBA DA BIDE SMENETO OD AAA vo AAB

    const fs = require("fs");

fs.readFile("studenti.json", "utf8", (err, data) => {
  if (err) {
    console.log("Greska pri vcituvanje na falot:", err);
    return;
  }

  const studentsData = JSON.parse(data);

  const updatedStudentsData = studentsData.map((student) => {
    if (student.ime === "AAA") {
      return { ...student, ime: "AAB" };
    }
    return student;
  });

  const updatedDataString = JSON.stringify(updatedStudentsData);

  fs.writeFile("studenti.json", updatedDataString, "utf8", (err) => {
    if (err) {
      console.log("Greska pri zacuvuvanje na fajlot:", err);
      return;
    }
    console.log("Uspesno smeneto ime na studentot.");
  });
});




//3. TREBA DA SE IZBRISHE STUDENT OD FALJOT

const fs = require("fs");

fs.readFile("studenti.json", "utf8", (err, data) => {
  if (err) {
    console.log("Грешка при вчитување на фајлот:", err);
    return;
  }
  const studentsData = JSON.parse(data);

  const updatedStudentsData = studentsData.filter((student) => {
    return student.ime !== "Mirko";
  });

  const updatedDataString = JSON.stringify(updatedStudentsData);

  fs.writeFile("studenti.json", updatedDataString, "utf8", (err) => {
    if (err) {
      console.log("Greska pri zacuvuvanje na fajlot:", err);
      return;
    }
    console.log("Uspesno go izbrisavte studentot.");
  });
});




//BONUS:

// CITANJE NA SITE STUDENTI OD FAJLOT:

const fs = require("fs");

fs.readFile("studenti.json", "utf8", (err, data) => {
  if (err) {
    console.log("Greska pri vcituvanje na fajlot", err);
    return;
  }
  
  const studentsData = JSON.parse(data);

  console.log("Site studenti:");
  console.log(studentsData);
});





//MENUVANJE NA PODATOCI NA STUDENT OD FAJLOT

const fs = require("fs");

fs.readFile("studenti.json", "utf8", (err, data) => {
  if (err) {
    console.log("Greska pri vcituvanje na fajlot:", err);
    return;
  }
});

const studentsData = JSON.parse(data);


const student = studentsData.find((s) => s.ime == "Mirko");
if (student) {
  student.ime = "Gjoko";
}

const updatedDataString = JSON.stringify(studentsData);

fs.writeFile("studenti.json", updatedDataString, "utf8", (err) => {
    if (err) {
      console.log("Greska pri zacuvuvanje na fajlot:", err);
      return;
    }
    console.log("Uspesno izmeneti podatoci na fajlot.");
  });
  







