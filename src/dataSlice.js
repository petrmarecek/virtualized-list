import {createSlice} from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: "data-slice",
    initialState: {
        value: [],
    },
    reducers: {
        add: (state, d) => {
            state.value.push(d);
        }
    }
});

export const {add} = dataSlice.actions;
export default dataSlice.reducer;