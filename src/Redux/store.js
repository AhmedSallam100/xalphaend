import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { articlesApi } from "./articles";
import { aiWebApi } from "./aiWeb";
import { designWebApi } from "./designWeb";
import { codersWebApi } from "./codersWeb";
import { fontsWebApi } from "./fontsWeb";
import { colorsWebApi } from "./colorsWeb";
import { visualWebApi } from "./visualWeb";
import { extensionApi } from "./extension";
import { appApi } from "./apps";

export const store = configureStore({
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer,
    [aiWebApi.reducerPath]: aiWebApi.reducer,
    [designWebApi.reducerPath]: designWebApi.reducer,
    [codersWebApi.reducerPath]: codersWebApi.reducer,
    [fontsWebApi.reducerPath]: fontsWebApi.reducer,
    [colorsWebApi.reducerPath]: colorsWebApi.reducer,
    [visualWebApi.reducerPath]: visualWebApi.reducer,
    [extensionApi.reducerPath]: extensionApi.reducer,
    [appApi.reducerPath]: appApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(articlesApi.middleware)
      .concat(aiWebApi.middleware)
      .concat(designWebApi.middleware)
      .concat(codersWebApi.middleware)
      .concat(colorsWebApi.middleware)
      .concat(fontsWebApi.middleware)
      .concat(visualWebApi.middleware)
      .concat(extensionApi.middleware)
      .concat(appApi.middleware),
});

setupListeners(store.dispatch);

// =================
