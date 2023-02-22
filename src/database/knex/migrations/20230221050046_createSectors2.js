
exports.up = knex => knex.schema.createTable("options", table => {
    table.increments("id");
    table.text("value");
    table.text("text");
    table.integer("optgroups_id").references("id").inTable("optgroups");
}); 

exports.down = knex => knex.schema.dropTable("options");
 