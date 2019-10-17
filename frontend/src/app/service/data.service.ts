import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  logDownEscapee(req: any) {
    return this.httpClient.get("http://3.0.102.200/"+ "add?uuid=" + req.uuid + "&name=" + req.name + "&timestamp=" + req.timestamp);
  }

}
