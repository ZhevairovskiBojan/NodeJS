
let domasna = {
    ime: "Bojan",
    prezime: "Bojanovski",
    ovoshje: ["Limon", "Banana", "Ananas", "Kivi"],
    zelenchuk: ["Krastavica", "Zelka", "Brokula", "Domat"],
    vitamini: [
      { ime: "Limon", vitamin: "C", mineral: "kalcium" },
      { ime: "Banana", vitamin: "A", mineral: "Kalium" },
      { ime: "Ananas", vitamin: "B", mineral: "Magnezium" },
      { ime: "Brokula", vitamin: "D", mineral: "Zelezo" },
      { ime: "Domat", vitamin: "G", mineral: "Srebro" },
    ],
  };

  const elements = (req, res) => {
    res.render("index", domasna);
};


const addingEl = (req, res) => {
    console.log(req.body);
    const newElement = {
        ime: req.body.ime,
        vitamin: req.body.vitamin,
        mineral: req.body.mineral
    };
    domasna.vitamini.push(newElement);
    res.render("index", domasna);
};


module.exports = {
    elements,
    addingEl
}