"use client";


const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    selectedUser: {},
    allMessages: [],
    logedinUser: null,
}

const appSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload;
        },

        setAllMessages: (state, action) => {
            state.allMessages = action.payload
        },

        setLogedinUser : (state, action ) =>{
            state.logedinUser = action.payload;
        }, 

        pushNewMessage : (state, action ) =>{
            state.allMessages.push(action.payload);
        }
    }
});

export const { setSelectedUser, setAllMessages ,setLogedinUser, pushNewMessage } = appSlice.actions;

export default appSlice.reducer;