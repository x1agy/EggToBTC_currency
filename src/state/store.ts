import { configureStore } from "@reduxjs/toolkit";
import BTCReducer from './BTCValue/btcValueSlice'
import EGGReducer from './EGGValue/eggValueSlice'

export const store = configureStore({
    reducer: {
        BTC: BTCReducer,
        EGG: EGGReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;