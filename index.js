require('dotenv').config();

const server = require('./api/server.js');

const port = process.env.PORT || 2345;
server.listen(port, () => console.log(`\n** Server running on port ${port} **\n`));
