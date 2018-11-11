
const express = require('express');
const port = 8080;
const app = express();

app.listen(port, function() {
  console.log(`Server is running on port ${port}`)
});

app.use(express.static('public'));
