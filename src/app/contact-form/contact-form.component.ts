// src/app/contact-form/contact-form.component.ts
import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';
import { Contact } from '../../ts/contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  contact: Contact = { name: '', email: '', message: '' };
  contacts: Contact[] = [];

  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit() {
    this.loadContacts();
  }

  saveContact() {
    this.contactService.saveContact(this.contact).subscribe(() => {
      this.loadContacts();
      this.router.navigate(['/contact-list']); // Navigate to the contact list page after saving
    });
  }

  loadContacts() {
    this.contactService['getContacts']().subscribe((contacts: Contact[]) => {
      this.contacts = contacts;
    });
  }
}
