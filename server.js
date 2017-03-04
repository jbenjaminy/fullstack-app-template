const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const jsonParser = bodyParser.json();
const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;

app.use(express.static('build'));
app.use(jsonParser);
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

app.post('/register', (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
    loginAdmin(username, password).then((err, data) => {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.json(data);
	res.json({ message: 'Hello, world!' });
});

app.get('/login', (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	res.json({ message: 'Hello, world!' });
});

function runServer() {
	app.listen(PORT, HOST, err => {
		if (err) return console.error(err);
		console.log(`Listening on port ${PORT}`);
	});
}

if (require.main === module) runServer();
