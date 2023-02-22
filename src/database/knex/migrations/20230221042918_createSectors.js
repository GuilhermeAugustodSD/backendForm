
exports.up = knex => knex.schema.createTable("optgroups", table => {
    table.increments("id");
    table.text("value");
    table.text("text");
}); 

exports.down = knex => knex.schema.dropTable("optgroups");
