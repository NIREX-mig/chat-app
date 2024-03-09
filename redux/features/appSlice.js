"use client";
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    contect : [],
}

const appSlice = createSlice({
    name : 'chat',
    initialState,
    reducers :{
        getContect : (state, action) =>{

        }

    }
});

export const {getContect} = appSlice.actions;

export default appSlice.reducer;