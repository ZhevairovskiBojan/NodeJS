//Zadaca4
//Vkupen prosek na studenti koi se od Kumanovo

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

const studentiKumanovo = studenti.filter((student) => student.grad === "Kumanovo");
const prosek = studentiKumanovo.reduce((acc, student) => acc + student.prosek, 0) / studentiKumanovo.length;

console.log(prosek);
