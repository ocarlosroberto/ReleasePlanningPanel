import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Capacity } from './../models/Capacity.model';

@Injectable({
  providedIn: 'root'
})
export class CapacityService {

  constructor(private http: HttpClient) { }

  getCapacity(): Observable<Capacity> {
    return this.http.get<Capacity>('https://releaseplanningfunction.azurewebsites.net/api/getPessoas')
      .pipe(catchError((err) => {
        console.error(err);
        return throwError(err);;
      }));
  }
}
