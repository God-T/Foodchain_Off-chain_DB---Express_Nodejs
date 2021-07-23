// Make changes of the tables
exports.up = function (knex) {
  return knex.schema
    .createTable("certification", (table) => {
      table.increments(); // id
      table.string("certifier").notNullable();
    })

    .createTable("user", (table) => {
      table.string("id_address").primary();
      table.string("name").notNullable();
      table.string("type").notNullable();
      table.string("location");
      table
        .integer("certification_id")
        .unsigned()
        .unique()
        .notNullable()
        .references("id")
        .inTable("certification")
        .onDelete("CASCADE"); // foreign key to certification table
    })

    .createTable("document", (table) => {
      table.string("hash_value").unique().primary();
      table.string("document").notNullable();
      table
        .integer("certification_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("certification")
        .onDelete("CASCADE"); // foreign key to certification table
    });
};

// Undo changes of the tables
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("certification")
    .dropTableIfExists("document")
    .dropTableIfExists("user");
};
