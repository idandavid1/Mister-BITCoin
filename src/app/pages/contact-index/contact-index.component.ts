import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'contact-index',
  templateUrl: './contact-index.component.html',
  styleUrls: ['./contact-index.component.scss']
})
export class ContactIndexComponent implements OnInit {

  constructor(
    private contactService: ContactService,
    private router: Router,
    private userService: UserService) {
    }

    contacts$ !: Observable<Contact[]>

    ngOnInit() {
      this.contactService.loadContacts()
      this.contacts$ = this.contactService.contacts$;
      const user = this.userService.getUser()
      if(!user) this.router.navigateByUrl('/signup')
  }

}
