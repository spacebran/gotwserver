import { Component, OnInit } from '@angular/core';
import { Paho } from '../ng2-mqtt/mqttws31';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
  client: any;
  name: string;
  nameList: string[] = [];
  allowedList: string[] = ["Uncle Tom", "Uncle Dick", "Uncle Harry"];
  updatedList: string[] = [];
  clientDetails: any;
  showName: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.clientDetails = {
      "F7826DA6-4FA2-4E98-8024-BC5B71E0893E": "Koh Pee Peng "
    }
    this.client = new Paho.MQTT.Client('broker.hivemq.com', Number(8000), '/mqtt', 'clientId-Qsff58vb4M');
    this.onMessage();

    this.onConnectionLost();
    this.client.connect({ onSuccess: this.onConnected.bind(this) });
  }

  onConnected() {
    console.log("Connected");
    this.client.subscribe("gotw/warn");
  }

  sendMessage(message: string) {
    let packet = new Paho.MQTT.Message(message);
    packet.destinationName = "123456";
    this.client.send(packet);
  }

  // resetArray() {
  //   setInterval(function() {
  //     this.nameList.push("Hello")
  //     console.log("reset array")
  //   }, 1000)
  // }

  onMessage() {
    this.client.onMessageArrived = (message: Paho.MQTT.Message) => {
      this.showName = true;
      let data: any = JSON.parse(message.payloadString);
      this.name = this.clientDetails[data.uuid];
      console.log(this.name)
      if (!this.nameList.includes(this.name)) {
        this.nameList.push(this.name);
      }
      this.updatedList = this.nameList;
      console.log('Message arrived : ' + message.payloadString);

      let logRequest = {
        uuid: data.uuid,
        name: this.name,
        timestamp: Date.now()
      }
      this.dataService.logDownEscapee(logRequest).subscribe(success => {
        console.log("Successfully log to database")
      }, error => {
        console.log("Unsuccessful log down to database")
      });
    }
  }

  onConnectionLost() {
    this.client.onConnectionLost = (responseObject: Object) => {
      console.log('Connection lost : ' + JSON.stringify(responseObject));
    };
  }

  updateList() {
    // HTTP Post here to back end, send the variable updatedList
    console.log(this.updatedList);
  }

}