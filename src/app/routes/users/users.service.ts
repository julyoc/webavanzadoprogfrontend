import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = 'https://proyecto-web-freelancer.web.app/api/v0/user';
  private header = new HttpHeaders();

  constructor(@Inject(HttpClient) private http: HttpClient) { 
    this.header.set('Content-Type', 'application/json; charset=utf-8');
  }

  getAll(): Observable<Users[]>{
    return this.http.get<Users[]>(this.baseUrl, {headers: this.header}).pipe(catchError(this.handleError));
  }

  getOne(id: string): Observable<Users>{
    return this.http.get<Users>(this.baseUrl.concat('?userId=', id), {headers: this.header}).pipe(catchError(this.handleError));
  }

  addOne(data: Users): Observable<Users>{
    return this.http.post<Users>(this.baseUrl, data, {headers: this.header}).pipe(catchError(this.handleError));
  }

  updateOne(data: Users): Observable<any>{
    return this.http.put<any>(this.baseUrl, data, {headers: this.header}).pipe(catchError(this.handleError));
  }

  deleteOne(id: string): Observable<any>{
    return this.http.delete<any>(this.baseUrl.concat('?userId=', id), {headers: this.header}).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}
