'use client';
import { Provider } from "react-redux";
import store from "./store";
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from "./configureStore";

export default function Providers({ children }) {
    return (
        <Provider store={store} >
            {/* <PersistGate loading={null} persistor={configureStore.persistor}> */}
                {children}
            {/* </PersistGate> */}
        </Provider >
    )
}