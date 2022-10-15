import IUserBasicState from "./IUserBasicState";

export default interface IAuthState {
  authenticated: boolean,
  expiresIn?: number, 
  token?: string,
  user?: IUserBasicState 
}
