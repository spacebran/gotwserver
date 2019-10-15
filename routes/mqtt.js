var mqtt = require("mqtt");

var client = mqtt.connect("mqtt://broker.mqtt.dashboard.com", {
  port: 8000,
  clientId: "clientId-Qsff58vb4M"
});

client.on("connect", function() {
    // subscribe to a topic
    client.subscribe("gotw/warn", function(err) {
      console.log("Successfully subscribe to topic");
      console.log("Successfully connect to mqtt");
      // when a message arrives, do something with it
      client.on("message", function(topic, message, packet) {
        console.log("Received '" + message + "' on '" + topic + "'");
        resolve(message);
        return message;
      });
    });
});
