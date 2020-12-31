'use strict';

const unicornModel = require('./unicorn.schema');

exports.handler = async (event) => {
  const id = event.pathParameters.id;
  console.log('__id__', id);
  
  try{

    let data;
    if(id){
      const list = await unicornModel.delete(id);
      data = list;
    } 
    return  {
      statusCode: 200,
      body: JSON.stringify({data}),
    };
  } catch (e) {
    return {
      statusCode: 500,
      response: JSON.stringify(e),
    };
  }
};