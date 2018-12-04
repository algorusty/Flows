const express = require('express');
const port = 8080;
const app = express();
const morgan = require('morgan');


app.listen(port, function () {
  console.log(`Server is running on port ${port}`)
});

app.use('/', express.static('portfolio'))
app.use('/flows', express.static('public'));

app.use(morgan('combined'));
