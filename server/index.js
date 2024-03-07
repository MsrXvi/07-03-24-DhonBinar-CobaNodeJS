// core package => built in node js
const http = require ("http");
const fs = require ("fs");
const path = require("path");

const url = require("url");

const PUBLIC_DIR = path.join(__dirname, "../public");
const PORT = 8000;

const server = (req, res) => {

    if (req.url ==='/') {
        res.end('ini default server')
    }
    else if (req.url === '/search') {
        res.end("ini halaman search")
    } else {
        res.end("gak ada...")
    }

};
http.createServer(server).listen(PORT);
console.log(`server is running ... PORT : localhost:${PORT}`);