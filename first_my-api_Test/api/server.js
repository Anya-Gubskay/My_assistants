const express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    fs = require('file-system'),
    dataFile = 'test.json',
    app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('common'));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/api/test', (req, res) => {
    res.send(fs.readFileSync(dataFile, 'utf8'));
});


app.post('/api/', (req, res) => {
    const data = JSON.parse(fs.readFileSync(dataFile, 'utf8')),
          test = req.body;

    data.push(test);
    fs.writeFileSync(dataFile, JSON.stringify(data));

    res.sendStatus(204);
});

app.post('/api/test', (req, res) => {
    const data = JSON.parse(fs.readFileSync(dataFile, 'utf8')),
          time = req.body;

    data[0][11] = time;
    fs.writeFileSync(dataFile, JSON.stringify(data));

    res.sendStatus(204);
});

app.put('/api/test/result', (req, res) => {

    const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

    data[0][10].index = 0;
    data[0][10].correct = 1;

    fs.writeFileSync(dataFile, JSON.stringify(data));

    res.sendStatus(204);
});

app.put('/api/test', (req, res) => {
    const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

    ++(data[0][10].index);

    fs.writeFileSync(dataFile, JSON.stringify(data));

    res.sendStatus(204);
});

app.put('/api/test1', (req, res) => {
    const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

    ++(data[0][10].correct);

    fs.writeFileSync(dataFile, JSON.stringify(data));

    res.sendStatus(204);
});


app.listen(3000, () => console.log('Server has been started...'));