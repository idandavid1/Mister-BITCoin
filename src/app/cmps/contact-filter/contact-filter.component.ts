import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactFilter } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit, OnDestroy {
  constructor(private contactService: ContactService) { }

  contactFilter !: ContactFilter
  subscription!: Subscription

  ngOnInit(): void {
    this.subscription = this.contactService.contactFilter$.subscribe(contactFilter => {
      this.contactFilter = contactFilter
    })
    console.log(this.contactFilter)
  }

  onSetFilter() {
    this.contactService.setFilter({...this.contactFilter})
}

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
