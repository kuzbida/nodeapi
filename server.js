var express = require('express');
var path            = require('path'); // модуль для парсинга пути
var favicon = require('express-favicon');
var logger = require('express-logger');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var log = require('./libs/log')(module);

var app = express();
// app.use(favicon(__dirname + '/public/favicon.ico'));
// app.use(logger({path: "/path/to/logfile.txt"}));

app.use(bodyParser.json()); // стандартный модуль, для парсинга JSON в запросах
app.use(methodOverride('X-HTTP-Method-Override')); // поддержка put и delete
app.use(express.static(path.join(__dirname, "public"))); // запуск статического файлового сервера, который смотрит на папку public/ (в нашем случае отдает index.html)

/*app.use(function(req, res, next){
    res.status(404);
    log.debug('Not found URL: %s',req.url);
    res.send({ error: 'Not found' });
    return;
});

app.use(function(err, req, res, next){
    res.status(err.status || 500);
    log.error('Internal error(%d): %s',res.statusCode,err.message);
    res.send({ error: err.message });
    return;
});*/

app.get('/ErrorExample', function(req, res, next){
    next(new Error('Random error!'));
});

app.get('/api', function (req, res) {
    res.send('API is running');
});

app.get('/api/articles', function(req, res) {
    res.send('This is not implemented now');
});

app.post('/api/articles', function(req, res) {
    res.send('This is not implemented now');
});

app.get('/api/articles/:id', function(req, res) {
    res.send('This is not implemented now');
});

app.put('/api/articles/:id', function (req, res){
    res.send('This is not implemented now');
});

app.delete('/api/articles/:id', function (req, res){
    res.send('This is not implemented now');
});

app.listen(3000, function () {
    log.info('Express server listening on port 1337');
});