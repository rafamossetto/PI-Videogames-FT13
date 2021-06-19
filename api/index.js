const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('\x1b[33m%s\x1b[0m', 'server listening at 3001'); // eslint-disable-line no-console
  });
});
