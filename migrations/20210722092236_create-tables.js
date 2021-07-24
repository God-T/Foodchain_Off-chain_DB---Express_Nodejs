// Make changes of the tables
exports.up = function (knex) {
  return knex.schema
    .createTable("certification", (table) => {
      table.increments(); // id
      table.string("sc_address").notNullable();
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

    .createTable("beef_product", (table) => {
      table.string("product_id").primary();
      table.string("base_info");
      table
        .integer("certification_id")
        .unsigned()
        .unique()
        .notNullable()
        .references("id")
        .inTable("certification")
        .onDelete("CASCADE"); // foreign key to certification table
    })

    .createTable("journey", (table) => {
      table.string("produce_info");
      table.timestamps(true, true);
      table.boolean("end_status");
      table
        .integer("user_id")
        .unsigned()
        .unique()
        .notNullable()
        .references("id_address")
        .inTable("user")
        .onDelete("CASCADE"); // foreign key to user table
      table
        .integer("product_id")
        .unsigned()
        .unique()
        .notNullable()
        .references("id")
        .inTable("beef_product")
        .onDelete("CASCADE"); // foreign key to certification table
    })

    .createTable("document", (table) => {
      table.string("hash_value").primary();
      table.text("document").notNullable();
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
