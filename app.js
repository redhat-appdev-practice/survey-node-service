var app = require('express')();
var helmet = require('helmet');
var bodyParser = require('body-parser');
var cors = require('cors');

var port = process.env.PORT || 8080;

app.use(cors());
app.use(helmet());

// Use body-parser to help parse request bodies into JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use the router we defined in src/routes/router.js
app.use(require('./src/routes/router'));

var server = app.listen(port, () => {
    console.log('Listening on port ' + server.address().port);
});