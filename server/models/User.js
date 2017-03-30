var mongoose = require('mongoose');
var Schema = mongoose.Schema;

console.log("User.js schema file has loaded.");

var UserSchema = new Schema({
  name: String,

  // An array of polls the user created (so they can delete them)
  polls: [{type:Schema.Types.ObjectId, ref:"Poll"}]

});

mongoose.model('User', UserSchema);
