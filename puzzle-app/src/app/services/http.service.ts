import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private httpClient: HttpClient) { }
  getRequest(url) {
    return this.httpClient
      .get(url)
      .pipe(catchError(this.handleError));
  }

  postRequest(url, body) {
    return this.httpClient
      .post(url, body, { observe: "body" })
      .pipe(catchError(this.handleError));
  }
  handleError = (error: HttpErrorResponse) => {
    console.log(error.error.message);
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(`Backend returned code ${error.status}, ` +
        `message was: ${error.message}`);
    }
    // return an observable with a user-facing error message
    return throwError(`${error.message}`);
  }

}
