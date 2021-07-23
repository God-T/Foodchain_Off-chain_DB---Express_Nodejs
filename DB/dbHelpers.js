const knex = require("knex");
const config = require("../knexfile"); // get knex config
const db = knex(config.development); // get db

module.exports = {
  addUser,
  getUsers,
  getUserbyID,
  deleteUserbyID,
  updateUserbyID,
};

function addUser(user) {
  return db("user").insert(user);
}

function getUsers() {
  return db("user");
}

function getUserbyID(id_address) {
  return db("user").where({ id_address }).first();
}

function deleteUserbyID(id_address) {
  return db("user").where({ id_address }).del();
}

function updateUserbyID(id_address, changes) {
  return db("user").where({ id_address }).update(changes, [id_address]);
}
