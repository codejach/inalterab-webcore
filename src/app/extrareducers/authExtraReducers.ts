import { PayloadAction } from "@reduxjs/toolkit";

import IAppState from "../../domains/core/interfaces/IAppState";
import ILoginResult from "../../domains/core/interfaces/response/auth/ILoginResult";
import IRegisterResult from "../../domains/core/interfaces/response/auth/IRegisterResult";
import IResponse from "../../domains/core/interfaces/response/IResponse";

import AuthState from "../../domains/core/models/config/AuthState";

export function loginMatchFulFilled(
  state: IAppState,
  action: PayloadAction<IResponse<ILoginResult>>
) {
  const result = action.payload.result || {};

  const auth = {
    ...AuthState,
    ...result,
    user: {
      ...result.user,
      id: result.user._id,
    },
  };

  const ui = {
    ...state.ui,
    login: {
      ...state.ui.login,
      message: "",
    },
  };

  state.config.auth = auth;
  state.ui = ui;
  state.ui.messages.push(action.payload.message);

  return state;
}

export function registerMatchFulFilled(
  state: IAppState,
  action: PayloadAction<IResponse<IRegisterResult>>
) {
  const result = action.payload.result || {};

  let auth = {
    ...AuthState,
    ...result,
  };

  let ui = {
    ...state.ui,
    login: {
      ...state.ui.login,
      message: "",
    },
  };

  state.config.auth = auth;
  state.ui = ui;
  state.ui.messages.push(action.payload.message);

  return state;
}
