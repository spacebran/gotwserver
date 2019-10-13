var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("pages/index");
});

var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://broker.mqtt.dashboard.com:1883");

client.on("connect", function() {
  // subscribe to a topic
  client.subscribe("gotw/warn", function(err) {
    // when a message arrives, do something with it
    client.on("message", function(topic, message, packet) {
      console.log("Received '" + message + "' on '" + topic + "'");
    });
  });
});

module.exports = router;
