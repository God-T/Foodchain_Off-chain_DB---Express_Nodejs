// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./DB/off-chain.db3",
    },
    useNullAsDefault: true,
  },
};
