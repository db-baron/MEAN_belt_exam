var express = require('express');
var path = require('path');
var bp = require('body-parser');
var app = express();

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));

app.use(bp.json());
// Import your routes
require('./server/config/mongoose.js');
// require('./server/config/routes.js')
require('./server/config/routes.js')(app);

app.listen(8100, function(){
  console.log('Listening to MEAN Belt Exam, Surveys on port 8100 from server.js');
})
