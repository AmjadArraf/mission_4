import { Component,  Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-mis4',
  templateUrl: './mis4.component.html',
  styleUrls: ['./mis4.component.css']
})
export class Mis4Component {
  name = 'amjad'
  inputValue: string;

  onKeyUp(event: KeyboardEvent) {
    console.log((event.target as HTMLInputElement).value);
  }
  }

  export class DataService {
    constructor(private http: HttpClient) { }
  
    getData() {
      return this.http.get('http://localhost:8000/accounts/');
    }
  }
