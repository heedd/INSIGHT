var express = require('express')
  , http = require('http')
  , fs = require('fs')
  , app = express();

var router = require('./router/main')(app,fs);


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('views'));                                                                   



var server = http.createServer(app);
server.listen(8000, function() {
  console.log('Express server listening on port ' + server.address().port);
});

