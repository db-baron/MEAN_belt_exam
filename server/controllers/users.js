// This is the back end controller for users
console.log("users.js Controller file has loaded.");

var mongoose = require('mongoose');
// Create models for users and polls
var User = mongoose.model('User');
var Poll = mongoose.model('Poll');

model.exports = {
    login: function(req, res){
        console.log("Now logging in: ");
        console.log(req.body);
        // Validate and check for erros
        // User.findOne(SomethingAboutname, function(err, user){
            // if(err){
            //
            // }
        //})
    }
}
