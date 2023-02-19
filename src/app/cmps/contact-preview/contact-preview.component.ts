import { Component, Input , Output , EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent {
  @Input() contact!: Contact;
  @Output() selectContact = new EventEmitter<string>()



  onSelectContactId() {
    this.selectContact.emit(this.contact._id)
  }
}
