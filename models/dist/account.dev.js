"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var passportLocalMongoose = require("passport-local-mongoose");

var accountSchema = new Schema({
  username: String,
  password: String
});
accountSchema.plugin(passportLocalMongoose); // We export the Schema to avoid attaching the model to the 
// default mongoose connection. 

module.exports = mongoose.model("Account", accountSchema);