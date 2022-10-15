import { createSlice } from "@reduxjs/toolkit";
import { authApi, userApi } from "../services/coreApi";

import * as AuthReducer from "../app/reducers/authReducers";
import {
  loginMatchFulFilled,
  registerMatchFulFilled,
} from "./extrareducers/authExtraReducers";
import {
  changeLanguage,
  changeLanguageFulFilled,
} from "./extrareducers/appExtraReducers";
import { userUpdateMatchFulFilled } from "./extrareducers/userExtraReducers";
import UILoginState from "../domains/core/models/ui/UILoginState";

import IResponse from "../domains/core/interfaces/response/IResponse";
import ILoginResult from "../domains/core/interfaces/response/auth/ILoginResult";
import IRegisterResult from "../domains/core/interfaces/response/auth/IRegisterResult";
import IUserAccountResult from "../domains/core/interfaces/response/user/IUserAccountResult";

import AppState from "../domains/core/models/AppState";

const initialState = AppState;

export const appReducer = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    logout: AuthReducer.logout,
  },
  extraReducers: (builder) => {
    // change language case
    builder.addCase(changeLanguage.fulfilled, changeLanguageFulFilled);

    // login case
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      loginMatchFulFilled
    );

    // register case
    builder.addMatcher(
      authApi.endpoints.register.matchFulfilled,
      registerMatchFulFilled
    );

    // user update case
    builder.addMatcher(
      userApi.endpoints.userUpdate.matchFulfilled, 
      userUpdateMatchFulFilled
    );

    // login rejected case
    builder.addMatcher(
      authApi.endpoints.login.matchRejected,
      (state, action) => {
        let message = "";

        if (
          action.payload?.status &&
          action.payload?.status === "FETCH_ERROR"
        ) {
          message = action.payload?.error;
          state.ui.login = UILoginState;
        }

        if (action.payload?.data) {
          const result = action.payload.data as IResponse<ILoginResult>;
          message = result.message;
          state.ui.login.message = result.message;
        }
        state.ui.messages.push(message);

        if (state.ui.messages.length > 50) {
          state.ui.messages.pop();
        }

        return state;
      }
    );

    // register rejected case
    builder.addMatcher(
      authApi.endpoints.register.matchRejected,
      (state, action) => {
        let message = "";

        if (
          action.payload?.status &&
          action.payload?.status === "FETCH_ERROR"
        ) {
          message = action.payload?.error;
          state.ui.login = UILoginState;
        }

        if (action.payload?.data) {
          const result = action.payload.data as IResponse<IRegisterResult>;
          message = result.message;
          state.ui.login.message = result.message;
        }
        state.ui.messages.push(message);

        if (state.ui.messages.length > 50) {
          state.ui.messages.pop();
        }

        return state;
      }
    );

    // user update rejected case
    builder.addMatcher(
      userApi.endpoints.userUpdate.matchRejected,
      (state, action) => {
        let message = "";

        if (
          action.payload?.status &&
          action.payload?.status === "FETCH_ERROR"
        ) {
          message = action.payload?.error;
          state.ui.login = UILoginState;
        }

        if (action.payload?.data) {
          const result = action.payload.data as IResponse<IUserAccountResult>;
          message = result.message;
          state.ui.login.message = message;
        }
        state.ui.messages.push(message);

        if (state.ui.messages.length > 50) {
          state.ui.messages.pop();
        }

        return state;
      }
    );
  },
});

export const { logout } = appReducer.actions;

export default appReducer.reducer;
