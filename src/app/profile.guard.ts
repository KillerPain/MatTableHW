import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProfileGuard implements Resolve<any> {
  constructor(private http:HttpClient) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {    
    return new Promise((resolve, reject) => {
      let apiURL = 'http://services.odata.org/TripPinRESTierService/(S(35beqhon4rbykcsizvjjb1le))/Me';
      this.http.get(apiURL).toPromise().then(
        res => {
          resolve(res);
        }
      );
    });
  }
}
