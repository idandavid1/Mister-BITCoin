import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user = {
    _id: 'u101',
    name: "Ochoa Hyde",
    coins: 100,
    moves: []
  }

  // private _user$ = new BehaviorSubject<User>(User);
  // public user$ = this._user$.asObservable()

  constructor() { }

  public getUser(): User {
      return this.user
  }
}
