import IConfigState from "./config/IConfigSate";
import IUIState from "./ui/IUIState";

export default interface IAppState {
  config: IConfigState,
  data?: object,
  ui: IUIState
}
