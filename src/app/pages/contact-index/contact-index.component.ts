import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-index',
  templateUrl: './contact-index.component.html',
  styleUrls: ['./contact-index.component.scss']
})
export class ContactIndexComponent implements OnInit {

  constructor(
    private contactService: ContactService) {}

    contacts$ !: Observable<Contact[]>

    ngOnInit() {
      this.contactService.loadContacts()
      this.contacts$ = this.contactService.contacts$;
  }

}
