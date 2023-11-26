import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { OffersComponent } from './offers/offers.component';
import { TrendingDestinationsComponent } from './trending-destinations/trending-destinations.component';
import { InspirationComponent } from './inspiration/inspiration.component';
import { InstantDiscountsComponent } from './instant-discounts/instant-discounts.component';
import { DestinationsWeLoveComponent } from './destinations-we-love/destinations-we-love.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { BookingListComponent } from './booking-list/booking-list.component';
// import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    OffersComponent,
    TrendingDestinationsComponent,
    InspirationComponent,
    InstantDiscountsComponent,
    DestinationsWeLoveComponent,
    FooterComponent,
    BookingFormComponent,
    BookingListComponent,
    // ContactListComponent,
    ContactFormComponent,
    ContactListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'contacts', component: ContactFormComponent },
      { path: 'contact-list', component: ContactListComponent },
      { path: '', redirectTo: '/contacts', pathMatch: 'full' },
    ]),
  ],
  providers:[
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
