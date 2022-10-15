import IAuthState from "../../core/interfaces/config/IAuthState";
import UserBasicState from "./UserBasicState";

const AuthState:IAuthState = {
  authenticated: false,
  expiresIn: undefined,
  token: undefined, 
  user: UserBasicState 
}

export default AuthState;
