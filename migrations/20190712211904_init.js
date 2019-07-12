
exports.up = function(knex) {
  return knex.schema.createTable('test_table', (t) => {
    t.increments('id').unsigned();
    t.binary('userData').nullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('test_table');
};
