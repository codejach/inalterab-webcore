import IUser from "../interfaces/IUser";

class User implements IUser {
  readonly _id
  readonly nickname

  constructor(
    id: string = '',
    nickname: string = ''
  ) {
    this._id = id
    this.nickname = nickname
  }
}

export default User
