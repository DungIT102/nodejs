const http = require("http");

const { port } = require("./configs/config");
const { onRequest } = require("./utils/function");

http.createServer(onRequest).listen(port);
