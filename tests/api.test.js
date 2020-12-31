'use strict';

let url = 'https://hpbo47pk28.execute-api.us-east-2.amazonaws.com/unicorns/';

const request = require('superagent');

describe('endpoint', () => {
  it('GET', async () => {
    const response = await request.get(url);
    expect(response).toHaveProperty('status', 200);
    expect(typeof response.body).toEqual('object');
  });

  it('POST', async () => {
    let newUnicorn = {
      horns: 5,
      name:'Fred', 
      isCute:true,
    };
    const response = await request.post('https://hpbo47pk28.execute-api.us-east-2.amazonaws.com/unicorns').send(newUnicorn);
    expect(response).toHaveProperty('status', 200);
  });

  it('PUT', async () => {
    let newUnicorn = {
      'horns': 8,
      'name':'Fred', 
      'isCute':true,
    };
    const response = await request.put(url).send(newUnicorn);
    expect(response).toHaveProperty('status', 200);
    expect(typeof response.body).toEqual('object');
  });

  it('DELETE', async () => {
    const response = await request.delete(url);
    expect(response).toHaveProperty('status', 200);
    expect(typeof response.body).toEqual('object');
  });

});

