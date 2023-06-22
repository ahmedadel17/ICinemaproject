import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { appSlice } from "./reducers/appSlice";
import { authApi } from "./server/authApi";

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    authApi: authApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
