
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tasks', function (t) {
    console.log("asdfasdf");
    t.increments('id').primary();
    t.string('name', 100);
    t.text('description');
  });
};

exports.down = function(knex, Promise) {

};
