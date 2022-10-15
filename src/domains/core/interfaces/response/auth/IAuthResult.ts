import IUser from "./IUser"

export default interface IAuthResult {
  token: string,
  user: IUser
}

