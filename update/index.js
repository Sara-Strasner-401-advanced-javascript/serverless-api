'use strict';

const unicornModel = require('./unicorn.schema');

exports.handler = async (event) => {
  const id = event.pathParameters.id;
  
  try{
    let data;
    if(id){
      const obj = JSON.parse(event.body);
      console.log(`This is the body ${obj}`);
      console.log(`This is the id ${id}`);
      let updatedUnicorn = await unicornModel.update({id}, obj);
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