// Make changes of the tables
exports.up = function (knex) {
  return knex.schema.createTable("user", (table) => {
    table.string("id_address").primary();
    table.string("name").notNullable();
    table.string("type").notNullable();
    table.string("location");
    // table.integer('certification_id').unsigned().notNullable().references('id').inTable('certification').onDelete('CASCADE') // foreign key to certification table
  });
  // .createTable('certification', table => {
  //     table.increments() // id
  //     table.string('certifier').notNullable()
  //     table.string('document_id').references('id').inTable('document').onDelete('CASCADE') // foreign key to document table
  // })
  // .createTable('document', table => {
  //     table.increments() // id
  //     table.string('name').notNullable()
  //     table.string('certifier').notNullable()
  //     table.string('document_id')
  // })
};

// Undo changes of the tables
exports.down = function (knex) {
  return (
    knex.schema
      // .dropTableIfExists('document')
      .dropTableIfExists("certification")
      .dropTableIfExists("user")
  );
};
