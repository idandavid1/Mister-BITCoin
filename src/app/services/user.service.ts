import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { Move, User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private USER_STORAGE_KEY = 'users'
  private STORAGE_KEY_LOGGEDIN_USER = 'user'

  constructor() {
    this.createUsers()
  }

  public getUser(): User {
    return JSON.parse(sessionStorage.getItem(this.STORAGE_KEY_LOGGEDIN_USER) as string)
  }

  private getUsers() {
    return loadFromStorage(this.USER_STORAGE_KEY)
  }

  public login(user: User): void {
    const users = this.getUsers()
    const loggedInUser = users.find(currUser => currUser.name === user.name)
    if (loggedInUser) this.saveLocalUser(loggedInUser)
    else {
      user = this.save(user)
      this.saveLocalUser(user)
    }
  }

  public addMove(contact: Contact, amount: number) {
    const user = this.getUser()
    const move: Move = {
      toId: contact._id,
      to: contact.name,
      at: Date.now(),
      amount: amount
    } as Move

    user.moves.push(move)
    user.coins -= amount
    this.saveLocalUser(user)
    this.save(user)
  }

  public getEmptyUser() {
    return {
      name: '',
      coins: 100,
      moves: [],
    }
  }

  // public getEmptyMove(): Move {
  //   return {
  //     toId: "",
  //     to: "",
  //     at: Date.now(),
  //     amount: 0
  //   }
  // }

  private save(user: User): User {
    let users = this.getUsers()
    if (user._id) users = users.map(currUser => currUser._id === user._id ? user : currUser)
    else {
      user._id = makeId()
      users.push(user)
    }
    saveToStorage(this.USER_STORAGE_KEY, users)
    return user
  }

  private saveLocalUser(user: User) {
    sessionStorage.setItem(this.STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
  }

  private createUsers() {
    let users = loadFromStorage(this.USER_STORAGE_KEY)
    if (!users || !users.length) {
      users = [
        {
          _id: '1001',
          name: "Puki Ben David",
          coins: 100,
          moves: []
        }
      ]
      saveToStorage(this.USER_STORAGE_KEY, users)
    }
  }
}

function saveToStorage(key: string, value: any) {
  const data: any = JSON.stringify(value) || null
  localStorage.setItem(key, data)
}

function loadFromStorage(key: string): User[] {
  let data = localStorage.getItem(key)
  return data ? JSON.parse(data) : undefined
}

function makeId(length = 5) {
  var text = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}
