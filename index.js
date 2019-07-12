var config = require('./knexfile');
var knex = require('knex')(config);

knex('test_table')
.update({ userData: null }).then(() => {
  console.log('update successul');
}).catch((err) => {
  console.log('update error', err);
});