var express = require('express');
var app     = express();

// GET POST DELETE PUT PATCH
app.get('/', function(req, res) {
    res.send('helo everyone!');
});

app.get('/users/:name', function(req, res) {
    res.send("Namanya adalah " + req.params.name);
});

app.listen(3000);
