'use strict';
const uuid = require('uuid').v4;
const unicornModel = require('./unicorn.schema');

exports.handler = async (event) => {
  const {horns, name, isCute} = JSON.parse(event.body);

  const id = uuid();

  try {
    const record = new unicornModel({ id, horns, name, isCute });
    const data = await record.save();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };

  } catch (e) {
    return {
      statusCode: 500,
      response: e.message,
    };
  }

};