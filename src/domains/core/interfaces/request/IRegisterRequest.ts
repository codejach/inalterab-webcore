import IAuthParameters from "../common/IAuthParameters";

export default interface IRegisterRequest extends IAuthParameters {
  passwordConfirm: string
}
