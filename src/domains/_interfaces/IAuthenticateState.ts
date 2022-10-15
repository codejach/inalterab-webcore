import IUser from "./IUser";

export default interface IAuthenticateState {
  authenticated: boolean,
  token?: string,
  expires?: number,
  message?: string,
  user?: IUser
}
