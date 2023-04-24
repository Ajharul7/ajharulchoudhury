const express = require("express");
const router = express.Router();
const adsSchema = require("../models/adsSchema.js");

router.get(`/adsdetails`, function (req, res) {
  adsSchema.find().then((data) => {
    res.json(data);
  });
});

module.exports = router;
