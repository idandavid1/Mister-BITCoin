import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit, OnDestroy {

  form !: FormGroup
  contact !: Contact
  subscription!: Subscription
  faTrash = faTrash
  faCircleArrowLeft = faCircleArrowLeft

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder) {
    this.form = this.fb.group({})
  }

  ngOnInit(): void {
    this.subscription = this.route.data.subscribe(({ contact }) => {
      this.contact = contact || this.contactService.getEmptyContact() as Contact
    })
    this.form = this.fb.group(this.contact)
  }

  onSubmit(): void {
    try {
      this.contactService.saveContact(this.form.value)
      this.onBack()
    } catch (err) {
      console.error(err)
    }
  }

  onRemove() {
    try {
      if (this.contact._id) this.contactService.deleteContact(this.contact._id)
      this.onBack()
    } catch (err) {
      console.error(err)
    }
  }

  onBack(): void {
    this.router.navigateByUrl('/contact')
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}

