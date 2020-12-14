const axios = require('axios');

console.log('worker running');

setInterval(async () => {
  try {
    const res = await axios.get('http://api:3001');
    console.log(res.data);
  } catch (err) {
    console.error(err);
  }
}, 10000);
