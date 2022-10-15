import { PayloadAction } from "@reduxjs/toolkit";

import IAppState from "../../domains/core/interfaces/IAppState";
import IResponse from "../../domains/core/interfaces/response/IResponse";
import IUserAccountResult from "../../domains/core/interfaces/response/user/IUserAccountResult";

import UserBasicState from "../../domains/core/models/config/UserBasicState";

export function userUpdateMatchFulFilled(
  state: IAppState,
  action: PayloadAction<IResponse<IUserAccountResult>>
) {
  const result = action.payload.result || {};

  const user = {
    ...UserBasicState,
    ...result.user,
    id: result.user._id
  };

  state.config.auth.user = user;
  state.ui.messages.push(action.payload.message);

  return state;
}
