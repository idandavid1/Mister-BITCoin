import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
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

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder) {
      this.form = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
        phone: ['', [Validators.required, Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')]]
    })
  }

  ngOnInit(): void {
    this.subscription = this.route.data.subscribe(({ contact }) => {
      if (contact) {
        this.contact = contact
        this.form.patchValue(contact)
      }
    })
  }

  onSubmit(): void {
    try {
      const contact = { ...this.contact, ...this.form.value }
      this.contactService.saveContact(contact)
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
