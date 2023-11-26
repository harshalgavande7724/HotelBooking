// booking.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private baseUrl = 'http://localhost:8080/bookings';

  constructor(private http: HttpClient) { }

//   getBookings(): Observable<any[]> {
//     return this.http.get<any[]>(this.baseUrl)
//       .pipe(
//         catchError(this.handleError)
//       );
//   }

//   saveBooking(booking: any): Observable<any> {
//     return this.http.post<any>(`${this.baseUrl}/save`, booking)
//       .pipe(
//         catchError(this.handleError)
//       );
//   }
private handleError(error: any) {
  console.error('An error occurred:', error);

  // Log the error details to the console
  if (error instanceof HttpErrorResponse) {
    console.error('Status:', error.status);
    console.error('Response body:', error.error);
  }

  return throwError('Something went wrong; please try again later.');
}

  
getBookings(): Observable<any[]> {
  console.log('Fetching bookings...');
  return this.http.get<any[]>(this.baseUrl)
    .pipe(
      catchError(this.handleError)
    );
}

saveBooking(booking: any): Observable<any> {
  console.log('Saving booking...', booking);
  return this.http.post<any>(`${this.baseUrl}/save`, booking)
    .pipe(
      catchError(this.handleError)
    );
}
}