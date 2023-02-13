import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getdata',
  template: `
    <button (click)="sendGetRequest()">Send GET Request to get all bank accounts</button>
  `
})
export class GetDataComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  sendGetRequest() {
    this.http.get('http://localhost:8000/accounts').subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.error(error);
      }
    );
  }
}



