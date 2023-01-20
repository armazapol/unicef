import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./services/auth/apiSlice";
import { scoreApiSlice } from "./services/scores/scoreApiSlice";
import authReducer from "./features/auth/authSlice";

import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authState"],
};

const rootReducer = combineReducers({
  authState: authReducer,
  //aqui se pueden agregar mas reducers que quieran persistir
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [apiSlice.reducerPath]: apiSlice.reducer,
    [scoreApiSlice.reducerPath]: scoreApiSlice.reducer,
    // auth: authReducer,
    auth: persistedReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false, })
      .concat(thunk, apiSlice.middleware)
      .concat(thunk, scoreApiSlice.middleware)

});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
