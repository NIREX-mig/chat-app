"use client";

import appReducer from "./features/appSlice";

const { configureStore, combineReducers } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
    app : appReducer
})

const store = configureStore({
    reducer : rootReducer,
})

export default store;