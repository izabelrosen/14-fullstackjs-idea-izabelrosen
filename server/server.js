var app = require('./app'); //app module from index
var port = 3003;

app.listen(port, function() {
    console.log('Express is now listening to port: ' + port);
});