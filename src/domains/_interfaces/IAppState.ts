import IAuthenticateState from "./IAuthenticateState";

export interface IAppState {
  authentication?: IAuthenticateState,
  extras: {
    message?: string,
  }
}
