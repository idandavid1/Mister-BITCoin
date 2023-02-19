import { Component, Input, OnInit , EventEmitter, Output} from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  @Input() contactId !: string
  @Output() selectContact = new EventEmitter();
  contact !: Contact | undefined

  async ngOnInit() {
    const contact = await lastValueFrom(this.contactService.getContactById(this.contactId))
    this.contact = contact;
  }
  
  onBack() {
    this.selectContact.emit('')
  }

}
