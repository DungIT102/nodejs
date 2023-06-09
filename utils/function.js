const fs = require("fs");
const url = require("url");

function renderHTML(path, res) {
  fs.readFile(path, (err, data) => {
    if (err) throw err;
    res.write(data);
    res.end();
  });
}

function render404(res) {
  res.writeHead(404);
  res.write("File not found!");
  res.end();
}

function onRequest(req, res) {
  const path = url.parse(req.url).pathname;

  switch (path) {
    case "/":
      renderHTML("./views/home.html", res);
      break;
    case "/about":
      renderHTML("./views/about.html", res);
      break;
    default:
      render404(res);
      break;
  }
}

module.exports = { onRequest };
