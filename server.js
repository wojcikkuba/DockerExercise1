const http = require('http');

const PORT = 8080;
const AUTHOR = "Jakub Wojcik";

const handler = (req, res) => {
	const ipAddress = req.socket.remoteAddress;
	const dateTime = new Date().toLocaleString('pl-PL');

	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write(`<h3>Adres IP klienta: ${ipAddress}</h3>`);
	res.write(`<h3>${dateTime}</h3>`);
	res.end();
};

const server = http.createServer(handler);
server.listen(PORT, () => {
	console.log(`Serwer dziala na porcie ${PORT} | ${new Date()} | ${AUTHOR}`);
});



