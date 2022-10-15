import IAuthParameters from "./IAuthParameters";

export default interface IRegisterRequest extends IAuthParameters {
  passwordConfirm: string
}
