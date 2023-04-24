const mongoose = require("mongoose");

const adsSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  primaryText: {
    type: String,
    required: true,
  },
  headline: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imgname: {
    type: String,
    required: true,
  },
  ctabutton: {
    type: String,
    required: true,
  },
  blink: {
    type: String,
    required: true,
  },
});

const adsDetails = mongoose.model("adsDetails", adsSchema);

module.exports = adsDetails;
