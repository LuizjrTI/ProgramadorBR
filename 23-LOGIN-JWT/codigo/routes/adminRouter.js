const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.get("/", authController, (req, res) => {
  if (req.user.admin) {
    res.send("Admin area");
  } else {
    res.send("Not admin");
  }
});

module.exports = router;
