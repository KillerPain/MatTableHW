import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IUser } from 'app/app.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {

  subject: Subject<IUser> = new Subject();
  results = this.subject.asObservable();

  constructor(private http: HttpClient) { }

  getPeople() {
    this.http.get('http://services.odata.org/TripPinRESTierService/People').subscribe(data => {
      for (let i = 0; i < data['value'].length; i ++) {
        this.subject.next(data['value'][i]);
      }
    });
  }

}
