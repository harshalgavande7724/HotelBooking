import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../../ts/contact';

@Component({
  selector: 'app-contact-list',
  template: `
    <h2>Contact List</h2>
    <ul>
      <li *ngFor="let contact of contacts">
        {{ contact.name }} - {{ contact.email }}
      </li>
    </ul>
  `,
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.loadContacts();
  }

  loadContacts() {
    this.contactService['getContacts']().subscribe((contacts: Contact[]) => {
      this.contacts = contacts;
    });
  }
}
