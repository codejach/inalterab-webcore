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
  const response = action.payload || {};

  const auth = {
    ...AuthState,
    ...response.result,
    user: {
      ...response.result.user,
      id: response.result.user._id,
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
  state.ui.messages.push(response.message);

  return state;
}

export function registerMatchFulFilled(
  state: IAppState,
  action: PayloadAction<IResponse<IRegisterResult>>
) {
  const response = action.payload || {};

  let auth = {
    ...AuthState,
    ...response.result,
    user: {
      ...response.result.user,
      id: response.result.user._id,
    },
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
  state.ui.messages.push(response.message);

  return state;
}
