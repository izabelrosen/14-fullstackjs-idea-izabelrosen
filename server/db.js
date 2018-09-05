//Connect to mongoDatabase
var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:password@ds261118.mlab.com:61118/prattle')
// mongoose.connect('mongodb://admin:secret@ds261118.mlab.com:61118/prattle');

// mongodb://<dbuser>:<dbpassword>@ds145412.mlab.com:45412/prattle