'use strict';
let axios = require('axios');

module.exports.ipsum = async (event, context) => {

  // Calling Bacon Ipsum
  // https://baconipsum.com/json-api/

  // Type is defined in environment variable
  const type = process.env.type;
  let message = '';
  let statusCode = 200;
  const queryUrl = `https://baconipsum.com/api/?type=${type}`;

  try {
    const response = await axios.get(queryUrl);
    message = response.data[0];
  } catch (err) {
    console.log(err);
    statusCode = 400;
    message = err;
  }
  return {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },    
    body: JSON.stringify({
      message: message,
      input: event,
    }),
  };
};
