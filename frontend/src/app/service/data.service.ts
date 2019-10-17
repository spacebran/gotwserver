import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  requestOTP(header: string) {
    return this.httpClient.post(environment.REQUEST_OTP_URL + header, '');
  }

  loginCustomer(header: string) {
    return this.httpClient.post(environment.LOGIN_CUSTOMER_URL + header, '');
  }

  getCustomerDetails(header: string) {
    return this.httpClient.post(environment.GET_CUSTOMER_DETAILS + header, '');
  }

}
