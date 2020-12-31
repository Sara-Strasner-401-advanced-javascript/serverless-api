# Lab 18: Serverless API

## Sara Strasner

Provide a UML diagram showcasing the architecture of your API

Document the data and program flow for your API, including the mapping of Routes and Functions, as well as the flow of data.

What is the root URL to your API?
What are the routes?
  - GET: https://hpbo47pk28.execute-api.us-east-2.amazonaws.com/unicorns/ | returns all unicorns in database
  - GET: https://hpbo47pk28.execute-api.us-east-2.amazonaws.com/unicorns/{id} | returns the unicorns with the provided id
  - POST: https://hpbo47pk28.execute-api.us-east-2.amazonaws.com/unicorns | adds a unicorn to the database. Requires JSON object with the following format:

    {
    "horns": Number,

    "name": "String",

    "isCute": boolean
  }
  - DELETE: https://hpbo47pk28.execute-api.us-east-2.amazonaws.com/unicorns/{id} | deletes the unicorn with the matching ID


What inputs do they require?
What output do they return?
