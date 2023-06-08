const express = require('express');
const winston = require('winston');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const app = express();

// Create a new Winston logger for the application log
const appLogger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'application.log' })
  ]
});

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

app.get('/log/:message', (req, res) => {
  const { message } = req.params;
  appLogger.info(message);
  res.send(`Logged "${message}"\n`);
});

const port = 5001;
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
