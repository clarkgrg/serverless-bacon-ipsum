let axios = require('axios');

const fetchIpsum = async () => {
  // Type is defined in environment variable
  const type = process.env.type;
  const queryUrl = `https://baconipsum.com/api/?type=${type}`;

  const response = await axios.get(queryUrl);
  return response.data[0];
}

module.exports = {
  fetchIpsum
};
