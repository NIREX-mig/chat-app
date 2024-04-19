"use client";
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    contect : [],
    socket : null
}

const appSlice = createSlice({
    name : 'chat',
    initialState,
    reducers :{
        getContect : (state, action) =>{

        },
        setSocket : (state, action ) => {
            state.socket = action.payload;
        },


    }
});

export const {getContect, setSocket} = appSlice.actions;

export default appSlice.reducer;