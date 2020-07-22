import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


interface categ {
  name?: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategService {

  private baseUrl = 'https://proyecto-web-freelancer.web.app/api/v0/categories';
  private header = new HttpHeaders();

  constructor(@Inject(HttpClient) private http: HttpClient) { 
    this.header.set('Content-Type', 'application/json; charset=utf-8');
  }

  getCateg(id: string): Observable<categ> {
    return this.http.get(this.baseUrl.concat(`?categoriesId=${id}`), {headers: this.header}).pipe(catchError(this.handleError));
  }

  getAllCateg(): Observable<any> {
    return this.http.get(this.baseUrl, {headers: this.header}).pipe(catchError(this.handleError));
  }

  postCateg(data: categ): Observable<any> {
    return this.http.post(this.baseUrl, data, {headers: this.header}).pipe(catchError(this.handleError));
  }

  updateCateg(data: categ): Observable<any> {
    return this.http.put(this.baseUrl, data, {headers: this.header}).pipe(catchError(this.handleError));
  }

  deleteCateg(id: string): Observable<any> {
    return this.http.delete(this.baseUrl.concat(`?categoriesId=${id}`), {headers: this.header}).pipe(catchError(this.handleError));
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
