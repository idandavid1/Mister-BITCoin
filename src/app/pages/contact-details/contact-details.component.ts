import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faUserPen } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  contact !: Contact
  subscription!: Subscription
  faCircleArrowLeft = faCircleArrowLeft
  faUserPen = faUserPen


  ngOnInit(): void {
    // this.subscription = this.route.params.subscribe(async param => {
    //   this.contact = await lastValueFrom(this.contactService.getContactById(param['contactId']))
    // })
    this.subscription = this.route.data.subscribe(data => {
      this.contact = data['contact']
    })
  }

  onBack(): void {
    this.router.navigateByUrl('/contact')
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
