//Zadaca 1
//Site studenti od Skopje chie ime zavrshuva na a i imaat prosek nad 7, podredeni po ime(rastecki)

const studenti = [
  { ime: "Bojan", prosek: 7.2, grad: "Skopje" },
  { ime: "Pero", prosek: 8.3, grad: "Bitola" },
  { ime: "Janko", prosek: 6.9, grad: "Kumanovo" },
  { ime: "Vesna", prosek: 9.1, grad: "Prilep" },
  { ime: "Elena", prosek: 9.9, grad: "Tetovo" },
  { ime: "Vancho", prosek: 8.8, grad: "Kratovo" },
  { ime: "Ivana", prosek: 6.3, grad: "Kumanovo" },
  { ime: "Simona", prosek: 7, grad: "Ohrid" },
  { ime: "Natasha", prosek: 8.2, grad: "Skopje" },
  { ime: "Stanko", prosek: 6.7, grad: "Kichevo" },
  { ime: "Damjan", prosek: 9.1, grad: "Kumanovo" },
  { ime: "Sandra", prosek: 9.2, grad: "Ohrid" },
];

// const skopjeStudents = studenti
// .filter((student) => student.grad === "Skopje" && student.ime.endsWith("a") && student.prosek > 7)
// .sort((a, b) => a.ime.localeCompare(b.ime));

// console.log(skopjeStudents);

//podobra varijanta

const skopjeStudenti = studenti.filter((studentObj) => studentObj.grad === "Skopje" 
&& studentObj.ime.endsWith("a") && studentObj.prosek >7)
.sort ((a, b) => a.ime-b.ime);