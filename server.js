const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const events = require('./events-data')
const dateFns = require('date-fns')

const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/events', function (req, res) {
  res.json(events)
});

function DateMiddleware(req, res, next) {
  let date;

  if (isNaN(req.params.year) || isNaN(req.params.month)) {
    date = new Date()
  } else {
    date = new Date(`${req.params.year}/${req.params.month}`)
  }

  const newEvents = [...events]

  const filtered = newEvents.filter(event => {
    if (dateFns.isSameYear(date, event.date_released) && dateFns.isSameMonth(date, event.date_released)) {
      return event
    }
  })

  req.events = filtered
  next()
}

app.get('/api/events/:year/:month', DateMiddleware, function (req, res) {
  res.json(req.events)
});

// Let react handle routes 
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));