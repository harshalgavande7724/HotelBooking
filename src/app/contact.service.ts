// src/app/contact.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../ts/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  [x: string]: any;
  private baseUrl = 'http://your-backend-api-url'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) {}

  saveContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${this.baseUrl}/contacts/save`, contact);
  }
}
