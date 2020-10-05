import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from, Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) { }
  title = 'my-app';
  // implement OnInit's `ngOnInit` method
  ngOnInit() {
    console.log('====================================');
   
    this.http.get<any>('http://localhost:8080/vendors').toPromise().then((res) => {

      console.log('====================================');
      console.log("res", res);
      console.log('====================================');
    }).catch((error) => {
      console.log('====================================');
      console.log("eror", error);
      console.log('====================================');
    })
      
    console.log('11111111111====================================');
  }



}
