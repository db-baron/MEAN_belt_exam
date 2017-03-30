var mongoose = require('mongoose');
var Schema = mongoose.Schema;

console.log("Survey.js schema file has loaded.");

var SurveySchema = new Schema({
  question: String,
  options: [],
  // To get the user's id
  _user: {type:Schema.Types.ObjectId, ref:"User"},
  post_date: {type:Date, default:new Date}
});

mongoose.model('Survey', SurveySchema);
