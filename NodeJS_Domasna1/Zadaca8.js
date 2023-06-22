//Zadaca8
//8. Da se kreira nova niza kade sto:
//studentite od Ohrid i Kumanovo, prosecite im se za 1 pogolemi od segasnite (dinamicki)

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

  const novaNiza = studenti.map((student) => {
    if (student.grad === "Ohrid" || student.grad === "Kumanovo") {
      return { ...student, prosek: student.prosek + 1 };
    }
    return student;
  });
  
  console.log(novaNiza);
  