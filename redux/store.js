"use client";

import appReducer from "./features/appSlice";
import { chatApi } from "@/redux/features/chatApi"

const { configureStore, combineReducers } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
    [chatApi.reducerPath]: chatApi.reducer,
    app : appReducer
})

const store = configureStore({
    reducer : rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(chatApi.middleware),
})

export default store;