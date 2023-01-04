import { createSlice } from "@reactjs/toolkit";

const initialState = {};

const feedbacksSlice = createSlice({
    name: "feedback",
    initialState,
    reducers: {},
});

// action ar reducer gula export korbo
export const {} = feedbacksSlice.actions;
export default feedbacksSlice.reducer;
