const express = require('express');
const path = require('path');
const app = express();

// Serve the static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist/heroku-ang-app/browser')));

// Fallback route to handle all other requests
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/heroku-ang-app/browser/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
