'use strict';

const unicornModel = require('./unicorn.schema');

exports.handler = async (event) => {
  const id = event.pathParameters.id;
  console.log('__event.body__', event.body);
  
  try{
    let data;
    if(id){
      const obj = JSON.parse(event.body);
      let updatedUnicorn = await unicornModel.update(id, obj);
      data = updatedUnicorn;
    } 
    return  {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (e) {
    return {
      statusCode: 500,
      response: JSON.stringify(e.message),
    };
  }
};