const express = require("express");
const router = express.Router();
const apiPath = "https://jsonplaceholder.typicode.com/";
const log = require('../utils/logger');
const fetch = require('node-fetch');

router.get("/", (req, res) => {
  log.info("Get users request received, fetching users...");
  fetch(`${apiPath}users`)
    .then((res) => res.json())
    .then((data) => {
      log.error("Get users request completed, total users: " + data.length);
      res.send({
        message: "Users list",
        users: data,
      });
    });
});
router.get('/:id', (req, res) => {
  log.info("Get user by ID request received, fetching user by id:"+req.params.id);
  fetch(`${apiPath}users/${req.params.id}`).then(res => res.json()).then(data => {
    log.error(`Get user by ID: ${req.params.id} request completed`);
    res.send({
      message: "User by id",
      user: data
    })
  });
})

module.exports = router;
