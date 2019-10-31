import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'

const flaskAPIKey = "5frdhhrhT6qORCT62U125F2p3HHUu0BYm3u5OrlQLUKCCS6JqjQTZaQnxTkseAL33KeLdItJf2CdGu9TFA9joFdgQe6vZ0Y0QRymldL6wv1Sr3hAra1ywhQMxdeOgZQk";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  host: string = "http://3.0.102.200/api/";
  apiKey: string = "&api-key=5frdhhrhT6qORCT62U125F2p3HHUu0BYm3u5OrlQLUKCCS6JqjQTZaQnxTkseAL33KeLdItJf2CdGu9TFA9joFdgQe6vZ0Y0QRymldL6wv1Sr3hAra1ywhQMxdeOgZQk";

  constructor(private httpClient: HttpClient) { }

  logDownEscapee(req: any) {
    return this.httpClient.get(this.host + "add?uuid=" + req.uuid + "&name=" + req.name + "&timestamp=" + req.timestamp);
  }

  getAllowedList() {
    return this.httpClient.get(this.host + "getBuslist?" + this.apiKey);
  }

  updateAllowedList(req: any) {
    return this.httpClient.get(this.host + "setBuslist?buslist=" + req + this.apiKey);
  }

  sendTelegram(message: string) {
    return this.httpClient.get(this.host + "sendTeleMessage?message=" + message + this.apiKey);
  }
}
