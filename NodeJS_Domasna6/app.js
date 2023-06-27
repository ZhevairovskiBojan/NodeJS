const express = require('express');
const app = express();
const port = 10000;

app.get('/', (req, res) => {
  res.send("Dobrodojdovte na web aplikacijata");
});

app.get("/:name", (req, res) => {
  const name = req.params.name;

  if (!name) {
    res.send("Nevalidna URL adresa");
    return;
  }

  const samoglaski = ["a", "e", "i", "o", "u"];
  let samoglaskiBroj = 0;
  let soglaskiBroj = 0;

  for (let i = 0; i < name.length; i++) {
    if (samoglaski.includes(name[i])) {
      samoglaskiBroj++;
    } else {
      soglaskiBroj++;
    }
  }

  res.send(`Vo imeto ${name} ima ${samoglaskiBroj} samoglaski i ${soglaskiBroj} soglaski.`);
});

app.listen(port, () => {
  console.log(`Serverot se startuva na porta ${port}`);
});
