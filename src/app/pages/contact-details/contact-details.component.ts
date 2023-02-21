import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faUserPen } from '@fortawesome/free-solid-svg-icons';
import { Move, User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})

export class ContactDetailsComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) {}
    user !: User
  moves !: Move[]
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
    this.updateMoves()
  }

  updateMoves() {
    this.user = this.userService.getUser()
    this.moves = this.user.moves.filter(move => move.toId === this.contact._id)
  }

  onBack(): void {
    this.router.navigateByUrl('/contact')
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
