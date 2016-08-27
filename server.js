var express = require('express');
var path            = require('path'); // модуль для парсинга пути
var favicon = require('express-favicon');
var logger = require('express-logger');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();
// app.use(favicon(__dirname + '/public/favicon.ico'));
// app.use(logger({path: "/path/to/logfile.txt"}));

app.use(bodyParser.json()); // стандартный модуль, для парсинга JSON в запросах
app.use(methodOverride('X-HTTP-Method-Override')); // поддержка put и delete
app.use(express.static(path.join(__dirname, "public"))); // запуск статического файлового сервера, который смотрит на папку public/ (в нашем случае отдает index.html)

app.get('/api', function (req, res) {
    res.send('API is running');
});


app.listen(3000, function () {
    console.log('Express server listening on port 1337');
});