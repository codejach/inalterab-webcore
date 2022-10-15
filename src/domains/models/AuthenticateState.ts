import IAuthenticateState from "../interfaces/IAuthenticateState";
import User from "./User";

class AuthenticateState implements IAuthenticateState {
  readonly authenticated
  readonly token?
  readonly expires? 
  readonly message?
  readonly user?

  constructor(
    authenticated: boolean = false, 
    token?: string,
    expires?: number,
    message?: string
  ) {
      this.authenticated = authenticated
      this.token = token
      this.expires = expires
      this.message = message
      
      this.user = new User()
    }
}

export default AuthenticateState
