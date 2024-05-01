"use client";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    selectedUser: {},
    allMessages: [],
}

const appSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload;
        },

        setAllMessages: (state, action) => {
            state.allMessages = action.payload;
        },
    }
});

export const { setSelectedUser, setAllMessages } = appSlice.actions;

export default appSlice.reducer;