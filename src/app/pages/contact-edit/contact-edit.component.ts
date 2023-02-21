import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';

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
  validation = { name: false, email: false, phone: false, }

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
    console.log(this.form.value)
    if (!this.checkValidation(this.form.value)) return
    try {
      this.contactService.saveContact(this.form.value)
      this.onBack()
    } catch (err) {
      console.error(err)
    }
  }

  checkValidation(contact: Contact) {
    if (contact.name.length < 2) {
      this.validation.name = true
      return false
    } else this.validation.name = false
    
    const mailRegex: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!mailRegex.test(contact.email)) {
      this.validation.email = true
      return false
    } else this.validation.email = false
    
    const phoneRegex = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
    if (!phoneRegex.test(contact.phone)) {
      this.validation.phone = true
      return false
    } else this.validation.phone = false
    return true
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
