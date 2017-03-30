// This is the back end controller for polls
var mongoose = require('mongoose');
var Survey = mongoose.model('Survey');

module.exports = (function(){
  return {
    index: function(req, res){
      Survey.find({}, function(err, results){
        if(err){
          res.json(err);
        }else{
          res.json(results);
        }
      })
    },
    create: function(req, res){
      var new_friend = new Survey(req.body);
      new_friend.save(function(err, results){
        if(err){
          res.json(err);
        }else{
          res.json(results);
        }
      })
    }
  }
})();
