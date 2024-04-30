"use client";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    selectedUser : {},
    sendMessage : [],
    receivedMessage : [],
    
}

const appSlice = createSlice({
    name : 'chat',
    initialState,
    reducers :{
        setSelectedUser : (state, action ) => {
            state.selectedUser = action.payload;
        },
        
        setSendMessage : (state, action ) =>{
            state.sendMessage.push(action.payload);
        },

        setReceivedMessage : (state, action ) => {
            state.receivedMessage.concat(action.payload);
        }


    }
});

export const {setSelectedUser, setReceivedMessage, setSendMessage} = appSlice.actions;

export default appSlice.reducer;