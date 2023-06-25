const http = require("http");

const server = http.createServer(handler);

server.listen(10000, "127.0.0.1", (err) => {
  if (err) console.log("error");
  console.log("serverot se startuva na porta 10000");
});

function handler(req, res) {
  const url = req.url;

  switch (url) {
    case "/ime/aleksandar":
      handleNameRequest(res, "aleksandar");
      break;
    case "/ime/angela":
      handleNameRequest(res, "angela");
      break;
    case "/ime/julija":
      handleNameRequest(res, "julija");
      break;
    default:
      res.end("stranicata ne e pronajdena.");
  }
}

function handleNameRequest(res, name) {
  const karakteri = name.length;
  const soglaski = name.match(/[bcdfghjklmnpqrstvwxyz]/gi)?.length || 0;
  const samoglaski = name.match(/[aeiou]/gi)?.length || 0;
  const parni = karakteri % 2 === 0;

  const response = {
    parni: parni ? "da" : "ne",
    karakteri,
    soglaski,
    samoglaski,
  };

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(response));
};
