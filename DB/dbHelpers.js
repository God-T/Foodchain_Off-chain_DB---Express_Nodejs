const knex = require("knex");
const config = require("../knexfile"); // get knex config
const db = knex(config.development); // get db

module.exports = {
  addCertification,
  getCertificationbyID,
  getCertifications,
  addUser,
  getUsers,
  getUserbyID,
  deleteUserbyID,
  updateUserbyID,
};

//in use
async function addCertification(certifier) {
  const [id] = await db("certification").insert(certifier);
  return id;
}

//in use
function getCertificationbyID(id) {
  return db("certification").where({ id }).first();
}

function getCertifications() {
  return db("certification");
}

function deleteUserbyID(id_address) {
  return db("user").where({ id_address }).del();
}

//in use
function addUser(user) {
  return db("user").insert(user);
}

//in use
function getUserbyID(id_address) {
  return db("user").where({ id_address }).first();
}

function getUsers() {
  return db("user");
}

function deleteUserbyID(id_address) {
  return db("user").where({ id_address }).del();
}

function updateUserbyID(id_address, changes) {
  return db("user").where({ id_address }).update(changes, [id_address]);
}
