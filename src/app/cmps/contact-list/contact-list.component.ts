import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { faUserPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {

  constructor(private contactService: ContactService) { }
  @Input() contacts!: Contact[] | null;

  faUserPen = faUserPen
  faTrash = faTrash
  faUserPlus = faUserPlus

  onRemove(contactId: string | undefined) {
    try {
      this.contactService.deleteContact(contactId as string)
    } catch (err) {
      console.error(err)
    }
  }
}
