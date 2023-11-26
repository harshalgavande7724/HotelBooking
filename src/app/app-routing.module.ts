import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { BookingListComponent } from './booking-list/booking-list.component';
// import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';



const routes: Routes = [
  { path: 'bookings', component: BookingListComponent },
  { path: 'bookings/new', component: BookingFormComponent },
  { path: '', redirectTo: '/bookings', pathMatch: 'full' },
];
[
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  // { path: 'contacts', component: ContactListComponent },
  { path: 'contacts/new', component: ContactFormComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
