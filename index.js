const express = require('express');
const port = 8080;
const app = express();
const morgan = require('morgan')
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowsMs: 15 * 60 * 1000,
  max: 50
});

app.use(limiter)

app.listen(port, function() {
  console.log(`Server is running on port ${port}`)
});

app.use(express.static('public'));

app.use(morgan('combined'));
