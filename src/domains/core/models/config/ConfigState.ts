import IConfigState from "../../core/interfaces/config/IConfigSate";
import AuthState from "./AuthState";

const ConfigState:IConfigState = {
  auth: AuthState,
  lang: 'es'
}

export default ConfigState;
