import IAppState from "../../domains/core/interfaces/IAppState"

import AuthState from "../../domains/core/models/config/AuthState"
import UILoginState from "../../domains/core/models/ui/UILoginState"

export function logout(state:IAppState) {
  state.config.auth = AuthState
  state.ui.login = UILoginState
  return state
}
