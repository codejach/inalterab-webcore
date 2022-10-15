import IAppState from "../../core/interfaces/IAppState"
import ConfigState from "./config/ConfigState"
import UIState from "./ui/UIState"

const AppState:IAppState = {
  config: ConfigState,
  data: undefined,
  ui: UIState 
}

export default AppState
