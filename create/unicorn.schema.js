'use strict';

const dynamoose = require('dynamoose');

const unicornSchema = new dynamoose.Schema({
  'id': String,
  'horns': Number,
  'name': String,
  'isCute': { type:Boolean, default: true},
});

module.exports = dynamoose.model('unicorn', unicornSchema);