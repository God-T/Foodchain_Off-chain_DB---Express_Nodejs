const express = require("express");
const db = require("./DB/dbHelpers"); // get db helper
// init server
const server = express();
server.use(express.json());
const PORT = 5000;
server.listen(PORT, () => {
  console.log(
    `\n*** Off-chain database server running on http://localhost:${PORT}/ ***\n`
  );
});

// server greetings
server.get("/", (req, res) => {
  res.json({ message: "Off-chain database APIs were connected!" });
});

// add user
server.post("/api/user", (req, res) => {
  db.addUser(req.body)
    .then(() => {
      res.status(200).json({ Message: `User ${req.body.id_address} added` });
    })
    .catch((e) => {
      res.status(500).json({ Message: "Add user failed", Error: e });
    });
});

// get all users
server.get("/api/user", (req, res) => {
  db.getUsers()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((e) => {
      res.status(500).json({ Message: "Unable to retrieve users", Error: e });
    });
});

// get user by id
server.get("/api/user/:id", (req, res) => {
  const { id } = req.params;
  db.getUserbyID(id)
    .then((user) => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ Message: `No record of user ${id}` });
      }
    })
    .catch((e) => {
      res.status(500).json({ Message: `Unable to get user ${id}`, Error: e });
    });
});

// delete user by id
server.delete("/api/user/:id", (req, res) => {
  const { id } = req.params;
  db.deleteUserbyID(id)
    .then((count) => {
      if (count > 0) {
        res.status(200).json({ Message: `Delete user ${id} successfully` });
      } else {
        res.status(404).json({ Message: `No record of user ${id}` });
      }
    })
    .catch((e) => {
      res
        .status(500)
        .json({ Message: `Unable to delete user ${id}`, Error: e });
    });
});

// update user by id
server.patch("/api/user/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  db.updateUserbyID(id, changes)
    .then((user) => {
      if (user) {
        res.status(200).json({ Message: `Update user ${id} successfully` });
      } else {
        res.status(404).json({ Message: `No record of user ${id}` });
      }
    })
    .catch((e) => {
      res
        .status(500)
        .json({ Message: `Unable to update user ${id}`, Error: e });
    });
});
