const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;


app.use(express.json());

// protect CORS problem in localhost
app.use(cors());


app.listen(port, () => {
  console.log('Server running');
})

module.exports = app;