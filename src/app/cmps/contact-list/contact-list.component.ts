import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { faUserPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  @Input() contacts!: Contact[] | null;
  @Output() selectContact = new EventEmitter<string>()
  faUserPen = faUserPen
  faTrash = faTrash
}
