import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../app/store";

import ILoginRequest from "../domains/core/interfaces/request/ILoginRequest";
import ILoginResult from "../domains/core/interfaces/response/auth/ILoginResult";
import IRegisterResult from "../domains/core/interfaces/response/auth/IRegisterResult";
import IRegisterRequest from "../domains/core/interfaces/request/IRegisterRequest";
import IResponse from "../domains/core/interfaces/response/IResponse";
import IUserAccountResult from "../domains/core/interfaces/response/user/IUserAccountResult";
import IUserAccountRequest from "../domains/core/interfaces/request/IUserAccountRequest";
import IPermissionResult from "../domains/core/interfaces/response/auth/IPermissionResult";
import IPermissionRequest from "../domains/core/interfaces/request/IPermissionRequest";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/auth",
    prepareHeaders: (headers, { getState }) => {
      headers.set("Content-Type", "application/json; charset=UTF-8");
      headers.set("Accept", "application/json");

      const token = (getState() as RootState).app.config.auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<IResponse<ILoginResult>, ILoginRequest>({
      query: (payload) => ({
        url: "/signup",
        method: "POST",
        body: JSON.stringify(payload),
      }),
    }),
    permission: builder.mutation<IResponse<IPermissionResult>, IPermissionRequest>({
      query: (payload) => ({
        url: "/permission",
        method: "POST",
        body: JSON.stringify(payload),
      })
    }),
    register: builder.mutation<IResponse<IRegisterResult>, IRegisterRequest>({
      query: (payload) => ({
        url: "/signin",
        method: "POST",
        body: JSON.stringify(payload),
      }),
    }),
  }),
});

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/user",
    prepareHeaders: (headers, { getState }) => {
      headers.set("Content-Type", "application/json; charset=UTF-8");
      headers.set("Accept", "application/json");

      const token = (getState() as RootState).app.config.auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    userUpdate: builder.mutation<
      IResponse<IUserAccountResult>,
      IUserAccountRequest
    >({
      query: (payload) => ({
        url: "/" + payload._id,
        method: "PUT",
        body: JSON.stringify({ nickname: payload.nickname }),
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;

export const { useUserUpdateMutation } = userApi;
