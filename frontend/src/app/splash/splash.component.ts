import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'
import { DataService } from '../service/data.service';
import * as mqtt from 'mqtt';
import { MqttConnection } from '../service/mqtt-connection'
import { Paho } from '../ng2-mqtt/mqttws31';
// import { Paho } from 'paho-mqtt'
import { IMqttServiceOptions } from 'ngx-mqtt';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
  client: any;

  constructor() { }

  ngOnInit() {
    
    this.client = new Paho.MQTT.Client('broker.hivemq.com', Number(8000), '/mqtt', 'clientId-Qsff58vb4M');


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