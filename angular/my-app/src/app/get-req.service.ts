import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetReqService {
  private websiteUrl = 'http://localhost:8000'
  constructor(private httpClient: HttpClient) { }

  getData() {
    return this.httpClient.get(this.websiteUrl);
  }
}
