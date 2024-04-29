"use client";
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    selectedUser : {}
}

const appSlice = createSlice({
    name : 'chat',
    initialState,
    reducers :{
        setSelectedUser : (state, action ) => {
            state.selectedUser = action.payload;
        },


    }
});

export const {setSelectedUser} = appSlice.actions;

export default appSlice.reducer;