var app = require('./index'); //app module from index
var port = 3003;

var server = app.listen(port, function() {
    console.log('Express is now listening to port: ' + port);
});