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

module.exports = router;
