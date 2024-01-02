import { createSlice } from "@reduxjs/toolkit";

interface btcState {
    value: number;
}

const initialState: btcState = {
    value: 0
}

const BTCSlice = createSlice({
    name: 'BTC',
    initialState,
    reducers: {
        setBTCValue: (state, action) => {
            state.value = action.payload;
        }
    },
});

export const { setBTCValue } = BTCSlice.actions;

export default BTCSlice.reducer;