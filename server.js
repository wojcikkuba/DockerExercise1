const http = require('http');

const PORT = 8080; // Set port
const AUTHOR = "Jakub Wojcik";

let dateTime = new Date().toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw' }); // get date and time

// Request handler
const handler = (req, res) => {
	const ipAddress = req.socket.remoteAddress; // get IP address

	// Show info
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write(`<h3>Adres IP klienta: ${ipAddress}</h3>`);
	res.write(`<h3>${dateTime}</h3>`);
	res.end();
};

const server = http.createServer(handler); // create server
server.listen(PORT, () => {
	console.log(`Serwer dziala na porcie ${PORT} | ${dateTime} | ${AUTHOR}`); // show logs
});
