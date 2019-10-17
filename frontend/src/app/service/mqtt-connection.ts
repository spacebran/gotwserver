import { Paho } from 'ng2-mqtt/mqttws31';

export class MqttConnection {
    client;

    constructor() {
        this.client = new Paho.MQTT.Client('broker.mqtt.dashboard.com', 8000, 'clientId-Qsff58vb4M');

        this.onMessage();
        this.onConnectionLost();
        this.client.connect({ onSuccess: this.onConnected.bind(this) });
    }

    onConnected() {
        console.log("Connected");
        this.client.subscribe("gotw/warn");
        // this.sendMessage('HelloWorld');
    }

    sendMessage(message: string) {
        let packet = new Paho.MQTT.Message(message);
        packet.destinationName = "123456";
        this.client.send(packet);
    }

    onMessage() {
        this.client.onMessageArrived = (message: Paho.MQTT.Message) => {
            console.log('Message arrived : ' + message.payloadString);
        };
    }

    onConnectionLost() {
        this.client.onConnectionLost = (responseObject: Object) => {
            console.log('Connection lost : ' + JSON.stringify(responseObject));
        };
    }
}