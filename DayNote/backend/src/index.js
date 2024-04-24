const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

require('./config/dbconfig');

const corsOptions = {
    origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);

app.listen(3333);
