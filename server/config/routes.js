var users = require('../controllers/users.js');
var polls = require('../controllers/polls.js');
console.log("routes.js has loaded.");

module.exports = function(app){

  app.get('/', function(req, res){
  });

  app.post('/login', function(req, res){
    users.login(req, res);
  });

  app.get('/logout', function(req, res){
  });

  app.get('/main', function(req, res){
  });

  app.post('/main/create', function(req, res){
    friends.create(req, res);
  });

  app.post('/poll/show/:id', function(req, res){
    friends.create(req, res);
  })

}
