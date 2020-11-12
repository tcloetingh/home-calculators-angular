import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEventType
} from '@angular/common/http';
import { House } from './house.model';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HouseDBService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStoreHome(houseInfo) {
    const houseObject: House = houseInfo;

    this.http
      .post('https://home-calculators.firebaseio.com/house.json', houseObject, {
        observe: 'response'
      })
      .subscribe(
        responseData => {
          console.log(responseData);
        },
        error => {
          this.error.next(error.message);
        }
      );
  }

  // fetchHomes() {
  //   return this.http
  //     .get<{ [key: string]: House }>(
  //       'https://home-calculators.firebaseio.com/house.json'
  //     )
  //     .pipe(
  //       map(responseData => {
  //         const homesArray: House[] = [];
  //         for (const key in responseData) {
  //           if (responseData.hasOwnProperty(key)) {
  //             homesArray.push({ ...responseData[key], id: key });
  //           }
  //         }
  //         return homesArray;
  //       }),
  //       catchError(errorRes => {

  //         return throwError(errorRes);
  //       })
  //     );
  // }

  clearHomes() {
    return this.http
      .delete('https://home-calculators.firebaseio.com/house.json', {
        observe: 'events',
        responseType: 'json'
      })
      .pipe(
        tap(event => {
          console.log(event);
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
        })
      );
  }
}
