const knex = require("knex");
const config = require("../knexfile"); // get knex config
const db = knex(config.development); // get db

module.exports = {
  addDocument,
  getDocumentsbyCertification,
  getDocumentbyHash,
  getDocuments,
  addCertification,
  getCertificationbyID,
  getCertifications,
  addUser,
  getUsers,
  getUserbyID,
  deleteUserbyID,
  updateUserbyID,
};
//Doc:
//in use
async function addDocument(document) {
  const [id] = await db("document").insert(document);
  return id;
}

//in use
function getDocumentsbyCertification(certification_id) {
  return db("document").where({ certification_id });
}

//in use
function getDocumentbyHash(hash_value) {
  return db("document").where({ hash_value }).first();
}

function getDocuments() {
  return db("document");
}

//Certification:
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

// Users
//in use
async function addUser(user) {
  const [id] = await db("user").insert(user);
  return id;
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
