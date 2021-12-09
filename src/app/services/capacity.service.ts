import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Capacity } from './../models/Capacity.model';
import { Envolvimento } from './../models/Envolvimento.model';

@Injectable({
  providedIn: 'root'
})
export class CapacityService {

  constructor(private http: HttpClient) { }

  getCapacity(): Observable<Capacity> {
    return this.http.get<Capacity>('http://localhost:5278/capacity')
      .pipe(catchError((err) => {
        console.error(err);
        return throwError(err);;
      }));
  }

  getEnvolvimentos(): Observable<Envolvimento[]> {
    return this.http.get<Envolvimento[]>('http://localhost:5278/envolvimentos')
      .pipe(catchError((err) => {
        console.error(err);
        return throwError(err);;
      }));
  }

}
