const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, "index.html");

    fs.readFile(filePath, (error, content) => {
        if (error) {
            res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
            res.end("Error al cargar la página web.");
            return;
        }

        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });
        res.end(content);
    });
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor web ejecutándose en el puerto ${PORT}`);
});