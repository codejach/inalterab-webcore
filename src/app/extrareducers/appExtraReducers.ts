import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import i18next from "i18next";

import IAppState from "../../domains/core/interfaces/IAppState";

export const changeLanguage = createAsyncThunk<string, string>(
  "baseSlice/changeLanguage",
  async (lang) => {
    await i18next.changeLanguage(lang);
    return lang;
  }
);

export function changeLanguageFulFilled(
  state: IAppState,
  action: PayloadAction<string>
) {
  state.config.lang = action.payload;
  return state;
}
