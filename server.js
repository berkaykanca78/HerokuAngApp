const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/heroku-ang-app'));

app.get('/*', (req,res) =>
  res.sendFile('index.html', {root: 'dist/heroku-ang-app/'}),
);

app.listen(process.env.PORT || 8080);
