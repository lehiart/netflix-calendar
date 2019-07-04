const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const events = require('./events-data')

const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/events', function (req, res) {
    res.json(events)
});

// Let react handle routes 
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));