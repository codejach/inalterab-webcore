import IUILoginState from "./IUILoginState"
import IUIRegisterState from "./IUIRegisterState"

export default interface IUIState {
  login:IUILoginState,
  register:IUIRegisterState,
  messages: string[]
}
