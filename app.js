const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const agentRouter = require('./routes/agent.route');
const typeRouter = require('./routes/type.route');
const tagRouter = require('./routes/tag.route');
const avantageRouter = require('./routes/avantage.route');
const propertyRouter = require('./routes/property.route');


app.use(express.json());

// protect CORS problem in localhost
app.use(cors());

app.use('/agents', agentRouter);
app.use('/types', typeRouter);
app.use('/tags', tagRouter);
app.use('/avantages', avantageRouter);
app.use('/properties', propertyRouter);



app.listen(port, () => {
  console.log('Server running');
})

module.exports = app;