require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const http = require('http').createServer(app);

// express init
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser())

// api routes
require('./routers/index.router')(app);

const port = process.env.PORT || 8080;
http.listen(port, () => {
  console.log('listening on *:' + port);
});
