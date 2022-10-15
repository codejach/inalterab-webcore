import IAuthRequest from "../interfaces/IAuthRequest"

class AuthRequest implements IAuthRequest {
  readonly account
  readonly password

  constructor(
    account: string = "", 
    password: string = ""
  ) {
    this.account = account
    this.password = password
  }
}

export default AuthRequest
