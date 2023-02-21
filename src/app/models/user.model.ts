export class User {

  public _id?: string = ''
  constructor(
      public name: string = '',
      public coins: number = 100,
      public moves: Move[]
      ) {
  }

  setId?(id: string = 'u101') {
      this._id = id
  }
}

export interface Move {
  toId: string,
  to: string,
  at: number,
  amount: number
}
