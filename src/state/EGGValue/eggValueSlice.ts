import { createSlice } from "@reduxjs/toolkit";

interface eggState {
    value: number;
}

const initialState: eggState = {
    value: 14.3
}

const EGGSlice = createSlice({
    name: 'EGG',
    initialState,
    reducers: {},
});

export default EGGSlice.reducer;