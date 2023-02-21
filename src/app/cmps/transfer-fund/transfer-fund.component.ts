import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent {
  amount!: number
  @Input() contact !: Contact
  @Output() updateMoves = new EventEmitter()
  user !: User

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getUser()
  }

  onSendTransfer() {
    this.userService.addMove(this.contact, this.amount)
    this.user = this.userService.getUser()
    this.amount = 0
    this.updateMoves.emit()
  }
}
