var mqtt = require("mqtt");
var broker_url = "mqtt://broker.mqtt.dashboard.com"
var connection_options = {
  port: 8000,
  // clientId: "clientId-Qsff58vb4M"
  clientId: "gotwbackendmqttgate"
}

// connect to a 
var client = mqtt.connect(broker_url, connection_options);

// on successful connection 
client.on("connect", function() {
  // subscribe to a topic
  client.subscribe("gotw/warn", {qos: 2}, function(err, granted) {
    if (!err) {
      console.log("Successfully subscribe to topic:\'gotw/warn\'");
    } else {
      console.log(err)
    }
  });
  if (!err) {
    client.publish('gotw/webapp', 'webapp mqtt client online')
    console.log("webapp mqtt client online!")
  } else {
    console.log(err)
  }
});

// on receiving message 
client.on('message', function (topic, message) {
  console.log(message.toString())
})

