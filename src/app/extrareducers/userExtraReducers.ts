import { PayloadAction } from "@reduxjs/toolkit";

import IAppState from "../../domains/core/interfaces/IAppState";
import IResponse from "../../domains/core/interfaces/response/IResponse";
import IUserAccountResult from "../../domains/core/interfaces/response/user/IUserAccountResult";

import UserBasicState from "../../domains/core/models/config/UserBasicState";

export function userUpdateMatchFulFilled(
  state: IAppState,
  action: PayloadAction<IResponse<IUserAccountResult>>
) {
  const response = action.payload || {};

  const user = {
    ...UserBasicState,
    ...response.result.user,
    id: response.result.user._id
  };

  state.config.auth.user = user;
  state.ui.messages.push(response.message);

  return state;
}
