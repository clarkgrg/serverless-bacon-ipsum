'use strict';
const { render } = require('./libs/render');
const { fetchIpsum } = require('./libs/fetch');

// Uses Bacon Ipsum generator
// https://baconipsum.com/json-api/


// Return Bacon Ipsum JSON message
module.exports.ipsum = async (event, context) => {
  let message = '';
  try {
    message = await fetchIpsum();
  } catch (err) {
    console.log(err);
    message = "ERROR: Cannot generate meaty Ipsum right now";
  }
  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials': true },    
    body: JSON.stringify({ message: message, input: event }),
  };
};

// Return Bacon Ipsum wrapped in HTML (should be wrapped in bacon)
module.exports.ipsumHTML = async (event, context) => {
  let content = '';  
  try {
    content = await fetchIpsum();
  } catch (err) {
    console.log(err);
    content = "ERROR: Cannot generate meaty Ipsum right now";
  }
  const html = render(content);
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/html' },
    body: html
  };  
}
