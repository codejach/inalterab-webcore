import IUIState from "../../../core/interfaces/ui/IUIState";
import UILoginState from "./UILoginState";
import UIRegisterState from "./UIRegisterState";

const UIState:IUIState = {
  login: UILoginState,
  register: UIRegisterState, 
  messages: []
}

export default UIState
