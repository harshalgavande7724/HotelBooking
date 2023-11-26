// booking-form.component.ts
import { Component } from '@angular/core';
import { BookingService } from '../booking.service';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent {
  booking: any = {};

  constructor(private bookingService: BookingService) { }

  saveBooking(): void {
    this.bookingService.saveBooking(this.booking).subscribe(
      (savedBooking) => {
        console.log('Booking saved successfully:', savedBooking);
        // Handle any additional logic or redirection here
      },
      (error) => {
        console.error('Error saving booking:', error);

        if (error instanceof HttpErrorResponse) {
          console.error('Status:', error.status);
          console.error('Status Text:', error.statusText);
          console.error('Response body:', error.error);
        }

        // Handle any additional logic or rethrow the error if needed
        return throwError('Something went wrong; please try again later.');
      }
    );
  }
}
