const { createClient } = require('redis');

const client = createClient({
    prefix: 'pwsafe:',
});

module.exports = client;
