const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    height: {type: Number, required: true},
    weight: {type: Number, required: true},
    color: {type: String, required: true},
  });
  module.exports = mongoose.model("Cat" , catSchema)